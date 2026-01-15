import React from 'react';
import styles from './styles.module.css';

interface Property {
  /** Property/attribute name */
  name: string;
  /** Data type */
  type: string;
  /** Default value (optional) */
  default?: string;
  /** Description of the property */
  description: string;
  /** Whether the property is required */
  required?: boolean;
}

interface Event {
  /** Event name */
  name: string;
  /** Description of when the event fires */
  description: string;
  /** Event detail type */
  detail?: string;
}

interface PropsTableProps {
  /** List of properties/attributes */
  properties?: Property[];
  /** List of events */
  events?: Event[];
  /** Table title */
  title?: string;
}

export default function PropsTable({
  properties,
  events,
  title,
}: PropsTableProps): JSX.Element {
  return (
    <div className={styles.container}>
      {properties && properties.length > 0 && (
        <>
          {title && <h4 className={styles.title}>{title}</h4>}
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((prop) => (
                  <tr key={prop.name}>
                    <td>
                      <code className={styles.propName}>{prop.name}</code>
                      {prop.required && (
                        <span className={styles.required}>Required</span>
                      )}
                    </td>
                    <td>
                      <code className={styles.type}>{prop.type}</code>
                    </td>
                    <td>
                      {prop.default ? (
                        <code className={styles.default}>{prop.default}</code>
                      ) : (
                        <span className={styles.none}>—</span>
                      )}
                    </td>
                    <td>{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {events && events.length > 0 && (
        <>
          <h4 className={styles.title}>Events</h4>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Description</th>
                  {events.some((e) => e.detail) && <th>Detail</th>}
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.name}>
                    <td>
                      <code className={styles.propName}>{event.name}</code>
                    </td>
                    <td>{event.description}</td>
                    {events.some((e) => e.detail) && (
                      <td>
                        {event.detail ? (
                          <code className={styles.type}>{event.detail}</code>
                        ) : (
                          <span className={styles.none}>—</span>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
