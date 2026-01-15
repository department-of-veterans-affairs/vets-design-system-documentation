import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ba7'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '6ff'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f1f'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '0ee'),
                exact: true
              },
              {
                path: '/docs/about/',
                component: ComponentCreator('/docs/about/', '772'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/component-documentation-guide',
                component: ComponentCreator('/docs/about/component-documentation-guide', 'd2d'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/content-writers',
                component: ComponentCreator('/docs/about/content-writers', 'a5e'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/contributing/',
                component: ComponentCreator('/docs/about/contributing/', '86c'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/contributing/experimental-components',
                component: ComponentCreator('/docs/about/contributing/experimental-components', '234'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/designers/',
                component: ComponentCreator('/docs/about/designers/', 'f60'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/designers/figma',
                component: ComponentCreator('/docs/about/designers/figma', '10c'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/developers/',
                component: ComponentCreator('/docs/about/developers/', '2e9'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/developers/install',
                component: ComponentCreator('/docs/about/developers/install', '157'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/developers/web-components',
                component: ComponentCreator('/docs/about/developers/web-components', 'c82'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/experience-standards',
                component: ComponentCreator('/docs/about/experience-standards', '7f8'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/feedback',
                component: ComponentCreator('/docs/about/feedback', 'dea'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/maturity-scale',
                component: ComponentCreator('/docs/about/maturity-scale', '9b2'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/metrics/',
                component: ComponentCreator('/docs/about/metrics/', '772'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/metrics/governance',
                component: ComponentCreator('/docs/about/metrics/governance', '10f'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/naming-conventions/',
                component: ComponentCreator('/docs/about/naming-conventions/', '21a'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/naming-conventions/css',
                component: ComponentCreator('/docs/about/naming-conventions/css', '60d'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/principles',
                component: ComponentCreator('/docs/about/principles', '9ee'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/search-architecture',
                component: ComponentCreator('/docs/about/search-architecture', 'fdb'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/about/whats-new',
                component: ComponentCreator('/docs/about/whats-new', 'ec4'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/accessibility/',
                component: ComponentCreator('/docs/accessibility/', '79c'),
                exact: true,
                sidebar: "accessibilitySidebar"
              },
              {
                path: '/docs/accessibility/annotations',
                component: ComponentCreator('/docs/accessibility/annotations', 'b45'),
                exact: true,
                sidebar: "accessibilitySidebar"
              },
              {
                path: '/docs/accessibility/checklist',
                component: ComponentCreator('/docs/accessibility/checklist', '968'),
                exact: true
              },
              {
                path: '/docs/accessibility/focus-management',
                component: ComponentCreator('/docs/accessibility/focus-management', 'a90'),
                exact: true,
                sidebar: "accessibilitySidebar"
              },
              {
                path: '/docs/accessibility/for-teams',
                component: ComponentCreator('/docs/accessibility/for-teams', '1f1'),
                exact: true,
                sidebar: "accessibilitySidebar"
              },
              {
                path: '/docs/accessibility/screen-reader-announcements',
                component: ComponentCreator('/docs/accessibility/screen-reader-announcements', '622'),
                exact: true,
                sidebar: "accessibilitySidebar"
              },
              {
                path: '/docs/accessibility/testing',
                component: ComponentCreator('/docs/accessibility/testing', '7d5'),
                exact: true,
                sidebar: "accessibilitySidebar"
              },
              {
                path: '/docs/category/ask-users-for',
                component: ComponentCreator('/docs/category/ask-users-for', '777'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/category/deprecated',
                component: ComponentCreator('/docs/category/deprecated', 'e6a'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/category/help-users-to',
                component: ComponentCreator('/docs/category/help-users-to', '3a7'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/components/',
                component: ComponentCreator('/docs/components/', 'cc9'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/accordion/',
                component: ComponentCreator('/docs/components/accordion/', '3fc'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/accordion/checklist',
                component: ComponentCreator('/docs/components/accordion/checklist', 'ff4'),
                exact: true
              },
              {
                path: '/docs/components/additional-info/',
                component: ComponentCreator('/docs/components/additional-info/', 'ae9'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/additional-info/checklist',
                component: ComponentCreator('/docs/components/additional-info/checklist', 'c7b'),
                exact: true
              },
              {
                path: '/docs/components/address-block/',
                component: ComponentCreator('/docs/components/address-block/', '952'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/address-block/checklist',
                component: ComponentCreator('/docs/components/address-block/checklist', '31b'),
                exact: true
              },
              {
                path: '/docs/components/alert/',
                component: ComponentCreator('/docs/components/alert/', '9d6'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/alert/alert-expandable/',
                component: ComponentCreator('/docs/components/alert/alert-expandable/', '57d'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/alert/alert-sign-in/',
                component: ComponentCreator('/docs/components/alert/alert-sign-in/', '882'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/alert/checklist',
                component: ComponentCreator('/docs/components/alert/checklist', '40c'),
                exact: true
              },
              {
                path: '/docs/components/back-to-top/',
                component: ComponentCreator('/docs/components/back-to-top/', '4c3'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/back-to-top/checklist',
                component: ComponentCreator('/docs/components/back-to-top/checklist', '232'),
                exact: true
              },
              {
                path: '/docs/components/banner/',
                component: ComponentCreator('/docs/components/banner/', '426'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/banner/checklist',
                component: ComponentCreator('/docs/components/banner/checklist', 'af1'),
                exact: true
              },
              {
                path: '/docs/components/banner/maintenance/',
                component: ComponentCreator('/docs/components/banner/maintenance/', '965'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/banner/official-gov/',
                component: ComponentCreator('/docs/components/banner/official-gov/', '99d'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/breadcrumbs/',
                component: ComponentCreator('/docs/components/breadcrumbs/', '419'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/breadcrumbs/checklist',
                component: ComponentCreator('/docs/components/breadcrumbs/checklist', 'fd5'),
                exact: true
              },
              {
                path: '/docs/components/button/',
                component: ComponentCreator('/docs/components/button/', 'c82'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/button/button-group/',
                component: ComponentCreator('/docs/components/button/button-group/', '8b4'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/button/button-icon/',
                component: ComponentCreator('/docs/components/button/button-icon/', 'ced'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/button/button-segmented/',
                component: ComponentCreator('/docs/components/button/button-segmented/', '969'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/button/checklist',
                component: ComponentCreator('/docs/components/button/checklist', '0ed'),
                exact: true
              },
              {
                path: '/docs/components/card/',
                component: ComponentCreator('/docs/components/card/', 'bfe'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/card/checklist',
                component: ComponentCreator('/docs/components/card/checklist', '75f'),
                exact: true
              },
              {
                path: '/docs/components/critical-action/',
                component: ComponentCreator('/docs/components/critical-action/', 'ff6'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/critical-action/checklist',
                component: ComponentCreator('/docs/components/critical-action/checklist', 'abf'),
                exact: true
              },
              {
                path: '/docs/components/deprecated/',
                component: ComponentCreator('/docs/components/deprecated/', 'e99'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/deprecated/banner-promo/',
                component: ComponentCreator('/docs/components/deprecated/banner-promo/', 'eb4'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/deprecated/input-message/',
                component: ComponentCreator('/docs/components/deprecated/input-message/', 'd88'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/deprecated/notification/',
                component: ComponentCreator('/docs/components/deprecated/notification/', 'eb3'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/divider/',
                component: ComponentCreator('/docs/components/divider/', '861'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/divider/checklist',
                component: ComponentCreator('/docs/components/divider/checklist', '7ff'),
                exact: true
              },
              {
                path: '/docs/components/filter-chip/',
                component: ComponentCreator('/docs/components/filter-chip/', '8e5'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/filter-chip/checklist',
                component: ComponentCreator('/docs/components/filter-chip/checklist', 'f63'),
                exact: true
              },
              {
                path: '/docs/components/footer/',
                component: ComponentCreator('/docs/components/footer/', 'f0e'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/footer/checklist',
                component: ComponentCreator('/docs/components/footer/checklist', '9fc'),
                exact: true
              },
              {
                path: '/docs/components/footer/footer-minimal/',
                component: ComponentCreator('/docs/components/footer/footer-minimal/', 'd55'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/',
                component: ComponentCreator('/docs/components/form/', '054'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/autosave/',
                component: ComponentCreator('/docs/components/form/autosave/', '092'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/autosave/checklist',
                component: ComponentCreator('/docs/components/form/autosave/checklist', '671'),
                exact: true
              },
              {
                path: '/docs/components/form/checkbox/',
                component: ComponentCreator('/docs/components/form/checkbox/', 'a27'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/checkbox/checklist',
                component: ComponentCreator('/docs/components/form/checkbox/checklist', '8d8'),
                exact: true
              },
              {
                path: '/docs/components/form/combo-box/',
                component: ComponentCreator('/docs/components/form/combo-box/', '4d6'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/combo-box/checklist',
                component: ComponentCreator('/docs/components/form/combo-box/checklist', 'c08'),
                exact: true
              },
              {
                path: '/docs/components/form/date-input/',
                component: ComponentCreator('/docs/components/form/date-input/', 'e66'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/date-input/checklist',
                component: ComponentCreator('/docs/components/form/date-input/checklist', '4b3'),
                exact: true
              },
              {
                path: '/docs/components/form/file-input/',
                component: ComponentCreator('/docs/components/form/file-input/', '3bf'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/file-input/checklist',
                component: ComponentCreator('/docs/components/form/file-input/checklist', '6ec'),
                exact: true
              },
              {
                path: '/docs/components/form/label/',
                component: ComponentCreator('/docs/components/form/label/', '6d5'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/label/checklist',
                component: ComponentCreator('/docs/components/form/label/checklist', '4d0'),
                exact: true
              },
              {
                path: '/docs/components/form/memorable-date/',
                component: ComponentCreator('/docs/components/form/memorable-date/', '304'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/memorable-date/checklist',
                component: ComponentCreator('/docs/components/form/memorable-date/checklist', '134'),
                exact: true
              },
              {
                path: '/docs/components/form/need-help/',
                component: ComponentCreator('/docs/components/form/need-help/', 'c38'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/need-help/checklist',
                component: ComponentCreator('/docs/components/form/need-help/checklist', '271'),
                exact: true
              },
              {
                path: '/docs/components/form/penalty-notice/',
                component: ComponentCreator('/docs/components/form/penalty-notice/', '2f2'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/penalty-notice/checklist',
                component: ComponentCreator('/docs/components/form/penalty-notice/checklist', '238'),
                exact: true
              },
              {
                path: '/docs/components/form/prefill/',
                component: ComponentCreator('/docs/components/form/prefill/', 'e68'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/prefill/checklist',
                component: ComponentCreator('/docs/components/form/prefill/checklist', 'f22'),
                exact: true
              },
              {
                path: '/docs/components/form/privacy-agreement/',
                component: ComponentCreator('/docs/components/form/privacy-agreement/', '233'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/privacy-agreement/checklist',
                component: ComponentCreator('/docs/components/form/privacy-agreement/checklist', '608'),
                exact: true
              },
              {
                path: '/docs/components/form/progress-bar-segmented/',
                component: ComponentCreator('/docs/components/form/progress-bar-segmented/', '591'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/progress-bar-segmented/checklist',
                component: ComponentCreator('/docs/components/form/progress-bar-segmented/checklist', '583'),
                exact: true
              },
              {
                path: '/docs/components/form/radio-button/',
                component: ComponentCreator('/docs/components/form/radio-button/', 'c1f'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/radio-button/checklist',
                component: ComponentCreator('/docs/components/form/radio-button/checklist', '440'),
                exact: true
              },
              {
                path: '/docs/components/form/select/',
                component: ComponentCreator('/docs/components/form/select/', '10f'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/select/checklist',
                component: ComponentCreator('/docs/components/form/select/checklist', 'a94'),
                exact: true
              },
              {
                path: '/docs/components/form/statement-of-truth/',
                component: ComponentCreator('/docs/components/form/statement-of-truth/', '8fd'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/statement-of-truth/checklist',
                component: ComponentCreator('/docs/components/form/statement-of-truth/checklist', '347'),
                exact: true
              },
              {
                path: '/docs/components/form/telephone-input/',
                component: ComponentCreator('/docs/components/form/telephone-input/', '347'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/telephone-input/checklist',
                component: ComponentCreator('/docs/components/form/telephone-input/checklist', '7b2'),
                exact: true
              },
              {
                path: '/docs/components/form/text-input/',
                component: ComponentCreator('/docs/components/form/text-input/', 'ca2'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/text-input/checklist',
                component: ComponentCreator('/docs/components/form/text-input/checklist', 'c84'),
                exact: true
              },
              {
                path: '/docs/components/form/textarea/',
                component: ComponentCreator('/docs/components/form/textarea/', 'fd4'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/form/textarea/checklist',
                component: ComponentCreator('/docs/components/form/textarea/checklist', '43a'),
                exact: true
              },
              {
                path: '/docs/components/header/',
                component: ComponentCreator('/docs/components/header/', '308'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/header/checklist',
                component: ComponentCreator('/docs/components/header/checklist', '579'),
                exact: true
              },
              {
                path: '/docs/components/header/header-minimal/',
                component: ComponentCreator('/docs/components/header/header-minimal/', 'ae4'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/icon/',
                component: ComponentCreator('/docs/components/icon/', '4b1'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/icon/checklist',
                component: ComponentCreator('/docs/components/icon/checklist', 'fbe'),
                exact: true
              },
              {
                path: '/docs/components/language-toggle/',
                component: ComponentCreator('/docs/components/language-toggle/', 'e27'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/language-toggle/checklist',
                component: ComponentCreator('/docs/components/language-toggle/checklist', '612'),
                exact: true
              },
              {
                path: '/docs/components/link/',
                component: ComponentCreator('/docs/components/link/', '966'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/link/action/',
                component: ComponentCreator('/docs/components/link/action/', 'f78'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/link/checklist',
                component: ComponentCreator('/docs/components/link/checklist', '69c'),
                exact: true
              },
              {
                path: '/docs/components/link/collection/',
                component: ComponentCreator('/docs/components/link/collection/', '1c4'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/list/',
                component: ComponentCreator('/docs/components/list/', '62c'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/list/checklist',
                component: ComponentCreator('/docs/components/list/checklist', '849'),
                exact: true
              },
              {
                path: '/docs/components/loading-indicator/',
                component: ComponentCreator('/docs/components/loading-indicator/', '301'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/loading-indicator/checklist',
                component: ComponentCreator('/docs/components/loading-indicator/checklist', '162'),
                exact: true
              },
              {
                path: '/docs/components/modal/',
                component: ComponentCreator('/docs/components/modal/', 'cad'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/modal/checklist',
                component: ComponentCreator('/docs/components/modal/checklist', 'f89'),
                exact: true
              },
              {
                path: '/docs/components/modal/crisis-line-modal/',
                component: ComponentCreator('/docs/components/modal/crisis-line-modal/', '06c'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/omb-info/',
                component: ComponentCreator('/docs/components/omb-info/', 'fe5'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/omb-info/checklist',
                component: ComponentCreator('/docs/components/omb-info/checklist', 'b93'),
                exact: true
              },
              {
                path: '/docs/components/on-this-page/',
                component: ComponentCreator('/docs/components/on-this-page/', 'e03'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/on-this-page/checklist',
                component: ComponentCreator('/docs/components/on-this-page/checklist', '75a'),
                exact: true
              },
              {
                path: '/docs/components/pagination/',
                component: ComponentCreator('/docs/components/pagination/', '2ed'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/pagination/checklist',
                component: ComponentCreator('/docs/components/pagination/checklist', 'd9f'),
                exact: true
              },
              {
                path: '/docs/components/process-list/',
                component: ComponentCreator('/docs/components/process-list/', 'aac'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/process-list/checklist',
                component: ComponentCreator('/docs/components/process-list/checklist', '20a'),
                exact: true
              },
              {
                path: '/docs/components/progress-bar/',
                component: ComponentCreator('/docs/components/progress-bar/', 'a94'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/progress-bar/checklist',
                component: ComponentCreator('/docs/components/progress-bar/checklist', 'd62'),
                exact: true
              },
              {
                path: '/docs/components/search-filter/',
                component: ComponentCreator('/docs/components/search-filter/', '08c'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/search-filter/checklist',
                component: ComponentCreator('/docs/components/search-filter/checklist', '0d9'),
                exact: true
              },
              {
                path: '/docs/components/search-input/',
                component: ComponentCreator('/docs/components/search-input/', 'eaa'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/search-input/checklist',
                component: ComponentCreator('/docs/components/search-input/checklist', 'ef1'),
                exact: true
              },
              {
                path: '/docs/components/service-list-item/',
                component: ComponentCreator('/docs/components/service-list-item/', '6c2'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/service-list-item/checklist',
                component: ComponentCreator('/docs/components/service-list-item/checklist', '7a1'),
                exact: true
              },
              {
                path: '/docs/components/sidenav/',
                component: ComponentCreator('/docs/components/sidenav/', 'af4'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/sidenav/checklist',
                component: ComponentCreator('/docs/components/sidenav/checklist', '900'),
                exact: true
              },
              {
                path: '/docs/components/snackbar/',
                component: ComponentCreator('/docs/components/snackbar/', 'bbe'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/snackbar/checklist',
                component: ComponentCreator('/docs/components/snackbar/checklist', 'b31'),
                exact: true
              },
              {
                path: '/docs/components/summary-box/',
                component: ComponentCreator('/docs/components/summary-box/', '0db'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/summary-box/checklist',
                component: ComponentCreator('/docs/components/summary-box/checklist', 'f8b'),
                exact: true
              },
              {
                path: '/docs/components/table/',
                component: ComponentCreator('/docs/components/table/', 'ea2'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/table/checklist',
                component: ComponentCreator('/docs/components/table/checklist', 'ccf'),
                exact: true
              },
              {
                path: '/docs/components/tabs/',
                component: ComponentCreator('/docs/components/tabs/', '436'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/tabs/checklist',
                component: ComponentCreator('/docs/components/tabs/checklist', '455'),
                exact: true
              },
              {
                path: '/docs/components/tag/',
                component: ComponentCreator('/docs/components/tag/', '87b'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/tag/checklist',
                component: ComponentCreator('/docs/components/tag/checklist', 'f26'),
                exact: true
              },
              {
                path: '/docs/components/tag/tag-status/',
                component: ComponentCreator('/docs/components/tag/tag-status/', 'a99'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/telephone/',
                component: ComponentCreator('/docs/components/telephone/', '393'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/telephone/checklist',
                component: ComponentCreator('/docs/components/telephone/checklist', 'c7f'),
                exact: true
              },
              {
                path: '/docs/components/text/',
                component: ComponentCreator('/docs/components/text/', 'cdf'),
                exact: true,
                sidebar: "componentsSidebar"
              },
              {
                path: '/docs/components/text/checklist',
                component: ComponentCreator('/docs/components/text/checklist', '4d6'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/',
                component: ComponentCreator('/docs/content-style-guide/', '4a1'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/abbreviations-and-acronyms',
                component: ComponentCreator('/docs/content-style-guide/abbreviations-and-acronyms', '684'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/alternative-text-for-images',
                component: ComponentCreator('/docs/content-style-guide/alternative-text-for-images', '401'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/bold-text',
                component: ComponentCreator('/docs/content-style-guide/bold-text', '5b5'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/bulleted-lists',
                component: ComponentCreator('/docs/content-style-guide/bulleted-lists', '9f1'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/button-labels',
                component: ComponentCreator('/docs/content-style-guide/button-labels', 'ecd'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/capitalization',
                component: ComponentCreator('/docs/content-style-guide/capitalization', 'fa4'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/content-principles',
                component: ComponentCreator('/docs/content-style-guide/content-principles', '4de'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/dates-and-numbers',
                component: ComponentCreator('/docs/content-style-guide/dates-and-numbers', '698'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/email-and-text-notifications',
                component: ComponentCreator('/docs/content-style-guide/email-and-text-notifications', 'cc1'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/error-messages/',
                component: ComponentCreator('/docs/content-style-guide/error-messages/', '7d0'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/error-messages/access',
                component: ComponentCreator('/docs/content-style-guide/error-messages/access', '608'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/error-messages/engagement',
                component: ComponentCreator('/docs/content-style-guide/error-messages/engagement', 'f22'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/error-messages/feedback',
                component: ComponentCreator('/docs/content-style-guide/error-messages/feedback', '5de'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/error-messages/system',
                component: ComponentCreator('/docs/content-style-guide/error-messages/system', 'e3c'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/form-labels',
                component: ComponentCreator('/docs/content-style-guide/form-labels', '8c2'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/government-forms',
                component: ComponentCreator('/docs/content-style-guide/government-forms', '33e'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/health-content/',
                component: ComponentCreator('/docs/content-style-guide/health-content/', '506'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/health-content/destigmatizing-language-substance-use',
                component: ComponentCreator('/docs/content-style-guide/health-content/destigmatizing-language-substance-use', '105'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/health-content/destigmatizing-language-weight',
                component: ComponentCreator('/docs/content-style-guide/health-content/destigmatizing-language-weight', '1a1'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/links',
                component: ComponentCreator('/docs/content-style-guide/links', '6ef'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/naming-and-labels',
                component: ComponentCreator('/docs/content-style-guide/naming-and-labels', 'f8e'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/neutral-language',
                component: ComponentCreator('/docs/content-style-guide/neutral-language', '370'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/numbers-signs-symbols',
                component: ComponentCreator('/docs/content-style-guide/numbers-signs-symbols', '849'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/page-titles-and-section-titles',
                component: ComponentCreator('/docs/content-style-guide/page-titles-and-section-titles', '90c'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/plain-language/',
                component: ComponentCreator('/docs/content-style-guide/plain-language/', '6b1'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/punctuation-and-formatting',
                component: ComponentCreator('/docs/content-style-guide/punctuation-and-formatting', '381'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/specific-topics-and-programs/',
                component: ComponentCreator('/docs/content-style-guide/specific-topics-and-programs/', '3d0'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/specific-topics-and-programs/claims-and-applications',
                component: ComponentCreator('/docs/content-style-guide/specific-topics-and-programs/claims-and-applications', '7fd'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/specific-topics-and-programs/payments-and-debts',
                component: ComponentCreator('/docs/content-style-guide/specific-topics-and-programs/payments-and-debts', 'a4c'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/specific-topics-and-programs/sign-in-and-identity-verification',
                component: ComponentCreator('/docs/content-style-guide/specific-topics-and-programs/sign-in-and-identity-verification', '661'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/they-their',
                component: ComponentCreator('/docs/content-style-guide/they-their', 'd4e'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/title-tags',
                component: ComponentCreator('/docs/content-style-guide/title-tags', '08d'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/trademarks',
                component: ComponentCreator('/docs/content-style-guide/trademarks', 'a1a'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/we-us-you',
                component: ComponentCreator('/docs/content-style-guide/we-us-you', 'f2c'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/word-list',
                component: ComponentCreator('/docs/content-style-guide/word-list', '358'),
                exact: true
              },
              {
                path: '/docs/content-style-guide/writing-for-seo',
                component: ComponentCreator('/docs/content-style-guide/writing-for-seo', '942'),
                exact: true
              },
              {
                path: '/docs/content/',
                component: ComponentCreator('/docs/content/', 'edd'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/content/button-labels',
                component: ComponentCreator('/docs/content/button-labels', 'dd9'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/content/error-messages',
                component: ComponentCreator('/docs/content/error-messages', 'ec4'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/content/links',
                component: ComponentCreator('/docs/content/links', 'e3f'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/content/plain-language',
                component: ComponentCreator('/docs/content/plain-language', '12a'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/foundation/',
                component: ComponentCreator('/docs/foundation/', '681'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/breakpoints',
                component: ComponentCreator('/docs/foundation/breakpoints', 'd2f'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/color-palette',
                component: ComponentCreator('/docs/foundation/color-palette', '05e'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/design-tokens',
                component: ComponentCreator('/docs/foundation/design-tokens', '55c'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/image-aspect-ratios',
                component: ComponentCreator('/docs/foundation/image-aspect-ratios', 'baa'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/layout/',
                component: ComponentCreator('/docs/foundation/layout/', 'd28'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/layout/flexbox-grid',
                component: ComponentCreator('/docs/foundation/layout/flexbox-grid', '679'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/layout/page-layouts',
                component: ComponentCreator('/docs/foundation/layout/page-layouts', '600'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/logos',
                component: ComponentCreator('/docs/foundation/logos', '36c'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/spacing-units',
                component: ComponentCreator('/docs/foundation/spacing-units', '347'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/typography',
                component: ComponentCreator('/docs/foundation/typography', 'b97'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/',
                component: ComponentCreator('/docs/foundation/utilities/', '116'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/background-color',
                component: ComponentCreator('/docs/foundation/utilities/background-color', '379'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/border',
                component: ComponentCreator('/docs/foundation/utilities/border', 'a4e'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/display',
                component: ComponentCreator('/docs/foundation/utilities/display', '98f'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/flexbox',
                component: ComponentCreator('/docs/foundation/utilities/flexbox', 'c84'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/font-family',
                component: ComponentCreator('/docs/foundation/utilities/font-family', 'd45'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/font-size',
                component: ComponentCreator('/docs/foundation/utilities/font-size', '1fd'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/font-style',
                component: ComponentCreator('/docs/foundation/utilities/font-style', 'da6'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/font-weight',
                component: ComponentCreator('/docs/foundation/utilities/font-weight', '341'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/height-and-width',
                component: ComponentCreator('/docs/foundation/utilities/height-and-width', '424'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/line-height',
                component: ComponentCreator('/docs/foundation/utilities/line-height', '87e'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/margins',
                component: ComponentCreator('/docs/foundation/utilities/margins', '1c3'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/measure',
                component: ComponentCreator('/docs/foundation/utilities/measure', '78e'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/padding',
                component: ComponentCreator('/docs/foundation/utilities/padding', 'b0a'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/position',
                component: ComponentCreator('/docs/foundation/utilities/position', '8c9'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/text-align',
                component: ComponentCreator('/docs/foundation/utilities/text-align', '04a'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/text-color',
                component: ComponentCreator('/docs/foundation/utilities/text-color', '46e'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/text-decoration',
                component: ComponentCreator('/docs/foundation/utilities/text-decoration', '569'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/foundation/utilities/visibility',
                component: ComponentCreator('/docs/foundation/utilities/visibility', '4fe'),
                exact: true,
                sidebar: "foundationSidebar"
              },
              {
                path: '/docs/ia/',
                component: ComponentCreator('/docs/ia/', '12d'),
                exact: true,
                sidebar: "iaSidebar"
              },
              {
                path: '/docs/ia/domain-structure',
                component: ComponentCreator('/docs/ia/domain-structure', 'b04'),
                exact: true,
                sidebar: "iaSidebar"
              },
              {
                path: '/docs/ia/url-standards/',
                component: ComponentCreator('/docs/ia/url-standards/', 'bdb'),
                exact: true,
                sidebar: "iaSidebar"
              },
              {
                path: '/docs/ia/url-standards/redirects',
                component: ComponentCreator('/docs/ia/url-standards/redirects', '553'),
                exact: true,
                sidebar: "iaSidebar"
              },
              {
                path: '/docs/ia/url-standards/vanity-urls',
                component: ComponentCreator('/docs/ia/url-standards/vanity-urls', '748'),
                exact: true,
                sidebar: "iaSidebar"
              },
              {
                path: '/docs/ia/va-health-and-benefits-app',
                component: ComponentCreator('/docs/ia/va-health-and-benefits-app', '55b'),
                exact: true,
                sidebar: "iaSidebar"
              },
              {
                path: '/docs/METRICS-DASHBOARD',
                component: ComponentCreator('/docs/METRICS-DASHBOARD', 'bf5'),
                exact: true
              },
              {
                path: '/docs/patterns/',
                component: ComponentCreator('/docs/patterns/', '30d'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/',
                component: ComponentCreator('/docs/patterns/ask-users-for/', '9b4'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/a-mutually-exclusive-answer/',
                component: ComponentCreator('/docs/patterns/ask-users-for/a-mutually-exclusive-answer/', '560'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/a-single-response/',
                component: ComponentCreator('/docs/patterns/ask-users-for/a-single-response/', 'c19'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/addresses/',
                component: ComponentCreator('/docs/patterns/ask-users-for/addresses/', 'ecc'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/contact-preferences/',
                component: ComponentCreator('/docs/patterns/ask-users-for/contact-preferences/', 'c48'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/dates/',
                component: ComponentCreator('/docs/patterns/ask-users-for/dates/', '28a'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/direct-deposit/',
                component: ComponentCreator('/docs/patterns/ask-users-for/direct-deposit/', 'cc7'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/email-address/',
                component: ComponentCreator('/docs/patterns/ask-users-for/email-address/', '8bb'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/feedback/',
                component: ComponentCreator('/docs/patterns/ask-users-for/feedback/', '3d2'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/files/',
                component: ComponentCreator('/docs/patterns/ask-users-for/files/', '3e7'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/housing-status/',
                component: ComponentCreator('/docs/patterns/ask-users-for/housing-status/', '15f'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/marital-information/',
                component: ComponentCreator('/docs/patterns/ask-users-for/marital-information/', '619'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/multiple-responses/',
                component: ComponentCreator('/docs/patterns/ask-users-for/multiple-responses/', 'eb5'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/names/',
                component: ComponentCreator('/docs/patterns/ask-users-for/names/', '1a9'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/phone-numbers/',
                component: ComponentCreator('/docs/patterns/ask-users-for/phone-numbers/', '9f0'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/race-and-ethnicity/',
                component: ComponentCreator('/docs/patterns/ask-users-for/race-and-ethnicity/', '23f'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/relationship/',
                component: ComponentCreator('/docs/patterns/ask-users-for/relationship/', '558'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/service-history/',
                component: ComponentCreator('/docs/patterns/ask-users-for/service-history/', '512'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/signature/',
                component: ComponentCreator('/docs/patterns/ask-users-for/signature/', 'bd9'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/ask-users-for/social-security-number/',
                component: ComponentCreator('/docs/patterns/ask-users-for/social-security-number/', '25d'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/deprecated/gender-identity/',
                component: ComponentCreator('/docs/patterns/deprecated/gender-identity/', '400'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/deprecated/know-how-their-information-is-updated/',
                component: ComponentCreator('/docs/patterns/deprecated/know-how-their-information-is-updated/', '113'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/deprecated/pronouns/',
                component: ComponentCreator('/docs/patterns/deprecated/pronouns/', '9ba'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/deprecated/wizard/',
                component: ComponentCreator('/docs/patterns/deprecated/wizard/', 'ae6'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/',
                component: ComponentCreator('/docs/patterns/help-users-to/', 'de3'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/check-answers/',
                component: ComponentCreator('/docs/patterns/help-users-to/check-answers/', 'fd4'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/check-eligibility/',
                component: ComponentCreator('/docs/patterns/help-users-to/check-eligibility/', '1c4'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/check-personal-information/',
                component: ComponentCreator('/docs/patterns/help-users-to/check-personal-information/', 'cf2'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/complete-a-sub-task/',
                component: ComponentCreator('/docs/patterns/help-users-to/complete-a-sub-task/', '8c4'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/keep-a-record-of-submitted-information/',
                component: ComponentCreator('/docs/patterns/help-users-to/keep-a-record-of-submitted-information/', 'a67'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/know-when-their-information-is-prefilled/',
                component: ComponentCreator('/docs/patterns/help-users-to/know-when-their-information-is-prefilled/', '28b'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/manage-benefits-and-tools/',
                component: ComponentCreator('/docs/patterns/help-users-to/manage-benefits-and-tools/', '0c3'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/navigate-a-long-list/',
                component: ComponentCreator('/docs/patterns/help-users-to/navigate-a-long-list/', '856'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/navigate-benefit-applications/',
                component: ComponentCreator('/docs/patterns/help-users-to/navigate-benefit-applications/', '22a'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/navigate-multiple-related-forms/',
                component: ComponentCreator('/docs/patterns/help-users-to/navigate-multiple-related-forms/', '72d'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/recover-from-errors/',
                component: ComponentCreator('/docs/patterns/help-users-to/recover-from-errors/', 'a27'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/sign-in/',
                component: ComponentCreator('/docs/patterns/help-users-to/sign-in/', '8bd'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/stay-informed-of-their-application-status/',
                component: ComponentCreator('/docs/patterns/help-users-to/stay-informed-of-their-application-status/', '8e7'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/patterns/help-users-to/update-prefilled-information/',
                component: ComponentCreator('/docs/patterns/help-users-to/update-prefilled-information/', '415'),
                exact: true,
                sidebar: "patternsSidebar"
              },
              {
                path: '/docs/story-embed-test',
                component: ComponentCreator('/docs/story-embed-test', 'e8a'),
                exact: true
              },
              {
                path: '/docs/templates/',
                component: ComponentCreator('/docs/templates/', '983'),
                exact: true,
                sidebar: "templatesSidebar"
              },
              {
                path: '/docs/templates/email/',
                component: ComponentCreator('/docs/templates/email/', 'f21'),
                exact: true,
                sidebar: "templatesSidebar"
              },
              {
                path: '/docs/templates/forms/',
                component: ComponentCreator('/docs/templates/forms/', '20e'),
                exact: true,
                sidebar: "templatesSidebar"
              },
              {
                path: '/docs/templates/forms/accessibility-guidelines/',
                component: ComponentCreator('/docs/templates/forms/accessibility-guidelines/', '311'),
                exact: true,
                sidebar: "templatesSidebar"
              },
              {
                path: '/docs/templates/forms/confirmation/',
                component: ComponentCreator('/docs/templates/forms/confirmation/', '9f9'),
                exact: true,
                sidebar: "templatesSidebar"
              },
              {
                path: '/docs/templates/forms/form-step-minimal/',
                component: ComponentCreator('/docs/templates/forms/form-step-minimal/', '9e0'),
                exact: true,
                sidebar: "templatesSidebar"
              },
              {
                path: '/docs/templates/forms/form-step/',
                component: ComponentCreator('/docs/templates/forms/form-step/', '4af'),
                exact: true,
                sidebar: "templatesSidebar"
              },
              {
                path: '/docs/templates/forms/how-to-apply/',
                component: ComponentCreator('/docs/templates/forms/how-to-apply/', '287'),
                exact: true,
                sidebar: "templatesSidebar"
              },
              {
                path: '/docs/templates/forms/introduction/',
                component: ComponentCreator('/docs/templates/forms/introduction/', 'a4f'),
                exact: true,
                sidebar: "templatesSidebar"
              },
              {
                path: '/docs/templates/forms/review/',
                component: ComponentCreator('/docs/templates/forms/review/', '253'),
                exact: true,
                sidebar: "templatesSidebar"
              },
              {
                path: '/docs/templates/homepage/',
                component: ComponentCreator('/docs/templates/homepage/', '766'),
                exact: true,
                sidebar: "templatesSidebar"
              },
              {
                path: '/docs/templates/hub/',
                component: ComponentCreator('/docs/templates/hub/', '90c'),
                exact: true,
                sidebar: "templatesSidebar"
              },
              {
                path: '/docs/templates/search-results/',
                component: ComponentCreator('/docs/templates/search-results/', '810'),
                exact: true,
                sidebar: "templatesSidebar"
              },
              {
                path: '/docs/templates/signed-out-vs-signed-in/',
                component: ComponentCreator('/docs/templates/signed-out-vs-signed-in/', 'a40'),
                exact: true,
                sidebar: "templatesSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
