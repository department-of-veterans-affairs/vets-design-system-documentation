import { Host, h, } from "@stencil/core";
import classnames from "classnames";
/**
 * Use a heading element with an attribute named slot and a value of "headline" to
 * control what is displayed for the alert's headline. Any children passed into
 * this component without a parent slot "headline" will render in the alert's body.
 */
/**
 * @componentName Alert
 * @maturityCategory use
 * @maturityLevel best_practice
 */
export class VaAlert {
    constructor() {
        this.status = 'info';
        this.disableAnalytics = false;
        this.visible = true;
        this.closeBtnAriaLabel = 'Close notification';
        this.closeable = false;
        this.fullWidth = false;
        this.slim = false;
    }
    closeHandler(e) {
        this.closeEvent.emit(e);
    }
    handleAlertBodyClick(e) {
        let headlineText = null;
        // This is the happy path, meaning the user isn't using IE11
        try {
            const children = this.el.shadowRoot.querySelector('slot').assignedNodes();
            // An empty array means that there isn't a node with `slot="headline"`
            headlineText = children.length > 0 ? children[0].textContent : null;
        }
        catch (e) {
            // This is where we handle the edge case of the user being on IE11
            const children = this.el.shadowRoot.childNodes;
            const headerList = children.filter((node) => 
            /* eslint-disable-next-line i18next/no-literal-string */
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName.toLowerCase()));
            headlineText = headerList.length > 0 ? headerList[0].textContent : null;
        }
        if (!this.disableAnalytics) {
            const target = e.target;
            // If it's a link being clicked, dispatch an analytics event
            if ((target === null || target === void 0 ? void 0 : target.tagName) === 'A') {
                const detail = {
                    componentName: 'va-alert',
                    action: 'linkClick',
                    details: {
                        clickLabel: target.innerText,
                        headline: headlineText,
                        status: this.status,
                        closeable: this.closeable,
                    },
                };
                this.componentLibraryAnalytics.emit(detail);
            }
        }
    }
    componentDidLoad() {
        this.vaComponentDidLoad.emit();
    }
    render() {
        const { visible, closeable, slim } = this;
        let status = this.status;
        /* eslint-disable i18next/no-literal-string */
        // Enforce pre-defined statuses
        const definedStatuses = ['info', 'warning', 'error', 'success', 'continue'];
        if (definedStatuses.indexOf(status) === -1) {
            status = 'info';
        }
        /* eslint-enable i18next/no-literal-string */
        if (!visible)
            return h("div", { "aria-live": "polite" });
        const classes = classnames('usa-alert', `usa-alert--${status}`, {
            'usa-alert--success': status === 'continue',
            'usa-alert--slim': slim,
        });
        return (h(Host, null, h("div", { role: this.el.getAttribute('data-role'), class: classes, "aria-label": this.el.getAttribute('data-label') }, h("div", { class: "usa-alert__body", onClick: this.handleAlertBodyClick.bind(this), role: "presentation" }, status === 'continue' && (h("va-icon", { class: "va-alert__lock-icon", icon: "lock", size: slim ? 3 : 4 })), !slim && h("slot", { name: "headline" }), h("slot", null))), closeable && (h("button", { class: "va-alert-close", "aria-label": this.closeBtnAriaLabel, onClick: this.closeHandler.bind(this) }, h("va-icon", { icon: "cancel", size: 4 })))));
    }
    static get is() { return "va-alert"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-alert.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-alert.css"]
        };
    }
    static get properties() {
        return {
            "status": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 'info'\n    | 'warning'\n    | 'error'\n    | 'success'\n    | 'continue'",
                    "resolved": "\"continue\" | \"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Determines the icon and border/background color."
                },
                "attribute": "status",
                "reflect": true,
                "defaultValue": "'info'"
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
            "visible": {
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
                    "text": "If `true`, the alert will be visible."
                },
                "attribute": "visible",
                "reflect": false,
                "defaultValue": "true"
            },
            "closeBtnAriaLabel": {
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
                    "text": "Aria-label text for the close button."
                },
                "attribute": "close-btn-aria-label",
                "reflect": false,
                "defaultValue": "'Close notification'"
            },
            "closeable": {
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
                    "text": "If `true`, a close button will be displayed."
                },
                "attribute": "closeable",
                "reflect": true,
                "defaultValue": "false"
            },
            "fullWidth": {
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
                    "text": "If `true`, the alert will be full width.\nShould be for emergency communication only."
                },
                "attribute": "full-width",
                "reflect": false,
                "defaultValue": "false"
            },
            "slim": {
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
                    "text": "Displays the slim variation."
                },
                "attribute": "slim",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "vaComponentDidLoad",
                "name": "va-component-did-load",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires when the component has successfully finished rendering for the first\ntime."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "closeEvent",
                "name": "closeEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires when the component is closed by clicking on the close icon. This fires only\nwhen closeable is true."
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
}
