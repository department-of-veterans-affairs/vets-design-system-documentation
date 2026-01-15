import React from 'react';
import Link from '@docusaurus/Link';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@theme/CodeBlock';
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

// Custom table component for ReactMarkdown to use proper styling
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

// Full markdown components including tables
const markdownComponents = {
  a: MarkdownLink,
  table: MarkdownTable,
};

type MaturityLevel = 'deployed' | 'use-with-caution' | 'dont-use' | 'best-practice' | 'deprecated';

interface ListItem {
  value: string;
}

interface Example {
  title: string;
  description?: string;
  image?: string;
  alt?: string;
}

interface RelatedComponent {
  name: string;
  url: string;
}

interface ContentFieldSpec {
  field: string;
  hint_text?: string;
  error_message?: string;
}

interface UsageGuidelines {
  when_to_use?: ListItem[];
  when_not_to_use?: ListItem[];
  design_principles?: ListItem[];
}

interface HowToBuild {
  intro?: string;
  steps?: ListItem[];
  components_used?: RelatedComponent[];
}

interface PatternFrontmatter {
  title: string;
  description?: string;
  maturity?: MaturityLevel;
  category?: 'ask-users-for' | 'help-users-to' | 'deprecated';
  github?: string;
  discussions?: string;
  figma?: string;
  research?: string;
  code?: string;
  cms_editable?: boolean;
  // Content sections
  intro?: string;
  usage?: UsageGuidelines;
  examples?: Example[];
  how_to_build?: HowToBuild;
  code_usage?: string;
  content_considerations?: ListItem[];
  content_specs?: ContentFieldSpec[];
  accessibility?: ListItem[];
  // Mermaid diagrams
  mermaid_diagrams?: MermaidDiagram[];
}

interface PatternPageProps {
  children?: React.ReactNode;
  frontMatter?: PatternFrontmatter;
}

/**
 * A wrapper component for pattern documentation pages.
 * Renders all content from frontmatter, providing a consistent structure.
 * Children (MDX body) are rendered for any additional custom content.
 *
 * Usage in MDX: <PatternPage frontMatter={frontMatter} />
 */
export default function PatternPage({ children, frontMatter }: PatternPageProps): JSX.Element {
  const fm = frontMatter || {} as PatternFrontmatter;

  const maturity = fm.maturity || 'use-with-caution';

  // Check if we have structured frontmatter content
  const hasStructuredContent = fm.intro || fm.usage || fm.examples ||
    fm.how_to_build || fm.code_usage || fm.content_considerations ||
    fm.content_specs || fm.accessibility || fm.mermaid_diagrams;

  return (
    <div className={styles.patternPage}>
      <ComponentHeader
        maturity={maturity}
        platforms={['web']}
        github={fm.github}
        discussions={fm.discussions}
        figma={fm.figma}
        research={fm.research}
        storybook={fm.code}
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
                    <h3 id="when-to-use">When to use this pattern</h3>
                    <ul>
                      {fm.usage.when_to_use.map((item, i) => (
                        <li key={i}><MarkdownText>{item.value}</MarkdownText></li>
                      ))}
                    </ul>
                  </>
                )}

                {fm.usage.design_principles && fm.usage.design_principles.length > 0 && (
                  <>
                    <h3 id="design-principles">Design principles</h3>
                    <ul>
                      {fm.usage.design_principles.map((item, i) => (
                        <li key={i}><MarkdownText>{item.value}</MarkdownText></li>
                      ))}
                    </ul>
                  </>
                )}

                {fm.usage.when_not_to_use && fm.usage.when_not_to_use.length > 0 && (
                  <>
                    <h3 id="when-not-to-use">When not to use this pattern</h3>
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

            {/* Examples */}
            {fm.examples && fm.examples.length > 0 && (
              <section className={styles.section}>
                <h2 id="examples">Examples</h2>
                {fm.examples.map((example, i) => (
                  <div key={i} className={styles.example}>
                    {example.title && <h3>{example.title}</h3>}
                    {example.description && <p>{example.description}</p>}
                    {example.image && (
                      <figure className={styles.exampleFigure}>
                        <img
                          src={example.image}
                          alt={example.alt || example.title || 'Pattern example'}
                          className={styles.exampleImage}
                        />
                      </figure>
                    )}
                  </div>
                ))}
              </section>
            )}

            <hr />

            {/* How to Design and Build */}
            {fm.how_to_build && (
              <section className={styles.section}>
                <h2 id="how-to-design-and-build">How to design and build</h2>

                {fm.how_to_build.intro && (
                  <p><MarkdownText>{fm.how_to_build.intro}</MarkdownText></p>
                )}

                {fm.how_to_build.steps && fm.how_to_build.steps.length > 0 && (
                  <>
                    <h3 id="how-this-pattern-works">How this pattern works</h3>
                    <ol>
                      {fm.how_to_build.steps.map((step, i) => (
                        <li key={i}><MarkdownText>{step.value}</MarkdownText></li>
                      ))}
                    </ol>
                  </>
                )}

                {fm.how_to_build.components_used && fm.how_to_build.components_used.length > 0 && (
                  <>
                    <h3 id="components-used">Components used in this pattern</h3>
                    <ul>
                      {fm.how_to_build.components_used.map((comp, i) => (
                        <li key={i}>
                          <Link to={comp.url}>{comp.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </section>
            )}

            <hr />

            {/* Code Usage */}
            {fm.code_usage && (
              <section className={styles.section}>
                <h2 id="code-usage">Code usage</h2>
                <CodeBlock language="html" title="Usage">
                  {fm.code_usage.trim()}
                </CodeBlock>
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

            {/* Content Specifications Table */}
            {fm.content_specs && fm.content_specs.length > 0 && (
              <section className={styles.section}>
                {!fm.content_considerations && <h2 id="content-considerations">Content considerations</h2>}
                <table className={styles.contentSpecsTable}>
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Hint text</th>
                      <th>Error message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fm.content_specs.map((spec, i) => (
                      <tr key={i}>
                        <td>{spec.field}</td>
                        <td>{spec.hint_text || '—'}</td>
                        <td>{spec.error_message || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
