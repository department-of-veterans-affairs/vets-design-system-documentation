import React from 'react';

// Type declarations for webpack's require.context
interface RequireContext {
  keys: () => string[];
  (id: string): { default?: React.ComponentType; } & React.ComponentType;
}

declare const require: {
  context: (
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ) => RequireContext;
};

// Dynamically import all MDX files from _partials directory
// This creates a map of all available partials at build time
const partialsContext: RequireContext = require.context(
  '@site/docs/_partials',
  true, // include subdirectories
  /\.mdx$/
);

// Build a map of partial paths to their components
// We create multiple keys for each partial to support both full paths and short names
const partialsMap: Record<string, React.ComponentType> = {};

partialsContext.keys().forEach((key: string) => {
  // key is like "./accessibility/buttons-vs-links.mdx"
  // Convert to slug format: "accessibility/buttons-vs-links"
  const fullSlug = key
    .replace(/^\.\//, '') // remove leading ./
    .replace(/\.mdx$/, '') // remove .mdx extension
    .replace(/\/index$/, ''); // remove /index suffix if present

  // Get the component (default export from MDX)
  const module = partialsContext(key);
  const component = module.default || module;

  // Store with full path
  partialsMap[fullSlug] = component;

  // Also store with just the filename (for backwards compatibility with CMS)
  const shortSlug = fullSlug.split('/').pop();
  if (shortSlug && shortSlug !== fullSlug) {
    // Only add if not already taken (avoid conflicts)
    if (!partialsMap[shortSlug]) {
      partialsMap[shortSlug] = component;
    }
  }
});

interface SharedContentProps {
  /** Array of shared content block slugs to render */
  blocks?: string[];
}

/**
 * Renders selected shared content blocks dynamically.
 * Blocks are loaded from the _partials directory based on their slug.
 *
 * Usage: <SharedContent blocks={frontMatter.shared_content} />
 *
 * The slug format matches the file path within _partials:
 * - "accessibility/buttons-vs-links" → _partials/accessibility/buttons-vs-links.mdx
 * - "code-usage/analytics-event" → _partials/code-usage/analytics-event.mdx
 */
export default function SharedContent({ blocks }: SharedContentProps): JSX.Element | null {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <>
      {blocks.map((slug) => {
        const ContentComponent = partialsMap[slug];

        if (!ContentComponent) {
          console.warn(`SharedContent: No partial found for slug "${slug}". Available: ${Object.keys(partialsMap).join(', ')}`);
          return null;
        }

        return (
          <div key={slug} className="shared-content-block">
            <ContentComponent />
          </div>
        );
      })}
    </>
  );
}

// Export the map for debugging/reference
export { partialsMap };
