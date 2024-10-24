/* eslint-disable i18next/no-literal-string */
/**
 * Code needed to trap focus within a modal. Modified from
 * https://github.com/ionic-team/ionic-framework/blob/main/core/src/utils/overlays.ts#L85
 * A more extensive list can be found at
 * https://github.com/KittyGiraudel/focusable-selectors/blob/main/index.js
 */
export const focusableQueryString = [
    'a[href]:not([tabindex^="-"])',
    '.hydrated:not([tabindex^="-"]):not(va-radio-option)', // This was selecting the component wrapper for va-radio-option, we only want to select the input
    '[tabindex]:not([tabindex^="-"])',
    'input:not([type=hidden]):not([tabindex^="-"])',
    'textarea:not([tabindex^="-"])',
    'button:not([tabindex^="-"])',
    'select:not([tabindex^="-"])',
].join(',');
