import { Host, h, } from "@stencil/core";
import classnames from "classnames";
/**
 * @componentName Button - Icon
 * @nativeHandler onClick
 * @maturityCategory caution
 * @maturityLevel candidate
 */
export class VaButtonIcon {
    constructor() {
        /**
         * The type of button this will render as, currently a limited number of options
         */
        this.buttonTypeMap = {
            // eslint-disable-next-line i18next/no-literal-string
            'change-file': { icon: 'attach_file', text: 'Change File' },
            // eslint-disable-next-line i18next/no-literal-string
            'delete': { icon: 'delete', text: 'Delete' },
            // eslint-disable-next-line i18next/no-literal-string
            'cancel': { icon: 'cancel', text: 'Cancel' },
        };
        this.disableAnalytics = false;
        this.label = undefined;
        this.buttonType = undefined;
    }
    handleClick(_) {
        if (!this.disableAnalytics) {
            const detail = {
                componentName: 'va-button',
                action: 'click',
                details: {
                    // eslint-disable-next-line i18next/no-literal-string
                    type: 'tertiary',
                    label: this.buttonTypeMap[this.buttonType].text,
                },
            };
            this.componentLibraryAnalytics.emit(detail);
        }
    }
    render() {
        const { label, buttonType } = this;
        const buttonClass = classnames({
            'usa-button': true,
            'va-button-icon--destructive': buttonType === 'cancel' || buttonType === 'delete',
        });
        return (h(Host, { key: 'e610fa396de08e5d4eb4bd7428b0bb6afd574ac4' }, h("button", { key: '95af5dcd4ed5b2219863c3dfe22e6f09ea870a08', class: buttonClass, "aria-label": label, type: "button", part: "button" }, h("va-icon", { key: '4c8a449d7be3847d858ac2d82e99192b9388558c', icon: this.buttonTypeMap[buttonType].icon, size: 2 }), this.buttonTypeMap[buttonType].text)));
    }
    static get is() { return "va-button-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-button-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-button-icon.css"]
        };
    }
    static get properties() {
        return {
            "disableAnalytics": {
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
                    "text": "If `true`, the component-library-analytics event is disabled."
                },
                "attribute": "disable-analytics",
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
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The aria-label of the component."
                },
                "attribute": "label",
                "reflect": false
            },
            "buttonType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "keyof typeof this.buttonTypeMap",
                    "resolved": "\"cancel\" | \"change-file\" | \"delete\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "button-type",
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
                    "text": "The event used to track usage of the component."
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
                "name": "click",
                "method": "handleClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
