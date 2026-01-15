#!/usr/bin/env node
/**
 * Migration script to convert component MDX files to the new frontmatter format.
 *
 * This script:
 * 1. Extracts ComponentHeader props and moves them to frontmatter
 * 2. Removes import statements for globally registered components
 * 3. Removes the ComponentHeader component call (now handled by ComponentPage)
 * 4. Adds <ComponentPage frontMatter={frontMatter}> wrapper
 * 5. Keeps all other MDX body content as children
 */

const fs = require('fs');
const path = require('path');

// Components that are now globally available (no import needed)
const GLOBAL_COMPONENTS = [
  'ComponentHeader',
  'StoryEmbed',
  'AutoPropsTable',
  'FeedbackSection',
  'MaturityBadge',
  'PlatformTag',
  'PlatformTags',
  'DosDonts',
  'Do',
  'Dont',
  'ComponentPage',
  'ChecklistPage',
];

// Import patterns to remove (these are now global)
const IMPORT_PATTERNS_TO_REMOVE = [
  /import ComponentHeader from ['"]@site\/src\/components\/ComponentHeader['"];?\n?/g,
  /import StoryEmbed from ['"]@site\/src\/components\/StoryEmbed['"];?\n?/g,
  /import AutoPropsTable from ['"]@site\/src\/components\/AutoPropsTable['"];?\n?/g,
  /import FeedbackSection from ['"]@site\/src\/components\/FeedbackSection['"];?\n?/g,
  /import MaturityBadge from ['"]@site\/src\/components\/MaturityBadge['"];?\n?/g,
  /import PlatformTag from ['"]@site\/src\/components\/PlatformTag['"];?\n?/g,
  /import PlatformTag, \{ PlatformTags \} from ['"]@site\/src\/components\/PlatformTag['"];?\n?/g,
  /import DosDonts, \{ Do, Dont \} from ['"]@site\/src\/components\/DosDonts['"];?\n?/g,
  /import DosDonts from ['"]@site\/src\/components\/DosDonts['"];?\n?/g,
];

function parseComponentHeader(content) {
  // Match ComponentHeader with props
  const headerRegex = /<ComponentHeader\s+([\s\S]*?)\/>/;
  const match = content.match(headerRegex);

  if (!match) return null;

  const propsString = match[1];
  const props = {};

  // Extract maturity
  const maturityMatch = propsString.match(/maturity=["']([^"']+)["']/);
  if (maturityMatch) props.maturity = maturityMatch[1];

  // Extract platforms array
  const platformsMatch = propsString.match(/platforms=\{?\[([^\]]+)\]\}?/);
  if (platformsMatch) {
    const platformsStr = platformsMatch[1];
    props.platforms = platformsStr
      .split(',')
      .map(p => p.trim().replace(/['"]/g, ''))
      .filter(Boolean);
  }

  // Extract string props
  const stringProps = ['github', 'figma', 'storybook', 'research'];
  for (const prop of stringProps) {
    const propRegex = new RegExp(`${prop}=["']([^"']+)["']`);
    const propMatch = propsString.match(propRegex);
    if (propMatch) props[prop] = propMatch[1];
  }

  return {
    fullMatch: match[0],
    props
  };
}

function parseFrontmatter(content) {
  const fmRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(fmRegex);

  if (!match) return { frontmatter: {}, body: content };

  const fmContent = match[1];
  const frontmatter = {};

  // Parse YAML-like frontmatter
  const lines = fmContent.split('\n');
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      frontmatter[key] = value;
    }
  }

  const body = content.substring(match[0].length).trim();
  return { frontmatter, body, originalFm: fmContent };
}

function buildFrontmatter(existing, headerProps) {
  const lines = ['---'];

  // Title and description first
  if (existing.title) lines.push(`title: ${existing.title}`);
  if (existing.description) lines.push(`description: ${existing.description}`);

  // Maturity
  if (headerProps.maturity) {
    lines.push(`maturity: ${headerProps.maturity}`);
  }

  // Platforms
  if (headerProps.platforms && headerProps.platforms.length > 0) {
    lines.push('platforms:');
    for (const platform of headerProps.platforms) {
      lines.push(`  - ${platform}`);
    }
  }

  // Links
  if (headerProps.github) lines.push(`github: ${headerProps.github}`);
  if (headerProps.figma) lines.push(`figma: ${headerProps.figma}`);
  if (headerProps.storybook) lines.push(`storybook: ${headerProps.storybook}`);
  if (headerProps.research) lines.push(`research: ${headerProps.research}`);

  lines.push('---');

  return lines.join('\n');
}

function migrateComponent(filePath) {
  console.log(`\nMigrating: ${filePath}`);

  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if already migrated
  if (content.includes('<ComponentPage frontMatter={frontMatter}')) {
    console.log('  Already migrated, skipping.');
    return false;
  }

  // Parse existing frontmatter
  const { frontmatter, body, originalFm } = parseFrontmatter(content);

  // Extract ComponentHeader props
  const headerInfo = parseComponentHeader(body);

  if (!headerInfo) {
    console.log('  No ComponentHeader found, skipping.');
    return false;
  }

  // Build new frontmatter
  const newFrontmatter = buildFrontmatter(frontmatter, headerInfo.props);

  // Process body content
  let newBody = body;

  // Remove global component imports
  for (const pattern of IMPORT_PATTERNS_TO_REMOVE) {
    newBody = newBody.replace(pattern, '');
  }

  // Remove the ComponentHeader call
  newBody = newBody.replace(headerInfo.fullMatch, '');

  // Remove the FeedbackSection at the end (ComponentPage handles this)
  newBody = newBody.replace(/<FeedbackSection\s+componentName=["'][^"']+["']\s+checklistUrl=["'][^"']+["']\s*\/>\s*$/, '');

  // Clean up extra blank lines
  newBody = newBody.replace(/\n{3,}/g, '\n\n').trim();

  // Remove the title heading if it matches the frontmatter title
  // (ComponentPage will render the title from frontmatter)
  const titleHeadingRegex = new RegExp(`^#\\s+${frontmatter.title}\\s*\\n+`, 'i');
  newBody = newBody.replace(titleHeadingRegex, '');

  // Clean up leading whitespace
  newBody = newBody.trim();

  // Build final content
  const finalContent = `${newFrontmatter}

<ComponentPage frontMatter={frontMatter}>

${newBody}

</ComponentPage>
`;

  // Write the file
  fs.writeFileSync(filePath, finalContent);
  console.log('  ✓ Migrated successfully');

  return true;
}

function findComponentFiles(dir) {
  const files = [];

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      // Skip deprecated folder
      if (item.name === 'deprecated') continue;
      files.push(...findComponentFiles(fullPath));
    } else if (item.name.endsWith('.mdx') || item.name.endsWith('.md')) {
      // Skip checklist files and main components index
      if (item.name === 'checklist.mdx') continue;
      if (fullPath.endsWith('components/index.mdx')) continue;
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
const componentsDir = path.join(__dirname, '../docs/components');

console.log('Component Migration Script');
console.log('==========================');
console.log(`Components directory: ${componentsDir}`);

const files = findComponentFiles(componentsDir);
console.log(`\nFound ${files.length} component files to process.`);

let migrated = 0;
let skipped = 0;

for (const file of files) {
  try {
    if (migrateComponent(file)) {
      migrated++;
    } else {
      skipped++;
    }
  } catch (err) {
    console.error(`  ✗ Error: ${err.message}`);
    skipped++;
  }
}

console.log('\n==========================');
console.log(`Migration complete!`);
console.log(`  Migrated: ${migrated}`);
console.log(`  Skipped: ${skipped}`);
