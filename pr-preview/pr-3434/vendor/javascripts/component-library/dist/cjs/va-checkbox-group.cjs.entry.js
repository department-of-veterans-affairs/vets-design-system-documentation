'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');
const index$1 = require('./index-c4897a3e.js');
require('./contacts-f7ea2d3e.js');
const utils = require('./utils-967b9523.js');
const i18next = require('./i18next-1fd09d7c.js');

const vaCheckboxGroupCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}h1{margin-top:0}h1,h2,h3,h4,h5,h6{margin-bottom:0;margin-top:0;clear:both}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:1.5em}h1+*,h2+*,h3+*,h4+*,h5+*,h6+*{margin-top:1em}h1{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:2.44rem;line-height:1.2;font-weight:700}h2{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.95rem;line-height:1.2;font-weight:700}h3{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.34rem;line-height:1.2;font-weight:700}h4{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.98rem;line-height:1.2;font-weight:700}h5{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.91rem;line-height:1.2;font-weight:700}h6{font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;font-size:0.87rem;line-height:1.1;font-weight:normal;letter-spacing:0.025em;text-transform:uppercase}h1,h2,h3,h4,h5{font-family:Bitter, Georgia, Cambria, \"Times New Roman\", Times, serif;font-weight:700}h6{font-family:\"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;font-weight:700}h1{margin-top:0;font-size:2.5rem}h2{font-size:1.875rem}h3{font-size:1.25rem}h4{font-size:1.0625rem}h5{font-size:0.9375rem}h6{font-size:0.9375rem}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}:host legend :is(h1,h2,h3,h4,h5,h6),:host label :is(h1,h2,h3,h4,h5,h6){display:inline;margin:0px}:host legend :is(h1,h2,h3,h4,h5),:host label :is(h1,h2,h3,h4,h5){font-family:var(--font-serif)}:host h1+*,:host h2+*,:host h3+*,:host h4+*,:host h5+*,:host h6+*{margin-top:unset}:host #form-question{margin-bottom:1rem}.usa-hint,.usa-fieldset{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-fieldset{border:none;margin:0;padding:0}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}:host{display:block;border:none;padding:0;margin-top:24px}";
const VaCheckboxGroupStyle0 = vaCheckboxGroupCss;

const VaCheckboxGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentLibraryAnalytics = index.createEvent(this, "component-library-analytics", 7);
        this.label = undefined;
        this.required = false;
        this.error = undefined;
        this.enableAnalytics = false;
        this.hint = undefined;
        this.labelHeaderLevel = undefined;
        this.messageAriaDescribedby = undefined;
        this.useFormsPattern = undefined;
        this.formHeadingLevel = 3;
        this.formHeading = undefined;
    }
    vaChangeHandler(event) {
        const clickedItem = event.target;
        if (this.enableAnalytics)
            this.fireAnalyticsEvent(clickedItem.label);
    }
    fireAnalyticsEvent(optionLabel) {
        this.componentLibraryAnalytics.emit({
            componentName: 'va-checkbox-group',
            action: 'change',
            details: {
                label: this.label,
                optionLabel,
                required: this.required,
            },
        });
    }
    getHeaderLevel() {
        const number = parseInt(this.labelHeaderLevel, 10);
        return number >= 1 && number <= 6 ? `h${number}` : null;
    }
    connectedCallback() {
        i18next.instance.on('languageChanged', () => {
            index.forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        i18next.instance.off('languageChanged');
    }
    render() {
        const { label, required, error, hint, messageAriaDescribedby, useFormsPattern, formHeadingLevel, formHeading, } = this;
        const HeaderLevel = this.getHeaderLevel();
        const ariaLabeledByIds = `${useFormsPattern && formHeading ? 'form-question' : ''} ${useFormsPattern ? 'form-description' : ''} ${useFormsPattern === 'multiple' ? 'header-message' : ''}`.trim() || null;
        const messageAriaDescribedbyId = messageAriaDescribedby ? 'description-message' : null;
        const legendClass = index$1.classnames({
            'usa-legend': true,
            'usa-label--error': error
        });
        const isFormsPattern = useFormsPattern === 'single' || useFormsPattern === 'multiple' ? true : false;
        let formsHeading = null;
        if (isFormsPattern) {
            const HeaderLevel = utils.getHeaderLevel(formHeadingLevel);
            formsHeading = (index.h(index.Fragment, { key: '8fb7824ff53963fb5e6981077c784566ec17e4a8' }, formHeading &&
                index.h(HeaderLevel, { key: 'd475600c5d0af03c870039c04ad454772d6fd1dc', id: "form-question", part: "form-header" }, formHeading), index.h("div", { key: 'd3239b0c68dc526ed4163cc57955114ad5c9050d', id: "form-description" }, index.h("slot", { key: '85d2efbf6da0d5780d4f699c989ef3b06491450d', name: "form-description" }))));
        }
        return (index.h(index.Host, { key: '909f07618d22eee17856b3292e17897e255d256c', role: "group" }, formsHeading, index.h("div", { key: '1e797a55018f9d37c3fc6299c2e1889cb71ee9b8', class: "input-wrap" }, index.h("fieldset", { key: '679733b6b5e508ffdb8d59aaec0ea58cf297286f', class: "usa-fieldset", "aria-labelledby": ariaLabeledByIds }, index.h("legend", { key: 'd10173163a53ebf861332e4019815b1dcaf17e29', class: legendClass, "aria-describedby": messageAriaDescribedbyId }, HeaderLevel ? (index.h(HeaderLevel, { part: "header" }, label)) : (label), "\u00A0", useFormsPattern === 'multiple' && (index.h("span", { key: 'b8531a5bdf7a061945de0f309fad06d50deb65d6', id: "header-message", class: "usa-sr-only" }, label)), messageAriaDescribedby && (index.h("span", { key: 'cc927da977780eeeac8ca1d18c55ef08fbf58add', id: "description-message", class: "usa-sr-only" }, messageAriaDescribedby)), required && index.h("span", { key: 'e91a258fbef40861dc88371904a54cf14fdca2eb', class: "usa-label--required" }, i18next.instance.t('required')), hint && index.h("div", { key: 'ab215f4ae3b96ed701a5a8eb36147fdbdf236089', class: "usa-hint" }, hint)), index.h("span", { key: '5e0d05ba52c2c79ec0661ebe794eff3e9e71c504', id: "checkbox-error-message", role: "alert" }, error && (index.h(index.Fragment, { key: '7cc8f93cabbe6b155bcb4aaadd5e9d8d107d6097' }, index.h("span", { key: '7a1dfc7275f7657b7dd44c629b63de60cb416d1f', class: "usa-sr-only" }, i18next.instance.t('error')), index.h("span", { key: '425cc804f0de77ddd17bac7b648b26a2cd59cff5', class: "usa-error-message" }, error)))), index.h("slot", { key: '684117a5c78c0edabfbc157a2fbde51f8cd78468' })))));
    }
    get el() { return index.getElement(this); }
};
VaCheckboxGroup.style = VaCheckboxGroupStyle0;

exports.va_checkbox_group = VaCheckboxGroup;
