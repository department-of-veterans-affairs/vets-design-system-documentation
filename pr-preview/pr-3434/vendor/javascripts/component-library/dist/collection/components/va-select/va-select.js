import { forceUpdate, Host, h, Fragment, } from "@stencil/core";
import classnames from "classnames";
import { i18next } from "../..";
import { getSlottedNodes } from "../../utils/utils";
/**
 * @nativeHandler onKeyDown
 * @componentName Select
 * @maturityCategory use
 * @maturityLevel deployed
 * @guidanceHref form/select
 * @translations English
 * @translations Spanish
 */
export class VaSelect {
    constructor() {
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
        i18next.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        i18next.off('languageChanged');
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
        return (h(Host, { key: '39bab09123631e2478c690636b8f231f9e71be72' }, label && (h("label", { key: '57dc50adce29902a24c39c05e9d7db6e4a9c3bf3', htmlFor: "options", class: labelClass, part: "label" }, label, required && (h("span", { key: '7e0a65b91465459de3adef89dc83f6fdfb16d86b', class: "usa-label--required" }, " ", i18next.t('required'))))), hint && (h("span", { key: 'ee8cf774f53afc15b51bb42e50c27928f13cbd94', class: "usa-hint", id: "input-hint" }, hint)), h("span", { key: '30ecf636ffebf2e9625f9691b4a92f20868a067c', id: errorID, role: "alert" }, showError && error && (h(Fragment, { key: '83f7d0c56bd4f672b16566d824b954eb237db616' }, h("span", { key: '4b06d590aa38bb2dff18c5c0b7dc9a0bcb79802e', class: "usa-sr-only" }, i18next.t('error')), h("span", { key: '2bbe45696d4f1092e81800bc6cd0cb7ac2f9e5d9', class: "usa-error-message" }, error)))), h("slot", { key: '2480eceb19344e0663c82d1949a1185b8b506663', onSlotchange: () => this.populateOptions() }), h("select", { key: 'cc0220bd96db8d223501d43576030f434eb3fd54', class: selectClass, "aria-describedby": ariaDescribedbyIds, "aria-invalid": invalid || error ? 'true' : 'false', id: "options", name: name, required: required || null, onKeyDown: () => this.handleKeyDown(), onChange: e => this.handleChange(e), part: "select" }, h("option", { key: "0", value: "", selected: true }, i18next.t('select')), this.options), messageAriaDescribedby && (h("span", { key: '76e168f3286173803213e22c002d7584da4d3a3c', id: "input-message", class: "usa-sr-only dd-privacy-hidden" }, messageAriaDescribedby))));
    }
    static get is() { return "va-select"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-select.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-select.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Whether or not this is a required field."
                },
                "attribute": "required",
                "reflect": false,
                "defaultValue": "false"
            },
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
                    "text": "Text label for the field."
                },
                "attribute": "label",
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
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Name attribute for the select field."
                },
                "attribute": "name",
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
                    "text": "Selected value (will get updated on select)."
                },
                "attribute": "value",
                "reflect": true
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
                    "text": "Error message to display. When defined, this indicates an error."
                },
                "attribute": "error",
                "reflect": false
            },
            "reflectInputError": {
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
                    "text": "Whether or not to add usa-input--error as class if error message is outside of component"
                },
                "attribute": "reflect-input-error",
                "reflect": false,
                "defaultValue": "false"
            },
            "invalid": {
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
                    "text": "Whether or not `aria-invalid` will be set on the inner select. Useful when\ncomposing the component into something larger, like a date component."
                },
                "attribute": "invalid",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Whether or not to fire the analytics events"
                },
                "attribute": "enable-analytics",
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
                    "text": "An optional message that will be read by screen readers when the select is focused."
                },
                "attribute": "message-aria-describedby",
                "reflect": false
            },
            "width": {
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
                    "text": "Displays the select at a specific width. Accepts 2xs (4ex), xs (7ex), sm or small (10ex), md or medium (20ex), lg (30ex), xl (40ex), and 2xl (50ex)."
                },
                "attribute": "width",
                "reflect": false
            },
            "showError": {
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
                    "text": "Whether an error message should be shown - set to false when this component is used inside va-date or va-memorable-date\nin which the error for the va-select will be rendered outside of va-select"
                },
                "attribute": "show-error",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "options": {}
        };
    }
    static get events() {
        return [{
                "method": "vaKeyDown",
                "name": "vaKeyDown",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event attached to select's onkeydown"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "vaSelect",
                "name": "vaSelect",
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
            }, {
                "method": "componentLibraryAnalytics",
                "name": "component-library-analytics",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event used to track usage of the component. This is emitted when an\noption is selected and enableAnalytics is true."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }];
    }
}
