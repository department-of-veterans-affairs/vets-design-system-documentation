import { Host, h, } from "@stencil/core";
import classnames from "classnames";
/**
 * @componentName Alert - expandable
 * @maturityCategory caution
 * @maturityLevel candidate
 */
export class VaAlertExpandable {
    constructor() {
        this.open = undefined;
        this.status = undefined;
        this.trigger = undefined;
        this.disableAnalytics = false;
        this.iconless = false;
    }
    handleResize() {
        this.updateAlertBodyMaxHeight();
    }
    toggleOpen() {
        // Conditionally track the event.
        if (!this.disableAnalytics) {
            this.componentLibraryAnalytics.emit({
                componentName: 'va-alert-expandable',
                action: !this.open ? 'expand' : 'collapse',
                details: {
                    triggerText: this.trigger,
                },
            });
        }
        this.open = !this.open;
    }
    handleKeydown(event) {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.toggleOpen();
        }
    }
    // Ensures that the CSS animation is consistent and uses the correct max-height for its content
    /* eslint-disable i18next/no-literal-string */
    updateAlertBodyMaxHeight() {
        const bodyElm = this.el.shadowRoot.getElementById('alert-body');
        const contentHeight = bodyElm.scrollHeight + 'px';
        // the additional 2em is #alert-body margin-top and margin-bottom when open
        bodyElm.style.setProperty('--calc-max-height', 'calc(' + contentHeight + ' + 2rem)');
    }
    /* eslint-enable i18next/no-literal-string */
    componentDidLoad() {
        this.updateAlertBodyMaxHeight();
    }
    render() {
        const { status, open, iconless } = this;
        const alertClasses = classnames('alert-expandable', status, {
            'hide-icon': iconless,
        });
        const bodyClasses = classnames('alert-expandable-body', {
            open: open,
            closed: !open,
        });
        /* eslint-disable i18next/no-literal-string */
        const statusIcons = {
            continue: 'lock',
            error: 'info',
            warning: 'warning',
            info: 'info',
            success: 'check_circle',
        };
        const role = status === 'error' ? 'alert' : null;
        const ariaLive = status === 'error' ? 'assertive' : null;
        /* eslint-enable i18next/no-literal-string */
        return (h(Host, { key: 'f9b7a808ae0ff40b6247e83761d8485a0883fab7' }, h("div", { key: '15d1634b3dfd254ff5adc38a64d65e9c230eb591', role: role, "aria-live": ariaLive, class: alertClasses }, h("a", { key: 'aa0ca0fdad85ec30aadbc8275cd9ab2c99594bcc', role: "button", "aria-controls": "alert-body", "aria-expanded": this.open ? 'true' : 'false', tabIndex: 0, onClick: this.toggleOpen.bind(this), onKeyDown: this.handleKeydown.bind(this), class: "alert-expandable-trigger" }, !iconless && (h("va-icon", { key: '9b64838fc6606b15dab89efdc4904d2904a1bec1', class: "alert-expandable__status-icon", icon: statusIcons[status] || 'info', size: 3 })), h("div", { key: 'b0284e2207a6ae6643f67700549ee1834a5b0a61' }, h("span", { key: '13db1b1cf56f0716587d5266d3d7e20f012b3757', class: "alert-expandable-title" }, h("span", { key: '74fec1def64c9285972dd78c92debc43fc74a7bc', class: "sr-only" }, "Alert:\u00A0"), this.trigger), h("va-icon", { key: '9def91d4212df0695cae1fbf63ec69796bcbb69e', class: "alert-expandable-icon", icon: "chevron_right", size: 3 }))), h("div", { key: 'a26104885d223294c4ee0cae04ce499c47b095fa', id: "alert-body", class: bodyClasses }, h("div", { key: '64f540bad4d4e511880a5a56a1334b1c6d4e0bc3', id: "slot-wrap" }, h("slot", { key: 'ba32ab7b9eaf6dfdf5596560102515f4cd513cbd' }))))));
    }
    static get is() { return "va-alert-expandable"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-alert-expandable.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-alert-expandable.css"]
        };
    }
    static get properties() {
        return {
            "status": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'continue' | 'error' | 'info' | 'success' | 'warning'",
                    "resolved": "\"continue\" | \"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Determines the icon and background color.\nOne of `info`, `error`, `success`, `warning`, or `continue`"
                },
                "attribute": "status",
                "reflect": false
            },
            "trigger": {
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
                    "text": "The text to trigger the expansion"
                },
                "attribute": "trigger",
                "reflect": false
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
                    "text": "If `true`, doesn't fire the CustomEvent which can be used for analytics tracking."
                },
                "attribute": "disable-analytics",
                "reflect": false,
                "defaultValue": "false"
            },
            "iconless": {
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
                    "text": "If `true`, the status icon is removed."
                },
                "attribute": "iconless",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "open": {}
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
                    "text": "The event used to track usage of the component. This is emitted when an\nanchor link is clicked and disableAnalytics is not true."
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
                "name": "resize",
                "method": "handleResize",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
