/**
 * Generates a table of contents array based on component frontmatter.
 * Only includes sections that have content.
 */

interface TocItem {
  value: string;
  id: string;
  level: number;
}

interface ComponentFrontmatter {
  variations?: any[];
  related?: any[];
  examples?: any[];
  examples_mobile?: any[];
  usage?: {
    when_to_use?: any[];
    when_to_consider_else?: any[];
    behavior?: any[];
  };
  code_usage?: string;
  code_usage_mobile?: string;
  content_considerations?: any[];
  accessibility?: any[];
}

export function generateComponentToc(frontMatter: ComponentFrontmatter): TocItem[] {
  const toc: TocItem[] = [];

  // Variations
  if (frontMatter.variations && frontMatter.variations.length > 0) {
    toc.push({ value: 'Variations', id: 'variations', level: 2 });
  }

  // Related components
  if (frontMatter.related && frontMatter.related.length > 0) {
    toc.push({ value: 'Related components', id: 'related-components', level: 2 });
  }

  // Examples
  const hasExamples = (frontMatter.examples && frontMatter.examples.length > 0) ||
    (frontMatter.examples_mobile && frontMatter.examples_mobile.length > 0);
  if (hasExamples) {
    toc.push({ value: 'Examples', id: 'examples', level: 2 });
  }

  // Usage
  if (frontMatter.usage) {
    toc.push({ value: 'Usage', id: 'usage', level: 2 });

    if (frontMatter.usage.when_to_use && frontMatter.usage.when_to_use.length > 0) {
      toc.push({ value: 'When to use', id: 'when-to-use', level: 3 });
    }

    if (frontMatter.usage.when_to_consider_else && frontMatter.usage.when_to_consider_else.length > 0) {
      toc.push({ value: 'When to consider something else', id: 'when-to-consider-something-else', level: 3 });
    }

    if (frontMatter.usage.behavior && frontMatter.usage.behavior.length > 0) {
      toc.push({ value: 'Behavior', id: 'behavior', level: 3 });
    }
  }

  // Code usage
  if (frontMatter.code_usage || frontMatter.code_usage_mobile) {
    toc.push({ value: 'Code usage', id: 'code-usage', level: 2 });
  }

  // Content considerations
  if (frontMatter.content_considerations && frontMatter.content_considerations.length > 0) {
    toc.push({ value: 'Content considerations', id: 'content-considerations', level: 2 });
  }

  // Accessibility considerations
  if (frontMatter.accessibility && frontMatter.accessibility.length > 0) {
    toc.push({ value: 'Accessibility considerations', id: 'accessibility-considerations', level: 2 });
  }

  return toc;
}
