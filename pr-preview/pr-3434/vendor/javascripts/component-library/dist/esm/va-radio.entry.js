import { r as registerInstance, c as createEvent, f as forceUpdate, h, F as Fragment, H as Host, g as getElement } from './index-f0e1e12e.js';
import { c as classnames } from './index-6d7ecf98.js';
import { g as getSlottedNodes, a as getHeaderLevel } from './utils-38f05f96.js';
import './contacts-c39c7b78.js';
import { i as instance } from './i18next-858cee77.js';

const vaRadioCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}.sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}h1{margin-top:0}h1,h2,h3,h4,h5,h6{margin-bottom:0;margin-top:0;clear:both}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:1.5em}h1+*,h2+*,h3+*,h4+*,h5+*,h6+*{margin-top:1em}h1{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:2.44rem;line-height:1.2;font-weight:700}h2{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.95rem;line-height:1.2;font-weight:700}h3{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.34rem;line-height:1.2;font-weight:700}h4{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.98rem;line-height:1.2;font-weight:700}h5{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.91rem;line-height:1.2;font-weight:700}h6{font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;font-size:0.87rem;line-height:1.1;font-weight:normal;letter-spacing:0.025em;text-transform:uppercase}h1,h2,h3,h4,h5{font-family:Bitter, Georgia, Cambria, \"Times New Roman\", Times, serif;font-weight:700}h6{font-family:\"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;font-weight:700}h1{margin-top:0;font-size:2.5rem}h2{font-size:1.875rem}h3{font-size:1.25rem}h4{font-size:1.0625rem}h5{font-size:0.9375rem}h6{font-size:0.9375rem}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}:host legend :is(h1,h2,h3,h4,h5,h6),:host label :is(h1,h2,h3,h4,h5,h6){display:inline;margin:0px}:host legend :is(h1,h2,h3,h4,h5),:host label :is(h1,h2,h3,h4,h5){font-family:var(--font-serif)}:host h1+*,:host h2+*,:host h3+*,:host h4+*,:host h5+*,:host h6+*{margin-top:unset}:host #form-question{margin-bottom:1rem}.usa-hint,.usa-fieldset{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-form{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}@media all and (min-width: 30em){.usa-form{max-width:20rem}}.usa-form abbr[title=required]{text-decoration:none}.usa-form .usa-input,.usa-form .usa-range,.usa-form .usa-select,.usa-form .usa-textarea{max-width:none}.usa-form .usa-input--2xs,.usa-form .usa-input-group--2xs{max-width:5ex}.usa-form .usa-input--xs,.usa-form .usa-input-group--xs{max-width:9ex}.usa-form .usa-input--sm,.usa-form .usa-input--small,.usa-form .usa-input-group--sm,.usa-form .usa-input-group--small{max-width:13ex}.usa-form .usa-input--md,.usa-form .usa-input--medium,.usa-form .usa-input-group--md,.usa-form .usa-input-group--medium{max-width:20ex}.usa-form .usa-input--lg,.usa-form .usa-input-group--lg{max-width:30ex}.usa-form .usa-input--xl,.usa-form .usa-input-group--xl{max-width:40ex}.usa-form .usa-input--2xl,.usa-form .usa-input-group--2xl{max-width:50ex}.usa-form .usa-button{margin-top:0.5rem}@media all and (min-width: 30em){.usa-form .usa-button{margin-top:1.5rem}}.usa-form a:where(:not(.usa-button)){color:#005ea2;text-decoration:underline}.usa-form a:where(:not(.usa-button)):visited{color:#54278f}.usa-form a:where(:not(.usa-button)):hover{color:#1a4480}.usa-form a:where(:not(.usa-button)):active{color:#162e51}.usa-form a:where(:not(.usa-button)):focus{outline:0.25rem solid #2491ff;outline-offset:0rem}@media all and (min-width: 30em){.usa-form--large{max-width:30rem}}.usa-show-password{color:#005ea2;text-decoration:underline;background-color:transparent;border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;font-weight:normal;-ms-flex-pack:normal;justify-content:normal;text-align:left;margin:0;padding:0;cursor:pointer}.usa-show-password:visited{color:#54278f}.usa-show-password:hover{color:#1a4480}.usa-show-password:active{color:#162e51}.usa-show-password:focus{outline:0.25rem solid #2491ff;outline-offset:0rem}.usa-show-password:hover,.usa-show-password.usa-button--hover,.usa-show-password:disabled:hover,.usa-show-password[aria-disabled=true]:hover,.usa-show-password:disabled.usa-button--hover,.usa-show-password[aria-disabled=true].usa-button--hover,.usa-show-password:active,.usa-show-password.usa-button--active,.usa-show-password:disabled:active,.usa-show-password[aria-disabled=true]:active,.usa-show-password:disabled.usa-button--active,.usa-show-password[aria-disabled=true].usa-button--active,.usa-show-password:disabled:focus,.usa-show-password[aria-disabled=true]:focus,.usa-show-password:disabled.usa-focus,.usa-show-password[aria-disabled=true].usa-focus,.usa-show-password:disabled,.usa-show-password[aria-disabled=true],.usa-show-password.usa-button--disabled{background-color:transparent;-webkit-box-shadow:none;box-shadow:none;text-decoration:underline}.usa-show-password.usa-button--hover{color:#1a4480}.usa-show-password.usa-button--active{color:#162e51}.usa-show-password:disabled,.usa-show-password[aria-disabled=true],.usa-show-password:disabled:hover,.usa-show-password[aria-disabled=true]:hover,.usa-show-password[aria-disabled=true]:focus{color:#757575}@media (forced-colors: active){.usa-show-password:disabled,.usa-show-password[aria-disabled=true],.usa-show-password:disabled:hover,.usa-show-password[aria-disabled=true]:hover,.usa-show-password[aria-disabled=true]:focus{color:GrayText}}.usa-form__note,.usa-show-password{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:0.93rem;line-height:1.3;float:right;margin:0.25rem 0 1rem}.usa-fieldset{border:none;margin:0;padding:0}.usa-legend{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-legend--large{font-size:2.13rem;font-weight:700;margin-top:1rem}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}:host{display:block;border:none;padding:0;margin-top:24px;max-width:480px}";
const VaRadioStyle0 = vaRadioCss;

const VaRadio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        this.vaValueChange = createEvent(this, "vaValueChange", 7);
        this.label = undefined;
        this.hint = undefined;
        this.required = false;
        this.error = undefined;
        this.enableAnalytics = false;
        this.labelHeaderLevel = undefined;
        this.headerAriaDescribedby = undefined;
        this.messageAriaDescribedby = undefined;
        this.useFormsPattern = undefined;
        this.formHeadingLevel = 3;
        this.formHeading = undefined;
    }
    handleKeyDown(event) {
        const currentNode = event.target;
        const radioOptionNodes = getSlottedNodes(this.el, 'va-radio-option')
            .filter(node => !node.disabled);
        if (!radioOptionNodes.length)
            return;
        const currentNodeIndex = radioOptionNodes.findIndex(node => node === currentNode);
        if (currentNodeIndex === -1)
            return;
        let nextNode;
        switch (event.key) {
            case ' ':
                event.preventDefault();
                if (currentNode.checked)
                    return;
                nextNode = currentNode;
                this.selectNextNode(currentNode);
                break;
            case 'ArrowDown':
            case 'ArrowRight':
                event.preventDefault();
                if (currentNodeIndex === radioOptionNodes.length - 1) {
                    nextNode = radioOptionNodes[0];
                    this.deselectCurrentNode(currentNode);
                    this.selectNextNode(nextNode);
                }
                else {
                    nextNode = radioOptionNodes[currentNodeIndex + 1];
                    this.deselectCurrentNode(currentNode);
                    this.selectNextNode(nextNode);
                }
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                event.preventDefault();
                if (currentNodeIndex === 0) {
                    nextNode = radioOptionNodes[radioOptionNodes.length - 1];
                    this.deselectCurrentNode(currentNode);
                    this.selectNextNode(nextNode);
                }
                else {
                    nextNode = radioOptionNodes[currentNodeIndex - 1];
                    this.deselectCurrentNode(currentNode);
                    this.selectNextNode(nextNode);
                }
                break;
        }
        if (!nextNode)
            return;
        if (this.enableAnalytics)
            this.fireAnalyticsEvent(nextNode.label);
        this.vaValueChange.emit({ value: nextNode.value });
    }
    radioOptionSelectedHandler(event) {
        const clickedItem = event.target;
        getSlottedNodes(this.el, 'va-radio-option')
            .filter(item => item !== clickedItem)
            .forEach((item) => {
            this.deselectCurrentNode(item);
        });
        this.selectNextNode(clickedItem);
        if (this.enableAnalytics)
            this.fireAnalyticsEvent(clickedItem.label);
        this.vaValueChange.emit({ value: clickedItem.value });
    }
    fireAnalyticsEvent(optionLabel) {
        this.componentLibraryAnalytics.emit({
            componentName: 'va-radio',
            action: 'change',
            details: {
                label: this.label,
                optionLabel,
                required: this.required,
            },
        });
    }
    deselectCurrentNode(node) {
        node.removeAttribute('checked');
    }
    selectNextNode(node) {
        node.setAttribute('checked', '');
        node.focus();
    }
    getHeaderLevel() {
        const number = parseInt(this.labelHeaderLevel, 10);
        return number >= 1 && number <= 6 ? `h${number}` : null;
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
        const { label, hint, required, error, headerAriaDescribedby, messageAriaDescribedby, useFormsPattern, formHeadingLevel, formHeading } = this;
        const HeaderLevel = this.getHeaderLevel();
        const headerAriaDescribedbyId = headerAriaDescribedby ? 'header-message' : null;
        const messageAriaDescribedbyId = messageAriaDescribedby ? 'description-message' : null;
        const ariaLabeledByIds = `${useFormsPattern && formHeading ? 'form-question' : ''} ${useFormsPattern ? 'form-description' : ''} ${useFormsPattern === 'multiple' ? 'header-message' : ''}`.trim() || null;
        const legendClass = classnames({
            'usa-legend': true,
            'usa-label--error': error
        });
        const isFormsPattern = useFormsPattern === 'single' || useFormsPattern === 'multiple' ? true : false;
        let formsHeading = null;
        if (isFormsPattern) {
            const HeaderLevel = getHeaderLevel(formHeadingLevel);
            formsHeading = (h(Fragment, { key: '698798e7e27e1b747b679f16fcfba5a400a83950' }, formHeading &&
                h(HeaderLevel, { key: '798d4af26e9080928c66dd174a616d198d69bf15', id: "form-question", part: "form-header" }, formHeading), h("div", { key: '9fe73acc02a3310c8bd295cf62a3328aa668d423', id: "form-description" }, h("slot", { key: 'c8dd2491d58438402334525fc2c440cf6187cc3a', name: "form-description" }))));
        }
        return (h(Host, { key: 'c6d178dd0247932956ed1eb9ce1a5246b423e4c5', "aria-invalid": error ? 'true' : 'false' }, formsHeading, h("div", { key: 'edd064c2a352b975024b6edce2e04c320ef7c7e1', class: "input-wrap" }, h("fieldset", { key: 'bd7f91d3775d22a6a33b182a03417d4922f560f9', class: "usa-fieldset", "aria-labelledby": ariaLabeledByIds }, h("legend", { key: '606eb9d1ae32932214c1d293a1b75a8c568bc4f1', class: legendClass, part: "legend", "aria-describedby": messageAriaDescribedbyId }, HeaderLevel ? (h(HeaderLevel, { part: "header", "aria-describedby": headerAriaDescribedbyId }, label)) : (label), "\u00A0", useFormsPattern === 'multiple' && (h("span", { key: 'b056c76f2471d43fefad514c0888d48a1fc85ccd', id: "header-message", class: "usa-sr-only" }, label)), headerAriaDescribedby && (h("span", { key: 'e630f85e3cc1fbfbeedac77c8586b0dcfe26a7c0', id: "header-message", class: "usa-sr-only" }, headerAriaDescribedby)), messageAriaDescribedby && (h("span", { key: '2ffc818d35b2b59bf8692d969f6f8af33a3c0d05', id: "description-message", class: "usa-sr-only" }, messageAriaDescribedby)), required && h("span", { key: '262104151ca1cbfbaae93e7cb8e9f91547a60ac3', class: "usa-label--required", part: "required" }, instance.t('required')), hint && h("div", { key: '9eaf0a5d63ea07e7f4ae1eee6cc6ac4db6c0e5bb', class: "usa-hint" }, hint)), h("span", { key: '13f67f2c319080ac4c8f021e8818401b4d0df98c', class: "usa-error-message", role: "alert" }, error && (h(Fragment, { key: '49d3d2fe968b9d9ab766a273cd46ba8409408cc1' }, h("span", { key: 'd1cc1252467866665b840eb253368b89dbd03f0b', class: "usa-sr-only" }, instance.t('error')), " ", error))), h("slot", { key: '2362384a0de7f2b2ea66c1766e693bb261128f0b' })))));
    }
    get el() { return getElement(this); }
};
VaRadio.style = VaRadioStyle0;

export { VaRadio as va_radio };
