import { Host, h, } from "@stencil/core";
import vaSeal from "../../assets/va-seal.svg";
/**
 * @componentName Header - Minimal
 * @maturityCategory caution
 * @maturityLevel candidate
 * @guidanceHref header/header-minimal
 */
export class VaHeaderMinimal {
    constructor() {
        this.shifted = false;
        this.header = undefined;
        this.subheader = undefined;
        this.enableHeadings = false;
    }
    // This keydown event listener tracks if the shift key is held down while changing focus
    trackShiftKey(e) {
        this.shifted = e.shiftKey;
    }
    // Redirects focus back to the modal, if the modal is open/visible
    trapFocus() {
        var _a;
        const modal = (_a = this.el) === null || _a === void 0 ? void 0 : _a.shadowRoot.querySelector('va-crisis-line-modal').shadowRoot.querySelector('va-modal');
        const modalVisible = modal === null || modal === void 0 ? void 0 : modal.getAttribute('visible');
        if (modalVisible !== null && modalVisible !== 'false') {
            let focusedChild;
            const query = this.shifted ? '.last-focusable-child' : '.va-modal-close';
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
        const { header, subheader, enableHeadings: enableHeadings } = this;
        return (h(Host, { key: '8166572c8b726efcd50724bdcbbaea20b6ab52be', role: "banner" }, h("va-official-gov-banner", { key: '1fe0d0496c2758090f4c528e0ad609f9a4e5d164' }), h("va-crisis-line-modal", { key: 'b9f02ecf2aa7a37e11c8830e27c703ab270f2fb8' }), h("div", { key: 'ae08383b4416e958add2fb12e65579b415633d5d', onFocusin: () => this.trapFocus(), class: "va-header" }, h("a", { key: '149d9a4ec90ef7cba6d7682aca575d3a9cfd4b9b', href: "/", title: "Go to VA.gov", class: "va-logo-link" }, h("img", { key: '60898a523ae94a5d0b91fbe806a8fdba4a4e40c5', class: "va-logo", src: vaSeal, alt: "VA logo and Seal, U.S. Department of Veterans Affairs" })), h("div", { key: '94a5f9fdfd9da6fd0bd871f82b6d6e9ad78751e9', class: "header-container" }, enableHeadings ? h("h1", null, header) : h("div", { class: "header" }, header), subheader && (enableHeadings ? h("h2", null, subheader) : h("div", { class: "subheader" }, subheader))))));
    }
    static get is() { return "va-header-minimal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-header-minimal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-header-minimal.css"]
        };
    }
    static get properties() {
        return {
            "header": {
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
                    "text": ""
                },
                "attribute": "header",
                "reflect": false
            },
            "subheader": {
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
                    "text": ""
                },
                "attribute": "subheader",
                "reflect": false
            },
            "enableHeadings": {
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
                    "text": "Enables use of heading tags in the minimal header instead of `<div>` tags. This is for when a heading level 1 needs to be used in the header, as there should only be one heading level 1 per page."
                },
                "attribute": "enable-headings",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
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
