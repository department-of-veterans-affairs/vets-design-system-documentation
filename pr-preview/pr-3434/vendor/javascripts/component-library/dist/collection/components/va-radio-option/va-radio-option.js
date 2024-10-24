import { h, } from "@stencil/core";
import classnames from "classnames";
export class VaRadioOption {
    constructor() {
        this.name = undefined;
        this.label = undefined;
        this.value = undefined;
        this.checked = false;
        this.tile = false;
        this.description = undefined;
        this.disabled = false;
        this.ariaDescribedby = undefined;
    }
    handleChange() {
        this.radioOptionSelected.emit();
    }
    render() {
        const { checked, name, value, label, disabled, tile, description } = this;
        const id = this.el.id || name + value;
        const ariaChecked = checked ? 'true' : 'false';
        const inputClass = classnames({
            'usa-radio__input': true,
            'usa-radio__input--tile': tile,
        });
        return (h("div", { key: '0c0b521e30a78cfe8b6b1ef9d5d55d5e0505240e', class: "usa-radio" }, h("input", { key: '6d16aba7ec1e33767f153629e4f2b789785a86bc', class: inputClass, type: "radio", name: name, value: value, checked: checked, disabled: disabled, onClick: () => this.handleChange(), id: id + 'input' }), h("label", { key: 'd2e5c838dbf84e23b86a56b9a6ddabe9733b6055', class: "usa-radio__label", htmlFor: id + 'input', role: "radio", "aria-checked": ariaChecked }, label, description && (h("span", { key: '99ade2ffe8974118d69bdb49626446d1feb6f49a', class: "usa-radio__label-description dd-privacy-hidden", "data-dd-action-name": "description" }, description)))));
    }
    static get is() { return "va-radio-option"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-radio-option.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-radio-option.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "The name attribute for the input element."
                },
                "attribute": "name",
                "reflect": false
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
                    "text": "The text label for the input element."
                },
                "attribute": "label",
                "reflect": false
            },
            "value": {
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
                    "text": "The value attribute for the input element."
                },
                "attribute": "value",
                "reflect": false
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Whether or not the option is selected."
                },
                "attribute": "checked",
                "reflect": false,
                "defaultValue": "false"
            },
            "tile": {
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
                    "text": "Whether or not the component will display as a tile."
                },
                "attribute": "tile",
                "reflect": false,
                "defaultValue": "false"
            },
            "description": {
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
                    "text": "Description of the option displayed below the option label."
                },
                "attribute": "description",
                "reflect": false
            },
            "disabled": {
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
                    "text": "Whether or not the radio option is disabled."
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "ariaDescribedby": {
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
                    "text": "Optional string for the ariaDescribedBy attribute."
                },
                "attribute": "aria-describedby",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "radioOptionSelected",
                "name": "radioOptionSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event emitted when the selected option value changes"
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
