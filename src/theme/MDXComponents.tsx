import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';

// Import components to make globally available in MDX
import ComponentPage from '@site/src/components/ComponentPage';
import ComponentHeader from '@site/src/components/ComponentHeader';
import StoryEmbed from '@site/src/components/StoryEmbed';
import AutoPropsTable from '@site/src/components/AutoPropsTable';
import FeedbackSection from '@site/src/components/FeedbackSection';
import MaturityBadge from '@site/src/components/MaturityBadge';
import PlatformTag, { PlatformTags } from '@site/src/components/PlatformTag';
import DosDonts, { Do, Dont } from '@site/src/components/DosDonts';
import ChecklistPage from '@site/src/components/ChecklistPage';

// Import MDX partials to make globally available
import AnalyticsEvent from '@site/docs/_partials/code-usage/analytics-event.mdx';

export default {
  // Re-use the default MDX components
  ...MDXComponents,

  // Add custom components - available without imports in MDX files
  ComponentPage,
  ComponentHeader,
  StoryEmbed,
  AutoPropsTable,
  FeedbackSection,
  MaturityBadge,
  PlatformTag,
  PlatformTags,
  DosDonts,
  Do,
  Dont,
  ChecklistPage,

  // MDX partials
  AnalyticsEvent,
};
