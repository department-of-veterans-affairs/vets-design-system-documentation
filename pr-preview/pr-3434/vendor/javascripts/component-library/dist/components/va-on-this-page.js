import { Build, proxyCustomElement, HTMLElement, createEvent, forceUpdate, h } from '@stencil/core/internal/client';
import './i18n-setup.js';
import './contacts.js';
import { c as consoleDevError } from './utils.js';
import { d as defineCustomElement$2 } from './va-icon2.js';
import { i as instance } from './i18next.js';

const vaOnThisPageCss = "p,a,ol,ul,li,dl,dt,dd,form,label,button{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5}button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}a{text-decoration:none;color:var(--vads-color-link);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:color, background-color, border-color;transition-property:color, background-color, border-color}a:hover{background-color:rgba(0, 0, 0, 0.05);color:inherit}a:visited{color:var(--vads-color-link-visited)}:host{display:block;border:1px solid var(--vads-color-base-light);border-radius:4px;padding:1em}@media (min-width: 768px){:host{border:none;padding:1em 1em 1em 0}}#on-this-page{font-family:var(--font-serif);font-size:1.25rem;margin:0.4em 0em}ul{margin-top:0;margin-bottom:0;margin-left:0;list-style-type:none;padding-left:0}li{padding:0.5em;max-width:285px}li a{line-height:1.5em;display:-ms-flexbox;display:flex}li:hover{background-color:rgba(0, 0, 0, 0.05)}li a:hover{background-color:transparent}va-icon{margin-right:4px;padding-top:4px;line-height:1}";
const VaOnThisPageStyle0 = vaOnThisPageCss;

if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    instance.init({ lng: 'cimode' });
}
const VaOnThisPage$1 = /*@__PURE__*/ proxyCustomElement(class VaOnThisPage extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        this.handleOnClick = event => {
            var _a, _b, _c, _d;
            if (this.disableAnalytics)
                return;
            this.componentLibraryAnalytics.emit({
                componentName: 'va-on-this-page',
                action: 'click',
                details: {
                    'click-text': ((_b = (_a = event.composedPath()) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.textContent) ||
                        ((_d = (_c = event.path) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.textContent),
                },
            });
        };
        this.disableAnalytics = false;
    }
    connectedCallback() {
        instance.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        instance.off('languageChanged');
    }
    render() {
        const { handleOnClick } = this;
        const h2s = Array.from(document.querySelectorAll('article h2')).filter(heading => {
            if (!heading.id) {
                consoleDevError(`${heading.textContent} is missing an id`);
            }
            return heading.id;
        });
        return (h("nav", { "aria-labelledby": "on-this-page" }, h("ul", null, h("li", { id: "on-this-page" }, instance.t('on-this-page')), h2s.map(heading => (h("li", null, h("a", { href: `#${heading.id}`, onClick: handleOnClick }, h("va-icon", { icon: "arrow_downward" }), h("span", null, heading.innerText))))))));
    }
    get el() { return this; }
    static get style() { return VaOnThisPageStyle0; }
}, [1, "va-on-this-page", {
        "disableAnalytics": [4, "disable-analytics"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-on-this-page", "va-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "va-on-this-page":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaOnThisPage$1);
            }
            break;
        case "va-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const VaOnThisPage = VaOnThisPage$1;
const defineCustomElement = defineCustomElement$1;

export { VaOnThisPage, defineCustomElement };
