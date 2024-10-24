import { Host, h, } from "@stencil/core";
import isChromatic from "chromatic/isChromatic";
/**
 * @componentName Loading indicator
 * @maturityCategory use
 * @maturityLevel best_practice
 */
export class VaLoadingIndicator {
    constructor() {
        this.loadingStartTime = null;
        this.observer = null;
        this.message = undefined;
        this.label = 'Loading';
        this.setFocus = false;
        this.enableAnalytics = false;
    }
    componentDidLoad() {
        if (this.setFocus && this.spinner) {
            this.spinner.focus();
        }
        this.loadingStartTime = Date.now();
        const parentNode = this.el.parentNode;
        const callback = mutationsList => {
            // Use traditional 'for loops' for IE 11
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    const loadingIndicatorRemoved = Array.from(mutation.removedNodes.values()).filter((node) => { var _a; return ((_a = node === null || node === void 0 ? void 0 : node.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'va-loading-indicator'; }).length > 0;
                    if (this.enableAnalytics && loadingIndicatorRemoved) {
                        const ev = new CustomEvent('component-library-analytics', {
                            bubbles: true,
                            composed: true,
                            detail: {
                                componentName: 'va-loading-indicator',
                                action: 'displayed',
                                details: {
                                    displayTime: Date.now() - this.loadingStartTime,
                                    message: this.message,
                                },
                            },
                        });
                        parentNode.dispatchEvent(ev);
                    }
                }
            }
        };
        this.observer = new MutationObserver(callback);
        this.observer.observe(parentNode, {
            childList: true,
        });
    }
    render() {
        const { message, label } = this;
        let className = "loading-indicator";
        if (isChromatic()) {
            className += " chromatic";
        }
        return (h(Host, { key: '547679969619d7b801adda549710bfe3eb449faa', "aria-live": "polite" }, h("div", { key: '44f15fc373bc890fa3fede96cef680d6885a3815', ref: el => (this.spinner = el), class: className, role: "progressbar", "aria-label": label, "aria-valuetext": message, tabindex: "-1" }), message));
    }
    static get is() { return "va-loading-indicator"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-loading-indicator.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-loading-indicator.css"]
        };
    }
    static get properties() {
        return {
            "message": {
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
                    "text": "The message visible on screen when loading"
                },
                "attribute": "message",
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
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "An aria label"
                },
                "attribute": "label",
                "reflect": false,
                "defaultValue": "'Loading'"
            },
            "setFocus": {
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
                    "text": "Set to true if the loading indicator should capture focus"
                },
                "attribute": "set-focus",
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
                    "text": "Analytics tracking function(s) will be called. Form components\nare disabled by default due to PII/PHI concerns."
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
}
