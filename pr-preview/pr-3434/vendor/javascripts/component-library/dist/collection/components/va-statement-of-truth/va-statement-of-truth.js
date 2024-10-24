import { Host, h } from "@stencil/core";
/**
 * @componentName Statement of truth
 * @maturityCategory caution
 * @maturityLevel candidate
 */
export class VaStatementOfTruth {
    constructor() {
        this.handleInputChange = (event) => {
            const { value } = event.currentTarget;
            this.vaInputChange.emit({ value });
        };
        this.handleInputBlur = (event) => {
            this.vaInputBlur.emit(event);
        };
        this.handleCheckboxChange = (event) => {
            const { checked } = event.currentTarget;
            this.vaCheckboxChange.emit({ checked });
        };
        this.heading = 'Statement of truth';
        this.inputValue = '';
        this.inputError = '';
        this.checkboxError = '';
        this.inputMessageAriaDescribedby = '';
        this.checked = undefined;
        this.inputLabel = 'Your full name';
        this.checkboxLabel = 'I certify the information above is correct and true to the best of my knowledge and belief.';
    }
    render() {
        const { heading, inputLabel, checkboxLabel, inputMessageAriaDescribedby, checked, inputValue, inputError, checkboxError, } = this;
        return (h(Host, { key: '4463c2700c0100fc5b487e8d50812a8997da61b8' }, h("p", { key: '97be20c903141887f855cfad67536c44292a7164', class: "font-sans-6" }, h("strong", { key: '82b385c6b0eb14ea8eac2794159c8e7aa4aa7a03' }, "Note:"), " According to federal law, there are criminal penalties, including a fine and/or imprisonment for up to 5 years, for withholding information or for providing incorrect information (Reference: 18 U.S.C. 1001)."), h("article", { key: '43757585701911f9f2a4bbd5609261f12d0b7fe9' }, h("h3", { key: '00b11161a5b33c3bcc758138fd6195ad41b36971' }, heading), h("slot", { key: '4179eb9802a93e062087da8a1ef4db55fc1a18e2' }), h("p", { key: '91ea0f1a7ce7eca92b0da96d848579a5220e0e98', class: "font-sans-6" }, "I have read and accept the\u00A0", h("va-link", { key: '6da7e9ffdae0487c98ff78014fd74c9eaf7b7a8c', external: true, text: 'privacy policy', href: '/privacy-policy/' }), "."), h("va-text-input", { key: '463663a9baf49df5024d88f385f8e5c184ec6159', id: "veteran-signature", name: "veteran-signature", label: inputLabel, value: inputValue, "message-aria-describedby": inputMessageAriaDescribedby, required: true, error: inputError, onInput: this.handleInputChange, onBlur: this.handleInputBlur }), h("va-checkbox", { key: '5f9dbb6b2373643ab1bb6d68295838764bff6a6e', id: "veteran-certify", name: "veteran-certify", label: checkboxLabel, required: true, checked: checked, error: checkboxError, onVaChange: this.handleCheckboxChange }))));
    }
    static get is() { return "va-statement-of-truth"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-statement-of-truth.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-statement-of-truth.css"]
        };
    }
    static get properties() {
        return {
            "heading": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "An optional custom header for the component"
                },
                "attribute": "heading",
                "reflect": false,
                "defaultValue": "'Statement of truth'"
            },
            "inputValue": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The value to pre-fill the va-text-input element"
                },
                "attribute": "input-value",
                "reflect": false,
                "defaultValue": "''"
            },
            "inputError": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The error to be applied to the va-text-input element"
                },
                "attribute": "input-error",
                "reflect": false,
                "defaultValue": "''"
            },
            "checkboxError": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The error to be applied to the va-check-box element"
                },
                "attribute": "checkbox-error",
                "reflect": false,
                "defaultValue": "''"
            },
            "inputMessageAriaDescribedby": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "An optional message that will be read by screen readers when the input in the va-text-input component is focused."
                },
                "attribute": "input-message-aria-describedby",
                "reflect": false,
                "defaultValue": "''"
            },
            "checked": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The flag to prefill the checked state of the va-checkbox component"
                },
                "attribute": "checked",
                "reflect": false
            },
            "inputLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The label for the va-text-input component"
                },
                "attribute": "input-label",
                "reflect": false,
                "defaultValue": "'Your full name'"
            },
            "checkboxLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The label for the va-checkbox-component"
                },
                "attribute": "checkbox-label",
                "reflect": false,
                "defaultValue": "'I certify the information above is correct and true to the best of my knowledge and belief.'"
            }
        };
    }
    static get events() {
        return [{
                "method": "vaInputChange",
                "name": "vaInputChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event emitted when the value of the input changes"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "vaInputBlur",
                "name": "vaInputBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event emitted when the user tabs out of the input"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "vaCheckboxChange",
                "name": "vaCheckboxChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event emitted when the checked state of the va-checkbox changes"
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
