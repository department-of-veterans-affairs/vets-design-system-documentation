import { Host, h, } from "@stencil/core";
import classnames from "classnames";
/**
 * @componentName Notification
 * @maturityCategory dont_use
 * @maturityLevel deprecated
 */
export class VaNotification {
    constructor() {
        this.visible = true;
        this.symbol = 'none';
        this.closeBtnAriaLabel = 'Close notification';
        this.closeable = false;
        this.hasBorder = true;
        this.hasCloseText = false;
        this.headline = undefined;
        this.headlineLevel = '3';
        this.dateTime = undefined;
        this.href = undefined;
        this.text = undefined;
        this.disableAnalytics = false;
    }
    /**
     * Listen for the va-link GA event and capture it so
     * that we can emit a single va-notification GA event that includes
     * the va-link details.
     */
    handleLinkAnalytics(event) {
        var _a, _b;
        // Prevent va-notification GA event from firing multiple times.
        if (event.detail.componentName === 'va-notification')
            return;
        // Prevent va-link GA event from firing.
        event.stopPropagation();
        if (!this.disableAnalytics) {
            const detail = {
                componentName: 'va-notification',
                action: 'linkClick',
                details: {
                    clickLabel: (_b = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.label, // va-link text
                    type: this.symbol,
                    headline: this.headline,
                },
            };
            this.componentLibraryAnalytics.emit(detail);
        }
    }
    closeHandler(e) {
        this.closeEvent.emit(e);
        if (!this.disableAnalytics) {
            const detail = {
                componentName: 'va-notification',
                action: 'close',
                details: {
                    type: this.symbol,
                    headline: this.headline,
                },
            };
            this.componentLibraryAnalytics.emit(detail);
        }
    }
    getHeadlineLevel() {
        const number = parseInt(this.headlineLevel, 10);
        return number >= 1 && number <= 6 ? `h${number}` : `h3`;
    }
    render() {
        const { visible, symbol, headline, dateTime, href, text, closeable, hasBorder, hasCloseText, } = this;
        const HeadlineLevel = this.getHeadlineLevel();
        if (!visible)
            return h("div", { "aria-live": "polite" });
        const classes = classnames('va-notification', symbol, { 'has-border': hasBorder });
        const ariaDescribedByLabel = `${headline} ${dateTime}`;
        return (h(Host, null, h("va-card", { "show-shadow": "true" }, h("div", { class: classes }, h("i", { "aria-hidden": "true", role: "img", class: symbol }), h("div", { class: "body", role: "presentation" }, headline ? h(HeadlineLevel, { part: "headline", "aria-describedby": ariaDescribedByLabel }, headline) : null, dateTime ? h("time", { dateTime: dateTime }, dateTime) : null, h("slot", null), (href && text) ? (h("va-link", { active: true, href: href, text: text })) : null)), closeable && (h("button", { class: "va-notification-close", "aria-label": this.closeBtnAriaLabel, onClick: this.closeHandler.bind(this) }, h("i", { "aria-hidden": "true", class: "fas fa-times-circle", role: "presentation" }), hasCloseText && (h("span", null, "CLOSE")))))));
    }
    static get is() { return "va-notification"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-notification.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-notification.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "If `true`, the card will be visible."
                },
                "attribute": "visible",
                "reflect": false,
                "defaultValue": "true"
            },
            "symbol": {
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
                    "text": "Symbol indicates type of notification\nCurrent options are: action-required, update"
                },
                "attribute": "symbol",
                "reflect": false,
                "defaultValue": "'none'"
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
            "hasBorder": {
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
                    "text": "If `false`, card will not have border"
                },
                "attribute": "has-border",
                "reflect": true,
                "defaultValue": "true"
            },
            "hasCloseText": {
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
                    "text": "If `false`, card will not have the word \"CLOSE\" next to close icon"
                },
                "attribute": "has-close-text",
                "reflect": false,
                "defaultValue": "false"
            },
            "headline": {
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
                    "text": "Headline for notification"
                },
                "attribute": "headline",
                "reflect": false
            },
            "headlineLevel": {
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
                    "text": "Define level for headline. Font size will remain the same regardless of header level."
                },
                "attribute": "headline-level",
                "reflect": false,
                "defaultValue": "'3'"
            },
            "dateTime": {
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
                    "text": "Date and time for notification. This will also be incorporated into a unique aria-describedby label."
                },
                "attribute": "date-time",
                "reflect": false
            },
            "href": {
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
                    "text": "Destination URL for link (optional)"
                },
                "attribute": "href",
                "reflect": false
            },
            "text": {
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
                    "text": "Text for destination link. Set to empty string if you don't want a link."
                },
                "attribute": "text",
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
                    "text": "If `true`, the component-library-analytics event is disabled."
                },
                "attribute": "disable-analytics",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
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
                "name": "component-library-analytics",
                "method": "handleLinkAnalytics",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
