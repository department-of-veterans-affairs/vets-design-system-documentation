'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');
const index$1 = require('./index-c4897a3e.js');
require('./contacts-f7ea2d3e.js');
const utils = require('./utils-967b9523.js');
const i18next = require('./i18next-1fd09d7c.js');

const vaTextareaCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}h1{margin-top:0}h1,h2,h3,h4,h5,h6{margin-bottom:0;margin-top:0;clear:both}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:1.5em}h1+*,h2+*,h3+*,h4+*,h5+*,h6+*{margin-top:1em}h1{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:2.44rem;line-height:1.2;font-weight:700}h2{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.95rem;line-height:1.2;font-weight:700}h3{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.34rem;line-height:1.2;font-weight:700}h4{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.98rem;line-height:1.2;font-weight:700}h5{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.91rem;line-height:1.2;font-weight:700}h6{font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;font-size:0.87rem;line-height:1.1;font-weight:normal;letter-spacing:0.025em;text-transform:uppercase}h1,h2,h3,h4,h5{font-family:Bitter, Georgia, Cambria, \"Times New Roman\", Times, serif;font-weight:700}h6{font-family:\"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;font-weight:700}h1{margin-top:0;font-size:2.5rem}h2{font-size:1.875rem}h3{font-size:1.25rem}h4{font-size:1.0625rem}h5{font-size:0.9375rem}h6{font-size:0.9375rem}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}:host legend :is(h1,h2,h3,h4,h5,h6),:host label :is(h1,h2,h3,h4,h5,h6){display:inline;margin:0px}:host legend :is(h1,h2,h3,h4,h5),:host label :is(h1,h2,h3,h4,h5){font-family:var(--font-serif)}:host h1+*,:host h2+*,:host h3+*,:host h4+*,:host h5+*,:host h6+*{margin-top:unset}:host #form-question{margin-bottom:1rem}.usa-textarea,.usa-hint,.usa-input{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-textarea,.usa-input{border-width:1px;border-color:#565c65;border-style:solid;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:0;color:#1b1b1b;display:block;height:2.5rem;margin-top:0.5rem;max-width:30rem;padding:0.5rem;width:100%}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-input:disabled,.usa-input[aria-disabled=true]{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1;-webkit-text-fill-color:#454545}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:0;color:GrayText}.usa-input:disabled:hover,.usa-input:disabled:active,.usa-input:disabled:focus,.usa-input:disabled.usa-focus,.usa-input[aria-disabled=true]:hover,.usa-input[aria-disabled=true]:active,.usa-input[aria-disabled=true]:focus,.usa-input[aria-disabled=true].usa-focus{color:GrayText}}@media (forced-colors: active){.usa-input:disabled,.usa-input[aria-disabled=true]{border:2px solid GrayText}}.usa-input--error{border-width:0.25rem;border-color:#b50909;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-input--success{border-width:0.25rem;border-color:#00a91c;border-style:solid;padding-top:calc(0.5rem - 0.25rem);padding-bottom:calc(0.5rem - 0.25rem)}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-textarea:disabled,.usa-textarea[aria-disabled=true]{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1}.usa-textarea:disabled:hover,.usa-textarea:disabled:active,.usa-textarea:disabled:focus,.usa-textarea:disabled.usa-focus,.usa-textarea[aria-disabled=true]:hover,.usa-textarea[aria-disabled=true]:active,.usa-textarea[aria-disabled=true]:focus,.usa-textarea[aria-disabled=true].usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-textarea:disabled,.usa-textarea[aria-disabled=true]{border:0;color:GrayText}.usa-textarea:disabled:hover,.usa-textarea:disabled:active,.usa-textarea:disabled:focus,.usa-textarea:disabled.usa-focus,.usa-textarea[aria-disabled=true]:hover,.usa-textarea[aria-disabled=true]:active,.usa-textarea[aria-disabled=true]:focus,.usa-textarea[aria-disabled=true].usa-focus{color:GrayText}}@media (forced-colors: active){.usa-textarea:disabled,.usa-textarea[aria-disabled=true]{border:2px solid GrayText}}.usa-textarea{height:10rem}.usa-character-count__status{display:inline-block;padding-top:0.25rem}.usa-character-count__status.usa-character-count__status--invalid{color:#b50909;font-weight:700}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}:host{color:var(--vads-color-base);display:block;resize:both;font-family:var(--font-source-sans)}:host(:focus){outline:none !important}.usa-hint{display:block}";
const VaTextareaStyle0 = vaTextareaCss;

const VaTextarea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentLibraryAnalytics = index.createEvent(this, "component-library-analytics", 7);
        this.handleInput = (e) => {
            const target = e.target;
            this.value = target.value;
        };
        this.handleBlur = () => {
            // Only fire the analytics event if enabled and value is not null
            if (this.enableAnalytics && this.value) {
                this.componentLibraryAnalytics.emit({
                    componentName: 'va-textarea',
                    action: 'blur',
                    details: {
                        label: this.label,
                        value: this.value,
                    },
                });
            }
        };
        this.label = undefined;
        this.error = undefined;
        this.placeholder = undefined;
        this.name = undefined;
        this.required = false;
        this.hint = undefined;
        this.messageAriaDescribedby = undefined;
        this.maxlength = undefined;
        this.value = undefined;
        this.enableAnalytics = false;
        this.labelHeaderLevel = undefined;
        this.headerAriaDescribedby = undefined;
        this.useFormsPattern = undefined;
        this.formHeadingLevel = 3;
        this.formHeading = undefined;
        this.charcount = false;
    }
    connectedCallback() {
        i18next.instance.on('languageChanged', () => {
            index.forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        i18next.instance.off('languageChanged');
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
    render() {
        const { label, error, placeholder, name, required, value, hint, charcount, messageAriaDescribedby, useFormsPattern, formHeadingLevel, headerAriaDescribedby, formHeading, } = this;
        const maxlength = this.getMaxlength();
        const ariaDescribedbyIds = `${error ? 'input-error-message' : ''} ${charcount && maxlength ? 'charcount-message' : ''} ${messageAriaDescribedby ? 'input-message' : ''}`.trim() || null;
        const ariaLabeledByIds = `${useFormsPattern && formHeading ? 'form-question' : ''} ${useFormsPattern ? 'form-description' : ''} ${useFormsPattern && label ? 'input-label' : ''}`.trim() || null;
        const HeaderLevel = utils.getHeaderLevel(this.labelHeaderLevel);
        const headerAriaDescribedbyId = headerAriaDescribedby ? 'header-message' : null;
        const charCountTooHigh = charcount && ((value === null || value === void 0 ? void 0 : value.length) > maxlength);
        const labelClass = index$1.classnames({
            'usa-label': true,
            'usa-label--error': error,
        });
        const inputClass = index$1.classnames({
            'usa-textarea': true,
            'usa-input--error': error,
        });
        const messageClass = index$1.classnames({
            'usa-hint': true,
            'usa-character-count__status': charcount,
            'usa-character-count__status--invalid': charcount && maxlength && (value === null || value === void 0 ? void 0 : value.length) > maxlength
        });
        const isFormsPattern = useFormsPattern === 'single' || useFormsPattern === 'multiple' ? true : false;
        let formsHeading = null;
        if (isFormsPattern) {
            const HeaderLevel = utils.getHeaderLevel(formHeadingLevel);
            formsHeading = (index.h(index.Fragment, { key: '1d0feb487af8033204ed7e9740522c804687199a' }, formHeading &&
                index.h(HeaderLevel, { key: '48e79d80ffa9e7ab243a6bc894191e8c8b92927e', id: "form-question", part: "form-header" }, formHeading), index.h("div", { key: 'd43a4a6f6973b89fcbbefa8bebed92ac880affc2', id: "form-description" }, index.h("slot", { key: '0346e702686b26cb1d59d60d3e7905ce189896fa', name: "form-description" }))));
        }
        return (index.h(index.Host, { key: '139b3ee4750d1b9ebf78cb8302d1fdc5e0a70e80' }, formsHeading, index.h("div", { key: 'd92520a07e27f550d1f6200e962070afa512cf14', class: "input-wrap" }, label && (index.h("label", { key: '28c9b19ae63636b6553b4ed8fc10bf3edb65aee1', htmlFor: "input-type-textarea", id: "input-label", class: labelClass, part: "label" }, HeaderLevel ? (index.h(HeaderLevel, { part: "header", "aria-describedby": headerAriaDescribedbyId }, label)) : (label), "\u00A0", useFormsPattern === 'multiple' && (index.h("span", { key: '76548a9435a646db6fd290cfd33f8eb0640e4c73', id: "header-message", class: "usa-sr-only" }, label)), headerAriaDescribedby && (index.h("span", { key: '53f710b819e6f7a3217dc441f9a5b13be3f90614', id: "header-message", class: "usa-sr-only" }, headerAriaDescribedby)), required && index.h("span", { key: 'de3d31378f50877c21297e1296fe1728b9a8b2cb', class: "usa-label--required" }, i18next.instance.t('required')), hint && index.h("div", { key: '3894332f189ccce69e67539148a1c939fce495fa', class: "usa-hint" }, hint))), index.h("slot", { key: '3b94ba88d8f9049a1f4b100b96ca9de5f7cd9040' }), index.h("span", { key: 'e8582814c79178fe95413b955b4df7c4ff61f6bd', id: "input-error-message", role: "alert" }, error && (index.h(index.Fragment, { key: '739b1c403ecee3c08f00df2a193c43a1a21c8161' }, index.h("span", { key: '73092b71d0c40cba28816b965e4cc31568d49068', class: "usa-sr-only" }, i18next.instance.t('error')), index.h("span", { key: '023bb79cd440ab04f85c151f2513bd9b1c8e540c', class: "usa-error-message" }, error)))), index.h("textarea", { key: '4060ca33b87fb82ca52474bc71c700bbd119ddb6', class: inputClass, "aria-describedby": ariaDescribedbyIds, "aria-invalid": error || charCountTooHigh ? 'true' : 'false', "aria-labelledby": ariaLabeledByIds, onInput: this.handleInput, onBlur: this.handleBlur, id: "input-type-textarea", placeholder: placeholder, name: name, maxLength: charcount ? undefined : maxlength, value: value, part: "input-type-textarea" }), !charcount && maxlength && (value === null || value === void 0 ? void 0 : value.length) >= maxlength && (index.h("span", { key: '60785d7c8ba9a1775808ceec73b4d750e841ee99', class: messageClass, "aria-live": "polite" }, i18next.instance.t('max-chars', { length: maxlength }))), charcount && maxlength && (index.h("span", { key: 'e4d68c999a11efa6b2d4144478f26bbc5c57288a', id: "charcount-message", class: messageClass, "aria-live": "polite" }, utils.getCharacterMessage(value, maxlength))), messageAriaDescribedby && (index.h("span", { key: '908e9b36b38ad45cee2acf9eb48c7b4ffa6b7d86', id: "input-message", class: "usa-sr-only dd-privacy-hidden" }, messageAriaDescribedby)))));
    }
    get el() { return index.getElement(this); }
};
VaTextarea.style = VaTextareaStyle0;

exports.va_textarea = VaTextarea;
