import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { d as defineCustomElement$4 } from './va-card2.js';
import { d as defineCustomElement$3 } from './va-icon2.js';
import { d as defineCustomElement$2 } from './va-link2.js';

const vaNotificationCss = ":host{display:block;position:relative}:host([has-border=false])>va-card{border:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}::slotted([slot=date]){display:block;color:var(--vads-color-base-darker);font-size:16px}va-link{display:block;margin-top:3px}:host i{font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:900;line-height:1;margin-right:16px}i.fa-times-circle::before{content:\"\\f057\";font-size:20px}i.action-required::before{content:\"\\f06a\";color:var(--vads-color-secondary-dark);font-size:32px}i.update::before{content:\"\\f05a\";color:var(--vads-color-primary);font-size:32px}.va-notification{display:table;width:100%;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box}div.body{display:table-cell;vertical-align:middle;width:100%}h1,h2,h3,h4,h5,h6{margin:0;font-size:17px;font-family:var(--font-serif);line-height:22px;width:66%}@media (min-width: 768px){h1,h2,h3,h4,h5,h6{width:100%}}p{line-height:24px}.va-notification-close{margin:18px 12px;padding:0px;width:auto;color:var(--vads-color-base-darker);font-size:16px;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0px;cursor:pointer;background:transparent;display:block;position:absolute;right:0px;top:0px}.va-notification-close:hover{color:var(--vads-color-base);background-color:transparent}.va-notification-close:active,.va-notification-close:focus{color:var(--vads-color-base);background-color:transparent;outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}.va-notification-close>i{margin-right:8px;vertical-align:middle}.va-notification-close>span{font-weight:600;margin-right:5px}";
const VaNotificationStyle0 = vaNotificationCss;

const VaNotification$1 = /*@__PURE__*/ proxyCustomElement(class VaNotification extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.closeEvent = createEvent(this, "closeEvent", 7);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
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
    get el() { return this; }
    static get style() { return VaNotificationStyle0; }
}, [1, "va-notification", {
        "visible": [4],
        "symbol": [1],
        "closeBtnAriaLabel": [1, "close-btn-aria-label"],
        "closeable": [516],
        "hasBorder": [516, "has-border"],
        "hasCloseText": [4, "has-close-text"],
        "headline": [1],
        "headlineLevel": [1, "headline-level"],
        "dateTime": [1, "date-time"],
        "href": [1],
        "text": [1],
        "disableAnalytics": [4, "disable-analytics"]
    }, [[0, "component-library-analytics", "handleLinkAnalytics"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-notification", "va-card", "va-icon", "va-link"];
    components.forEach(tagName => { switch (tagName) {
        case "va-notification":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaNotification$1);
            }
            break;
        case "va-card":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "va-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "va-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const VaNotification = VaNotification$1;
const defineCustomElement = defineCustomElement$1;

export { VaNotification, defineCustomElement };
