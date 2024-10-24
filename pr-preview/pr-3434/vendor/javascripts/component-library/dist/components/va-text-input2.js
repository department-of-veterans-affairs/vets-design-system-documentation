import { Build, proxyCustomElement, HTMLElement, createEvent, forceUpdate, h, Fragment, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import './i18n-setup.js';
import './contacts.js';
import { c as consoleDevError, b as getCharacterMessage, a as getHeaderLevel } from './utils.js';
import { d as defineCustomElement$1 } from './va-icon2.js';
import { i as instance } from './i18next.js';

const vaTextInputCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}h1{margin-top:0}h1,h2,h3,h4,h5,h6{margin-bottom:0;margin-top:0;clear:both}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:1.5em}h1+*,h2+*,h3+*,h4+*,h5+*,h6+*{margin-top:1em}h1{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:2.44rem;line-height:1.2;font-weight:700}h2{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.95rem;line-height:1.2;font-weight:700}h3{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.34rem;line-height:1.2;font-weight:700}h4{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.98rem;line-height:1.2;font-weight:700}h5{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.91rem;line-height:1.2;font-weight:700}h6{font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;font-size:0.87rem;line-height:1.1;font-weight:normal;letter-spacing:0.025em;text-transform:uppercase}h1,h2,h3,h4,h5{font-family:Bitter, Georgia, Cambria, \"Times New Roman\", Times, serif;font-weight:700}h6{font-family:\"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;font-weight:700}h1{margin-top:0;font-size:2.5rem}h2{font-size:1.875rem}h3{font-size:1.25rem}h4{font-size:1.0625rem}h5{font-size:0.9375rem}h6{font-size:0.9375rem}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}:host legend :is(h1,h2,h3,h4,h5,h6),:host label :is(h1,h2,h3,h4,h5,h6){display:inline;margin:0px}:host legend :is(h1,h2,h3,h4,h5),:host label :is(h1,h2,h3,h4,h5){font-family:var(--font-serif)}:host h1+*,:host h2+*,:host h3+*,:host h4+*,:host h5+*,:host h6+*{margin-top:unset}:host #form-question{margin-bottom:1rem}.usa-hint,.usa-input-group,.usa-input{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-input-group,.usa-input{border-width:1px;border-color:#565c65;border-style:solid;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;color:#1b1b1b;display:block;height:2.5rem;margin-top:0.5rem;max-width:30rem;padding:0.5rem;width:100%}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-input:disabled,.usa-input[aria-disabled=true]{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1;-webkit-text-fill-color:#454545}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:0;color:GrayText}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{color:GrayText}}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:2px solid GrayText}}.usa-input--error{border-width:0.25rem;border-color:#b50909;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-input--success{border-width:0.25rem;border-color:#00a91c;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-input-group{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;padding:0;position:relative}.usa-input-group--error input:focus,.usa-input-group--success input:focus{outline-offset:0.25rem}.usa-input-group--error{border-width:0.25rem;border-color:#b50909;border-style:solid}.usa-input-group--success{border-width:0.25rem;border-color:#00a91c;border-style:solid}.usa-input-group input{padding-right:2.5rem;border:0;height:100%;margin-top:0;min-width:0;width:100%}.usa-input-group input:disabled+.usa-input-suffix,.usa-input-group input[aria-disabled=true]+.usa-input-suffix{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1}.usa-input-group input:disabled+.usa-input-suffix:hover,.usa-input-group input:disabled+.usa-input-suffix:active,.usa-input-group input:disabled+.usa-input-suffix:focus,.usa-input-group input:disabled+.usa-input-suffix.usa-focus,.usa-input-group input[aria-disabled=true]+.usa-input-suffix:hover,.usa-input-group input[aria-disabled=true]+.usa-input-suffix:active,.usa-input-group input[aria-disabled=true]+.usa-input-suffix:focus,.usa-input-group input[aria-disabled=true]+.usa-input-suffix.usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-input-group input:disabled+.usa-input-suffix,.usa-input-group input[aria-disabled=true]+.usa-input-suffix{border:0;color:GrayText}.usa-input-group input:disabled+.usa-input-suffix:hover,.usa-input-group input:disabled+.usa-input-suffix:active,.usa-input-group input:disabled+.usa-input-suffix:focus,.usa-input-group input:disabled+.usa-input-suffix.usa-focus,.usa-input-group input[aria-disabled=true]+.usa-input-suffix:hover,.usa-input-group input[aria-disabled=true]+.usa-input-suffix:active,.usa-input-group input[aria-disabled=true]+.usa-input-suffix:focus,.usa-input-group input[aria-disabled=true]+.usa-input-suffix.usa-focus{color:GrayText}}@media (forced-colors: active){.usa-input-group input:disabled,.usa-input-group input[aria-disabled=true]{border:0}}@media (forced-colors: active){.usa-input-group:has(input:disabled),.usa-input-group:has(input[aria-disabled=true]){border:2px solid GrayText}}.usa-input-prefix:has(+input:disabled),.usa-input-prefix:has(+input[aria-disabled=true]){color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1}.usa-input-prefix:has(+input:disabled):hover,.usa-input-prefix:has(+input:disabled):active,.usa-input-prefix:has(+input:disabled):focus,.usa-input-prefix:has(+input:disabled).usa-focus,.usa-input-prefix:has(+input[aria-disabled=true]):hover,.usa-input-prefix:has(+input[aria-disabled=true]):active,.usa-input-prefix:has(+input[aria-disabled=true]):focus,.usa-input-prefix:has(+input[aria-disabled=true]).usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-input-prefix:has(+input:disabled),.usa-input-prefix:has(+input[aria-disabled=true]){border:0;color:GrayText}.usa-input-prefix:has(+input:disabled):hover,.usa-input-prefix:has(+input:disabled):active,.usa-input-prefix:has(+input:disabled):focus,.usa-input-prefix:has(+input:disabled).usa-focus,.usa-input-prefix:has(+input[aria-disabled=true]):hover,.usa-input-prefix:has(+input[aria-disabled=true]):active,.usa-input-prefix:has(+input[aria-disabled=true]):focus,.usa-input-prefix:has(+input[aria-disabled=true]).usa-focus{color:GrayText}}.usa-input-prefix,.usa-input-suffix{position:absolute;color:#71767a;line-height:0;padding:0 0.5rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.usa-input-prefix .usa-icon,.usa-input-suffix .usa-icon{height:1.5rem;width:1.5rem}.usa-input-prefix+input{padding-left:2.5rem;padding-right:0.5rem}.usa-input-suffix{right:0}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-character-count__status{display:inline-block;padding-top:0.25rem}.usa-character-count__status.usa-character-count__status--invalid{color:#b50909;font-weight:700}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}:host .usa-input--2xs{max-width:5ex}:host .usa-input--xs{max-width:9ex}:host .usa-input--sm,:host .usa-input--small{max-width:13ex}:host .usa-input--md,:host .usa-input--medium{max-width:20ex}:host .usa-input--lg{max-width:30ex}:host .usa-input--xl{max-width:40ex}:host .usa-input--2xl{max-width:50ex}:host{color:var(--vads-color-base)}:host{display:block;font-family:var(--font-source-sans)}input{-webkit-box-sizing:border-box;box-sizing:border-box}input.usa-input{color:var(--vads-color-base)}.usa-hint{display:block}.currency-wrapper{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.currency-wrapper>div{position:absolute;left:10px}.currency-wrapper #symbol{margin-top:8px}.currency-wrapper #inputField{padding-left:25px}:host([error]:not([error=\"\"])[show-input-error=false]){border-left:0;padding-left:0;margin-left:0}";
const VaTextInputStyle0 = vaTextInputCss;

if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    instance.init({ lng: 'cimode' });
}
const VaTextInput = /*@__PURE__*/ proxyCustomElement(class VaTextInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
            consoleDevError(`The input type "${this.type}" is invalid or unsupported!`);
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
            consoleDevError('The maxlength prop must be positive!');
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
    get el() { return this; }
    static get style() { return VaTextInputStyle0; }
}, [1, "va-text-input", {
        "label": [1],
        "error": [513],
        "reflectInputError": [4, "reflect-input-error"],
        "showInputError": [516, "show-input-error"],
        "invalid": [4],
        "required": [4],
        "inputmode": [1],
        "step": [1],
        "type": [1],
        "maxlength": [2],
        "autocomplete": [1],
        "enableAnalytics": [4, "enable-analytics"],
        "name": [1],
        "pattern": [1],
        "hint": [1],
        "messageAriaDescribedby": [1, "message-aria-describedby"],
        "value": [1537],
        "success": [4],
        "width": [1],
        "useFormsPattern": [1, "use-forms-pattern"],
        "formHeadingLevel": [2, "form-heading-level"],
        "formHeading": [1, "form-heading"],
        "charcount": [4],
        "currency": [4],
        "inputPrefix": [1, "input-prefix"],
        "inputIconPrefix": [1, "input-icon-prefix"],
        "inputSuffix": [1, "input-suffix"],
        "inputIconSuffix": [1, "input-icon-suffix"],
        "min": [8],
        "max": [8],
        "paddingLeftValue": [32],
        "paddingRightValue": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-text-input", "va-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "va-text-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaTextInput);
            }
            break;
        case "va-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { VaTextInput as V, defineCustomElement as d };
