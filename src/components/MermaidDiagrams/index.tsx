import React from 'react';
import Mermaid from '@theme/Mermaid';
import styles from './styles.module.css';

export interface MermaidDiagram {
  title?: string;
  description?: string;
  code: string;
}

interface MermaidDiagramsProps {
  diagrams: MermaidDiagram[];
}

/**
 * Renders a list of Mermaid diagrams from frontmatter data.
 * Uses Docusaurus's built-in Mermaid theme component for rendering.
 */
export default function MermaidDiagrams({ diagrams }: MermaidDiagramsProps): JSX.Element | null {
  if (!diagrams || diagrams.length === 0) {
    return null;
  }

  return (
    <div className={styles.mermaidDiagrams}>
      {diagrams.map((diagram, index) => (
        <div key={index} className={styles.diagramContainer}>
          {diagram.title && <h3>{diagram.title}</h3>}
          {diagram.description && <p className={styles.description}>{diagram.description}</p>}
          <div className={styles.diagram}>
            <Mermaid value={diagram.code} />
          </div>
        </div>
      ))}
    </div>
  );
}
