import { Build, Host, forceUpdate, h, Fragment, } from "@stencil/core";
import classnames from "classnames";
import { i18next } from "../..";
import { consoleDevError, getCharacterMessage, getHeaderLevel } from "../../utils/utils";
if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    i18next.init({ lng: 'cimode' });
}
/**
 * @nativeHandler onInput
 * @nativeHandler onBlur
 * @componentName Textarea
 * @maturityCategory use
 * @maturityLevel deployed
 * @guidanceHref form/textarea
 * @translations English
 * @translations Spanish
 */
export class VaTextarea {
    constructor() {
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
        i18next.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        i18next.off('languageChanged');
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
    render() {
        const { label, error, placeholder, name, required, value, hint, charcount, messageAriaDescribedby, useFormsPattern, formHeadingLevel, headerAriaDescribedby, formHeading, } = this;
        const maxlength = this.getMaxlength();
        const ariaDescribedbyIds = `${error ? 'input-error-message' : ''} ${charcount && maxlength ? 'charcount-message' : ''} ${messageAriaDescribedby ? 'input-message' : ''}`.trim() || null;
        const ariaLabeledByIds = `${useFormsPattern && formHeading ? 'form-question' : ''} ${useFormsPattern ? 'form-description' : ''} ${useFormsPattern && label ? 'input-label' : ''}`.trim() || null;
        const HeaderLevel = getHeaderLevel(this.labelHeaderLevel);
        const headerAriaDescribedbyId = headerAriaDescribedby ? 'header-message' : null;
        const charCountTooHigh = charcount && ((value === null || value === void 0 ? void 0 : value.length) > maxlength);
        const labelClass = classnames({
            'usa-label': true,
            'usa-label--error': error,
        });
        const inputClass = classnames({
            'usa-textarea': true,
            'usa-input--error': error,
        });
        const messageClass = classnames({
            'usa-hint': true,
            'usa-character-count__status': charcount,
            'usa-character-count__status--invalid': charcount && maxlength && (value === null || value === void 0 ? void 0 : value.length) > maxlength
        });
        const isFormsPattern = useFormsPattern === 'single' || useFormsPattern === 'multiple' ? true : false;
        let formsHeading = null;
        if (isFormsPattern) {
            const HeaderLevel = getHeaderLevel(formHeadingLevel);
            formsHeading = (h(Fragment, { key: '1d0feb487af8033204ed7e9740522c804687199a' }, formHeading &&
                h(HeaderLevel, { key: '48e79d80ffa9e7ab243a6bc894191e8c8b92927e', id: "form-question", part: "form-header" }, formHeading), h("div", { key: 'd43a4a6f6973b89fcbbefa8bebed92ac880affc2', id: "form-description" }, h("slot", { key: '0346e702686b26cb1d59d60d3e7905ce189896fa', name: "form-description" }))));
        }
        return (h(Host, { key: '139b3ee4750d1b9ebf78cb8302d1fdc5e0a70e80' }, formsHeading, h("div", { key: 'd92520a07e27f550d1f6200e962070afa512cf14', class: "input-wrap" }, label && (h("label", { key: '28c9b19ae63636b6553b4ed8fc10bf3edb65aee1', htmlFor: "input-type-textarea", id: "input-label", class: labelClass, part: "label" }, HeaderLevel ? (h(HeaderLevel, { part: "header", "aria-describedby": headerAriaDescribedbyId }, label)) : (label), "\u00A0", useFormsPattern === 'multiple' && (h("span", { key: '76548a9435a646db6fd290cfd33f8eb0640e4c73', id: "header-message", class: "usa-sr-only" }, label)), headerAriaDescribedby && (h("span", { key: '53f710b819e6f7a3217dc441f9a5b13be3f90614', id: "header-message", class: "usa-sr-only" }, headerAriaDescribedby)), required && h("span", { key: 'de3d31378f50877c21297e1296fe1728b9a8b2cb', class: "usa-label--required" }, i18next.t('required')), hint && h("div", { key: '3894332f189ccce69e67539148a1c939fce495fa', class: "usa-hint" }, hint))), h("slot", { key: '3b94ba88d8f9049a1f4b100b96ca9de5f7cd9040' }), h("span", { key: 'e8582814c79178fe95413b955b4df7c4ff61f6bd', id: "input-error-message", role: "alert" }, error && (h(Fragment, { key: '739b1c403ecee3c08f00df2a193c43a1a21c8161' }, h("span", { key: '73092b71d0c40cba28816b965e4cc31568d49068', class: "usa-sr-only" }, i18next.t('error')), h("span", { key: '023bb79cd440ab04f85c151f2513bd9b1c8e540c', class: "usa-error-message" }, error)))), h("textarea", { key: '4060ca33b87fb82ca52474bc71c700bbd119ddb6', class: inputClass, "aria-describedby": ariaDescribedbyIds, "aria-invalid": error || charCountTooHigh ? 'true' : 'false', "aria-labelledby": ariaLabeledByIds, onInput: this.handleInput, onBlur: this.handleBlur, id: "input-type-textarea", placeholder: placeholder, name: name, maxLength: charcount ? undefined : maxlength, value: value, part: "input-type-textarea" }), !charcount && maxlength && (value === null || value === void 0 ? void 0 : value.length) >= maxlength && (h("span", { key: '60785d7c8ba9a1775808ceec73b4d750e841ee99', class: messageClass, "aria-live": "polite" }, i18next.t('max-chars', { length: maxlength }))), charcount && maxlength && (h("span", { key: 'e4d68c999a11efa6b2d4144478f26bbc5c57288a', id: "charcount-message", class: messageClass, "aria-live": "polite" }, getCharacterMessage(value, maxlength))), messageAriaDescribedby && (h("span", { key: '908e9b36b38ad45cee2acf9eb48c7b4ffa6b7d86', id: "input-message", class: "usa-sr-only dd-privacy-hidden" }, messageAriaDescribedby)))));
    }
    static get is() { return "va-textarea"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-textarea.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-textarea.css"]
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
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The label for the textarea."
                },
                "attribute": "label",
                "reflect": false
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
                    "text": "The error message to render."
                },
                "attribute": "error",
                "reflect": false
            },
            "placeholder": {
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
                    "text": "The placeholder string."
                },
                "attribute": "placeholder",
                "reflect": false
            },
            "name": {
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
                    "text": "The name for the input."
                },
                "attribute": "name",
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
                    "text": "Set the input to required and render the (Required) text."
                },
                "attribute": "required",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "An optional message that will be read by screen readers when the input is focused."
                },
                "attribute": "message-aria-describedby",
                "reflect": false
            },
            "maxlength": {
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
                    "text": "The maximum number of characters allowed in the input.\nNegative and zero values will be ignored."
                },
                "attribute": "maxlength",
                "reflect": false
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The value of the textarea"
                },
                "attribute": "value",
                "reflect": true
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
                    "text": "Emit component-library-analytics events on the blur event."
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
                    "text": "Enabling this will add a heading and description for integrating into the forms pattern. Accepts `single` or `multiple` to indicate if the form is a single input or will have multiple inputs."
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
            },
            "charcount": {
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
                    "text": "Whether the component should show a character count message.\nHas no effect without maxlength being set."
                },
                "attribute": "charcount",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "The event used to track usage of the component. This is emitted when\nthe textarea is blurred and `enableAnalytics` is true"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
