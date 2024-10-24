import { AxePuppeteer } from "@axe-core/puppeteer";
const ignoredDefaults = [
    'document-title',
    'html-has-lang',
    'page-has-heading-one',
    'landmark-one-main',
    'region',
];
const buildAxeErrorOutput = violations => violations
    .map(v => `[${v.impact}] ${v.help}
Id: ${v.id}
See ${v.helpUrl}
${v.nodes.reduce((str, { html, target }) => [str, html, ...target].join('\n\n'), '')}`)
    .join('\n') || null;
export async function axeCheck(page, additionalIgnored = []) {
    const ignoredRules = [...ignoredDefaults, ...additionalIgnored];
    const results = await new AxePuppeteer(page)
        .disableRules(ignoredRules)
        .analyze();
    const axeError = buildAxeErrorOutput(results.violations);
    expect(axeError).toBe(null);
}
