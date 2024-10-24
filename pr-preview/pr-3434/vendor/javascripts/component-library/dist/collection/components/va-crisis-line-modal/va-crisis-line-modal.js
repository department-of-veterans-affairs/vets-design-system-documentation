import { Host, h } from "@stencil/core";
import { CONTACTS } from "../../contacts";
/**
 * @componentName Crisis Line Modal
 * @maturityCategory caution
 * @maturityLevel candidate
 */
export class VACrisisLineModal {
    constructor() {
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
    static get is() { return "va-crisis-line-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-crisis-line-modal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-crisis-line-modal.css"]
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "shifted": {}
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "trackShiftKey",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
