import { Build, proxyCustomElement, HTMLElement, createEvent, forceUpdate, h, Host } from '@stencil/core/internal/client';
import './i18n-setup.js';
import './contacts.js';
import { i as instance } from './i18next.js';

const iconHttpsSvg = 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzIgMGMxNy42NzMgMCAzMiAxNC4zMjcgMzIgMzJzLTE0LjMyNyAzMi0zMiAzMi0zMi0xNC4zMjctMzItMzIgMTQuMzI3LTMyIDMyLTMyem0wIDEuMjA4Yy0xNy4wMDYgMC0zMC43OTIgMTMuNzg2LTMwLjc5MiAzMC43OTJzMTMuNzg2IDMwLjc5MiAzMC43OTIgMzAuNzkyIDMwLjc5Mi0xMy43ODYgMzAuNzkyLTMwLjc5Mi0xMy43ODYtMzAuNzkyLTMwLjc5Mi0zMC43OTJ6bTAgMTguODg2YTcuMjQ1IDcuMjQ1IDAgMCAxIDcuMjQ1IDcuMjQ1djMuMTAzaC41MmMuODYgMCAxLjU1Ny42OTggMS41NTcgMS41NTh2OS4zMjJjMCAuODYtLjY5NyAxLjU1OC0xLjU1NyAxLjU1OGgtMTUuNTNjLS44NiAwLTEuNTU3LS42OTctMS41NTctMS41NTh2LTkuMzIyYzAtLjg2LjY5Ny0xLjU1OCAxLjU1Ny0xLjU1OGguNTJ2LTMuMTAyYTcuMjQ1IDcuMjQ1IDAgMCAxIDcuMjQ1LTcuMjQ2em0wIDMuMTAzYTQuMTQyIDQuMTQyIDAgMCAwIC00LjE0MiA0LjE0MnYzLjEwM2g4LjI4NHYtMy4xMDJhNC4xNDIgNC4xNDIgMCAwIDAgLTQuMTQyLTQuMTQzeiIgZmlsbD0iIzcxOWYyYSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+';

const iconDotGovSvg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgNjQgNjQiPjx0aXRsZT5pY29uLWRvdC1nb3Y8L3RpdGxlPjxwYXRoIGZpbGw9IiMyMzc4QzMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMyIDBjMTcuNjczIDAgMzIgMTQuMzI3IDMyIDMyIDAgMTcuNjczLTE0LjMyNyAzMi0zMiAzMkMxNC4zMjcgNjQgMCA0OS42NzMgMCAzMiAwIDE0LjMyNyAxNC4zMjcgMCAzMiAwem0wIDEuMjA4QzE0Ljk5NCAxLjIwOCAxLjIwOCAxNC45OTQgMS4yMDggMzJTMTQuOTk0IDYyLjc5MiAzMiA2Mi43OTIgNjIuNzkyIDQ5LjAwNiA2Mi43OTIgMzIgNDkuMDA2IDEuMjA4IDMyIDEuMjA4em0xMC41OSAzOC44NThhLjg1Ny44NTcgMCAwIDEgLjg4Mi44MjJ2MS42NDJIMTguODg2di0xLjY0MmEuODU3Ljg1NyAwIDAgMSAuODgyLS44MjJINDIuNTl6TTI1LjQ0MyAyNy43NzR2OS44MjloMS42NDJ2LTkuODNoMy4yNzN2OS44M0gzMnYtOS44M2gzLjI3MnY5LjgzaDEuNjQzdi05LjgzaDMuMjcydjkuODNoLjc2YS44NTcuODU3IDAgMCAxIC44ODIuODIxdi44MjFoLTIxLjN2LS44MDlhLjg1Ny44NTcgMCAwIDEgLjg4LS44MmguNzYydi05Ljg0MmgzLjI3MnptNS43MzYtOC4xODhsMTIuMjkzIDQuOTE1djEuNjQyaC0xLjYzYS44NTcuODU3IDAgMCAxLS44ODIuODIySDIxLjQxYS44NTcuODU3IDAgMCAxLS44ODItLjgyMmgtMS42NDJ2LTEuNjQybDEyLjI5My00LjkxNXoiLz48L3N2Zz4=';

const vaOfficialGovBannerCss = "p,a,ol,ul,li,dl,dt,dd,form,label,button{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5}:host{display:block}.banner{background-color:#f0f0f0;font-size:12px;line-height:1.5;padding-bottom:0}.accordion{color:#1b1b1b;line-height:1.5;list-style-type:none;margin:0;padding:0;width:100%}.grid-col-fill{-ms-flex:1 1 0%;flex:1 1 0%;min-width:1px}.grid-col-auto,.grid-col-fill{-ms-flex:0 1 auto;flex:0 1 auto;width:auto;max-width:100%}.grid-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-left:-0.469rem;margin-right:-0.469rem;margin-top:0;margin-bottom:0}.col{-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex;-ms-flex:0 0 46%;flex:0 0 46%;padding-left:0.469rem;padding-right:0.469rem}@media (max-width: 767px){.col{-ms-flex:unset;flex:unset}}#header{padding-bottom:6px;padding-top:6px;position:relative}#header.expanded .header-action{display:none}@media (max-width: 767px){#header{min-height:32px}#header.expanded{padding-right:56px}}.inner{margin-left:auto;margin-right:auto;max-width:1024px;padding-left:16px;padding-right:16px;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start;padding-right:0}.header-flag{float:left;margin-right:8px;width:16px}.header-text{font-size:12px;margin-bottom:2px;margin-right:5px;margin-top:2px;line-height:1.1}.header-action{color:#005ea2;font-size:12px;line-height:1.1;margin-bottom:0;margin-top:2px;text-decoration:underline}@media (min-width: 768px){.header-action{display:none}}button:not([disabled]):focus{outline:2px solid var(--vads-color-action-focus-on-light)}button[aria-expanded=false],button[aria-expanded=true]{background-image:none}@media (max-width: 767px){button{width:100%}}button{border:0;color:#005ea2;font-size:12px;margin:0;margin-left:0.313rem;padding-left:0;padding-right:0;position:relative}@media (max-width: 767px){button{-webkit-font-smoothing:inherit;background-color:transparent;border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;margin:0;margin-bottom:-4px;text-align:left;left:0;position:absolute;bottom:0;top:0;color:#005ea2;display:block;height:auto;line-height:1.1;padding:0;text-decoration:none;width:100%}}button:hover{color:#1a4480;cursor:pointer}.button-text{position:absolute;left:-999em;right:auto;text-decoration:underline}@media (min-width: 768px){.button-text{position:static;display:inline}}@media (max-width: 767px){#header .header-action::after,#header.expanded .header-action::after{background-color:#005ea2}#header.expanded .header-action::after,#header .header-action::after{background:0 0;background-color:#005ea2;-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z%22%2F%3E%3C%2Fsvg%3E\") no-repeat center/contain;mask:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z%22%2F%3E%3C%2Fsvg%3E\") no-repeat center/contain;display:inline-block;height:18px;width:18px;content:\"\";vertical-align:middle;margin-left:2px}}@media (min-width: 768px){button::after,button:hover::after{background-color:#005ea2;position:absolute}button::after,#header.expanded button::after{background:0 0;background-color:#005ea2;display:inline-block;height:18px;width:18px;content:\"\";vertical-align:middle;margin-left:2px;top:-1px}button::after{-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z%22%2F%3E%3C%2Fsvg%3E\") no-repeat center/contain;mask:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z%22%2F%3E%3C%2Fsvg%3E\") no-repeat center/contain}#header.expanded button::after{-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z%22%2F%3E%3C%2Fsvg%3E\") no-repeat center/contain;mask:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z%22%2F%3E%3C%2Fsvg%3E\") no-repeat center/contain}}@media (max-width: 767px){button[aria-expanded=true]:after{bottom:0;top:0;position:absolute;right:0}@supports ((-webkit-mask: url()) or (mask: url())){button[aria-expanded=true]::after{background:0 0;background-color:#005ea2 !important;-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z%22%2F%3E%3C%2Fsvg%3E\") no-repeat center/24px 24px;mask:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z%22%2F%3E%3C%2Fsvg%3E\") no-repeat center/24px 24px}}button[aria-expanded=true]::after,button[aria-expanded=true]:before{position:absolute;content:\"\";height:48px;width:48px;bottom:0;top:0;right:0}button[aria-expanded=true]::after{background:0 0;background-color:#005ea2;-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z%22%2F%3E%3C%2Fsvg%3E\") no-repeat center/contain;mask:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z%22%2F%3E%3C%2Fsvg%3E\") no-repeat center/contain;display:inline-block;height:48px;width:48px;content:\"\";vertical-align:middle;margin-left:0}button[aria-expanded=true]:before{background-color:#dfe1e2;display:block}}button::after{position:absolute}.content{margin-left:auto;margin-right:auto;max-width:1024px;background-color:transparent;font-size:16px;overflow:hidden;padding:24px 32px 16px 16px}.content img{-ms-flex-negative:0;flex-shrink:0;margin-right:8px;width:45px}.content .media-block{-ms-flex:1 1 0%;flex:1 1 0%}.content svg{height:1.5ex;width:1.21875ex}.content p{margin-top:0;-webkit-margin-after:1em;margin-block-end:1em}";
const VaOfficialGovBannerStyle0 = vaOfficialGovBannerCss;

if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    instance.init({ lng: 'cimode' });
}
const VaOfficialGovBanner = /*@__PURE__*/ proxyCustomElement(class VaOfficialGovBanner extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
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
                const text = instance.t('gov-site-explanation', { tld: this.tld });
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
            let html = instance.t('gov-site-lock', { image: 'SVG', tld: this.tld });
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
        instance.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        instance.off('languageChanged');
    }
    componentDidLoad() {
        // Initial loading of formatted text.
        this.govSiteExplanationText();
        this.govSiteLockText();
    }
    render() {
        const { tld } = this;
        if (tld === 'gov' || tld === 'mil') {
            return (h(Host, { key: '7869b4f29a61109e708b0b812f2f211c77ebe207' }, h("div", { key: '1917bf586f23db18d8f8d478a9527fcff2205eba', class: "banner" }, h("div", { key: '25f9b3966635fe3b1d2da5fe70a71fd11a307c20', class: "accordion" }, h("div", { key: '356b803c72b3cf83e8450a2dcd5a94e44a6f1e58', id: "header" }, h("div", { key: '49111939f4236ee2a15ef1ab64215833912519ed', class: "inner" }, h("div", { key: '3bb1a2198a638a540204f82f12d030b732023741', class: "grid-col-auto" }, h("img", { key: 'b66cea16919e69bbb2c3d03f400d32326b4c8d35', role: "presentation", class: "header-flag", src: "https://s3-us-gov-west-1.amazonaws.com/content.www.va.gov/img/tiny-usa-flag.png", alt: "" })), h("div", { key: '302252b34a8ba9d10ad2da69e02e3ec40960c6b1', class: "grid-col-fill", "aria-hidden": "true" }, h("p", { key: 'eee51d08d14cd5975b4d729582779be8d07dc8aa', class: "header-text" }, instance.t('gov-site-label')), h("p", { key: '417c200daf3e4d587e480e5d711b13082fcb83fe', class: "header-action" }, instance.t('gov-site-button'))), h("button", { key: '74592195c2409306705ad662985ade6092a91cbe', onClick: this.handleClick, type: "button", "aria-expanded": "false", "aria-controls": "official-gov-banner" }, h("span", { key: '80f36bb8be8553548abdeb381563e87b18e5e112', class: "button-text" }, instance.t('gov-site-button'))))), h("div", { key: 'a030f5f60ff2df42dd3b1b1d3f2c166e16e926f5', class: "content", id: "official-gov-banner", hidden: true }, h("div", { key: 'd1d5fc20349f14c8f0d016db2b1c247e8299ab20', class: "grid-row" }, h("div", { key: '7fc85f0756a6300403c71949ecf1a30548fce1ca', class: "col" }, h("img", { key: 'cd2f510b514a7e84258e555a5e459fdf48473263', src: iconHttpsSvg, role: "presentation", alt: "" }), h("div", { key: '3f2f7b9a2ab9c70d9a80cc0d1be645f1980990a1', class: "media-block" }, h("p", { key: '6f6852b6484352e74ef942736616389be028dfbf' }, h("strong", { key: 'e2b1d94e183ee1cf46c60e361cb12567cc64041d' }, instance.t('gov-site-website', { tld })), h("br", { key: '618e591cad753873414998ceb66d3f4e693f316e' }), h("span", { key: '9912992f63c631e199cee6154b5fcfe9d37b993d', class: "gov-site-explanation-text" }, this.govSiteExplanationText())))), h("div", { key: 'f8ad1d503009409195f21d1c1d9fde04d6fc54e4', class: "col" }, h("img", { key: 'f0d4c7dfae9033416d9efc656dd6ef91c000eeeb', src: iconDotGovSvg, role: "presentation", alt: "" }), h("div", { key: 'd543254a725a00b887f1bd3b61a2ae00373d5e99', class: "media-block" }, h("p", { key: '96a91d463ce139ab688cb955186e9ca6679af047' }, h("strong", { key: '39878bbcaaab8a6cba50cdd6e8dd724d9a3dbafa' }, instance.t('gov-site-https', { tld })), h("br", { key: '3a4861f344650125aacddd082d2a55aa658204ff' }), h("span", { key: '019edac97e6ce44ae7a6a464911b4590019a372b', class: "gov-site-lock-text" }, this.govSiteLockText()))))))))));
        }
    }
    get el() { return this; }
    static get style() { return VaOfficialGovBannerStyle0; }
}, [1, "va-official-gov-banner", {
        "disableAnalytics": [4, "disable-analytics"],
        "tld": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-official-gov-banner"];
    components.forEach(tagName => { switch (tagName) {
        case "va-official-gov-banner":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaOfficialGovBanner);
            }
            break;
    } });
}

export { VaOfficialGovBanner as V, defineCustomElement as d };
