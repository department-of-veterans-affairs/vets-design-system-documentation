import { Build, proxyCustomElement, HTMLElement, createEvent, forceUpdate, h, Fragment, Host, getAssetPath } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import './i18n-setup.js';
import './contacts.js';
import { m as makeArray } from './utils.js';
import { i as instance } from './i18next.js';

const vaPaginationCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}.usa-pagination{margin-bottom:1rem;margin-top:1rem;font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5;color:#1b1b1b;background-color:white;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.usa-pagination .usa-icon{height:1.13rem;width:1.13rem}.usa-pagination__list{margin-bottom:0;margin-top:0;list-style-type:none;padding-left:0;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:center;justify-content:center;width:auto}.usa-pagination__item{display:-ms-inline-flexbox;display:inline-flex;height:2.5rem;-ms-flex-pack:center;justify-content:center;line-height:1;margin-left:0.25rem;margin-right:0.25rem;min-width:2.5rem}@media all and (min-width: 40em){.usa-pagination__item{-ms-flex:1 0 auto;flex:1 0 auto}}.usa-pagination__arrow{display:none}@media all and (min-width: 40em){.usa-pagination__arrow{display:inherit}}@media all and (min-width: 40em){.usa-pagination__previous-page{margin-right:1.25rem}}@media all and (min-width: 40em){.usa-pagination__next-page{margin-left:1.25rem}}.usa-pagination__link{-ms-flex-align:center;align-items:center;color:#005ea2;display:-ms-inline-flexbox;display:inline-flex;text-decoration:none}.usa-pagination__link[disabled]{opacity:0.4 !important;pointer-events:none}.usa-pagination__link:hover,.usa-pagination__link:focus,.usa-pagination__link:active{color:#1a4480;text-decoration:underline}.usa-pagination__link:visited{color:#005ea2}.usa-pagination__button{-ms-flex-align:center;align-items:center;border-color:rgba(27, 27, 27, 0.2);border-radius:0.25rem;border-style:solid;border-width:1px;color:#005ea2;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;padding:0.5rem;text-decoration:none;width:100%}.usa-pagination__button:hover,.usa-pagination__button:focus,.usa-pagination__button:active{color:#1a4480;border-color:#1a4480}@media (forced-colors: active){.usa-pagination__button:hover,.usa-pagination__button:focus,.usa-pagination__button:active{border:2px solid transparent}}.usa-pagination .usa-current{background-color:#1b1b1b;border-color:transparent;color:white}@media (forced-colors: active){.usa-pagination .usa-current{border:2px solid transparent;color:buttonText}}.usa-pagination .usa-current:hover,.usa-pagination .usa-current:focus,.usa-pagination .usa-current:active{background-color:#1b1b1b;color:white;text-decoration:none}@media (forced-colors: active){.usa-pagination .usa-current:hover,.usa-pagination .usa-current:focus,.usa-pagination .usa-current:active{color:buttontext}}.usa-pagination__overflow{-ms-flex-align:center;align-items:center;-ms-flex-item-align:stretch;align-self:stretch;display:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0.5rem}.usa-icon{display:inline-block;fill:currentColor;height:1em;position:relative;width:1em}.usa-icon--size-3{height:1.5rem;width:1.5rem}.usa-icon--size-4{height:2rem;width:2rem}.usa-icon--size-5{height:2.5rem;width:2.5rem}.usa-icon--size-6{height:3rem;width:3rem}.usa-icon--size-7{height:3.5rem;width:3.5rem}.usa-icon--size-8{height:4rem;width:4rem}.usa-icon--size-9{height:4.5rem;width:4.5rem}.va-pagination__item{-webkit-box-sizing:border-box;box-sizing:border-box}:host a.usa-pagination__next-page>div,:host a.usa-pagination__previous-page>div{display:-ms-flexbox;display:flex}:host{background-color:var(--vads-color-white);border-top:1px solid var(--vads-color-base-lightest);display:-ms-flexbox;display:flex;font-family:var(--font-source-sans);-ms-flex-pack:center;justify-content:center;overflow:hidden;padding:1.25rem 0 0.625rem;width:100%}ul{list-style-type:none;margin:0;padding:0}li{display:-ms-inline-flexbox;display:inline-flex}button{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;background-color:transparent;border:0;color:var(--vads-color-link);cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;font-family:inherit;font-size:0.89rem;font-weight:400;-ms-flex-pack:center;justify-content:center;line-height:2;padding:0;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;-webkit-transition-property:color, background-color;transition-property:color, background-color}";
const VaPaginationStyle0 = vaPaginationCss;

if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    instance.init({ lng: 'cimode' });
}
const VaPagination$1 = /*@__PURE__*/ proxyCustomElement(class VaPagination extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.pageSelect = createEvent(this, "pageSelect", 7);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        /**
         * If the page total is less than or equal to this limit, show all pages.
         */
        this.SHOW_ALL_PAGES = 7;
        this.handlePageSelect = (page, eventID) => {
            var _a, _b, _c;
            this.pageSelect.emit({ page });
            // Reset focus to the active page button.
            (_c = (_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.activeElement) === null || _c === void 0 ? void 0 : _c.blur();
            if (this.enableAnalytics) {
                const detail = {
                    componentName: 'va-pagination',
                    action: 'linkClick',
                    details: {
                        'event': eventID,
                        'page-number': page,
                    },
                };
                this.componentLibraryAnalytics.emit(detail);
            }
        };
        /**
         * Generate a list of the continuous page numbers to render, i.e.
         * the page numbers to render not including the first and/or last page
         */
        this.pageNumbers = () => {
            const { maxPageListLength, page: currentPage, pages: totalPages, unbounded, } = this;
            // radius is half the length of the visible pages
            // use as a reference from the selected page to find
            // start and end of the pages to render
            const radius = Math.floor(maxPageListLength / 2);
            //if the unbounded flag is set we don't include the last page
            const unboundedChar = unbounded ? 0 : 1;
            let start;
            let end;
            if (totalPages <= this.SHOW_ALL_PAGES) {
                return makeArray(1, totalPages);
            }
            // continuous pages start at 1
            if (currentPage <= radius + 1) {
                start = 1;
                end =
                    maxPageListLength >= totalPages
                        ? totalPages
                        : maxPageListLength - 1 - unboundedChar;
                if (end === currentPage) {
                    // make sure the next page is showing
                    end++;
                }
                return makeArray(start, end);
            }
            // continuous pages end at last page
            if (currentPage + radius >= totalPages) {
                end = totalPages;
                start =
                    totalPages - maxPageListLength > 0
                        ? //subtract 2 to account for having to add ellipsis and first page
                            totalPages - (maxPageListLength - 2 - 1)
                        : 1;
                if (start === currentPage) {
                    // make sure the previous page is showing
                    start--;
                }
                return makeArray(start, end);
                // continuous pages don't start at 1 or end at last page
            }
            else {
                // subtract 2 to account for having to show the ellipsis and the "first" page
                start = currentPage - (radius - 2);
                if (currentPage + radius > totalPages) {
                    end = totalPages;
                }
                else {
                    // subtract 1 to account for having to show the ellipsis
                    // and subtract another 1 if showing the "last" page (unbounded = false)
                    end = currentPage + (radius - 1 - unboundedChar);
                }
            }
            return makeArray(start, end);
        };
        this.handleKeyDown = (e, pageNumber) => {
            const keyCode = e.key;
            if (keyCode === 'Enter' || keyCode === ' ') {
                e.preventDefault();
                if (!pageNumber)
                    return;
                /* eslint-disable-next-line i18next/no-literal-string */
                this.handlePageSelect(pageNumber, 'nav-paginate-number');
            }
        };
        this.ariaLabelSuffix = '';
        this.enableAnalytics = true;
        this.maxPageListLength = 10;
        this.page = undefined;
        this.pages = undefined;
        this.showLastPage = false;
        this.unbounded = false;
    }
    /**
     * Adding SVGs here because if SVGs are included in the render method,
     * the result is to render the page in xhtml not html
     * and errors result.
     */
    addIcons() {
        var _a, _b;
        function makeSvgString(icon) {
            const path = `${getAssetPath('/img/sprite.svg')}#${icon}`;
            // eslint-disable-next-line i18next/no-literal-string
            return `<svg
      class="usa-icon"
      aria-hidden="true"
      role="img">
        <use href=${path}></use>
      </svg>`;
        }
        const prevIconDiv = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('#previous-arrow-icon');
        if (prevIconDiv) {
            prevIconDiv.innerHTML = makeSvgString('navigate_before');
        }
        const nextIconDiv = (_b = this.el.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('#next-arrow-icon');
        if (nextIconDiv) {
            nextIconDiv.innerHTML = makeSvgString('navigate_next');
        }
    }
    componentDidRender() {
        this.addIcons();
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
        const { ariaLabelSuffix, page, pages, } = this;
        if (pages === 1) {
            return h("div", null);
        }
        const previousAriaLabel = ariaLabelSuffix
            ? `Previous page ${ariaLabelSuffix}`
            : 'Previous page';
        const nextAriaLabel = ariaLabelSuffix
            ? `Next page ${ariaLabelSuffix}`
            : 'Next page';
        const pageNumbersToRender = this.pageNumbers();
        const itemClasses = classnames({
            'usa-pagination__item': true,
            'usa-pagination__page-no': true,
            'va-pagination__item': true,
        });
        const ellipsisClasses = classnames({
            'usa-pagination__item': true,
            'usa-pagination__overflow': true,
            'va-pagination__item': true,
        });
        const arrowClasses = classnames({
            'usa-pagination__item': true,
            'usa-pagination__arrow': true,
        });
        const previousButton = page > 1 ? (h(Fragment, null, h("li", { class: arrowClasses, "aria-label": previousAriaLabel }, h("a", { onClick: () => this.handlePageSelect(page - 1, 'nav-paginate-number'), onKeyDown: e => this.handleKeyDown(e, page - 1), class: "usa-pagination__link usa-pagination__previous-page", href: "javascript:void(0)" }, h("div", { id: "previous-arrow-icon" }), h("span", { class: "usa-pagination__link-text" }, instance.t('previous')))), !pageNumbersToRender.includes(1) && (h(Fragment, null, h("li", { class: itemClasses }, h("a", { onClick: () => this.handlePageSelect(1, 'nav-paginate-number'), onKeyDown: e => this.handleKeyDown(e, 1), href: "javascript:void(0)", class: "usa-pagination__button", "aria-label": "page 1, first page" }, "1")), h("li", { class: ellipsisClasses, "aria-label": "ellipsis indicating non-visible pages" }, h("span", null, "\u2026")))))) : null;
        const renderPages = pageNumbersToRender.map(pageNumber => {
            const anchorClasses = classnames({
                'usa-pagination__button': true,
                'usa-current': page === pageNumber,
            });
            let pageAriaLabel = ariaLabelSuffix
                ? `page ${pageNumber} ${ariaLabelSuffix}`
                : `page ${pageNumber}`;
            if (pageNumber === 1) {
                pageAriaLabel = `${pageAriaLabel}, first page`;
            }
            if (pageNumber === pages) {
                pageAriaLabel = `${pageAriaLabel}, last page`;
            }
            return (h("li", { class: itemClasses }, h("a", { onClick: () => this.handlePageSelect(pageNumber, 'nav-paginate-number'), onKeyDown: e => this.handleKeyDown(e, pageNumber), href: "javascript:void(0)", class: anchorClasses, "aria-current": page === pageNumber ? 'page' : null, "aria-label": pageAriaLabel }, pageNumber)));
        });
        const endEllipsisAndLastPage = pageNumbersToRender.indexOf(pages) === -1 ? (h(Fragment, null, pages > this.SHOW_ALL_PAGES && (h("li", { class: ellipsisClasses, "aria-label": "ellipsis indicating non-visible pages" }, h("span", null, "\u2026"))), !this.unbounded && pages > this.SHOW_ALL_PAGES && (h("li", { class: itemClasses }, h("a", { onClick: () => this.handlePageSelect(pages, 'nav-paginate-number'), onKeyDown: e => this.handleKeyDown(e, pages), href: "javascript:void(0)", class: "usa-pagination__button", "aria-label": `page ${pages}, last page` }, pages))))) : null;
        const nextButton = page < pages ? (h(Fragment, null, h("li", { class: arrowClasses, "aria-label": nextAriaLabel }, h("a", { onClick: () => this.handlePageSelect(page + 1, 'nav-paginate-number'), onKeyDown: e => this.handleKeyDown(e, page + 1), class: "usa-pagination__link usa-pagination__next-page", href: "javascript:void(0)" }, h("span", { class: "usa-pagination__link-text" }, instance.t('next')), h("div", { id: "next-arrow-icon" }))))) : null;
        return (h(Host, null, h("nav", { class: "usa-pagination", "aria-label": "Pagination" }, h("ul", { class: "usa-pagination__list" }, previousButton, renderPages, endEllipsisAndLastPage, nextButton))));
    }
    static get assetsDirs() { return ["../assets"]; }
    get el() { return this; }
    static get style() { return VaPaginationStyle0; }
}, [1, "va-pagination", {
        "ariaLabelSuffix": [1, "aria-label-suffix"],
        "enableAnalytics": [4, "enable-analytics"],
        "maxPageListLength": [2, "max-page-list-length"],
        "page": [2],
        "pages": [2],
        "showLastPage": [4, "show-last-page"],
        "unbounded": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-pagination"];
    components.forEach(tagName => { switch (tagName) {
        case "va-pagination":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaPagination$1);
            }
            break;
    } });
}

const VaPagination = VaPagination$1;
const defineCustomElement = defineCustomElement$1;

export { VaPagination, defineCustomElement };
