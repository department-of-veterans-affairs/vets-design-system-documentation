import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { C as CONTACTS } from './contacts.js';
import { d as defineCustomElement$4 } from './va-button2.js';
import { d as defineCustomElement$3 } from './va-icon2.js';
import { d as defineCustomElement$2 } from './va-modal2.js';
import { d as defineCustomElement$1 } from './va-telephone2.js';

const vaCrisisLineModalCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}.va-crisis-line-container{position:relative;margin:auto;background-color:var(--vads-color-secondary-dark)}@media (min-width: 1008px){.va-crisis-line-container{max-width:60.938rem;background-color:transparent}}a{color:var(--vads-color-link)}button.va-crisis-line{cursor:pointer;background-color:var(--vads-color-secondary-darkest);display:block;border-radius:0;color:var(--vads-button-color-text-primary-alt-on-light);font-family:var(--font-source-sans);font-size:16px;font-weight:normal;text-decoration:none;padding:0;margin:0;width:100%;border:0;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:background-color;transition-property:background-color}button.va-crisis-line:focus{outline-offset:-2px}button.va-crisis-line:hover,button.va-crisis-line:active{background-color:#8b0a03}@media (min-width: 1008px){button.va-crisis-line:hover .va-crisis-line-icon,button.va-crisis-line:active .va-crisis-line-icon{background-color:#b51d09}}@media (min-width: 1008px){button.va-crisis-line{width:auto;border-radius:0 0 2.3px 2.3px;-webkit-box-shadow:0 2px 5px var(--vads-color-base);box-shadow:0 2px 5px var(--vads-color-base)}}.va-crisis-line-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:auto}@media (min-width: 1008px){.va-crisis-line-inner{text-align:left;-ms-flex-pack:justify;justify-content:space-between}}.va-crisis-line-icon{content:\"\";background:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 96 60%22 width%3D%2296px%22 height%3D%2260px%22%3E%3Cpath d%3D%22M58 14c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm16 0c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm16 0c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zM58 30c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm16 0c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm16 0c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zM58 46c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm16 0c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm16 0c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm-48 2L32 60h-2V48H4c-2.20914 0-4-1.79086-4-4V4c0-2.20914 1.79086-4 4-4h40c2.20914 0 4 1.79086 4 4v40c0 2.20914-1.79086 4-4 4h-2zM24 31.72174L33.86667 39l-3.73334-11.86087L40 20.13043H28L24 8l-4 12.13043H8l9.86667 7.0087L14.13333 39 24 31.72174z%22 fill%3D%22%23FFF%22 fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\") no-repeat right 29%;background-size:30px auto;background-position:8px 8px;width:40px;height:36px;padding-right:3px;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:background-color;transition-property:background-color}@media (max-width: 480px){.va-crisis-line-icon{display:none}}@media (min-width: 1008px){.va-crisis-line-icon{border-bottom-left-radius:3.2px}}.va-crisis-line-text{padding:8px}.va-icon__right-arrow{position:relative;top:2px}.va-clm__icon{position:relative;top:15px;margin-right:23px}.va-crisis-panel{color:var(--vads-color-base)}.va-crisis-panel-body{max-height:100%}.va-crisis-panel-title{color:var(--vads-color-base);padding-left:41px;background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 96 60%22 width%3D%2296px%22 height%3D%2260px%22%3E%3Cpath d%3D%22M58 14c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm16 0c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm16 0c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zM58 30c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm16 0c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm16 0c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zM58 46c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm16 0c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm16 0c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6-2.6863 6-6 6zm-48 2L32 60h-2V48H4c-2.20914 0-4-1.79086-4-4V4c0-2.20914 1.79086-4 4-4h40c2.20914 0 4 1.79086 4 4v40c0 2.20914-1.79086 4-4 4h-2zM24 31.72174L33.86667 39l-3.73334-11.86087L40 20.13043H28L24 8l-4 12.13043H8l9.86667 7.0087L14.13333 39 24 31.72174z%22 fill%3D%22%23FFF%22 fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\") no-repeat left;background-position:left 5px;background-size:32px auto}.va-crisis-panel-list{list-style:none;padding:0}.va-crisis-panel-list>li{display:-ms-flexbox;display:flex;min-height:56px;margin-bottom:0;border-top:1px solid var(--vads-color-base-light)}.va-crisis-panel-list>li:last-child{border-bottom:1px solid var(--vads-color-base-light)}.va-crisis-panel-list>li>a,.va-crisis-panel-list>li>span{padding:8px 0;-ms-flex-item-align:center;align-self:center}";
const VaCrisisLineModalStyle0 = vaCrisisLineModalCss;

const VACrisisLineModal = /*@__PURE__*/ proxyCustomElement(class VACrisisLineModal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.isOpen = false;
        this.shifted = false;
    }
    setVisible() {
        this.isOpen = true;
    }
    setNotVisible() {
        this.isOpen = false;
    }
    // This keydown event listener tracks if the shift key is held down while changing focus
    trackShiftKey(e) {
        this.shifted = e.shiftKey;
    }
    // Redirects focus back to the modal, if the modal is open/visible
    trapFocus() {
        var _a;
        const modal = (_a = this.el) === null || _a === void 0 ? void 0 : _a.shadowRoot.querySelector('va-modal');
        const modalVisible = modal === null || modal === void 0 ? void 0 : modal.getAttribute('visible');
        if (modalVisible !== null && modalVisible !== 'false') {
            let focusedChild;
            const query = this.shifted
                ? '.last-focusable-child'
                : '[role="document"]';
            if (this.shifted) {
                focusedChild = modal === null || modal === void 0 ? void 0 : modal.querySelector(query);
            }
            else {
                focusedChild = modal === null || modal === void 0 ? void 0 : modal.shadowRoot.querySelector(query);
            }
            focusedChild === null || focusedChild === void 0 ? void 0 : focusedChild.focus();
        }
    }
    render() {
        return (h(Host, { key: '4e90c5d4db78e8d37d4e72bd00d723ffc207fd5c' }, h("div", { key: 'bc05ef2144c56cbf0d60a7f7da955ba36209654d', class: "va-crisis-line-container" }, h("button", { key: 'a7f4581ecfb67abd60ebc58153908bd1ceb4430f', onClick: () => this.setVisible(), onFocusin: () => this.trapFocus(), "data-show": "#modal-crisisline", class: "va-crisis-line va-overlay-trigger", part: "button" }, h("div", { key: '1c34f4579d7db003d731b0b9e69f0f58bc642caf', class: "va-crisis-line-inner" }, h("span", { key: 'dd11b1684c385712e0df2ee09861fecd92bdf93d', class: "va-crisis-line-icon", "aria-hidden": "true" }), h("span", { key: '8dfebbee9eb46675094e07963a68d85d1472afe1', class: "va-crisis-line-text" }, "Talk to the ", h("strong", { key: 'de53465ae24dfea04d8cccd9ad881a15bf0b590b' }, "Veterans Crisis Line"), " now"), h("va-icon", { key: 'dd02180de69097e0c09bbd74891cc87bf6566ea3', class: "va-icon__right-arrow", icon: "navigate_next", size: 3 })))), h("va-modal", { key: 'a0ab2dcc7e9db96f1874e74b8924aefde1ed9b90', modalTitle: "We\u2019re here anytime, day or night \u2013 24/7", onPrimaryButtonClick: () => this.setNotVisible(), onCloseEvent: () => this.setNotVisible(), visible: this.isOpen, large: true }, h("p", { key: 'a8cc0770ab7cb8cd2791f5a25f578251012cbe49' }, "If you are a Veteran in crisis or concerned about one, connect with our caring, qualified responders for confidential help. Many of them are Veterans themselves."), h("ul", { key: 'dfea79a845e3959b397f820b6fac4a7312a07261', class: "va-crisis-panel-list" }, h("li", { key: 'c7e18da47b5bb5bca1edb9000c3de4769fdb9cfd' }, h("va-icon", { key: '691a03eb6546edfa64c961d04ab184400844616a', class: "va-clm__icon", icon: "phone", size: 3 }), h("span", { key: '9d184d69e2c256469858a428da0ccfab6504b0a0' }, "Call", ' ', h("strong", { key: '59999060bbfd8b2eed02710e3c9519d15cc0ffc7' }, h("va-telephone", { key: '05ce0783810af34eb1641bea00b68fed4d0ba143', contact: "988" }), " and select 1"))), h("li", { key: '5f8cbde7e495ce7d0a0503fe4d59dc6136907d92' }, h("va-icon", { key: '55a91221adf00df947fdc0a712a4d40bd7623302', icon: "phone_iphone", class: "va-clm__icon", size: 3 }), h("span", { key: '80bb0f592dc03bdcac6992ced2b9b270eb3c329a' }, "Text\u00A0", h("strong", { key: 'c42270b926bb76f289265631800dda850654ea4e' }, h("va-telephone", { key: '5d746961661530563939267adcdd8d185dc5e5c7', sms: true, contact: "838255" })))), h("li", { key: '75e9e7b146d90901f36e34e21fda6c49ee5a9c85' }, h("va-icon", { key: 'd8fcdf74c85119f7623a12f0ca3c4d7b4a429438', icon: "chat", class: "va-clm__icon", size: 3 }), h("a", { key: '76fcf1c4b288aea711068a7d325fe8b976ab3539', class: "no-external-icon", href: "https://www.veteranscrisisline.net/get-help-now/chat/" }, "Start a confidential chat")), h("li", { key: 'f359a96b1f39f9bf5e9082b6563be99b6f5d608b' }, h("va-icon", { key: 'b76ffa21861676d1d515df138f18e0689cda4e1b', icon: "tty", class: "va-clm__icon", size: 3 }), h("p", { key: '9ad60032abc74eab181cbc1aea3fb70906286b7d' }, "Call TTY if you have hearing loss", ' ', h("strong", { key: '7f4d6d6b4a68ff6fe773f302fceceb0b6f20e83f' }, h("va-telephone", { key: '4466d858b720245c9e7726240b3e70ee29c2acfa', tty: true, contact: CONTACTS.CRISIS_TTY }))))), h("p", { key: '63d09c7339f8858c969e9d6ced03a06aa7c01237' }, "Get more resources at", ' ', h("a", { key: '34483ed00ac1ce1365f685bd4cf2816314fa0ddc', class: "no-external-icon", href: "https://www.veteranscrisisline.net/" }, "VeteransCrisisLine.net")))));
    }
    get el() { return this; }
    static get style() { return VaCrisisLineModalStyle0; }
}, [1, "va-crisis-line-modal", {
        "isOpen": [32],
        "shifted": [32]
    }, [[8, "keydown", "trackShiftKey"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-crisis-line-modal", "va-button", "va-icon", "va-modal", "va-telephone"];
    components.forEach(tagName => { switch (tagName) {
        case "va-crisis-line-modal":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VACrisisLineModal);
            }
            break;
        case "va-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "va-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "va-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "va-telephone":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { VACrisisLineModal as V, defineCustomElement as d };
