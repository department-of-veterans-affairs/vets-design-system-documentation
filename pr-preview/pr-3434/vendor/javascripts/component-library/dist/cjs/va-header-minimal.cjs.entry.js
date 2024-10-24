'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');

const vaSealSvg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1Ny42IDM1LjIiIHJvbGU9ImltZyI+PHRpdGxlPlZBPC90aXRsZT48ZyBmaWxsPSIjRkZGIj48cGF0aCBkPSJNMTEuMSAzNS4yTDAgMGg4LjZsNC4yIDE0LjljMS4yIDQuMiAyLjIgOC4yIDMuMSAxMi42aC4xYy45LTQuMiAxLjktOC40IDMuMS0xMi40TDIzLjUgMGg4LjNMMjAuMiAzNS4yaC05LjF6TTM2LjYgMjYuMmwtMi41IDloLThMMzYuNiAwaDEwLjJsMTAuOCAzNS4yaC04LjVsLTIuNy05aC05Ljh6bTguOC02bC0yLjItNy41Yy0uNi0yLjEtMS4yLTQuNy0xLjctNi44aC0uMWMtLjUgMi4xLTEgNC44LTEuNiA2LjhsLTIgNy41aDcuNnoiPjwvcGF0aD48L2c+PC9zdmc+';

const vaHeaderMinimalCss = ".va-header{display:-ms-flexbox;display:flex;margin-left:auto;margin-right:auto;max-width:1000px;background-color:var(--vads-color-primary-darker);color:var(--vads-button-color-text-primary-alt-on-light);-ms-flex-align:center;align-items:center;padding:10px 8px;line-height:22px}@media (min-width: 481px){.va-header{padding:10px 16px}}.va-logo-link:focus{outline:2px solid var(--vads-color-action-focus-on-light)}.va-logo{margin-right:8px;min-height:30px;min-width:48px}@media (min-width: 481px){.va-logo{margin-right:16px}}.header-container{padding-left:8px;border-left:1px solid var(--vads-color-white)}@media (min-width: 481px){.header-container{padding-left:16px}}.header-container h1,.header-container .header{font-size:20px;margin:0;font-weight:700}.header-container h2,.header-container .subheader{font-size:20px;margin:0;font-weight:100}@media (min-width: 1008px){va-crisis-line-modal::part(button){position:absolute;right:0;bottom:-5px}}";
const VaHeaderMinimalStyle0 = vaHeaderMinimalCss;

const VaHeaderMinimal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '8166572c8b726efcd50724bdcbbaea20b6ab52be', role: "banner" }, index.h("va-official-gov-banner", { key: '1fe0d0496c2758090f4c528e0ad609f9a4e5d164' }), index.h("va-crisis-line-modal", { key: 'b9f02ecf2aa7a37e11c8830e27c703ab270f2fb8' }), index.h("div", { key: 'ae08383b4416e958add2fb12e65579b415633d5d', onFocusin: () => this.trapFocus(), class: "va-header" }, index.h("a", { key: '149d9a4ec90ef7cba6d7682aca575d3a9cfd4b9b', href: "/", title: "Go to VA.gov", class: "va-logo-link" }, index.h("img", { key: '60898a523ae94a5d0b91fbe806a8fdba4a4e40c5', class: "va-logo", src: vaSealSvg, alt: "VA logo and Seal, U.S. Department of Veterans Affairs" })), index.h("div", { key: '94a5f9fdfd9da6fd0bd871f82b6d6e9ad78751e9', class: "header-container" }, enableHeadings ? index.h("h1", null, header) : index.h("div", { class: "header" }, header), subheader && (enableHeadings ? index.h("h2", null, subheader) : index.h("div", { class: "subheader" }, subheader))))));
    }
    get el() { return index.getElement(this); }
};
VaHeaderMinimal.style = VaHeaderMinimalStyle0;

exports.va_header_minimal = VaHeaderMinimal;
