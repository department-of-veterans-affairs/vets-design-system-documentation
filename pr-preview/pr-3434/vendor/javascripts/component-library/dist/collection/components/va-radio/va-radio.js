import { forceUpdate, Host, h, Fragment, } from "@stencil/core";
import classnames from "classnames";
import { getSlottedNodes } from "../../utils/utils";
import { i18next } from "../..";
import { Build } from "@stencil/core";
import { getHeaderLevel } from "../../utils/utils";
if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    i18next.init({ lng: 'cimode' });
}
/**
 * @keydown The event emitted when a key is pressed.
 * @radioOptionSelected The event emitted when the selected option value changes.
 * @componentName Radio button
 * @maturityCategory use
 * @maturityLevel deployed
 * @guidanceHref form/radio-button
 * @translations English
 * @translations Spanish
 * @translations Tagalog
 */
export class VaRadio {
    constructor() {
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
            default:
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
        i18next.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        i18next.off('languageChanged');
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
        return (h(Host, { key: 'c6d178dd0247932956ed1eb9ce1a5246b423e4c5', "aria-invalid": error ? 'true' : 'false' }, formsHeading, h("div", { key: 'edd064c2a352b975024b6edce2e04c320ef7c7e1', class: "input-wrap" }, h("fieldset", { key: 'bd7f91d3775d22a6a33b182a03417d4922f560f9', class: "usa-fieldset", "aria-labelledby": ariaLabeledByIds }, h("legend", { key: '606eb9d1ae32932214c1d293a1b75a8c568bc4f1', class: legendClass, part: "legend", "aria-describedby": messageAriaDescribedbyId }, HeaderLevel ? (h(HeaderLevel, { part: "header", "aria-describedby": headerAriaDescribedbyId }, label)) : (label), "\u00A0", useFormsPattern === 'multiple' && (h("span", { key: 'b056c76f2471d43fefad514c0888d48a1fc85ccd', id: "header-message", class: "usa-sr-only" }, label)), headerAriaDescribedby && (h("span", { key: 'e630f85e3cc1fbfbeedac77c8586b0dcfe26a7c0', id: "header-message", class: "usa-sr-only" }, headerAriaDescribedby)), messageAriaDescribedby && (h("span", { key: '2ffc818d35b2b59bf8692d969f6f8af33a3c0d05', id: "description-message", class: "usa-sr-only" }, messageAriaDescribedby)), required && h("span", { key: '262104151ca1cbfbaae93e7cb8e9f91547a60ac3', class: "usa-label--required", part: "required" }, i18next.t('required')), hint && h("div", { key: '9eaf0a5d63ea07e7f4ae1eee6cc6ac4db6c0e5bb', class: "usa-hint" }, hint)), h("span", { key: '13f67f2c319080ac4c8f021e8818401b4d0df98c', class: "usa-error-message", role: "alert" }, error && (h(Fragment, { key: '49d3d2fe968b9d9ab766a273cd46ba8409408cc1' }, h("span", { key: 'd1cc1252467866665b840eb253368b89dbd03f0b', class: "usa-sr-only" }, i18next.t('error')), " ", error))), h("slot", { key: '2362384a0de7f2b2ea66c1766e693bb261128f0b' })))));
    }
    static get is() { return "va-radio"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-radio.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-radio.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The text label for the radio group."
                },
                "attribute": "label",
                "reflect": false
            },
            "hint": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional hint text."
                },
                "attribute": "hint",
                "reflect": false
            },
            "required": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Whether or not this input field is required."
                },
                "attribute": "required",
                "reflect": false,
                "defaultValue": "false"
            },
            "error": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "A string with an error message."
                },
                "attribute": "error",
                "reflect": false
            },
            "enableAnalytics": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Whether or not an analytics event will be fired."
                },
                "attribute": "enable-analytics",
                "reflect": false,
                "defaultValue": "false"
            },
            "labelHeaderLevel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Insert a header with defined level inside the label (legend)"
                },
                "attribute": "label-header-level",
                "reflect": false
            },
            "headerAriaDescribedby": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "An optional message that will be read by screen readers when the header is focused. The label-header-level\nprop must be set for this to be active."
                },
                "attribute": "header-aria-describedby",
                "reflect": false
            },
            "messageAriaDescribedby": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "An optional message that will be read by screen readers when a radio option is focused."
                },
                "attribute": "message-aria-describedby",
                "reflect": false
            },
            "useFormsPattern": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Enabling this will add a heading and description for integrating into the forms pattern. Accepts `single` or `multiple` to indicate if the form is a single input or will have multiple inputs"
                },
                "attribute": "use-forms-pattern",
                "reflect": false
            },
            "formHeadingLevel": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The heading level for the heading if `useFormsPattern` is true."
                },
                "attribute": "form-heading-level",
                "reflect": false,
                "defaultValue": "3"
            },
            "formHeading": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The content of the heading if `useFormsPattern` is true."
                },
                "attribute": "form-heading",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "componentLibraryAnalytics",
                "name": "component-library-analytics",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event used to track usage of the component. This is emitted when a\nradio option is selected and enableAnalytics is true."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "vaValueChange",
                "name": "vaValueChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event emitted when the selected value changes"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "radioOptionSelected",
                "method": "radioOptionSelectedHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
