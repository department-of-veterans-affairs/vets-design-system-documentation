import { forceUpdate, Host, h, Fragment, } from "@stencil/core";
import classnames from "classnames";
import { i18next } from "../..";
import { Build } from "@stencil/core";
if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    i18next.init({ lng: 'cimode' });
}
/**
 * @nativeHandler onBlur
 * @componentName Checkbox
 * @maturityCategory use
 * @maturityLevel deployed
 * @guidanceHref form/checkbox
 * @translations English
 * @translations Spanish
 * @translations Tagalog
 */
export class VaCheckbox {
    constructor() {
        this.fireAnalyticsEvent = () => {
            var _a;
            // Either the description prop or the text content of the description slots
            const description = this.description ||
                [
                    // This won't work in IE
                    ...(_a = this.el.shadowRoot.querySelector('slot[name="description"]')) === null || _a === void 0 ? void 0 : _a.assignedNodes(),
                    // For IE
                    ...Array.from(this.el.shadowRoot.querySelectorAll('[slot="description"]')),
                ]
                    .map(n => n.textContent)
                    .join(' ');
            this.componentLibraryAnalytics.emit({
                componentName: 'va-checkbox',
                action: 'change',
                details: {
                    label: this.label,
                    description,
                    required: this.required,
                    checked: this.checked,
                },
            });
        };
        this.handleChange = (e) => {
            this.checked = e.target.checked;
            this.vaChange.emit({ checked: this.checked });
            if (this.enableAnalytics)
                this.fireAnalyticsEvent();
        };
        this.label = undefined;
        this.error = undefined;
        this.description = undefined;
        this.required = false;
        this.enableAnalytics = false;
        this.checked = false;
        this.hint = undefined;
        this.tile = false;
        this.checkboxDescription = undefined;
        this.disabled = false;
        this.messageAriaDescribedby = undefined;
        this.name = undefined;
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
        const { error, label, required, description, checked, hint, tile, checkboxDescription, disabled, messageAriaDescribedby, name } = this;
        const hasDescriptionSlot = !description &&
            this.el.querySelectorAll('[slot="description"]:not(:empty)').length > 0;
        const inputClass = classnames({
            'usa-checkbox__input': true,
            'usa-checkbox__input--tile': tile,
        });
        const descriptionClass = classnames({
            'usa-legend': true,
            'usa-label--error': error
        });
        const ariaDescribedbyIds = [
            messageAriaDescribedby ? 'input-message' : '',
            error ? 'checkbox-error-message' : '',
            description || hasDescriptionSlot ? 'description' : '',
            // Return null so we don't add the attribute if we have an empty string
        ].filter(Boolean).join(' ').trim() || null;
        const ariaChecked = checked ? 'true' : 'false';
        return (h(Host, { key: '364b94d59862392167ad6043fe45ce815e2551c5' }, description && (h("legend", { key: '8ad43df1eec41bc3929f843fdc1f5f1bda3ce700', id: "description", class: descriptionClass }, description)), hasDescriptionSlot && (h("div", { key: 'cf1014923c6060ff817a2baddadaf7551072b3a0', id: "description" }, h("slot", { key: '2e1eb84c1c38045c01b5b8ac92ade7917556ea7e', name: "description" }))), hint && h("span", { key: 'c74f9ffba770f92ec6ca483379e467870a1021f4', class: "usa-hint" }, hint), h("span", { key: 'ba80ae71de665f65df50dbb85ec1a1602e1f8808', id: "checkbox-error-message", role: "alert" }, error && (h(Fragment, { key: 'd770e23df0bc240c804e232c427c803a67bd1614' }, h("span", { key: 'c7f9d21b35f3be7822b6f823510f8dce5b70b9be', class: "usa-sr-only" }, i18next.t('error')), h("span", { key: 'e463bbad028ec6562528a15cd15f1aad8ec3cde8', class: "usa-error-message" }, error)))), h("div", { key: '37b238e24b9f865e2a4d388e8fdb1fc465a7e13c', class: "usa-checkbox", part: "checkbox" }, h("input", { key: '4e3951ed1c99760f983f53e7b461a9b33cd17118', class: inputClass, type: "checkbox", name: name || null, id: "checkbox-element", checked: checked, "aria-describedby": ariaDescribedbyIds, "aria-invalid": error ? 'true' : 'false', disabled: disabled, onChange: this.handleChange }), h("label", { key: 'e8d351fc9219361086a3a31d931ea91755ff4a9b', htmlFor: "checkbox-element", class: "usa-checkbox__label", part: "label", role: "checkbox", "aria-checked": ariaChecked }, label, "\u00A0", required && (h("span", { key: '00a90f788a9318b0142c3b15f6e3dba7a7fcf864', class: "usa-label--required" }, i18next.t('required'))), checkboxDescription && (h("span", { key: '4737c195cf6eed19b2203572249b978b5f625e5b', class: "usa-checkbox__label-description", part: "description" }, checkboxDescription))), messageAriaDescribedby && (h("span", { key: '2d431290e1bf1e9ad1e2a5641cba6d83fa6bcc4c', id: "input-message", class: "usa-sr-only dd-privacy-hidden" }, messageAriaDescribedby)))));
    }
    static get is() { return "va-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-checkbox.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-checkbox.css"]
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
                    "text": "The label for the checkbox."
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
                "reflect": true
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
                    "text": "The description to render. If this prop exists, va-checkbox will render it\ninstead of the named slot."
                },
                "attribute": "description",
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
                    "text": "True if the analytics event should fire."
                },
                "attribute": "enable-analytics",
                "reflect": false,
                "defaultValue": "false"
            },
            "checked": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Whether the checkbox is checked or not.\n\nNote: Because this isn't reflective, vaCheckbox.getAttribute('checked')\nwill not reflect the correct value. Use the property vaCheckbox.checked\ninstead."
                },
                "attribute": "checked",
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
            "checkboxDescription": {
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
                    "text": "Description of the option displayed below the checkbox label."
                },
                "attribute": "checkbox-description",
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
                    "text": "Whether or not the checkbox option is disabled."
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "An optional message that will be read by screen readers when the checkbox is focused."
                },
                "attribute": "message-aria-describedby",
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
                    "text": "The name to pass to the checkbox element."
                },
                "attribute": "name",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "vaChange",
                "name": "vaChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event emitted when the input value changes."
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
                    "text": "The event used to track usage of the component. This is emitted when the\ninput value changes and enableAnalytics is true."
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
