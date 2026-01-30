/**
 * Unit Tests for Imposter Component Instance Scanner
 *
 * Tests the core logic for scanning vets-website to find imposter component usage.
 * Following TDD: tests written first, implementation follows.
 */

describe('Imposter Instance Scanner', () => {
  // We'll require the module after it exists
  let scanner;

  beforeAll(() => {
    scanner = require('../scripts/collect-imposter-instances');
  });

  describe('isTestFile', () => {
    test('identifies .spec.js files as test files', () => {
      expect(scanner.isTestFile('src/applications/hca/tests/form.spec.js')).toBe(true);
    });

    test('identifies .test.js files as test files', () => {
      expect(scanner.isTestFile('src/applications/hca/form.test.js')).toBe(true);
    });

    test('identifies .unit.spec.jsx files as test files', () => {
      expect(scanner.isTestFile('src/components/Button.unit.spec.jsx')).toBe(true);
    });

    test('identifies files in /tests/ directory as test files', () => {
      expect(scanner.isTestFile('src/applications/hca/tests/helpers.js')).toBe(true);
    });

    test('identifies files in /__tests__/ directory as test files', () => {
      expect(scanner.isTestFile('src/applications/hca/__tests__/form.js')).toBe(true);
    });

    test('identifies Cypress test files as test files', () => {
      expect(scanner.isTestFile('src/applications/hca/form.cy.js')).toBe(true);
    });

    test('identifies e2e test files as test files', () => {
      expect(scanner.isTestFile('src/applications/hca/form.e2e.js')).toBe(true);
    });

    test('does not identify regular source files as test files', () => {
      expect(scanner.isTestFile('src/applications/hca/config/form.js')).toBe(false);
    });

    test('does not identify component files as test files', () => {
      expect(scanner.isTestFile('src/applications/hca/components/FormNavButtons.jsx')).toBe(false);
    });
  });

  describe('extractApplicationName', () => {
    test('extracts application name from standard path', () => {
      expect(scanner.extractApplicationName('src/applications/hca/config/form.js')).toBe('hca');
    });

    test('extracts application name from nested path', () => {
      expect(scanner.extractApplicationName('src/applications/appeals/995/components/Notice.jsx')).toBe('appeals');
    });

    test('extracts application name with hyphens', () => {
      expect(scanner.extractApplicationName('src/applications/financial-status-report/components/Form.jsx')).toBe('financial-status-report');
    });

    test('returns platform for platform files', () => {
      expect(scanner.extractApplicationName('src/platform/forms-system/src/js/widgets/RadioWidget.jsx')).toBe('platform');
    });

    test('returns other for unrecognized paths', () => {
      expect(scanner.extractApplicationName('some/other/path/file.js')).toBe('other');
    });
  });

  describe('usesWebComponentPatterns', () => {
    test('detects import from web-component-patterns', () => {
      const content = `
        import { radioUI } from 'platform/forms-system/src/js/web-component-patterns';
        export default { uiSchema: radioUI({ title: 'Test' }) };
      `;
      expect(scanner.usesWebComponentPatterns(content)).toBe(true);
    });

    test('detects import from web-component-fields', () => {
      const content = `
        import VaRadioField from 'platform/forms-system/src/js/web-component-fields/VaRadioField';
        export default VaRadioField;
      `;
      expect(scanner.usesWebComponentPatterns(content)).toBe(true);
    });

    test('detects ui:webComponentField usage', () => {
      const content = `
        export default {
          uiSchema: {
            field: {
              'ui:webComponentField': VaRadioField,
              'ui:widget': 'radio'
            }
          }
        };
      `;
      expect(scanner.usesWebComponentPatterns(content)).toBe(true);
    });

    test('returns false for files without web component patterns', () => {
      const content = `
        export default {
          uiSchema: {
            field: {
              'ui:widget': 'radio'
            }
          }
        };
      `;
      expect(scanner.usesWebComponentPatterns(content)).toBe(false);
    });

    test('returns false for files with only imposter imports', () => {
      const content = `
        import RadioWidget from '../widgets/RadioWidget';
        export default RadioWidget;
      `;
      expect(scanner.usesWebComponentPatterns(content)).toBe(false);
    });
  });

  describe('IMPOSTER_DEFINITIONS', () => {
    test('contains FormNavButtons definition for va-button-pair', () => {
      const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'FormNavButtons');
      expect(def).toBeDefined();
      expect(def.vaComponent).toBe('va-button-pair');
      expect(def.imposterPath).toContain('FormNavButtons.jsx');
    });

    test('contains RadioWidget definition for va-radio', () => {
      const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'RadioWidget');
      expect(def).toBeDefined();
      expect(def.vaComponent).toBe('va-radio');
      expect(def.detectionPatterns.length).toBeGreaterThan(0);
    });

    test('contains FileField definitions for va-file-input', () => {
      const defs = scanner.IMPOSTER_DEFINITIONS.filter(d => d.vaComponent === 'va-file-input');
      expect(defs.length).toBeGreaterThanOrEqual(2); // platform and appeals versions
    });

    test('all definitions have required fields', () => {
      scanner.IMPOSTER_DEFINITIONS.forEach(def => {
        expect(def.vaComponent).toBeDefined();
        expect(def.imposterName).toBeDefined();
        expect(def.imposterPath).toBeDefined();
        expect(def.detectionPatterns).toBeDefined();
        expect(Array.isArray(def.detectionPatterns)).toBe(true);
        expect(def.detectionPatterns.length).toBeGreaterThan(0);
      });
    });
  });

  describe('searchFileForImposters', () => {
    test('detects import of FormNavButtons', () => {
      const content = `
        import FormNavButtons from '../../platform/forms-system/src/js/components/FormNavButtons';
        export default function MyPage() {}
      `;
      const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'FormNavButtons');
      expect(scanner.searchFileForImposters(content, def)).toBeGreaterThan(0);
    });

    test('detects destructured import of FormNavButtons', () => {
      const content = `
        import { FormNavButtons } from '@department-of-veterans-affairs/platform-forms-system/FormNavButtons';
        export default function MyPage() {}
      `;
      const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'FormNavButtons');
      expect(scanner.searchFileForImposters(content, def)).toBeGreaterThan(0);
    });

    test('detects ui:widget radio configuration', () => {
      const content = `
        export default {
          schema: {},
          uiSchema: {
            someField: {
              'ui:widget': 'radio'
            }
          }
        };
      `;
      const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'RadioWidget');
      expect(scanner.searchFileForImposters(content, def)).toBeGreaterThan(0);
    });

    test('returns 0 for files without imposter patterns', () => {
      const content = `
        import { va-button-pair } from '@department-of-veterans-affairs/component-library';
        export default function MyPage() {
          return <va-button-pair />;
        }
      `;
      const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'FormNavButtons');
      expect(scanner.searchFileForImposters(content, def)).toBe(0);
    });

    test('counts multiple matches in the same file', () => {
      const content = `
        import FormNavButtons from '../../FormNavButtons';
        import { FormNavButtons as FNB } from '../FormNavButtons';
        export default function MyPage() {}
      `;
      const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'FormNavButtons');
      expect(scanner.searchFileForImposters(content, def)).toBeGreaterThan(1);
    });

    test('detects FileField import from platform', () => {
      const content = `
        import FileField from 'platform/forms-system/src/js/fields/FileField';
        export const uploadConfig = {};
      `;
      const def = scanner.IMPOSTER_DEFINITIONS.find(
        d => d.imposterName === 'FileField (platform)'
      );
      expect(scanner.searchFileForImposters(content, def)).toBeGreaterThan(0);
    });

    test('detects CheckboxWidget import', () => {
      const content = `
        import CheckboxWidget from '../widgets/CheckboxWidget';
        export default CheckboxWidget;
      `;
      const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'CheckboxWidget');
      expect(scanner.searchFileForImposters(content, def)).toBeGreaterThan(0);
    });

    test('detects SelectWidget import', () => {
      const content = `
        import SelectWidget from '../widgets/SelectWidget';
        export default SelectWidget;
      `;
      const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'SelectWidget');
      expect(scanner.searchFileForImposters(content, def)).toBeGreaterThan(0);
    });

    test('detects TextWidget import', () => {
      const content = `
        import TextWidget from '../widgets/TextWidget';
        export default TextWidget;
      `;
      const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'TextWidget');
      expect(scanner.searchFileForImposters(content, def)).toBeGreaterThan(0);
    });

    test('detects DateWidget import', () => {
      const content = `
        import DateWidget from '../widgets/DateWidget';
        export default DateWidget;
      `;
      const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'DateWidget');
      expect(scanner.searchFileForImposters(content, def)).toBeGreaterThan(0);
    });

    test('detects Attestation import', () => {
      const content = `
        import Attestation from 'platform/forms-system/src/js/components/Attestation';
        export default Attestation;
      `;
      const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'Attestation');
      expect(scanner.searchFileForImposters(content, def)).toBeGreaterThan(0);
    });

    test('detects IssueCard import', () => {
      const content = `
        import IssueCard from '../appeals/shared/components/IssueCard';
        export default IssueCard;
      `;
      const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'IssueCard');
      expect(scanner.searchFileForImposters(content, def)).toBeGreaterThan(0);
    });

    describe('excludeIfWebComponent behavior', () => {
      test('does NOT flag ui:widget radio in files using web component patterns', () => {
        const content = `
          import { radioUI } from 'platform/forms-system/src/js/web-component-patterns';
          export default {
            uiSchema: {
              someField: {
                'ui:widget': 'radio',
                'ui:webComponentField': VaRadioField
              }
            }
          };
        `;
        const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'RadioWidget');
        const fileUsesWebComponents = scanner.usesWebComponentPatterns(content);
        expect(fileUsesWebComponents).toBe(true);
        expect(scanner.searchFileForImposters(content, def, '', fileUsesWebComponents)).toBe(0);
      });

      test('DOES flag ui:widget radio in files NOT using web component patterns', () => {
        const content = `
          export default {
            uiSchema: {
              someField: {
                'ui:widget': 'radio'
              }
            }
          };
        `;
        const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'RadioWidget');
        const fileUsesWebComponents = scanner.usesWebComponentPatterns(content);
        expect(fileUsesWebComponents).toBe(false);
        expect(scanner.searchFileForImposters(content, def, '', fileUsesWebComponents)).toBeGreaterThan(0);
      });

      test('does NOT flag ui:widget date in files using web component patterns', () => {
        const content = `
          import { dateOfBirthUI } from 'platform/forms-system/src/js/web-component-patterns';
          export default {
            uiSchema: {
              dateOfBirth: {
                'ui:widget': 'date'
              }
            }
          };
        `;
        const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'DateWidget');
        const fileUsesWebComponents = scanner.usesWebComponentPatterns(content);
        expect(scanner.searchFileForImposters(content, def, '', fileUsesWebComponents)).toBe(0);
      });

      test('DOES flag ui:widget date in files NOT using web component patterns', () => {
        const content = `
          export default {
            uiSchema: {
              dateOfBirth: {
                'ui:title': 'Date of birth',
                'ui:widget': 'date'
              }
            }
          };
        `;
        const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'DateWidget');
        const fileUsesWebComponents = scanner.usesWebComponentPatterns(content);
        expect(scanner.searchFileForImposters(content, def, '', fileUsesWebComponents)).toBeGreaterThan(0);
      });

      test('still flags direct widget imports even in files using web component patterns', () => {
        // Direct imports are always imposters, regardless of other patterns in the file
        const content = `
          import { radioUI } from 'platform/forms-system/src/js/web-component-patterns';
          import RadioWidget from '../widgets/RadioWidget';
          export default RadioWidget;
        `;
        const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === 'RadioWidget');
        const fileUsesWebComponents = scanner.usesWebComponentPatterns(content);
        expect(fileUsesWebComponents).toBe(true);
        // The import pattern should still match (it's not excluded)
        expect(scanner.searchFileForImposters(content, def, '', fileUsesWebComponents)).toBeGreaterThan(0);
      });
    });
  });

  describe('IMPOSTER_DEFINITIONS completeness', () => {
    const expectedImposters = [
      { name: 'FormNavButtons', component: 'va-button-pair' },
      { name: 'FileField (platform)', component: 'va-file-input' },
      { name: 'FileField (appeals)', component: 'va-file-input' },
      { name: 'CheckboxWidget', component: 'va-checkbox' },
      { name: 'IssueCard', component: 'va-checkbox' },
      { name: 'RadioWidget', component: 'va-radio' },
      { name: 'TextWidget', component: 'va-text-input' },
      { name: 'SelectWidget', component: 'va-select' },
      { name: 'DateWidget', component: 'va-memorable-date' },
      { name: 'Attestation', component: 'va-statement-of-truth' },
      { name: 'MrBreadcrumbs', component: 'va-breadcrumbs' },
      { name: 'FryDeaEligibilityCards', component: 'va-card' }
    ];

    expectedImposters.forEach(({ name, component }) => {
      test(`contains ${name} definition for ${component}`, () => {
        const def = scanner.IMPOSTER_DEFINITIONS.find(d => d.imposterName === name);
        expect(def).toBeDefined();
        expect(def.vaComponent).toBe(component);
      });
    });
  });

  describe('aggregateResults', () => {
    test('aggregates instance counts by component', () => {
      const scanResults = [
        {
          imposterDef: { vaComponent: 'va-button-pair', imposterName: 'FormNavButtons', imposterPath: 'path' },
          instances: [
            { file: 'app1/file1.js', application: 'app1', matchCount: 2 },
            { file: 'app2/file2.js', application: 'app2', matchCount: 1 }
          ],
          totalCount: 3
        },
        {
          imposterDef: { vaComponent: 'va-radio', imposterName: 'RadioWidget', imposterPath: 'path' },
          instances: [
            { file: 'app1/file3.js', application: 'app1', matchCount: 5 }
          ],
          totalCount: 5
        }
      ];

      const result = scanner.aggregateResults(scanResults);

      expect(result.total_identified).toBe(8);
      expect(result.by_component).toHaveLength(2);
      expect(result.by_component[0].instance_count).toBe(5); // sorted by count desc
      expect(result.by_component[1].instance_count).toBe(3);
    });

    test('aggregates instance counts by application', () => {
      const scanResults = [
        {
          imposterDef: { vaComponent: 'va-button-pair', imposterName: 'FormNavButtons', imposterPath: 'path' },
          instances: [
            { file: 'app1/file1.js', application: 'app1', matchCount: 2 },
            { file: 'app2/file2.js', application: 'app2', matchCount: 1 }
          ],
          totalCount: 3
        },
        {
          imposterDef: { vaComponent: 'va-radio', imposterName: 'RadioWidget', imposterPath: 'path' },
          instances: [
            { file: 'app1/file3.js', application: 'app1', matchCount: 5 }
          ],
          totalCount: 5
        }
      ];

      const result = scanner.aggregateResults(scanResults);

      expect(result.by_application).toBeDefined();
      expect(result.by_application.length).toBe(2);

      const app1 = result.by_application.find(a => a.application === 'app1');
      expect(app1.instance_count).toBe(7); // 2 + 5

      const app2 = result.by_application.find(a => a.application === 'app2');
      expect(app2.instance_count).toBe(1);
    });

    test('includes scan metadata in results', () => {
      const scanResults = [];
      const result = scanner.aggregateResults(scanResults, 'local');

      expect(result.last_scan_date).toBeDefined();
      expect(result.scan_source).toBe('local');
    });

    test('handles empty scan results', () => {
      const result = scanner.aggregateResults([]);

      expect(result.total_identified).toBe(0);
      expect(result.by_component).toHaveLength(0);
      expect(result.by_application).toHaveLength(0);
    });
  });
});
