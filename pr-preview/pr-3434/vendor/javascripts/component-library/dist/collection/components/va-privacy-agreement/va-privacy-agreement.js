import { Host, h } from "@stencil/core";
import classnames from "classnames";
/**
 * @componentName Privacy agreement
 * @maturityCategory caution
 * @maturityLevel available
 */
export class VaPrivacyAgreement {
    constructor() {
        this.handleCheckboxChange = (e) => {
            this.checked = e.target.checked;
            this.vaChange.emit({ checked: this.checked });
            if (this.enableAnalytics) {
                this.componentLibraryAnalytics.emit({
                    componentName: 'va-privacy-agreement',
                    action: 'click',
                    details: {
                        checked: this.checked
                    },
                });
            }
        };
        this.checked = false;
        this.showError = false;
        this.enableAnalytics = false;
    }
    errorMessage() {
        return (this.showError && !this.checked)
            ? "You must accept the privacy policy before continuing."
            : null;
    }
    render() {
        const labelClass = classnames({
            'usa-label--error': this.showError
        });
        return (h(Host, { key: 'ae62338a2e8475f12f3407524702c7d561f06081' }, h("va-checkbox", { key: 'dd121aef9f7d461f338ecfd155e17582c3eb97ed', required: true, error: this.errorMessage(), id: "checkbox", label: "I have read and accept the privacy policy.", checked: this.checked, onVaChange: this.handleCheckboxChange }, h("span", { key: 'd531e4af848d7fbf8edc09ccd5d9815300344303', class: `${labelClass} description`, slot: "description" }, "Please read and accept the\u00A0", h("a", { key: '96f8241aec3f6592fe0c8f56fcb9dbc7ae04e55b', href: "/privacy-policy/", target: "_blank" }, "privacy policy", h("va-icon", { key: 'e684d794200629d5e5eafbc2d6fc3f571dd968db', class: "privacy-policy-icon", icon: "launch", size: 2 }), h("span", { key: '0f4a636d0c36575300b39780e5bd53def0f7be3e', class: "usa-sr-only" }, "opens in a new window")), "."))));
    }
    static get is() { return "va-privacy-agreement"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-privacy-agreement.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-privacy-agreement.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Whether the checkbox is checked or not."
                },
                "attribute": "checked",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Whether to display the error message or not."
                },
                "attribute": "show-error",
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
                    "text": "Emit component-library-analytics events on the blur event."
                },
                "attribute": "enable-analytics",
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
                    "text": "The event used to track usage of the component. This is emitted when the\nchecked value changes and enableAnalytics is true."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "vaChange",
                "name": "vaChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event emitted when the checkbox changes."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
