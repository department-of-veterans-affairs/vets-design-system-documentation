#!/usr/bin/env node
/**
 * Convert component MDX files to accordion-style format.
 *
 * Uses a simpler approach: preserves existing frontmatter and appends new fields.
 */

const fs = require('fs');
const path = require('path');

/**
 * Extract frontmatter and body from MDX content
 */
function parseContent(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;

  return {
    frontmatter: match[1],
    body: match[2].trim()
  };
}

/**
 * Check if frontmatter already has a field
 */
function hasField(fm, field) {
  const regex = new RegExp(`^${field}:`, 'm');
  return regex.test(fm);
}

/**
 * Extract intro paragraph from body
 */
function extractIntro(body) {
  // Find content after # Title until --- or ## or <
  const match = body.match(/^#\s+[^\n]+\n\n([\s\S]*?)(?=\n---|\n##|\n<[A-Z])/);
  if (!match) return null;

  let intro = match[1].trim();

  // Skip if starts with import or component
  if (intro.startsWith('import') || intro.startsWith('<')) return null;

  // Get paragraphs before any component or import
  const parts = intro.split(/\n\n/);
  const paragraphs = [];

  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.startsWith('import') || trimmed.startsWith('<')) break;
    if (trimmed) paragraphs.push(trimmed);
  }

  return paragraphs.length > 0 ? paragraphs.join('\n\n') : null;
}

/**
 * Extract StoryEmbed examples from body (Web tab only)
 */
function extractExamples(body) {
  const examples = [];

  // Match ### Title followed by description and StoryEmbed
  const exampleRegex = /###\s+([^\n]+)\n\n([^<]*?)<StoryEmbed\s+storyId=["']([^"']+)["']\s+height=\{(\d+)\}[^/]*\/>/g;

  let match;
  while ((match = exampleRegex.exec(body)) !== null) {
    const title = match[1].trim();
    let description = match[2].trim();
    const storyId = match[3];
    const height = parseInt(match[4], 10);

    // Clean up description
    description = description.replace(/\n/g, ' ').trim();
    if (!description) description = title;

    if (storyId && title) {
      examples.push({ title, description, storyId, height });
    }
  }

  return examples.length > 0 ? examples : null;
}

/**
 * Extract code usage from body (first HTML code block)
 */
function extractCodeUsage(body) {
  // Find ## Code usage section
  const sectionMatch = body.match(/##\s+Code usage[\s\S]*?(?=\n---\n|\n##\s+[A-Z]|$)/i);
  if (!sectionMatch) return null;

  const section = sectionMatch[0];

  // Extract first HTML code block
  const codeMatch = section.match(/```html\n([\s\S]*?)```/);
  if (codeMatch) {
    return codeMatch[1].trim();
  }

  return null;
}

/**
 * Extract component tag from AutoPropsTable
 */
function extractComponentTag(body) {
  const match = body.match(/<AutoPropsTable\s+componentTag=["']([^"']+)["']/);
  return match ? match[1] : null;
}

/**
 * Build YAML for new fields to append
 */
function buildNewFields(extracted) {
  const lines = [];

  // Intro
  if (extracted.intro) {
    lines.push('');
    lines.push('intro: >');
    const introLines = extracted.intro.split('\n');
    for (const line of introLines) {
      lines.push(`  ${line}`);
    }
  }

  // Examples
  if (extracted.examples && extracted.examples.length > 0) {
    lines.push('');
    lines.push('examples:');
    for (const ex of extracted.examples) {
      lines.push(`  - title: ${ex.title}`);
      lines.push(`    description: ${ex.description}`);
      lines.push(`    storyId: ${ex.storyId}`);
      lines.push(`    height: ${ex.height}`);
    }
  }

  // Code usage
  if (extracted.code_usage) {
    lines.push('');
    lines.push('code_usage: |');
    const codeLines = extracted.code_usage.split('\n');
    for (const line of codeLines) {
      lines.push(`  ${line}`);
    }
  }

  // Component tag
  if (extracted.component_tag) {
    lines.push('');
    lines.push(`component_tag: ${extracted.component_tag}`);
  }

  return lines.join('\n');
}

/**
 * Clean up frontmatter - remove quotes from simple array items
 * But KEEP quotes for values that need them for YAML safety
 */
function cleanFrontmatter(fm) {
  let cleaned = fm;

  // Pattern for quoted array items
  cleaned = cleaned.replace(/^(\s+-\s+)"(.+)"$/gm, (match, prefix, content) => {
    // KEEP quotes if content starts with special YAML chars or has colons not in markdown
    // YAML special: *, &, !, |, >, {, }, [, ], #, @, `, etc.
    if (content.match(/^[\*&!|>\{\}\[\]#@`]/) ||
        (content.includes(':') && !content.includes('](') && !content.startsWith('**'))) {
      return match;
    }
    return `${prefix}${content}`;
  });

  return cleaned;
}

/**
 * Process a single component file
 */
function processComponent(filePath) {
  console.log(`\nProcessing: ${path.basename(path.dirname(filePath))}/${path.basename(filePath)}`);

  const content = fs.readFileSync(filePath, 'utf-8');

  // Check if it's a ComponentPage file
  if (!content.includes('<ComponentPage')) {
    console.log('  Not a ComponentPage file, skipping.');
    return false;
  }

  // Check if already converted (self-closing tag)
  if (content.match(/<ComponentPage\s+frontMatter=\{frontMatter\}\s*\/>/)) {
    console.log('  Already converted, skipping.');
    return false;
  }

  const parsed = parseContent(content);
  if (!parsed) {
    console.log('  Could not parse content, skipping.');
    return false;
  }

  let { frontmatter, body } = parsed;
  const extracted = {};
  let changes = [];

  // Extract intro
  if (!hasField(frontmatter, 'intro')) {
    const intro = extractIntro(body);
    if (intro) {
      extracted.intro = intro;
      changes.push('intro');
    }
  }

  // Extract examples
  if (!hasField(frontmatter, 'examples')) {
    const examples = extractExamples(body);
    if (examples) {
      extracted.examples = examples;
      changes.push(`${examples.length} examples`);
    }
  }

  // Extract code usage
  if (!hasField(frontmatter, 'code_usage')) {
    const codeUsage = extractCodeUsage(body);
    if (codeUsage) {
      extracted.code_usage = codeUsage;
      changes.push('code_usage');
    }
  }

  // Extract component tag
  if (!hasField(frontmatter, 'component_tag')) {
    const componentTag = extractComponentTag(body);
    if (componentTag) {
      extracted.component_tag = componentTag;
      changes.push('component_tag');
    }
  }

  // Note: Keep frontmatter as-is, don't remove quotes (YAML needs them for special chars)

  // Build new fields
  const newFields = buildNewFields(extracted);

  // Create new content
  const newFrontmatter = frontmatter + newFields;
  const newBody = '<ComponentPage frontMatter={frontMatter} />';
  const newContent = `---\n${newFrontmatter}\n---\n\n${newBody}\n`;

  // Write file
  fs.writeFileSync(filePath, newContent);

  if (changes.length > 0) {
    console.log(`  ✓ Converted (added: ${changes.join(', ')})`);
  } else {
    console.log('  ✓ Converted (body moved to frontmatter)');
  }

  return true;
}

/**
 * Find all component files
 */
function findComponentFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      if (item.name === 'deprecated') continue;
      files.push(...findComponentFiles(fullPath));
    } else if (item.name.endsWith('.mdx')) {
      if (item.name === 'checklist.mdx') continue;
      if (fullPath.endsWith('components/index.mdx')) continue;
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
const componentsDir = path.join(__dirname, '../docs/components');

console.log('Convert to Accordion Format');
console.log('===========================');

const files = findComponentFiles(componentsDir);
console.log(`Found ${files.length} component files.`);

let converted = 0;
for (const file of files) {
  try {
    if (processComponent(file)) {
      converted++;
    }
  } catch (err) {
    console.error(`  ✗ Error: ${err.message}`);
  }
}

console.log('\n===========================');
console.log(`Conversion complete! ${converted} files converted.`);
