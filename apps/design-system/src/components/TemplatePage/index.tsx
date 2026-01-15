import React from 'react';
import Link from '@docusaurus/Link';
import ReactMarkdown from 'react-markdown';
import ComponentHeader from '../ComponentHeader';
import FeedbackSection from '../FeedbackSection';
import MermaidDiagrams, { type MermaidDiagram } from '../MermaidDiagrams';
import styles from './styles.module.css';

// Custom link component to use Docusaurus Link for internal links
const MarkdownLink = ({ href, children }: { href?: string; children?: React.ReactNode }) => {
  if (href?.startsWith('./') || href?.startsWith('/')) {
    return <Link to={href}>{children}</Link>;
  }
  return <a href={href}>{children}</a>;
};

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

type MaturityLevel = 'deployed' | 'use-with-caution' | 'dont-use' | 'best-practice' | 'deprecated';

interface ListItem {
  value: string;
}

interface Example {
  title: string;
  description?: string;
  url?: string;
  image?: string;
  alt?: string;
}

interface RelatedComponent {
  name: string;
  url: string;
  description?: string;
}

interface StructureItem {
  title: string;
  description?: string;
}

interface UsageGuidelines {
  when_to_use?: ListItem[];
  when_not_to_use?: ListItem[];
  usability?: ListItem[];
}

interface Structure {
  intro?: string;
  sections?: StructureItem[];
  components_used?: RelatedComponent[];
}

interface TemplateFrontmatter {
  title: string;
  description?: string;
  maturity?: MaturityLevel;
  category?: 'forms' | 'pages' | 'email';
  github?: string;
  discussions?: string;
  figma?: string;
  research?: string;
  storybook?: string;
  cms_editable?: boolean;
  // Content sections
  intro?: string;
  usage?: UsageGuidelines;
  structure?: Structure;
  examples?: Example[];
  content_guidelines?: ListItem[];
  accessibility?: ListItem[];
  // Mermaid diagrams
  mermaid_diagrams?: MermaidDiagram[];
}

interface TemplatePageProps {
  children?: React.ReactNode;
  frontMatter?: TemplateFrontmatter;
}

/**
 * A wrapper component for template documentation pages.
 * Renders all content from frontmatter, providing a consistent structure.
 * Children (MDX body) are rendered for any additional custom content.
 *
 * Usage in MDX: <TemplatePage frontMatter={frontMatter} />
 */
export default function TemplatePage({ children, frontMatter }: TemplatePageProps): JSX.Element {
  const fm = frontMatter || {} as TemplateFrontmatter;

  const maturity = fm.maturity || 'use-with-caution';

  // Check if we have structured frontmatter content
  const hasStructuredContent = fm.intro || fm.usage || fm.structure ||
    fm.examples || fm.content_guidelines || fm.accessibility || fm.mermaid_diagrams;

  return (
    <div className={styles.templatePage}>
      <ComponentHeader
        maturity={maturity}
        platforms={['web']}
        github={fm.github}
        discussions={fm.discussions}
        figma={fm.figma}
        research={fm.research}
        storybook={fm.storybook}
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

            {/* Mermaid Diagrams */}
            {fm.mermaid_diagrams && fm.mermaid_diagrams.length > 0 && (
              <section className={styles.section}>
                <h2 id="diagrams">Diagrams</h2>
                <MermaidDiagrams diagrams={fm.mermaid_diagrams} />
              </section>
            )}

            {/* Usage Section */}
            {fm.usage && (
              <section className={styles.section}>
                <h2 id="usage">Usage</h2>

                {fm.usage.when_to_use && fm.usage.when_to_use.length > 0 && (
                  <>
                    <h3 id="when-to-use">When to use this template</h3>
                    <ul>
                      {fm.usage.when_to_use.map((item, i) => (
                        <li key={i}><MarkdownText>{item.value}</MarkdownText></li>
                      ))}
                    </ul>
                  </>
                )}

                {fm.usage.usability && fm.usage.usability.length > 0 && (
                  <>
                    <h3 id="usability">Usability guidance</h3>
                    <ul>
                      {fm.usage.usability.map((item, i) => (
                        <li key={i}><MarkdownText>{item.value}</MarkdownText></li>
                      ))}
                    </ul>
                  </>
                )}

                {fm.usage.when_not_to_use && fm.usage.when_not_to_use.length > 0 && (
                  <>
                    <h3 id="when-not-to-use">When to consider something else</h3>
                    <ul>
                      {fm.usage.when_not_to_use.map((item, i) => (
                        <li key={i}><MarkdownText>{item.value}</MarkdownText></li>
                      ))}
                    </ul>
                  </>
                )}
              </section>
            )}

            <hr />

            {/* Structure & Anatomy */}
            {fm.structure && (
              <section className={styles.section}>
                <h2 id="structure">Structure</h2>

                {fm.structure.intro && (
                  <p><MarkdownText>{fm.structure.intro}</MarkdownText></p>
                )}

                {fm.structure.sections && fm.structure.sections.length > 0 && (
                  <>
                    <h3 id="anatomy">Anatomy</h3>
                    <ol className={styles.structureList}>
                      {fm.structure.sections.map((section, i) => (
                        <li key={i}>
                          <strong>{section.title}</strong>
                          {section.description && (
                            <span> — <MarkdownText>{section.description}</MarkdownText></span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </>
                )}

                {fm.structure.components_used && fm.structure.components_used.length > 0 && (
                  <>
                    <h3 id="components-used">Components used in this template</h3>
                    <ul>
                      {fm.structure.components_used.map((comp, i) => (
                        <li key={i}>
                          <Link to={comp.url}>{comp.name}</Link>
                          {comp.description && <span> — {comp.description}</span>}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </section>
            )}

            <hr />

            {/* Examples */}
            {fm.examples && fm.examples.length > 0 && (
              <section className={styles.section}>
                <h2 id="examples">Examples</h2>
                <div className={styles.examplesGrid}>
                  {fm.examples.map((example, i) => (
                    <div key={i} className={styles.example}>
                      {example.title && <h3>{example.title}</h3>}
                      {example.description && <p>{example.description}</p>}
                      {example.image && (
                        <figure className={styles.exampleFigure}>
                          <img
                            src={example.image}
                            alt={example.alt || example.title || 'Template example'}
                            className={styles.exampleImage}
                          />
                        </figure>
                      )}
                      {example.url && (
                        <p>
                          <a href={example.url} target="_blank" rel="noopener noreferrer">
                            View live example
                          </a>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            <hr />

            {/* Content Guidelines */}
            {fm.content_guidelines && fm.content_guidelines.length > 0 && (
              <section className={styles.section}>
                <h2 id="content-guidelines">Content guidelines</h2>
                <ul>
                  {fm.content_guidelines.map((item, i) => (
                    <li key={i}><MarkdownText>{item.value}</MarkdownText></li>
                  ))}
                </ul>
              </section>
            )}

            <hr />

            {/* Accessibility Considerations */}
            {fm.accessibility && fm.accessibility.length > 0 && (
              <section className={styles.section}>
                <h2 id="accessibility">Accessibility considerations</h2>
                <ul>
                  {fm.accessibility.map((item, i) => (
                    <li key={i}><MarkdownText>{item.value}</MarkdownText></li>
                  ))}
                </ul>
              </section>
            )}

            {/* Any additional MDX body content */}
            {children}

            <hr />

            <FeedbackSection
              componentName={fm.title}
            />
          </>
        ) : (
          // Fall back to children-only mode for non-structured pages
          <>
            {children}
            <FeedbackSection
              componentName={fm.title}
            />
          </>
        )}
      </div>
    </div>
  );
}
