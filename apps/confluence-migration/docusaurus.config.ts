import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VA Engineering Wiki',
  tagline: 'Internal documentation and processes (migrated from Confluence)',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://confluence.design.va.gov',
  baseUrl: '/confluence/',

  organizationName: 'department-of-veterans-affairs',
  projectName: 'vets-design-system-documentation',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl:
            'https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/main/apps/confluence-migration/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/department-of-veterans-affairs/vets-design-system-documentation/tree/main/apps/confluence-migration/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'VA Engineering Wiki',
      logo: {
        alt: 'VA Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'processesSidebar',
          position: 'left',
          label: 'Processes',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Developer Guides',
        },
        {
          type: 'docSidebar',
          sidebarId: 'teamsSidebar',
          position: 'left',
          label: 'Teams',
        },
        {to: '/blog', label: 'Announcements', position: 'left'},
        {to: '/search', label: 'Search', position: 'left'},
        {
          href: 'https://design.va.gov',
          label: 'Design System',
          position: 'right',
        },
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
            {
              label: 'Engineering Processes',
              to: '/docs/processes/getting-started',
            },
            {
              label: 'Developer Guides',
              to: '/docs/guides/setup',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack: #platform-design-system',
              href: 'https://dsva.slack.com/channels/platform-design-system',
            },
            {
              label: 'Design System',
              href: 'https://design.va.gov',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Announcements',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/department-of-veterans-affairs/vets-design-system-documentation',
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus. Previously hosted on Confluence.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
