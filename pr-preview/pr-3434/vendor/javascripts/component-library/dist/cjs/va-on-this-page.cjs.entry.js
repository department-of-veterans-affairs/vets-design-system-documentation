'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');
require('./contacts-f7ea2d3e.js');
const i18next = require('./i18next-1fd09d7c.js');

const vaOnThisPageCss = "p,a,ol,ul,li,dl,dt,dd,form,label,button{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5}button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}a{text-decoration:none;color:var(--vads-color-link);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:color, background-color, border-color;transition-property:color, background-color, border-color}a:hover{background-color:rgba(0, 0, 0, 0.05);color:inherit}a:visited{color:var(--vads-color-link-visited)}:host{display:block;border:1px solid var(--vads-color-base-light);border-radius:4px;padding:1em}@media (min-width: 768px){:host{border:none;padding:1em 1em 1em 0}}#on-this-page{font-family:var(--font-serif);font-size:1.25rem;margin:0.4em 0em}ul{margin-top:0;margin-bottom:0;margin-left:0;list-style-type:none;padding-left:0}li{padding:0.5em;max-width:285px}li a{line-height:1.5em;display:-ms-flexbox;display:flex}li:hover{background-color:rgba(0, 0, 0, 0.05)}li a:hover{background-color:transparent}va-icon{margin-right:4px;padding-top:4px;line-height:1}";
const VaOnThisPageStyle0 = vaOnThisPageCss;

const VaOnThisPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentLibraryAnalytics = index.createEvent(this, "component-library-analytics", 7);
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
        i18next.instance.on('languageChanged', () => {
            index.forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        i18next.instance.off('languageChanged');
    }
    render() {
        const { handleOnClick } = this;
        const h2s = Array.from(document.querySelectorAll('article h2')).filter(heading => {
            return heading.id;
        });
        return (index.h("nav", { "aria-labelledby": "on-this-page" }, index.h("ul", null, index.h("li", { id: "on-this-page" }, i18next.instance.t('on-this-page')), h2s.map(heading => (index.h("li", null, index.h("a", { href: `#${heading.id}`, onClick: handleOnClick }, index.h("va-icon", { icon: "arrow_downward" }), index.h("span", null, heading.innerText))))))));
    }
    get el() { return index.getElement(this); }
};
VaOnThisPage.style = VaOnThisPageStyle0;

exports.va_on_this_page = VaOnThisPage;
