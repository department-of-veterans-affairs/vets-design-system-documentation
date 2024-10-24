import { Build, proxyCustomElement, HTMLElement, createEvent, forceUpdate, h, Host, Fragment } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import './i18n-setup.js';
import './contacts.js';
import { i as instance } from './i18next.js';

const vaCheckboxCss = "@charset \"UTF-8\";.usa-hint,.usa-checkbox__label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-icon{display:inline-block;fill:currentColor;height:1em;position:relative;width:1em}.usa-icon--size-3{height:1.5rem;width:1.5rem}.usa-icon--size-4{height:2rem;width:2rem}.usa-icon--size-5{height:2.5rem;width:2.5rem}.usa-icon--size-6{height:3rem;width:3rem}.usa-icon--size-7{height:3.5rem;width:3.5rem}.usa-icon--size-8{height:4rem;width:4rem}.usa-icon--size-9{height:4.5rem;width:4.5rem}.usa-checkbox{background:white}.usa-checkbox__label{color:#1b1b1b}.usa-checkbox__label::before{background:white;-webkit-box-shadow:0 0 0 2px #1b1b1b;box-shadow:0 0 0 2px #1b1b1b}@media (forced-colors: active){.usa-checkbox__label::before{outline:2px solid transparent;outline-offset:2px}}.usa-checkbox__input:checked+[class*=__label]::before{background-color:#005ea2;-webkit-box-shadow:0 0 0 2px #005ea2;box-shadow:0 0 0 2px #005ea2}.usa-checkbox__input:disabled+[class*=__label],.usa-checkbox__input[aria-disabled=true]+[class*=__label]{color:#757575;cursor:not-allowed}@media (forced-colors: active){.usa-checkbox__input:disabled+[class*=__label],.usa-checkbox__input[aria-disabled=true]+[class*=__label]{color:GrayText}}.usa-checkbox__input:disabled+[class*=__label]::before,.usa-checkbox__input[aria-disabled=true]+[class*=__label]::before{background-color:white;-webkit-box-shadow:0 0 0 2px #757575;box-shadow:0 0 0 2px #757575}.usa-checkbox__input--tile+[class*=__label]{background-color:white;border:2px solid #c9c9c9;color:#1b1b1b}.usa-checkbox__input--tile:checked+[class*=__label]{background-color:rgba(0, 94, 162, 0.1);border-color:#005ea2}@media (forced-colors: active){.usa-checkbox__input--tile:checked+[class*=__label]{border:ButtonText solid 0.25rem}}.usa-checkbox__input--tile:disabled+[class*=__label],.usa-checkbox__input--tile[aria-disabled=true]+[class*=__label]{border-color:#e6e6e6}.usa-checkbox__input--tile:disabled:checked+[class*=__label],.usa-checkbox__input--tile:disabled:indeterminate+[class*=__label],.usa-checkbox__input--tile:disabled[data-indeterminate]+[class*=__label],.usa-checkbox__input--tile[aria-disabled=true]:checked+[class*=__label],.usa-checkbox__input--tile[aria-disabled=true]:indeterminate+[class*=__label],.usa-checkbox__input--tile[aria-disabled=true][data-indeterminate]+[class*=__label]{background-color:white}.usa-checkbox__input:indeterminate+[class*=__label]::before,.usa-checkbox__input[data-indeterminate]+[class*=__label]::before{background-image:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 26.3.1%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 viewBox%3D%220 0 64 64%22 style%3D%22enable-background%3Anew 0 0 64 64%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E%09.st0%7Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cpath class%3D%22st0%22 d%3D%22M2.9%2C35.9c0%2C1.1%2C0.4%2C2%2C1.2%2C2.8c0.8%2C0.8%2C1.7%2C1.2%2C2.8%2C1.2h7.9h42.3c1.1%2C0%2C2-0.4%2C2.8-1.2s1.2-1.7%2C1.2-2.8l0%2C0V28%09c0-1.1-0.4-2-1.2-2.8S58.2%2C24%2C57.1%2C24H6.9c-1.1%2C0-2%2C0.4-2.8%2C1.2S2.9%2C26.9%2C2.9%2C28V35.9z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 26.3.1%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 viewBox%3D%220 0 64 64%22 style%3D%22enable-background%3Anew 0 0 64 64%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E%09.st0%7Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cpath class%3D%22st0%22 d%3D%22M2.9%2C35.9c0%2C1.1%2C0.4%2C2%2C1.2%2C2.8c0.8%2C0.8%2C1.7%2C1.2%2C2.8%2C1.2h7.9h42.3c1.1%2C0%2C2-0.4%2C2.8-1.2s1.2-1.7%2C1.2-2.8l0%2C0V28%09c0-1.1-0.4-2-1.2-2.8S58.2%2C24%2C57.1%2C24H6.9c-1.1%2C0-2%2C0.4-2.8%2C1.2S2.9%2C26.9%2C2.9%2C28V35.9z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat;background-color:#005ea2;-webkit-box-shadow:0 0 0 2px #005ea2;box-shadow:0 0 0 2px #005ea2;background-position:center center;background-size:0.75rem auto}@media (forced-colors: active){.usa-checkbox__input:indeterminate+[class*=__label]::before,.usa-checkbox__input[data-indeterminate]+[class*=__label]::before{background-image:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 28.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 viewBox%3D%220 0 64 64%22 style%3D%22enable-background%3Anew 0 0 64 64%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E%09.st0%7Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%3Cpath class%3D%22st0%22 d%3D%22M2.9%2C35.9c0%2C1.1%2C0.4%2C2%2C1.2%2C2.8s1.7%2C1.2%2C2.8%2C1.2h7.9h42.3c1.1%2C0%2C2-0.4%2C2.8-1.2s1.2-1.7%2C1.2-2.8l0%2C0V28%09c0-1.1-0.4-2-1.2-2.8S58.2%2C24%2C57.1%2C24H6.9c-1.1%2C0-2%2C0.4-2.8%2C1.2S2.9%2C26.9%2C2.9%2C28V35.9z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 28.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3Csvg version%3D%221.1%22 id%3D%22Layer_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 viewBox%3D%220 0 64 64%22 style%3D%22enable-background%3Anew 0 0 64 64%3B%22 xml%3Aspace%3D%22preserve%22%3E%3Cstyle type%3D%22text%2Fcss%22%3E%09.st0%7Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%3Cpath class%3D%22st0%22 d%3D%22M2.9%2C35.9c0%2C1.1%2C0.4%2C2%2C1.2%2C2.8s1.7%2C1.2%2C2.8%2C1.2h7.9h42.3c1.1%2C0%2C2-0.4%2C2.8-1.2s1.2-1.7%2C1.2-2.8l0%2C0V28%09c0-1.1-0.4-2-1.2-2.8S58.2%2C24%2C57.1%2C24H6.9c-1.1%2C0-2%2C0.4-2.8%2C1.2S2.9%2C26.9%2C2.9%2C28V35.9z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat;background-color:SelectedItem}}.usa-checkbox__input:indeterminate:disabled+[class*=__label]::before,.usa-checkbox__input:indeterminate[aria-disabled=true]+[class*=__label]::before,.usa-checkbox__input[data-indeterminate]:disabled+[class*=__label]::before,.usa-checkbox__input[data-indeterminate][aria-disabled=true]+[class*=__label]::before{-webkit-box-shadow:0 0 0 2px #757575;box-shadow:0 0 0 2px #757575}.usa-checkbox__input:indeterminate:disabled+[class*=__label],.usa-checkbox__input:indeterminate[aria-disabled=true]+[class*=__label],.usa-checkbox__input[data-indeterminate]:disabled+[class*=__label],.usa-checkbox__input[data-indeterminate][aria-disabled=true]+[class*=__label]{border-color:#e6e6e6}.usa-checkbox__input--tile:indeterminate+[class*=__label],.usa-checkbox__input--tile[data-indeterminate]+[class*=__label]{background-color:rgba(0, 94, 162, 0.1);border-color:#005ea2}@media (forced-colors: active){.usa-checkbox__input--tile:indeterminate+[class*=__label],.usa-checkbox__input--tile[data-indeterminate]+[class*=__label]{border:ButtonText solid 0.25rem}}.usa-checkbox__input:checked+[class*=__label]::before,.usa-checkbox__input:checked:disabled+[class*=__label]::before,.usa-checkbox__input:checked[aria-disabled=true]+[class*=__label]::before{background-image:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2265%22 height%3D%2250%22 viewBox%3D%220 0 65 50%22%3E%3Ctitle%3Ecorrect8%3C%2Ftitle%3E%3Cpath fill%3D%22%23FFF%22 fill-rule%3D%22evenodd%22 d%3D%22M63.268 7.063l-5.616-5.61C56.882.685 55.946.3 54.845.3s-2.038.385-2.808 1.155L24.951 28.552 12.81 16.385c-.77-.77-1.707-1.155-2.808-1.155-1.1 0-2.037.385-2.807 1.154l-5.616 5.61C.81 22.764.425 23.7.425 24.8s.385 2.035 1.155 2.805l14.947 14.93 5.616 5.61c.77.77 1.706 1.154 2.807 1.154s2.038-.384 2.808-1.154l5.616-5.61 29.894-29.86c.77-.77 1.157-1.707 1.157-2.805 0-1.101-.385-2.036-1.156-2.805l-.001-.002z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2265%22 height%3D%2250%22 viewBox%3D%220 0 65 50%22%3E%3Ctitle%3Ecorrect8%3C%2Ftitle%3E%3Cpath fill%3D%22%23FFF%22 fill-rule%3D%22evenodd%22 d%3D%22M63.268 7.063l-5.616-5.61C56.882.685 55.946.3 54.845.3s-2.038.385-2.808 1.155L24.951 28.552 12.81 16.385c-.77-.77-1.707-1.155-2.808-1.155-1.1 0-2.037.385-2.807 1.154l-5.616 5.61C.81 22.764.425 23.7.425 24.8s.385 2.035 1.155 2.805l14.947 14.93 5.616 5.61c.77.77 1.706 1.154 2.807 1.154s2.038-.384 2.808-1.154l5.616-5.61 29.894-29.86c.77-.77 1.157-1.707 1.157-2.805 0-1.101-.385-2.036-1.156-2.805l-.001-.002z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat}@media (forced-colors: active){.usa-checkbox__input:checked+[class*=__label]::before,.usa-checkbox__input:checked:disabled+[class*=__label]::before,.usa-checkbox__input:checked[aria-disabled=true]+[class*=__label]::before{background-image:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2265%22 height%3D%2250%22 viewBox%3D%220 0 65 50%22%3E%3Ctitle%3Ecorrect8-alt%3C%2Ftitle%3E%3Cpath fill%3D%22%23171717%22 fill-rule%3D%22evenodd%22 d%3D%22M63.268 7.063l-5.616-5.61C56.882.685 55.946.3 54.845.3s-2.038.385-2.808 1.155L24.951 28.552 12.81 16.385c-.77-.77-1.707-1.155-2.808-1.155-1.1 0-2.037.385-2.807 1.154l-5.616 5.61C.81 22.764.425 23.7.425 24.8s.385 2.035 1.155 2.805l14.947 14.93 5.616 5.61c.77.77 1.706 1.154 2.807 1.154s2.038-.384 2.808-1.154l5.616-5.61 29.894-29.86c.77-.77 1.157-1.707 1.157-2.805 0-1.101-.385-2.036-1.156-2.805l-.001-.002z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2265%22 height%3D%2250%22 viewBox%3D%220 0 65 50%22%3E%3Ctitle%3Ecorrect8-alt%3C%2Ftitle%3E%3Cpath fill%3D%22%23171717%22 fill-rule%3D%22evenodd%22 d%3D%22M63.268 7.063l-5.616-5.61C56.882.685 55.946.3 54.845.3s-2.038.385-2.808 1.155L24.951 28.552 12.81 16.385c-.77-.77-1.707-1.155-2.808-1.155-1.1 0-2.037.385-2.807 1.154l-5.616 5.61C.81 22.764.425 23.7.425 24.8s.385 2.035 1.155 2.805l14.947 14.93 5.616 5.61c.77.77 1.706 1.154 2.807 1.154s2.038-.384 2.808-1.154l5.616-5.61 29.894-29.86c.77-.77 1.157-1.707 1.157-2.805 0-1.101-.385-2.036-1.156-2.805l-.001-.002z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat}}.usa-checkbox__input:checked:disabled+[class*=__label]::before,.usa-checkbox__input:checked[aria-disabled=true]+[class*=__label]::before,.usa-checkbox__input:indeterminate:disabled+[class*=__label]::before,.usa-checkbox__input:indeterminate[aria-disabled=true]+[class*=__label]::before,.usa-checkbox__input[data-indeterminate]:disabled+[class*=__label]::before,.usa-checkbox__input[data-indeterminate][aria-disabled=true]+[class*=__label]::before{background-color:#757575}@media (forced-colors: active){.usa-checkbox__input:checked:disabled+[class*=__label]::before,.usa-checkbox__input:checked[aria-disabled=true]+[class*=__label]::before,.usa-checkbox__input:indeterminate:disabled+[class*=__label]::before,.usa-checkbox__input:indeterminate[aria-disabled=true]+[class*=__label]::before,.usa-checkbox__input[data-indeterminate]:disabled+[class*=__label]::before,.usa-checkbox__input[data-indeterminate][aria-disabled=true]+[class*=__label]::before{background-color:GrayText}}.usa-checkbox__input{position:absolute;left:-999em;right:auto}.usa-checkbox__input:focus+[class*=__label]::before{outline:0.25rem solid #2491ff;outline-offset:0.25rem}.usa-checkbox__input--tile+[class*=__label]{border-radius:0.25rem;margin-top:0.5rem;padding:0.75rem 1rem 0.75rem 2.5rem}.usa-checkbox__input--tile+[class*=__label]::before{left:0.5rem}.usa-checkbox__input:checked+[class*=__label]::before{background-position:center center;background-size:0.75rem auto}@media print{.usa-checkbox__input:checked+[class*=__label]::before{background-image:none;background-color:white;content:\"✔\";text-align:center}}@media (forced-colors: active){.usa-checkbox__input:checked+[class*=__label]::before{background-color:SelectedItem}}.usa-checkbox__label{cursor:pointer;display:inherit;font-weight:normal;margin-top:0.75rem;padding-left:2rem;position:relative}.usa-checkbox__label::before{content:\" \";display:block;left:0;margin-left:2px;margin-top:0.064rem;position:absolute}.usa-checkbox__label::before{height:1.25rem;width:1.25rem;border-radius:2px}.usa-checkbox__label-description{display:block;font-size:0.93rem;margin-top:0.5rem}.usa-legend{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-legend--large{font-size:2.13rem;font-weight:700;margin-top:1rem}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}:host{display:block;max-width:480px}.usa-checkbox{background:transparent}.usa-checkbox__input:focus+[class*=__label]::before{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:4px}";
const VaCheckboxStyle0 = vaCheckboxCss;

if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    instance.init({ lng: 'cimode' });
}
const VaCheckbox = /*@__PURE__*/ proxyCustomElement(class VaCheckbox extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.vaChange = createEvent(this, "vaChange", 7);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        this.fireAnalyticsEvent = () => {
            var _a;
            // Either the description prop or the text content of the description slots
            const description = this.description ||
                [
                    // This won't work in IE
                    ...(_a = this.el.shadowRoot.querySelector('slot[name="description"]')) === null || _a === void 0 ? void 0 : _a.assignedNodes(),
                    // For IE
                    ...Array.from(this.el.shadowRoot.querySelectorAll('[slot="description"]')),
                ]
                    .map(n => n.textContent)
                    .join(' ');
            this.componentLibraryAnalytics.emit({
                componentName: 'va-checkbox',
                action: 'change',
                details: {
                    label: this.label,
                    description,
                    required: this.required,
                    checked: this.checked,
                },
            });
        };
        this.handleChange = (e) => {
            this.checked = e.target.checked;
            this.vaChange.emit({ checked: this.checked });
            if (this.enableAnalytics)
                this.fireAnalyticsEvent();
        };
        this.label = undefined;
        this.error = undefined;
        this.description = undefined;
        this.required = false;
        this.enableAnalytics = false;
        this.checked = false;
        this.hint = undefined;
        this.tile = false;
        this.checkboxDescription = undefined;
        this.disabled = false;
        this.messageAriaDescribedby = undefined;
        this.name = undefined;
    }
    connectedCallback() {
        instance.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        instance.off('languageChanged');
    }
    render() {
        const { error, label, required, description, checked, hint, tile, checkboxDescription, disabled, messageAriaDescribedby, name } = this;
        const hasDescriptionSlot = !description &&
            this.el.querySelectorAll('[slot="description"]:not(:empty)').length > 0;
        const inputClass = classnames({
            'usa-checkbox__input': true,
            'usa-checkbox__input--tile': tile,
        });
        const descriptionClass = classnames({
            'usa-legend': true,
            'usa-label--error': error
        });
        const ariaDescribedbyIds = [
            messageAriaDescribedby ? 'input-message' : '',
            error ? 'checkbox-error-message' : '',
            description || hasDescriptionSlot ? 'description' : '',
            // Return null so we don't add the attribute if we have an empty string
        ].filter(Boolean).join(' ').trim() || null;
        const ariaChecked = checked ? 'true' : 'false';
        return (h(Host, { key: '364b94d59862392167ad6043fe45ce815e2551c5' }, description && (h("legend", { key: '8ad43df1eec41bc3929f843fdc1f5f1bda3ce700', id: "description", class: descriptionClass }, description)), hasDescriptionSlot && (h("div", { key: 'cf1014923c6060ff817a2baddadaf7551072b3a0', id: "description" }, h("slot", { key: '2e1eb84c1c38045c01b5b8ac92ade7917556ea7e', name: "description" }))), hint && h("span", { key: 'c74f9ffba770f92ec6ca483379e467870a1021f4', class: "usa-hint" }, hint), h("span", { key: 'ba80ae71de665f65df50dbb85ec1a1602e1f8808', id: "checkbox-error-message", role: "alert" }, error && (h(Fragment, { key: 'd770e23df0bc240c804e232c427c803a67bd1614' }, h("span", { key: 'c7f9d21b35f3be7822b6f823510f8dce5b70b9be', class: "usa-sr-only" }, instance.t('error')), h("span", { key: 'e463bbad028ec6562528a15cd15f1aad8ec3cde8', class: "usa-error-message" }, error)))), h("div", { key: '37b238e24b9f865e2a4d388e8fdb1fc465a7e13c', class: "usa-checkbox", part: "checkbox" }, h("input", { key: '4e3951ed1c99760f983f53e7b461a9b33cd17118', class: inputClass, type: "checkbox", name: name || null, id: "checkbox-element", checked: checked, "aria-describedby": ariaDescribedbyIds, "aria-invalid": error ? 'true' : 'false', disabled: disabled, onChange: this.handleChange }), h("label", { key: 'e8d351fc9219361086a3a31d931ea91755ff4a9b', htmlFor: "checkbox-element", class: "usa-checkbox__label", part: "label", role: "checkbox", "aria-checked": ariaChecked }, label, "\u00A0", required && (h("span", { key: '00a90f788a9318b0142c3b15f6e3dba7a7fcf864', class: "usa-label--required" }, instance.t('required'))), checkboxDescription && (h("span", { key: '4737c195cf6eed19b2203572249b978b5f625e5b', class: "usa-checkbox__label-description", part: "description" }, checkboxDescription))), messageAriaDescribedby && (h("span", { key: '2d431290e1bf1e9ad1e2a5641cba6d83fa6bcc4c', id: "input-message", class: "usa-sr-only dd-privacy-hidden" }, messageAriaDescribedby)))));
    }
    get el() { return this; }
    static get style() { return VaCheckboxStyle0; }
}, [1, "va-checkbox", {
        "label": [1],
        "error": [513],
        "description": [1],
        "required": [4],
        "enableAnalytics": [4, "enable-analytics"],
        "checked": [1028],
        "hint": [1],
        "tile": [4],
        "checkboxDescription": [1, "checkbox-description"],
        "disabled": [4],
        "messageAriaDescribedby": [1, "message-aria-describedby"],
        "name": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "va-checkbox":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaCheckbox);
            }
            break;
    } });
}

export { VaCheckbox as V, defineCustomElement as d };
