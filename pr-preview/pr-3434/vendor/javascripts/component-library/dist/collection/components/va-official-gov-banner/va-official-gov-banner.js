import { Host, h, forceUpdate } from "@stencil/core";
import { i18next } from "../..";
import { Build } from "@stencil/core";
import iconHttpsSvg from "../../assets/icon-https.svg";
import iconDotGovSvg from "../../assets/icon-dot-gov.svg";
if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    i18next.init({ lng: 'cimode' });
}
/**
 * @componentName Banner - Official Gov
 * @maturityCategory caution
 * @maturityLevel candidate
 */
export class VaOfficialGovBanner {
    constructor() {
        this.handleClick = () => {
            var _a, _b, _c;
            const content = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.content');
            const button = (_b = this.el.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('button');
            const header = (_c = this.el.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('div#header');
            button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'true'
                ? 'false'
                : 'true');
            header.classList.toggle('expanded');
            // Toggle the hidden attribute on the content.
            content.hidden ? content.removeAttribute('hidden') : content.setAttribute('hidden', 'true');
            if (!this.disableAnalytics) {
                const isOpen = button.getAttribute('aria-expanded') === 'true';
                const detail = {
                    componentName: 'va-official-gov-banner',
                    action: isOpen ? 'expand' : 'collapse',
                };
                this.componentLibraryAnalytics.emit(detail);
            }
        };
        /**
         * This will add <strong> tags around the
         * matching TLD value (.gov or .mil) in the text that is provided
         * and the innerHTML of the element will be updated.
         */
        this.govSiteExplanationText = () => {
            var _a;
            const el = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.gov-site-explanation-text');
            if (el) {
                const text = i18next.t('gov-site-explanation', { tld: this.tld });
                if (text) {
                    el.innerHTML = text.replace(`.${this.tld}`, `<strong>.${this.tld}</strong>`);
                }
            }
        };
        /**
         * This will add <strong> tags around various words in the text that is provided
         * as well as add the SVG lock image.
         */
        this.govSiteLockText = () => {
            var _a;
            const el = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.gov-site-lock-text');
            // eslint-disable-next-line i18next/no-literal-string
            const lockSvg = `(&nbsp;<span class="icon-lock"><svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" role="img" aria-labelledby="banner-lock-description" focusable="false">
    <title id="banner-lock-title">Lock</title>
    <desc id="banner-lock-description">Locked padlock icon</desc>
    <path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"></path>
    </svg></span>&nbsp;)`;
            let html = i18next.t('gov-site-lock', { image: 'SVG', tld: this.tld });
            html = html.replace('SVG', lockSvg);
            html = html.replace('lock', `<strong>lock</strong>`);
            html = html.replace('candado', `<strong>candado</strong>`);
            html = html.replace('https://', `<strong>https://</strong>`);
            if (el) {
                el.innerHTML = html;
            }
        };
        this.disableAnalytics = false;
        this.tld = 'gov';
    }
    connectedCallback() {
        i18next.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        i18next.off('languageChanged');
    }
    componentDidLoad() {
        // Initial loading of formatted text.
        this.govSiteExplanationText();
        this.govSiteLockText();
    }
    render() {
        const { tld } = this;
        if (tld === 'gov' || tld === 'mil') {
            return (h(Host, { key: '7869b4f29a61109e708b0b812f2f211c77ebe207' }, h("div", { key: '1917bf586f23db18d8f8d478a9527fcff2205eba', class: "banner" }, h("div", { key: '25f9b3966635fe3b1d2da5fe70a71fd11a307c20', class: "accordion" }, h("div", { key: '356b803c72b3cf83e8450a2dcd5a94e44a6f1e58', id: "header" }, h("div", { key: '49111939f4236ee2a15ef1ab64215833912519ed', class: "inner" }, h("div", { key: '3bb1a2198a638a540204f82f12d030b732023741', class: "grid-col-auto" }, h("img", { key: 'b66cea16919e69bbb2c3d03f400d32326b4c8d35', role: "presentation", class: "header-flag", src: "https://s3-us-gov-west-1.amazonaws.com/content.www.va.gov/img/tiny-usa-flag.png", alt: "" })), h("div", { key: '302252b34a8ba9d10ad2da69e02e3ec40960c6b1', class: "grid-col-fill", "aria-hidden": "true" }, h("p", { key: 'eee51d08d14cd5975b4d729582779be8d07dc8aa', class: "header-text" }, i18next.t('gov-site-label')), h("p", { key: '417c200daf3e4d587e480e5d711b13082fcb83fe', class: "header-action" }, i18next.t('gov-site-button'))), h("button", { key: '74592195c2409306705ad662985ade6092a91cbe', onClick: this.handleClick, type: "button", "aria-expanded": "false", "aria-controls": "official-gov-banner" }, h("span", { key: '80f36bb8be8553548abdeb381563e87b18e5e112', class: "button-text" }, i18next.t('gov-site-button'))))), h("div", { key: 'a030f5f60ff2df42dd3b1b1d3f2c166e16e926f5', class: "content", id: "official-gov-banner", hidden: true }, h("div", { key: 'd1d5fc20349f14c8f0d016db2b1c247e8299ab20', class: "grid-row" }, h("div", { key: '7fc85f0756a6300403c71949ecf1a30548fce1ca', class: "col" }, h("img", { key: 'cd2f510b514a7e84258e555a5e459fdf48473263', src: iconHttpsSvg, role: "presentation", alt: "" }), h("div", { key: '3f2f7b9a2ab9c70d9a80cc0d1be645f1980990a1', class: "media-block" }, h("p", { key: '6f6852b6484352e74ef942736616389be028dfbf' }, h("strong", { key: 'e2b1d94e183ee1cf46c60e361cb12567cc64041d' }, i18next.t('gov-site-website', { tld })), h("br", { key: '618e591cad753873414998ceb66d3f4e693f316e' }), h("span", { key: '9912992f63c631e199cee6154b5fcfe9d37b993d', class: "gov-site-explanation-text" }, this.govSiteExplanationText())))), h("div", { key: 'f8ad1d503009409195f21d1c1d9fde04d6fc54e4', class: "col" }, h("img", { key: 'f0d4c7dfae9033416d9efc656dd6ef91c000eeeb', src: iconDotGovSvg, role: "presentation", alt: "" }), h("div", { key: 'd543254a725a00b887f1bd3b61a2ae00373d5e99', class: "media-block" }, h("p", { key: '96a91d463ce139ab688cb955186e9ca6679af047' }, h("strong", { key: '39878bbcaaab8a6cba50cdd6e8dd724d9a3dbafa' }, i18next.t('gov-site-https', { tld })), h("br", { key: '3a4861f344650125aacddd082d2a55aa658204ff' }), h("span", { key: '019edac97e6ce44ae7a6a464911b4590019a372b', class: "gov-site-lock-text" }, this.govSiteLockText()))))))))));
        }
    }
    static get is() { return "va-official-gov-banner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-official-gov-banner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-official-gov-banner.css"]
        };
    }
    static get properties() {
        return {
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
            "tld": {
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
                    "text": "Accepts a top level domain (TLD) value of either `gov` or `mil`.\nDefault is `gov`."
                },
                "attribute": "tld",
                "reflect": false,
                "defaultValue": "'gov'"
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
