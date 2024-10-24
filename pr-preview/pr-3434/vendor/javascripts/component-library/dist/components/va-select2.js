import { proxyCustomElement, HTMLElement, createEvent, forceUpdate, h, Host, Fragment } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import './i18n-setup.js';
import './contacts.js';
import { g as getSlottedNodes } from './utils.js';
import { i as instance } from './i18next.js';

const vaSelectCss = ".usa-select,.usa-hint,.usa-input{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-select,.usa-input{border-width:1px;border-color:#565c65;border-style:solid;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;color:#1b1b1b;display:block;height:2.5rem;margin-top:0.5rem;max-width:30rem;padding:0.5rem;width:100%}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-icon{display:inline-block;fill:currentColor;height:1em;position:relative;width:1em}.usa-icon--size-3{height:1.5rem;width:1.5rem}.usa-icon--size-4{height:2rem;width:2rem}.usa-icon--size-5{height:2.5rem;width:2.5rem}.usa-icon--size-6{height:3rem;width:3rem}.usa-icon--size-7{height:3.5rem;width:3.5rem}.usa-icon--size-8{height:4rem;width:4rem}.usa-icon--size-9{height:4.5rem;width:4.5rem}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-input:disabled,.usa-input[aria-disabled=true]{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1;-webkit-text-fill-color:#454545}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:0;color:GrayText}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{color:GrayText}}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:2px solid GrayText}}.usa-input--error{border-width:0.25rem;border-color:#b50909;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-input--success{border-width:0.25rem;border-color:#00a91c;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-select{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:white;background-position:right 0.5rem center;background-size:1.25rem;padding-right:2rem}.usa-select::-ms-expand{display:none}.usa-select:-webkit-autofill{-webkit-appearance:menulist;appearance:menulist}.usa-select:-moz-focusring{color:transparent;text-shadow:0 0 0 black}.usa-select[multiple]{height:auto;background-image:none;padding-right:0}.usa-select option{overflow:hidden;text-overflow:ellipsis}.usa-select:disabled,.usa-select[aria-disabled=true]{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1}.usa-select:disabled:hover,.usa-select:disabled:active,.usa-select:disabled:focus,.usa-select:disabled.usa-focus,.usa-select[aria-disabled=true]:hover,.usa-select[aria-disabled=true]:active,.usa-select[aria-disabled=true]:focus,.usa-select[aria-disabled=true].usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-select:disabled,.usa-select[aria-disabled=true]{border:0;color:GrayText}.usa-select:disabled:hover,.usa-select:disabled:active,.usa-select:disabled:focus,.usa-select:disabled.usa-focus,.usa-select[aria-disabled=true]:hover,.usa-select[aria-disabled=true]:active,.usa-select[aria-disabled=true]:focus,.usa-select[aria-disabled=true].usa-focus{color:GrayText}}@media (forced-colors: active){.usa-select:disabled,.usa-select[aria-disabled=true]{border:2px solid GrayText}}@media (forced-colors: active){.usa-select{-webkit-appearance:listbox;-moz-appearance:listbox;appearance:listbox;background-image:none;padding-right:0}}:host .usa-input--2xs{max-width:5ex}:host .usa-input--xs{max-width:9ex}:host .usa-input--sm,:host .usa-input--small{max-width:13ex}:host .usa-input--md,:host .usa-input--medium{max-width:20ex}:host .usa-input--lg{max-width:30ex}:host .usa-input--xl{max-width:40ex}:host .usa-input--2xl{max-width:50ex}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}:host{display:block;font-family:var(--font-source-sans);color:var(--vads-color-base)}:host([inert]) select{border:0;background:none}.usa-select{margin-bottom:0}::slotted(option),::slotted(optgroup){display:none}";
const VaSelectStyle0 = vaSelectCss;

const VaSelect = /*@__PURE__*/ proxyCustomElement(class VaSelect extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.vaKeyDown = createEvent(this, "vaKeyDown", 7);
        this.vaSelect = createEvent(this, "vaSelect", 7);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        this.required = false;
        this.label = undefined;
        this.name = undefined;
        this.value = undefined;
        this.error = undefined;
        this.reflectInputError = false;
        this.invalid = false;
        this.enableAnalytics = false;
        this.hint = undefined;
        this.messageAriaDescribedby = undefined;
        this.width = undefined;
        this.showError = true;
        this.options = undefined;
    }
    connectedCallback() {
        instance.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        instance.off('languageChanged');
    }
    handleKeyDown() {
        this.vaKeyDown.emit();
    }
    handleChange(e) {
        const target = e.target;
        this.value = target.value;
        if (this.enableAnalytics) {
            const detail = {
                componentName: 'va-select',
                action: 'change',
                details: {
                    label: this.label,
                    selectLabel: this.value,
                },
            };
            this.componentLibraryAnalytics.emit(detail);
        }
        this.vaSelect.emit({ value: this.value });
    }
    /**
     * This function is for taking the slotted content and rendering
     * it inside the `<select>` element. Putting the `<slot>` directly
     * inside the `<select>` doesn't actually show the `<option>` elements,
     * but this solves that problem.
     */
    populateOptions() {
        const { value } = this;
        // Get all slotted nodes
        const allNodes = getSlottedNodes(this.el, null);
        // Filter nodes to include only <option> and <optgroup>
        // supports scenario where <option> may be slotted within <optgroup> as well as <option> directly
        // preserving the order of the nodes as they are slotted
        const nodes = allNodes.filter((node) => {
            const nodeName = node.nodeName.toLowerCase();
            return nodeName === 'option' || nodeName === 'optgroup';
        });
        this.options = nodes.map((node) => {
            if (node.nodeName.toLowerCase() === 'optgroup') {
                return (h("optgroup", { label: node.label }, Array.from(node.children).map((child) => {
                    return (h("option", { value: child.value, selected: value === child.value }, child.text));
                })));
            }
            else if (node.nodeName.toLowerCase() === 'option') {
                return (h("option", { value: node.value, selected: value === node.value }, node.textContent));
            }
        });
    }
    handleValueChange() {
        this.populateOptions();
    }
    render() {
        const { error, reflectInputError, invalid, label, required, name, hint, messageAriaDescribedby, width, showError, } = this;
        const errorID = 'input-error-message';
        const ariaDescribedbyIds = `${messageAriaDescribedby ? 'input-message' : ''} ${error ? errorID : ''} ${hint ? 'input-hint' : ''}`.trim() || null; // Null so we don't add the attribute if we have an empty string
        const labelClass = classnames({
            'usa-label': true,
            'usa-label--error': error,
        });
        const selectClass = classnames({
            'usa-select': true,
            'usa-input--error': error || reflectInputError,
            [`usa-input--${width}`]: width,
        });
        return (h(Host, { key: '39bab09123631e2478c690636b8f231f9e71be72' }, label && (h("label", { key: '57dc50adce29902a24c39c05e9d7db6e4a9c3bf3', htmlFor: "options", class: labelClass, part: "label" }, label, required && (h("span", { key: '7e0a65b91465459de3adef89dc83f6fdfb16d86b', class: "usa-label--required" }, " ", instance.t('required'))))), hint && (h("span", { key: 'ee8cf774f53afc15b51bb42e50c27928f13cbd94', class: "usa-hint", id: "input-hint" }, hint)), h("span", { key: '30ecf636ffebf2e9625f9691b4a92f20868a067c', id: errorID, role: "alert" }, showError && error && (h(Fragment, { key: '83f7d0c56bd4f672b16566d824b954eb237db616' }, h("span", { key: '4b06d590aa38bb2dff18c5c0b7dc9a0bcb79802e', class: "usa-sr-only" }, instance.t('error')), h("span", { key: '2bbe45696d4f1092e81800bc6cd0cb7ac2f9e5d9', class: "usa-error-message" }, error)))), h("slot", { key: '2480eceb19344e0663c82d1949a1185b8b506663', onSlotchange: () => this.populateOptions() }), h("select", { key: 'cc0220bd96db8d223501d43576030f434eb3fd54', class: selectClass, "aria-describedby": ariaDescribedbyIds, "aria-invalid": invalid || error ? 'true' : 'false', id: "options", name: name, required: required || null, onKeyDown: () => this.handleKeyDown(), onChange: e => this.handleChange(e), part: "select" }, h("option", { key: "0", value: "", selected: true }, instance.t('select')), this.options), messageAriaDescribedby && (h("span", { key: '76e168f3286173803213e22c002d7584da4d3a3c', id: "input-message", class: "usa-sr-only dd-privacy-hidden" }, messageAriaDescribedby))));
    }
    get el() { return this; }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
    static get style() { return VaSelectStyle0; }
}, [1, "va-select", {
        "required": [4],
        "label": [1],
        "name": [1],
        "value": [1537],
        "error": [1],
        "reflectInputError": [4, "reflect-input-error"],
        "invalid": [4],
        "enableAnalytics": [4, "enable-analytics"],
        "hint": [1],
        "messageAriaDescribedby": [1, "message-aria-describedby"],
        "width": [1],
        "showError": [4, "show-error"],
        "options": [32]
    }, undefined, {
        "value": ["handleValueChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-select"];
    components.forEach(tagName => { switch (tagName) {
        case "va-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaSelect);
            }
            break;
    } });
}

export { VaSelect as V, defineCustomElement as d };
