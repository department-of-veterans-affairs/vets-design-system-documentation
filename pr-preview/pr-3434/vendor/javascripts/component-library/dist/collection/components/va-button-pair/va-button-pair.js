import { Host, h, } from "@stencil/core";
/**
 * @componentName Button pair
 * @maturityCategory caution
 * @maturityLevel candidate
 * @guidanceHref button/button-pair
 */
export class VaButtonPair {
    constructor() {
        this.handlePrimaryClick = (e) => {
            this.primaryClick.emit(e);
        };
        this.handleSecondaryClick = (e) => {
            this.secondaryClick.emit(e);
        };
        // get text for the left button; custom text takes precedence
        this.getLeftButtonText = () => {
            let text;
            if (this.leftButtonText) {
                text = this.leftButtonText;
            }
            else {
                text = this.update ? 'Update' : 'Yes';
            }
            return text;
        };
        // get text for the right button; custom text takes precedence
        this.getRightButtonText = () => {
            let text;
            if (this.rightButtonText) {
                text = this.rightButtonText;
            }
            else {
                text = this.update ? 'Cancel' : 'No';
            }
            return text;
        };
        this.continue = false;
        this.disableAnalytics = false;
        this.primaryLabel = undefined;
        this.secondaryLabel = undefined;
        this.submit = undefined;
        this.update = false;
        this.leftButtonText = undefined;
        this.rightButtonText = undefined;
    }
    /**
     * Listen for the va-button GA event and capture it so
     * that we can emit a single va-button-pair GA event that includes
     * the va-button details.
     */
    handleButtonAnalytics(event) {
        var _a;
        // Prevent va-button-pair GA event from firing multiple times.
        if (event.detail.componentName === 'va-button-pair')
            return;
        // Prevent va-button GA event from firing.
        event.stopPropagation();
        if (!this.disableAnalytics) {
            const detail = {
                componentName: 'va-button-pair',
                action: 'click',
                details: Object.assign({ type: null, label: null }, (_a = event.detail) === null || _a === void 0 ? void 0 : _a.details),
            };
            this.componentLibraryAnalytics.emit(detail);
        }
    }
    render() {
        const { continue: _continue, disableAnalytics, handlePrimaryClick, handleSecondaryClick, primaryLabel, secondaryLabel, submit, } = this;
        if (_continue) {
            return (h(Host, null, h("ul", { class: "usa-button-group" }, h("li", { class: "usa-button-group__item" }, h("va-button", { back: true, "disable-analytics": disableAnalytics, label: secondaryLabel, onClick: handleSecondaryClick })), h("li", { class: "usa-button-group__item" }, h("va-button", { continue: true, "disable-analytics": disableAnalytics, label: primaryLabel, onClick: handlePrimaryClick, submit: submit })))));
        }
        return (h(Host, null, h("ul", { class: "usa-button-group" }, h("li", { class: "usa-button-group__item" }, h("va-button", { "disable-analytics": disableAnalytics, label: primaryLabel, onClick: handlePrimaryClick, text: this.getLeftButtonText(), submit: submit })), h("li", { class: "usa-button-group__item" }, h("va-button", { "disable-analytics": disableAnalytics, label: secondaryLabel, onClick: handleSecondaryClick, secondary: true, text: this.getRightButtonText() })))));
    }
    static get is() { return "va-button-pair"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-button-pair.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-button-pair.css"]
        };
    }
    static get properties() {
        return {
            "continue": {
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
                    "text": "If `true`, button pair will use Continue and Back for button text."
                },
                "attribute": "continue",
                "reflect": false,
                "defaultValue": "false"
            },
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
            "primaryLabel": {
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
                    "text": "Applies to the primary button aria-label."
                },
                "attribute": "primary-label",
                "reflect": false
            },
            "secondaryLabel": {
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
                    "text": "Applies to the secondary button aria-label."
                },
                "attribute": "secondary-label",
                "reflect": false
            },
            "submit": {
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
                    "text": "Having this attribute present will set the type of this button as 'submit'.\nThe va-button element must be within a `form` element for this functionality to take place\nA value of: `prevent` will trigger the onsubmit callback on the form, but won't submit the form;\n`skip` will submit the form but not trigger the onsubmit callback;\nAll other values will trigger the onsubmit and onclick callbacks, then submit the form; in that order."
                },
                "attribute": "submit",
                "reflect": false
            },
            "update": {
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
                    "text": "If `true`, button pair will use Update and Cancel for button text."
                },
                "attribute": "update",
                "reflect": false,
                "defaultValue": "false"
            },
            "leftButtonText": {
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
                    "text": "Custom text that will be applied to the left va-button inside the component.\nIf set will override text controlled by the 'update' prop."
                },
                "attribute": "left-button-text",
                "reflect": false
            },
            "rightButtonText": {
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
                    "text": "Custom text that will be applied to the right va-button inside the component.\nIf set will override text controlled by the 'update' prop,"
                },
                "attribute": "right-button-text",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "primaryClick",
                "name": "primaryClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires when the primary button is clicked."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "secondaryClick",
                "name": "secondaryClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires when the secondary button is clicked."
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
                    "text": "The event used to track usage of the component."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "component-library-analytics",
                "method": "handleButtonAnalytics",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
