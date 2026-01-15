import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VA.gov Design System',
  tagline: 'Design system, component library, and development guides for VA.gov',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    // Local search - works offline, no external service needed
    // Remove this when switching to Algolia
    [
      'docusaurus-lunr-search',
      {
        languages: ['en'],
        indexBaseUrl: true,
      },
    ],
  ],

  url: 'https://design.va.gov',
  baseUrl: '/',

  organizationName: 'department-of-veterans-affairs',
  projectName: 'vads-design-system',

  onBrokenLinks: 'warn',  // Change to 'throw' in production
  onBrokenAnchors: 'warn',  // Component pages render headings dynamically

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: ({docPath}) => {
            // Route component pages to Decap CMS
            // Handles both "components/button/index.mdx" and "components/form/checkbox/index.mdx"
            if (docPath.startsWith('components/') && docPath.endsWith('/index.mdx')) {
              // For nested folder collections, Decap CMS needs the full path including "index"
              // e.g., "components/button/index.mdx" -> "button/index"
              const entryPath = docPath.replace('components/', '').replace('.mdx', '');
              // Use absolute URL to force full page navigation (bypasses Docusaurus client-side routing)
              const baseUrl = process.env.NODE_ENV === 'development'
                ? 'http://localhost:3000'
                : 'https://design.va.gov';
              return `${baseUrl}/admin/#/collections/components/entries/${entryPath}`;
            }
            // Fall back to GitHub for other pages
            return `https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/main/docs/${docPath}`;
          },
          remarkPlugins: [],
          // Exclude partials and templates from being generated as pages
          exclude: ['**/_partials/**', '**/_template.mdx', '**/patterns/_template.mdx'],
          // Filter out checklist pages and move Deprecated to the bottom
          async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            // Recursively filter out checklist items
            const filterChecklist = (items: any[]): any[] => {
              return items
                .filter((item) => {
                  // Filter out items with id ending in /checklist
                  if (item.type === 'doc' && item.id?.endsWith('/checklist')) {
                    return false;
                  }
                  return true;
                })
                .map((item) => {
                  // Recursively filter category items
                  if (item.type === 'category' && item.items) {
                    return {...item, items: filterChecklist(item.items)};
                  }
                  return item;
                });
            };
            // Move Deprecated category to the bottom
            const moveDeprecatedToBottom = (items: any[]): any[] => {
              const deprecated = items.filter((item) =>
                item.type === 'category' && item.label?.toLowerCase() === 'deprecated'
              );
              const others = items.filter((item) =>
                !(item.type === 'category' && item.label?.toLowerCase() === 'deprecated')
              );
              return [...others, ...deprecated];
            };
            return moveDeprecatedToBottom(filterChecklist(sidebarItems));
          },
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Release Notes',
          blogDescription: 'VA Design System updates and releases',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/va-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'VA Design System',
      logo: {
        alt: 'VA.gov Logo',
        src: 'img/logo.svg',
      },
      items: [
        // Components
        {
          type: 'docSidebar',
          sidebarId: 'componentsSidebar',
          position: 'left',
          label: 'Components',
        },
        // Patterns
        {
          type: 'docSidebar',
          sidebarId: 'patternsSidebar',
          position: 'left',
          label: 'Patterns',
        },
        // Templates
        {
          type: 'docSidebar',
          sidebarId: 'templatesSidebar',
          position: 'left',
          label: 'Templates',
        },
        // Foundation
        {
          type: 'docSidebar',
          sidebarId: 'foundationSidebar',
          position: 'left',
          label: 'Foundation',
        },
        // Content
        {
          type: 'docSidebar',
          sidebarId: 'contentSidebar',
          position: 'left',
          label: 'Content',
        },
        // IA (Information Architecture)
        {
          type: 'docSidebar',
          sidebarId: 'iaSidebar',
          position: 'left',
          label: 'IA',
        },
        // Accessibility
        {
          type: 'docSidebar',
          sidebarId: 'accessibilitySidebar',
          position: 'left',
          label: 'Accessibility',
        },
        // About
        {
          type: 'docSidebar',
          sidebarId: 'aboutSidebar',
          position: 'left',
          label: 'About',
        },
        // Storybook link (external VA DS Storybook)
        {
          href: 'https://design.va.gov/storybook/',
          label: 'Storybook',
          position: 'right',
        },
        // GitHub
        {
          href: 'https://github.com/department-of-veterans-affairs/vets-design-system-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Components', to: '/docs/components'},
            {label: 'Patterns', to: '/docs/patterns'},
            {label: 'Foundation', to: '/docs/foundation'},
            {label: 'Content', to: '/docs/content'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Storybook', href: 'https://design.va.gov/storybook/'},
            {label: 'Figma Library', href: 'https://www.figma.com/@vagov'},
            {label: 'GitHub', href: 'https://github.com/department-of-veterans-affairs'},
          ],
        },
        {
          title: 'About',
          items: [
            {label: 'Accessibility', to: '/docs/accessibility'},
            {label: 'About', to: '/docs/about'},
            {label: 'Release Notes', to: '/blog'},
          ],
        },
      ],
      copyright: `An official website of the United States government.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'scss'],
    },
    // =================================================================
    // ALGOLIA DOCSEARCH (Recommended for production)
    // =================================================================
    // To enable Algolia DocSearch:
    // 1. Apply at: https://docsearch.algolia.com/apply/
    // 2. Wait for approval (1-3 days)
    // 3. Receive appId, apiKey, and indexName from Algolia
    // 4. Uncomment and fill in the values below
    // 5. Remove the local search theme from the themes array above
    //
    // algolia: {
    //   appId: 'YOUR_APP_ID',           // From Algolia dashboard
    //   apiKey: 'YOUR_SEARCH_API_KEY',  // Public search-only API key
    //   indexName: 'va-design-system',  // Index name from Algolia
    //   contextualSearch: true,         // Enable version/language filtering
    //   searchPagePath: 'search',       // Enable dedicated search page at /search
    // },
    // =================================================================
  } satisfies Preset.ThemeConfig,
};

export default config;
