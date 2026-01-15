import React from 'react';
import Link from '@docusaurus/Link';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ComponentHeader from '../ComponentHeader';
import StoryEmbed from '../StoryEmbed';
import AutoPropsTable from '../AutoPropsTable';
import FeedbackSection from '../FeedbackSection';
import SharedContent from '../SharedContent';
import MermaidDiagrams, { type MermaidDiagram } from '../MermaidDiagrams';
import styles from './styles.module.css';

// Custom link component to use Docusaurus Link for internal links
const MarkdownLink = ({ href, children }: { href?: string; children?: React.ReactNode }) => {
  if (href?.startsWith('./') || href?.startsWith('/')) {
    return <Link to={href}>{children}</Link>;
  }
  return <a href={href}>{children}</a>;
};

// Custom table components for ReactMarkdown to use Docusaurus styling
const MarkdownTable = ({ children }: { children?: React.ReactNode }) => (
  <div className="table-wrapper">
    <table>{children}</table>
  </div>
);

// Helper to render markdown in list items (inline, no wrapping p tag)
const MarkdownText = ({ children }: { children: string }) => (
  <ReactMarkdown
    components={{
      p: ({ children }) => <>{children}</>,
      a: MarkdownLink,
    }}
  >
    {children}
  </ReactMarkdown>
);

// Custom code block component for ReactMarkdown
const MarkdownCode = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  // Check if this is an inline code or a code block
  const isInline = !className;
  if (isInline) {
    return <code>{children}</code>;
  }

  // Extract language from className (e.g., "language-swift" -> "swift")
  const language = className?.replace('language-', '') || 'text';
  const codeString = String(children).replace(/\n$/, '');

  return (
    <CodeBlock language={language}>
      {codeString}
    </CodeBlock>
  );
};

// Full markdown components including tables and code blocks
const markdownComponents = {
  a: MarkdownLink,
  table: MarkdownTable,
  code: MarkdownCode,
};

type MaturityLevel = 'deployed' | 'use-with-caution' | 'dont-use' | 'best-practice' | 'deprecated';
type Platform = 'web' | 'mobile';

interface Example {
  title: string;
  description: string;
  storyId: string;
  height?: number;
}

interface RelatedComponent {
  name: string;
  url: string;
  description: string;
}

interface Variation {
  name: string;
  url: string;
  description?: string;
}

interface ListItem {
  value: string;
}

interface UsageGuidelines {
  when_to_use?: ListItem[];
  when_to_consider_else?: ListItem[];
  behavior?: ListItem[];
}

interface ComponentFrontmatter {
  title: string;
  description?: string;
  maturity?: MaturityLevel;
  platforms?: Platform[];
  github?: string;
  discussions?: string;
  figma?: string;
  storybook?: string;
  research?: string;
  // Content sections
  intro?: string;
  variations?: Variation[];
  related?: RelatedComponent[];
  examples?: Example[];
  examples_mobile?: Example[];
  usage?: UsageGuidelines;
  code_usage?: string;
  code_usage_mobile?: string;
  content_considerations?: ListItem[];
  accessibility?: ListItem[];
  // Shared content blocks
  shared_content?: string[];
  // For props table - web and mobile component tags
  component_tag?: string;
  component_tag_mobile?: string;
  // Mermaid diagrams
  mermaid_diagrams?: MermaidDiagram[];
}

interface ComponentPageProps {
  children?: React.ReactNode;
  frontMatter?: ComponentFrontmatter;
}

/**
 * A wrapper component for component documentation pages.
 * Renders all content from frontmatter, providing a consistent structure.
 * Children (MDX body) are rendered for any additional custom content.
 *
 * Usage in MDX: <ComponentPage frontMatter={frontMatter} />
 */
export default function ComponentPage({ children, frontMatter }: ComponentPageProps): JSX.Element {
  const fm = frontMatter || {} as ComponentFrontmatter;

  const maturity = fm.maturity || 'use-with-caution';
  const platforms = fm.platforms || ['web'];

  // Check if we have structured frontmatter content
  const hasStructuredContent = fm.intro || fm.variations || fm.related || fm.examples ||
    fm.usage || fm.code_usage || fm.content_considerations || fm.accessibility || fm.mermaid_diagrams;

  // Check if component supports both platforms with content
  const hasBothPlatforms = platforms.includes('web') && platforms.includes('mobile');
  const hasWebExamples = fm.examples && fm.examples.length > 0;
  const hasMobileExamples = fm.examples_mobile && fm.examples_mobile.length > 0;
  const hasWebCodeUsage = !!fm.code_usage;
  const hasMobileCodeUsage = !!fm.code_usage_mobile;

  // Helper to render examples list
  const renderExamples = (examples: Example[]) => (
    <>
      {examples.map((example, i) => (
        <div key={i} className={styles.example}>
          <h3>{example.title}</h3>
          <p>{example.description}</p>
          <StoryEmbed
            storyId={example.storyId}
            height={example.height || 250}
            title={`${example.title} example`}
            autoLoad={true}
            eager={false}
          />
        </div>
      ))}
    </>
  );

  // Helper to render code usage for web
  const renderWebCodeUsage = (code: string) => (
    <>
      <CodeBlock language="html" title="Usage">
        {code.trim()}
      </CodeBlock>
      {fm.component_tag && (
        <>
          <h3>Properties</h3>
          <AutoPropsTable componentTag={fm.component_tag} platform="web" />
        </>
      )}
    </>
  );

  // Helper to render code usage for mobile
  const renderMobileCodeUsage = (code: string) => {
    // Use mobile-specific tag if provided, otherwise try the web tag
    const mobileTag = fm.component_tag_mobile || fm.component_tag;

    // Check if the code contains markdown code fences
    const hasMarkdownFences = code.includes('```');

    return (
      <>
        {hasMarkdownFences ? (
          // Render as markdown if it contains code fences (multiple languages)
          <ReactMarkdown components={markdownComponents}>
            {code.trim()}
          </ReactMarkdown>
        ) : (
          // Render as a single code block
          <CodeBlock language="jsx" title="Usage">
            {code.trim()}
          </CodeBlock>
        )}
        {mobileTag && (
          <>
            <h3>Properties</h3>
            <AutoPropsTable componentTag={mobileTag} platform="mobile" />
          </>
        )}
      </>
    );
  };

  return (
    <div className={styles.componentPage}>
      <ComponentHeader
        maturity={maturity}
        platforms={platforms}
        github={fm.github}
        discussions={fm.discussions}
        figma={fm.figma}
        storybook={fm.storybook}
        research={fm.research}
      />

      <div className={styles.content}>
        {hasStructuredContent ? (
          <>
            {/* Introduction */}
            {fm.intro && (
              <section className={styles.section}>
                <p className={styles.intro}>{fm.intro}</p>
              </section>
            )}

            {/* Variations / Sub-navigation */}
            {fm.variations && fm.variations.length > 0 && (
              <section className={styles.section}>
                <h2 id="variations">Variations</h2>
                <div className={styles.variationsGrid}>
                  {fm.variations.map((variation, i) => (
                    <Link key={i} to={variation.url} className={styles.variationCard}>
                      <span className={styles.variationName}>{variation.name}</span>
                      {variation.description && (
                        <span className={styles.variationDescription}>{variation.description}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Related Components */}
            {fm.related && fm.related.length > 0 && (
              <section className={styles.section}>
                <h2 id="related-components">Related components</h2>
                <ul>
                  {fm.related.map((rel, i) => (
                    <li key={i}>
                      <Link to={rel.url}>{rel.name}</Link> - {rel.description}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <hr />

            {/* Examples */}
            {(hasWebExamples || hasMobileExamples) && (
              <section className={styles.section}>
                <h2 id="examples">Examples</h2>
                {hasBothPlatforms && hasWebExamples && hasMobileExamples ? (
                  <Tabs groupId="platform" queryString>
                    <TabItem value="web" label="Web" default>
                      {renderExamples(fm.examples!)}
                    </TabItem>
                    <TabItem value="mobile" label="Mobile app">
                      {renderExamples(fm.examples_mobile!)}
                    </TabItem>
                  </Tabs>
                ) : (
                  renderExamples(fm.examples || fm.examples_mobile || [])
                )}
              </section>
            )}

            <hr />

            {/* Usage Guidelines */}
            {fm.usage && (
              <section className={styles.section}>
                <h2 id="usage">Usage</h2>

                {fm.usage.when_to_use && fm.usage.when_to_use.length > 0 && (
                  <>
                    <h3 id="when-to-use">When to use</h3>
                    <ul>
                      {fm.usage.when_to_use.map((item, i) => (
                        <li key={i}><MarkdownText>{item.value}</MarkdownText></li>
                      ))}
                    </ul>
                  </>
                )}

                {fm.usage.when_to_consider_else && fm.usage.when_to_consider_else.length > 0 && (
                  <>
                    <h3 id="when-to-consider-something-else">When to consider something else</h3>
                    <ul>
                      {fm.usage.when_to_consider_else.map((item, i) => (
                        <li key={i}><MarkdownText>{item.value}</MarkdownText></li>
                      ))}
                    </ul>
                  </>
                )}

                {fm.usage.behavior && fm.usage.behavior.length > 0 && (
                  <>
                    <h3 id="behavior">Behavior</h3>
                    <ul>
                      {fm.usage.behavior.map((item, i) => (
                        <li key={i}><MarkdownText>{item.value}</MarkdownText></li>
                      ))}
                    </ul>
                  </>
                )}
              </section>
            )}

            {/* Mermaid Diagrams */}
            {fm.mermaid_diagrams && fm.mermaid_diagrams.length > 0 && (
              <section className={styles.section}>
                <h2 id="diagrams">Diagrams</h2>
                <MermaidDiagrams diagrams={fm.mermaid_diagrams} />
              </section>
            )}

            <hr />

            {/* Code Usage */}
            {(hasWebCodeUsage || hasMobileCodeUsage) && (
              <section className={styles.section}>
                <h2 id="code-usage">Code usage</h2>
                {hasBothPlatforms && hasWebCodeUsage && hasMobileCodeUsage ? (
                  <Tabs groupId="platform" queryString>
                    <TabItem value="web" label="Web" default>
                      {renderWebCodeUsage(fm.code_usage!)}
                    </TabItem>
                    <TabItem value="mobile" label="Mobile app">
                      {renderMobileCodeUsage(fm.code_usage_mobile!)}
                    </TabItem>
                  </Tabs>
                ) : hasWebCodeUsage ? (
                  renderWebCodeUsage(fm.code_usage!)
                ) : (
                  renderMobileCodeUsage(fm.code_usage_mobile!)
                )}
              </section>
            )}

            <hr />

            {/* Content Considerations */}
            {fm.content_considerations && fm.content_considerations.length > 0 && (
              <section className={styles.section}>
                <h2 id="content-considerations">Content considerations</h2>
                <ul>
                  {fm.content_considerations.map((item, i) => (
                    <li key={i}><MarkdownText>{item.value}</MarkdownText></li>
                  ))}
                </ul>
              </section>
            )}

            <hr />

            {/* Accessibility Considerations */}
            {fm.accessibility && fm.accessibility.length > 0 && (
              <section className={styles.section}>
                <h2 id="accessibility-considerations">Accessibility considerations</h2>
                <ul>
                  {fm.accessibility.map((item, i) => (
                    <li key={i}><MarkdownText>{item.value}</MarkdownText></li>
                  ))}
                </ul>
              </section>
            )}

            {/* Shared Content Blocks */}
            {fm.shared_content && fm.shared_content.length > 0 && (
              <section className={styles.section}>
                <SharedContent blocks={fm.shared_content} />
              </section>
            )}

            {/* Any additional MDX body content */}
            {children}

            <hr />

            <FeedbackSection
              componentName={fm.title}
              checklistUrl="./checklist"
            />
          </>
        ) : (
          // Fall back to children-only mode for non-structured pages
          <>
            {children}
            <FeedbackSection
              componentName={fm.title}
              checklistUrl="./checklist"
            />
          </>
        )}
      </div>
    </div>
  );
}
