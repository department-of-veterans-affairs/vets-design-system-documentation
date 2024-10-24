import { r as registerInstance, c as createEvent, f as forceUpdate, h, F as Fragment, H as Host, g as getElement } from './index-f0e1e12e.js';
import { c as classnames } from './index-6d7ecf98.js';
import './contacts-c39c7b78.js';
import { g as getSlottedNodes, b as getCharacterMessage, a as getHeaderLevel } from './utils-38f05f96.js';
import { i as instance } from './i18next-858cee77.js';

const vaSelectCss = ".usa-select,.usa-hint,.usa-input{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-select,.usa-input{border-width:1px;border-color:#565c65;border-style:solid;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;color:#1b1b1b;display:block;height:2.5rem;margin-top:0.5rem;max-width:30rem;padding:0.5rem;width:100%}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-icon{display:inline-block;fill:currentColor;height:1em;position:relative;width:1em}.usa-icon--size-3{height:1.5rem;width:1.5rem}.usa-icon--size-4{height:2rem;width:2rem}.usa-icon--size-5{height:2.5rem;width:2.5rem}.usa-icon--size-6{height:3rem;width:3rem}.usa-icon--size-7{height:3.5rem;width:3.5rem}.usa-icon--size-8{height:4rem;width:4rem}.usa-icon--size-9{height:4.5rem;width:4.5rem}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-input:disabled,.usa-input[aria-disabled=true]{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1;-webkit-text-fill-color:#454545}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:0;color:GrayText}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{color:GrayText}}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:2px solid GrayText}}.usa-input--error{border-width:0.25rem;border-color:#b50909;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-input--success{border-width:0.25rem;border-color:#00a91c;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-select{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:white;background-position:right 0.5rem center;background-size:1.25rem;padding-right:2rem}.usa-select::-ms-expand{display:none}.usa-select:-webkit-autofill{-webkit-appearance:menulist;appearance:menulist}.usa-select:-moz-focusring{color:transparent;text-shadow:0 0 0 black}.usa-select[multiple]{height:auto;background-image:none;padding-right:0}.usa-select option{overflow:hidden;text-overflow:ellipsis}.usa-select:disabled,.usa-select[aria-disabled=true]{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1}.usa-select:disabled:hover,.usa-select:disabled:active,.usa-select:disabled:focus,.usa-select:disabled.usa-focus,.usa-select[aria-disabled=true]:hover,.usa-select[aria-disabled=true]:active,.usa-select[aria-disabled=true]:focus,.usa-select[aria-disabled=true].usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-select:disabled,.usa-select[aria-disabled=true]{border:0;color:GrayText}.usa-select:disabled:hover,.usa-select:disabled:active,.usa-select:disabled:focus,.usa-select:disabled.usa-focus,.usa-select[aria-disabled=true]:hover,.usa-select[aria-disabled=true]:active,.usa-select[aria-disabled=true]:focus,.usa-select[aria-disabled=true].usa-focus{color:GrayText}}@media (forced-colors: active){.usa-select:disabled,.usa-select[aria-disabled=true]{border:2px solid GrayText}}@media (forced-colors: active){.usa-select{-webkit-appearance:listbox;-moz-appearance:listbox;appearance:listbox;background-image:none;padding-right:0}}:host .usa-input--2xs{max-width:5ex}:host .usa-input--xs{max-width:9ex}:host .usa-input--sm,:host .usa-input--small{max-width:13ex}:host .usa-input--md,:host .usa-input--medium{max-width:20ex}:host .usa-input--lg{max-width:30ex}:host .usa-input--xl{max-width:40ex}:host .usa-input--2xl{max-width:50ex}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}:host{display:block;font-family:var(--font-source-sans);color:var(--vads-color-base)}:host([inert]) select{border:0;background:none}.usa-select{margin-bottom:0}::slotted(option),::slotted(optgroup){display:none}";
const VaSelectStyle0 = vaSelectCss;

const VaSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
};
VaSelect.style = VaSelectStyle0;

const vaTextInputCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}h1{margin-top:0}h1,h2,h3,h4,h5,h6{margin-bottom:0;margin-top:0;clear:both}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:1.5em}h1+*,h2+*,h3+*,h4+*,h5+*,h6+*{margin-top:1em}h1{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:2.44rem;line-height:1.2;font-weight:700}h2{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.95rem;line-height:1.2;font-weight:700}h3{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.34rem;line-height:1.2;font-weight:700}h4{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.98rem;line-height:1.2;font-weight:700}h5{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.91rem;line-height:1.2;font-weight:700}h6{font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;font-size:0.87rem;line-height:1.1;font-weight:normal;letter-spacing:0.025em;text-transform:uppercase}h1,h2,h3,h4,h5{font-family:Bitter, Georgia, Cambria, \"Times New Roman\", Times, serif;font-weight:700}h6{font-family:\"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;font-weight:700}h1{margin-top:0;font-size:2.5rem}h2{font-size:1.875rem}h3{font-size:1.25rem}h4{font-size:1.0625rem}h5{font-size:0.9375rem}h6{font-size:0.9375rem}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}:host legend :is(h1,h2,h3,h4,h5,h6),:host label :is(h1,h2,h3,h4,h5,h6){display:inline;margin:0px}:host legend :is(h1,h2,h3,h4,h5),:host label :is(h1,h2,h3,h4,h5){font-family:var(--font-serif)}:host h1+*,:host h2+*,:host h3+*,:host h4+*,:host h5+*,:host h6+*{margin-top:unset}:host #form-question{margin-bottom:1rem}.usa-hint,.usa-input-group,.usa-input{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-input-group,.usa-input{border-width:1px;border-color:#565c65;border-style:solid;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;color:#1b1b1b;display:block;height:2.5rem;margin-top:0.5rem;max-width:30rem;padding:0.5rem;width:100%}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-input:disabled,.usa-input[aria-disabled=true]{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1;-webkit-text-fill-color:#454545}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:0;color:GrayText}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{color:GrayText}}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:2px solid GrayText}}.usa-input--error{border-width:0.25rem;border-color:#b50909;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-input--success{border-width:0.25rem;border-color:#00a91c;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-input-group{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding:0;position:relative}.usa-input-group--error input:focus,.usa-input-group--success input:focus{outline-offset:0.25rem}.usa-input-group--error{border-width:0.25rem;border-color:#b50909;border-style:solid}.usa-input-group--success{border-width:0.25rem;border-color:#00a91c;border-style:solid}.usa-input-group input{padding-right:2.5rem;border:0;height:100%;margin-top:0;min-width:0;width:100%}.usa-input-group input:disabled+.usa-input-suffix,.usa-input-group input[aria-disabled=true]+.usa-input-suffix{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1}.usa-input-group input:disabled+.usa-input-suffix:hover,.usa-input-group input:disabled+.usa-input-suffix:active,.usa-input-group input:disabled+.usa-input-suffix:focus,.usa-input-group input:disabled+.usa-input-suffix.usa-focus,.usa-input-group input[aria-disabled=true]+.usa-input-suffix:hover,.usa-input-group input[aria-disabled=true]+.usa-input-suffix:active,.usa-input-group input[aria-disabled=true]+.usa-input-suffix:focus,.usa-input-group input[aria-disabled=true]+.usa-input-suffix.usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-input-group input:disabled+.usa-input-suffix,.usa-input-group input[aria-disabled=true]+.usa-input-suffix{border:0;color:GrayText}.usa-input-group input:disabled+.usa-input-suffix:hover,.usa-input-group input:disabled+.usa-input-suffix:active,.usa-input-group input:disabled+.usa-input-suffix:focus,.usa-input-group input:disabled+.usa-input-suffix.usa-focus,.usa-input-group input[aria-disabled=true]+.usa-input-suffix:hover,.usa-input-group input[aria-disabled=true]+.usa-input-suffix:active,.usa-input-group input[aria-disabled=true]+.usa-input-suffix:focus,.usa-input-group input[aria-disabled=true]+.usa-input-suffix.usa-focus{color:GrayText}}@media (forced-colors: active){.usa-input-group input:disabled,.usa-input-group input[aria-disabled=true]{border:0}}@media (forced-colors: active){.usa-input-group:has(input:disabled),.usa-input-group:has(input[aria-disabled=true]){border:2px solid GrayText}}.usa-input-prefix:has(+input:disabled),.usa-input-prefix:has(+input[aria-disabled=true]){color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1}.usa-input-prefix:has(+input:disabled):hover,.usa-input-prefix:has(+input:disabled):active,.usa-input-prefix:has(+input:disabled):focus,.usa-input-prefix:has(+input:disabled).usa-focus,.usa-input-prefix:has(+input[aria-disabled=true]):hover,.usa-input-prefix:has(+input[aria-disabled=true]):active,.usa-input-prefix:has(+input[aria-disabled=true]):focus,.usa-input-prefix:has(+input[aria-disabled=true]).usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-input-prefix:has(+input:disabled),.usa-input-prefix:has(+input[aria-disabled=true]){border:0;color:GrayText}.usa-input-prefix:has(+input:disabled):hover,.usa-input-prefix:has(+input:disabled):active,.usa-input-prefix:has(+input:disabled):focus,.usa-input-prefix:has(+input:disabled).usa-focus,.usa-input-prefix:has(+input[aria-disabled=true]):hover,.usa-input-prefix:has(+input[aria-disabled=true]):active,.usa-input-prefix:has(+input[aria-disabled=true]):focus,.usa-input-prefix:has(+input[aria-disabled=true]).usa-focus{color:GrayText}}.usa-input-prefix,.usa-input-suffix{position:absolute;color:#71767a;line-height:0;padding:0 0.5rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.usa-input-prefix .usa-icon,.usa-input-suffix .usa-icon{height:1.5rem;width:1.5rem}.usa-input-prefix+input{padding-left:2.5rem;padding-right:0.5rem}.usa-input-suffix{right:0}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-character-count__status{display:inline-block;padding-top:0.25rem}.usa-character-count__status.usa-character-count__status--invalid{color:#b50909;font-weight:700}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}:host .usa-input--2xs{max-width:5ex}:host .usa-input--xs{max-width:9ex}:host .usa-input--sm,:host .usa-input--small{max-width:13ex}:host .usa-input--md,:host .usa-input--medium{max-width:20ex}:host .usa-input--lg{max-width:30ex}:host .usa-input--xl{max-width:40ex}:host .usa-input--2xl{max-width:50ex}:host{color:var(--vads-color-base)}:host{display:block;font-family:var(--font-source-sans)}input{-webkit-box-sizing:border-box;box-sizing:border-box}input.usa-input{color:var(--vads-color-base)}.usa-hint{display:block}.currency-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.currency-wrapper>div{position:absolute;left:10px}.currency-wrapper #symbol{margin-top:8px}.currency-wrapper #inputField{padding-left:25px}:host([error]:not([error=\"\"])[show-input-error=false]){border-left:0;padding-left:0;margin-left:0}";
const VaTextInputStyle0 = vaTextInputCss;

const VaTextInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        /**
         * Input types we will allow to be specified with the "type" prop.
         */
        /* eslint-disable-next-line i18next/no-literal-string */
        this.allowedInputTypes = ['email', 'number', 'search', 'tel', 'text', 'url'];
        this.updatePaddingLeft = () => {
            if (this.inputIconPrefix) {
                // eslint-disable-next-line i18next/no-literal-string
                this.paddingLeftValue = '2.5rem';
            }
            else if (this.inputPrefix) {
                const textLength = this.inputPrefix ? Math.min(this.inputPrefix.length, 25) : null;
                // eslint-disable-next-line i18next/no-literal-string
                this.paddingLeftValue = `${textLength * 0.5 + 1}rem`;
            }
        };
        this.updatePaddingRight = () => {
            const textLength = this.inputSuffix ? Math.min(this.inputSuffix.length, 25) : null;
            // eslint-disable-next-line i18next/no-literal-string
            this.paddingRightValue = `${textLength * 0.5 + 1}rem`;
        };
        this.handleInput = (e) => {
            const target = e.target;
            this.value = target.value;
        };
        this.handleBlur = (e) => {
            if (this.enableAnalytics) {
                this.componentLibraryAnalytics.emit({
                    componentName: 'va-text-input',
                    action: 'blur',
                    details: {
                        label: this.label,
                        value: this.value,
                    },
                });
            }
            if (this.inputmode === 'decimal' || this.inputmode === 'numeric' || this.currency) {
                let defaultError = instance.t('number-error');
                const target = e.target;
                const valid = target.checkValidity();
                if (!this.error && !valid) {
                    this.error = defaultError;
                    this.el.setAttribute('error', defaultError);
                }
                else if (this.error && this.error === defaultError && valid) {
                    this.error = null;
                    this.el.setAttribute('error', '');
                }
            }
        };
        this.label = undefined;
        this.error = undefined;
        this.reflectInputError = false;
        this.showInputError = true;
        this.invalid = false;
        this.required = false;
        this.inputmode = undefined;
        this.step = undefined;
        this.type = 'text';
        this.maxlength = undefined;
        this.autocomplete = undefined;
        this.enableAnalytics = false;
        this.name = undefined;
        this.pattern = undefined;
        this.hint = undefined;
        this.messageAriaDescribedby = undefined;
        this.value = undefined;
        this.success = false;
        this.width = undefined;
        this.useFormsPattern = undefined;
        this.formHeadingLevel = 3;
        this.formHeading = undefined;
        this.charcount = false;
        this.currency = false;
        this.inputPrefix = undefined;
        this.inputIconPrefix = undefined;
        this.inputSuffix = undefined;
        this.inputIconSuffix = undefined;
        this.min = undefined;
        this.max = undefined;
        this.paddingLeftValue = '0';
        this.paddingRightValue = '0';
    }
    componentWillLoad() {
        this.updatePaddingLeft();
        this.updatePaddingRight();
    }
    componentDidUpdate() {
        this.updatePaddingLeft();
        this.updatePaddingRight();
    }
    getInputType() {
        if (!this.allowedInputTypes.includes(this.type)) {
            /* eslint-disable-next-line i18next/no-literal-string */
            return 'text';
        }
        if (this.max || this.min) {
            return 'number';
        }
        return this.type;
    }
    /**
     * This ensures that the `maxlength` property will be positive
     * or it won't be used at all
     */
    getMaxlength() {
        if (this.maxlength <= 0) {
            return undefined;
        }
        return this.maxlength;
    }
    // get the pattern for the input. note: currency has its own pattern
    getPattern() {
        // currency should have its own pattern
        if (this.currency) {
            return '^[0-9]+(\.[0-9]{2})?$';
        }
        const isNumericWithNoPattern = this.pattern === undefined && (this.inputmode === 'decimal' || this.inputmode === 'numeric');
        // if input will hold a number then set the pattern to a default
        return isNumericWithNoPattern ? "[0-9]+(\.[0-9]{1,})?" : this.pattern;
    }
    // get the inputmode for the component. if currency is true always use 'numeric'
    getInputmode() {
        if (this.currency) {
            return 'numeric';
        }
        return this.inputmode ? this.inputmode : undefined;
    }
    // get the step for the input, if inputMode is decimal default to .01
    getStep() {
        if (!this.step && this.inputmode === 'decimal') {
            return '.01';
        }
        return this.step ? this.step : undefined;
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
        const { label, error, reflectInputError, showInputError, invalid, required, value, name, autocomplete, hint, handleInput, handleBlur, success, messageAriaDescribedby, width, useFormsPattern, formHeadingLevel, formHeading, charcount, min, max, currency, inputPrefix, inputIconPrefix, inputSuffix, inputIconSuffix } = this;
        const type = this.getInputType();
        const maxlength = this.getMaxlength();
        const inputmode = this.getInputmode();
        const step = this.getStep();
        const ariaDescribedbyIds = `${messageAriaDescribedby ? 'input-message' : ''} ${error ? 'input-error-message' : ''} ${charcount && maxlength ? 'charcount-message' : ''}`.trim() || null; // Null so we don't add the attribute if we have an empty string
        const ariaLabeledByIds = `${useFormsPattern && formHeading ? 'form-question' : ''} ${useFormsPattern ? 'form-description' : ''} ${useFormsPattern && label ? 'input-label' : ''}`.trim() || null;
        const pattern = this.getPattern();
        const currencyWrapper = classnames({
            'currency-wrapper': currency,
            'usa-input-group': inputSuffix || inputPrefix || inputIconPrefix || inputIconSuffix
        });
        const getInputStyle = () => {
            if (this.paddingLeftValue !== '0' && inputPrefix) {
                return { paddingLeft: this.paddingLeftValue };
            }
            else if (inputSuffix) {
                return { paddingRight: this.paddingRightValue };
            }
            else {
                return {};
            }
        };
        const style = getInputStyle();
        const charCountTooHigh = maxlength && ((value === null || value === void 0 ? void 0 : value.length) > maxlength);
        const labelClass = classnames({
            'usa-label': true,
            'usa-label--error': error,
        });
        const inputClass = classnames({
            'usa-input': true,
            'usa-input--success': success,
            'usa-input--error': error || reflectInputError,
            [`usa-input--${width}`]: width,
        });
        const messageClass = classnames({
            'usa-hint': true,
            'usa-character-count__status': maxlength,
            'usa-character-count__status--invalid': maxlength && (value === null || value === void 0 ? void 0 : value.length) > maxlength
        });
        const errorClass = classnames({
            'usa-sr-only': !showInputError,
        });
        const isFormsPattern = useFormsPattern === 'single' || useFormsPattern === 'multiple' ? true : false;
        let formsHeading = null;
        if (isFormsPattern) {
            const HeaderLevel = getHeaderLevel(formHeadingLevel);
            formsHeading = (h(Fragment, null, formHeading &&
                h(HeaderLevel, { id: "form-question", part: "form-header" }, formHeading), h("div", { id: "form-description" }, h("slot", { name: "form-description" }))));
        }
        return (h(Host, null, formsHeading, h("div", { class: "input-wrap" }, label && (h("label", { htmlFor: "inputField", id: "input-label", class: labelClass, part: "label" }, label, required && (h("span", { class: "usa-label--required" }, ' ', instance.t('required'))), hint && h("span", { class: "usa-hint" }, hint))), h("slot", null), h("span", { id: "input-error-message", role: "alert", class: errorClass }, error && (h(Fragment, null, h("span", { class: "usa-sr-only" }, instance.t('error')), h("span", { class: "usa-error-message" }, error)))), h("div", { class: currencyWrapper }, currency && h("div", { id: "symbol" }, "$"), inputPrefix && h("div", { class: "usa-input-prefix", part: "input-prefix" }, inputPrefix.substring(0, 25)), inputIconPrefix && h("div", { class: "usa-input-prefix", part: "input-prefix" }, h("va-icon", { icon: inputIconPrefix, size: 3, part: "icon" })), h("input", { class: inputClass, id: "inputField", type: type, value: value, onInput: handleInput, onBlur: handleBlur, "aria-describedby": ariaDescribedbyIds, style: style, "aria-labelledby": ariaLabeledByIds, "aria-invalid": invalid || error || charCountTooHigh ? 'true' : 'false', inputmode: inputmode, step: step, maxlength: maxlength, pattern: pattern, name: name, autocomplete: autocomplete, required: required || null, part: "input", min: min, max: max }), inputSuffix && h("div", { class: "usa-input-suffix", part: "suffix", "aria-hidden": "true" }, inputSuffix.substring(0, 25)), inputIconSuffix && h("div", { class: "usa-input-suffix", part: "input-suffix" }, h("va-icon", { icon: inputIconSuffix, size: 3, part: "icon" }))), messageAriaDescribedby && (h("span", { id: "input-message", class: "usa-sr-only dd-privacy-hidden" }, messageAriaDescribedby)), charcount && maxlength && (h("span", { id: "charcount-message", class: messageClass, "aria-live": "polite" }, getCharacterMessage(value, maxlength))))));
    }
    get el() { return getElement(this); }
};
VaTextInput.style = VaTextInputStyle0;

export { VaSelect as va_select, VaTextInput as va_text_input };
