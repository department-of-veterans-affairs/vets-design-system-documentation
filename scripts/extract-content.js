#!/usr/bin/env node
/**
 * Content extraction script to convert MDX body content into structured frontmatter fields.
 *
 * This script:
 * 1. Reads migrated component files with <ComponentPage> wrapper
 * 2. Extracts sections into structured frontmatter fields
 * 3. Keeps complex content (Tabs, StoryEmbed, etc.) in markdown fields
 */

const fs = require('fs');
const path = require('path');

/**
 * Parse YAML frontmatter from content
 */
function parseFrontmatter(content) {
  const fmRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(fmRegex);

  if (!match) return { frontmatter: '', body: content, raw: {} };

  const fmContent = match[1];
  const body = content.substring(match[0].length).trim();

  // Simple YAML parser for our needs
  const raw = {};
  let currentKey = null;
  let currentList = null;

  const lines = fmContent.split('\n');
  for (const line of lines) {
    if (line.match(/^[a-z_]+:/)) {
      const colonIndex = line.indexOf(':');
      currentKey = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      if (value) {
        raw[currentKey] = value;
        currentList = null;
      } else {
        currentList = [];
        raw[currentKey] = currentList;
      }
    } else if (line.match(/^\s+-\s/) && currentList) {
      currentList.push(line.replace(/^\s+-\s*/, '').trim());
    }
  }

  return { frontmatter: fmContent, body, raw };
}

/**
 * Extract content between <ComponentPage> tags
 */
function extractComponentPageContent(body) {
  const match = body.match(/<ComponentPage[^>]*>([\s\S]*)<\/ComponentPage>/);
  if (!match) return null;
  return match[1].trim();
}

/**
 * Extract the intro paragraph (first paragraph after # Title)
 */
function extractIntro(content) {
  // Find content after the first # heading until the next ## or ---
  const match = content.match(/^#\s+[^\n]+\n\n([\s\S]*?)(?=\n##|\n---)/);
  if (!match) return null;

  let intro = match[1].trim();

  // Skip if it starts with import or <
  if (intro.startsWith('import') || intro.startsWith('<')) return null;

  // Get just the first paragraph
  const paragraphs = intro.split('\n\n');
  intro = paragraphs[0].trim();

  // Skip if empty or starts with special chars
  if (!intro || intro.startsWith('<') || intro.startsWith('import')) return null;

  return intro;
}

/**
 * Extract related components list
 */
function extractRelated(content) {
  const match = content.match(/##\s+Related components\n\n([\s\S]*?)(?=\n---|\n##|$)/);
  if (!match) return null;

  const section = match[1].trim();
  const related = [];

  // Match markdown links with descriptions: - [Name](url) - Description
  const linkRegex = /^-\s*\[([^\]]+)\]\(([^)]+)\)\s*[-–—]\s*(.+)$/gm;
  let linkMatch;

  while ((linkMatch = linkRegex.exec(section)) !== null) {
    related.push({
      name: linkMatch[1].trim(),
      url: linkMatch[2].trim(),
      description: linkMatch[3].trim()
    });
  }

  return related.length > 0 ? related : null;
}

/**
 * Extract usage section with subsections
 */
function extractUsage(content) {
  const usageMatch = content.match(/##\s+Usage\n\n([\s\S]*?)(?=\n---|\n##\s+[^#]|$)/);
  if (!usageMatch) return null;

  const section = usageMatch[1];
  const usage = {};

  // Extract "When to use"
  const whenToUse = extractBulletList(section, 'When to use');
  if (whenToUse && whenToUse.length > 0) {
    usage.when_to_use = whenToUse;
  }

  // Extract "When to consider something else"
  const whenElse = extractBulletList(section, 'When to consider something else');
  if (whenElse && whenElse.length > 0) {
    usage.when_to_consider_else = whenElse;
  }

  // Extract "Behavior"
  const behavior = extractBulletList(section, 'Behavior');
  if (behavior && behavior.length > 0) {
    usage.behavior = behavior;
  }

  return Object.keys(usage).length > 0 ? usage : null;
}

/**
 * Extract bullet list from a subsection
 */
function extractBulletList(content, heading) {
  const regex = new RegExp(`###\\s+${heading}\\n\\n([\\s\\S]*?)(?=\\n###|\\n##|\\n---|$)`, 'i');
  const match = content.match(regex);
  if (!match) return null;

  const section = match[1].trim();
  const items = [];

  // Match bullet points (- item)
  const lines = section.split('\n');
  for (const line of lines) {
    const bulletMatch = line.match(/^-\s+(.+)$/);
    if (bulletMatch) {
      // Clean up the item - remove bold markers for simple text
      let item = bulletMatch[1].trim();
      // Keep the full item including bold text
      items.push(item);
    }
  }

  return items.length > 0 ? items : null;
}

/**
 * Extract content considerations as bullet list
 */
function extractContentConsiderations(content) {
  const match = content.match(/##\s+Content considerations\n\n([\s\S]*?)(?=\n---|\n##\s+[^#]|$)/);
  if (!match) return null;

  const section = match[1].trim();

  // Skip if it contains DosDonts
  if (section.includes('<DosDonts>')) return null;

  const items = [];
  const lines = section.split('\n');

  for (const line of lines) {
    const bulletMatch = line.match(/^-\s+(.+)$/);
    if (bulletMatch) {
      items.push(bulletMatch[1].trim());
    }
  }

  return items.length > 0 ? items : null;
}

/**
 * Extract accessibility considerations as bullet list
 */
function extractAccessibility(content) {
  const match = content.match(/##\s+Accessibility considerations\n\n([\s\S]*?)(?=\n---|\n##\s+[^#]|$)/);
  if (!match) return null;

  const section = match[1].trim();

  // Skip if it contains partials or mermaid
  if (section.includes('<') || section.includes('```mermaid')) return null;

  const items = [];
  const lines = section.split('\n');

  for (const line of lines) {
    const bulletMatch = line.match(/^-\s+(.+)$/);
    if (bulletMatch) {
      items.push(bulletMatch[1].trim());
    }
  }

  return items.length > 0 ? items : null;
}

/**
 * Build YAML frontmatter string
 */
function buildFrontmatter(existing, extracted) {
  const lines = ['---'];

  // Preserve existing fields
  if (existing.title) lines.push(`title: ${existing.title}`);
  if (existing.description) lines.push(`description: ${existing.description}`);
  if (existing.maturity) lines.push(`maturity: ${existing.maturity}`);

  if (existing.platforms) {
    lines.push('platforms:');
    const platforms = Array.isArray(existing.platforms) ? existing.platforms : [existing.platforms];
    for (const p of platforms) {
      lines.push(`  - ${p}`);
    }
  }

  if (existing.github) lines.push(`github: ${existing.github}`);
  if (existing.figma) lines.push(`figma: ${existing.figma}`);
  if (existing.storybook) lines.push(`storybook: ${existing.storybook}`);
  if (existing.research) lines.push(`research: ${existing.research}`);

  // Add extracted intro
  if (extracted.intro) {
    // Escape quotes and handle multiline
    const intro = extracted.intro.replace(/"/g, '\\"');
    lines.push(`intro: "${intro}"`);
  }

  // Add extracted related components
  if (extracted.related && extracted.related.length > 0) {
    lines.push('related:');
    for (const rel of extracted.related) {
      lines.push(`  - name: "${rel.name}"`);
      lines.push(`    url: "${rel.url}"`);
      lines.push(`    description: "${rel.description}"`);
    }
  }

  // Add extracted usage
  if (extracted.usage) {
    lines.push('usage:');
    if (extracted.usage.when_to_use) {
      lines.push('  when_to_use:');
      for (const item of extracted.usage.when_to_use) {
        lines.push(`    - "${item.replace(/"/g, '\\"')}"`);
      }
    }
    if (extracted.usage.when_to_consider_else) {
      lines.push('  when_to_consider_else:');
      for (const item of extracted.usage.when_to_consider_else) {
        lines.push(`    - "${item.replace(/"/g, '\\"')}"`);
      }
    }
    if (extracted.usage.behavior) {
      lines.push('  behavior:');
      for (const item of extracted.usage.behavior) {
        lines.push(`    - "${item.replace(/"/g, '\\"')}"`);
      }
    }
  }

  // Add extracted content considerations
  if (extracted.content_considerations && extracted.content_considerations.length > 0) {
    lines.push('content_considerations:');
    for (const item of extracted.content_considerations) {
      lines.push(`  - "${item.replace(/"/g, '\\"')}"`);
    }
  }

  // Add extracted accessibility
  if (extracted.accessibility && extracted.accessibility.length > 0) {
    lines.push('accessibility:');
    for (const item of extracted.accessibility) {
      lines.push(`  - "${item.replace(/"/g, '\\"')}"`);
    }
  }

  lines.push('---');

  return lines.join('\n');
}

/**
 * Process a single component file
 */
function processComponent(filePath) {
  console.log(`\nProcessing: ${filePath}`);

  const content = fs.readFileSync(filePath, 'utf-8');

  // Check if it's a migrated component with ComponentPage
  if (!content.includes('<ComponentPage frontMatter={frontMatter}>')) {
    console.log('  Not a migrated component, skipping.');
    return { extracted: 0 };
  }

  const { frontmatter, body, raw } = parseFrontmatter(content);
  const componentContent = extractComponentPageContent(body);

  if (!componentContent) {
    console.log('  Could not extract ComponentPage content, skipping.');
    return { extracted: 0 };
  }

  // Extract various sections
  const extracted = {};
  let extractedCount = 0;

  // Extract intro
  const intro = extractIntro(componentContent);
  if (intro && !raw.intro) {
    extracted.intro = intro;
    extractedCount++;
    console.log('  ✓ Extracted intro');
  }

  // Extract related components
  const related = extractRelated(componentContent);
  if (related && !raw.related) {
    extracted.related = related;
    extractedCount++;
    console.log(`  ✓ Extracted ${related.length} related components`);
  }

  // Extract usage
  const usage = extractUsage(componentContent);
  if (usage && !raw.usage) {
    extracted.usage = usage;
    const subCount = Object.keys(usage).length;
    extractedCount += subCount;
    console.log(`  ✓ Extracted usage (${subCount} subsections)`);
  }

  // Extract content considerations
  const contentConsiderations = extractContentConsiderations(componentContent);
  if (contentConsiderations && !raw.content_considerations) {
    extracted.content_considerations = contentConsiderations;
    extractedCount++;
    console.log(`  ✓ Extracted ${contentConsiderations.length} content considerations`);
  }

  // Extract accessibility
  const accessibility = extractAccessibility(componentContent);
  if (accessibility && !raw.accessibility) {
    extracted.accessibility = accessibility;
    extractedCount++;
    console.log(`  ✓ Extracted ${accessibility.length} accessibility items`);
  }

  if (extractedCount === 0) {
    console.log('  No new content to extract.');
    return { extracted: 0 };
  }

  // Build new frontmatter
  const newFrontmatter = buildFrontmatter(raw, extracted);

  // Reconstruct the file
  const newContent = `${newFrontmatter}\n\n${body}`;

  // Write the file
  fs.writeFileSync(filePath, newContent);
  console.log(`  ✓ Updated file with ${extractedCount} extracted sections`);

  return { extracted: extractedCount };
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

console.log('Content Extraction Script');
console.log('=========================');
console.log(`Components directory: ${componentsDir}`);

const files = findComponentFiles(componentsDir);
console.log(`\nFound ${files.length} component files to process.`);

let totalExtracted = 0;
let filesUpdated = 0;

for (const file of files) {
  try {
    const result = processComponent(file);
    if (result.extracted > 0) {
      totalExtracted += result.extracted;
      filesUpdated++;
    }
  } catch (err) {
    console.error(`  ✗ Error: ${err.message}`);
  }
}

console.log('\n=========================');
console.log(`Extraction complete!`);
console.log(`  Files updated: ${filesUpdated}`);
console.log(`  Sections extracted: ${totalExtracted}`);
