import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { d as defineCustomElement$2 } from './va-icon2.js';

const vaAlertExpandableCss = "p,a,ol,ul,li,dl,dt,dd,form,label,button{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5}.sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}a{text-decoration:none;color:var(--vads-color-link);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:color, background-color, border-color;transition-property:color, background-color, border-color}a:hover{background-color:rgba(0, 0, 0, 0.05);color:inherit}a:visited{color:var(--vads-color-link-visited)}:host{display:block}:host([status='warning']){background-color:var(--vads-color-gold-lightest)}:host([status='info']){background-color:var(--vads-color-primary-alt-lightest)}:host([status='error']){background-color:var(--vads-color-secondary-lightest)}:host([status='success']){background-color:var(--vads-color-success-lighter)}:host([status='continue']){background-color:var(--vads-color-base-lightest)}.alert-expandable-trigger{-ms-flex-align:start;align-items:flex-start;cursor:pointer;display:-ms-flexbox;display:flex;padding:0.75rem}div.warning .alert-expandable-trigger:hover{background-color:var(--vads-color-gold-lighter)}div.info .alert-expandable-trigger:hover{background-color:var(--vads-color-primary-alt-light)}div.error .alert-expandable-trigger:hover{background-color:var(--vads-color-secondary-light)}div.success .alert-expandable-trigger:hover{background-color:var(--vads-color-green-lighter)}div.continue .alert-expandable-trigger:hover{background-color:var(--vads-color-base-lighter)}.alert-expandable-title{border-bottom-right-radius:1px;border-bottom:2px dotted var(--vads-color-primary-alt-dark);color:var(--vads-color-base-darker);cursor:pointer;font-weight:600}.alert-expandable-body{overflow:hidden}.alert-expandable-body.closed{opacity:0;max-height:0;visibility:hidden;overflow:hidden}.alert-expandable-body.open{height:auto;opacity:1;-webkit-transition:max-height 700ms 0ms, opacity 500ms 200ms, visibility 500ms 200ms;transition:max-height 700ms 0ms, opacity 500ms 200ms, visibility 500ms 200ms;max-height:var(--calc-max-height)}#slot-wrap{margin:0.75rem}.alert-expandable-icon{display:inline-block;color:var(--vads-color-primary-alt-darkest);font-size:16px;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:-webkit-transform 0.15s linear;transition:-webkit-transform 0.15s linear;transition:transform 0.15s linear;transition:transform 0.15s linear, -webkit-transform 0.15s linear;line-height:1;vertical-align:bottom}a[aria-expanded='true'] .alert-expandable-icon{-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-transition:-webkit-transform 0.15s linear;transition:-webkit-transform 0.15s linear;transition:transform 0.15s linear;transition:transform 0.15s linear, -webkit-transform 0.15s linear}.alert-expandable__status-icon{color:var(--vads-color-base-darker);margin-right:8px}::slotted(*){margin-bottom:0 !important;margin-top:0 !important}";
const VaAlertExpandableStyle0 = vaAlertExpandableCss;

const VaAlertExpandable$1 = /*@__PURE__*/ proxyCustomElement(class VaAlertExpandable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
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
    get el() { return this; }
    static get style() { return VaAlertExpandableStyle0; }
}, [1, "va-alert-expandable", {
        "status": [1],
        "trigger": [1],
        "disableAnalytics": [4, "disable-analytics"],
        "iconless": [4],
        "open": [32]
    }, [[9, "resize", "handleResize"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-alert-expandable", "va-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "va-alert-expandable":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaAlertExpandable$1);
            }
            break;
        case "va-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const VaAlertExpandable = VaAlertExpandable$1;
const defineCustomElement = defineCustomElement$1;

export { VaAlertExpandable, defineCustomElement };
