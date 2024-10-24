import { Fragment, Host, h, forceUpdate, getAssetPath, } from "@stencil/core";
import classnames from "classnames";
import { i18next } from "../..";
import { Build } from "@stencil/core";
import { makeArray } from "../../utils/utils";
if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    i18next.init({ lng: 'cimode' });
}
/**
 * @componentName Pagination
 * @maturityCategory use
 * @maturityLevel deployed
 */
export class VaPagination {
    constructor() {
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
        i18next.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        i18next.off('languageChanged');
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
        const previousButton = page > 1 ? (h(Fragment, null, h("li", { class: arrowClasses, "aria-label": previousAriaLabel }, h("a", { onClick: () => this.handlePageSelect(page - 1, 'nav-paginate-number'), onKeyDown: e => this.handleKeyDown(e, page - 1), class: "usa-pagination__link usa-pagination__previous-page", href: "javascript:void(0)" }, h("div", { id: "previous-arrow-icon" }), h("span", { class: "usa-pagination__link-text" }, i18next.t('previous')))), !pageNumbersToRender.includes(1) && (h(Fragment, null, h("li", { class: itemClasses }, h("a", { onClick: () => this.handlePageSelect(1, 'nav-paginate-number'), onKeyDown: e => this.handleKeyDown(e, 1), href: "javascript:void(0)", class: "usa-pagination__button", "aria-label": "page 1, first page" }, "1")), h("li", { class: ellipsisClasses, "aria-label": "ellipsis indicating non-visible pages" }, h("span", null, "\u2026")))))) : null;
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
        const nextButton = page < pages ? (h(Fragment, null, h("li", { class: arrowClasses, "aria-label": nextAriaLabel }, h("a", { onClick: () => this.handlePageSelect(page + 1, 'nav-paginate-number'), onKeyDown: e => this.handleKeyDown(e, page + 1), class: "usa-pagination__link usa-pagination__next-page", href: "javascript:void(0)" }, h("span", { class: "usa-pagination__link-text" }, i18next.t('next')), h("div", { id: "next-arrow-icon" }))))) : null;
        return (h(Host, null, h("nav", { class: "usa-pagination", "aria-label": "Pagination" }, h("ul", { class: "usa-pagination__list" }, previousButton, renderPages, endEllipsisAndLastPage, nextButton))));
    }
    static get is() { return "va-pagination"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-pagination.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-pagination.css"]
        };
    }
    static get assetsDirs() { return ["../assets"]; }
    static get properties() {
        return {
            "ariaLabelSuffix": {
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
                    "text": "Aria-label suffix text for buttons"
                },
                "attribute": "aria-label-suffix",
                "reflect": false,
                "defaultValue": "''"
            },
            "enableAnalytics": {
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
                    "text": "Whether or not an analytics event will be fired"
                },
                "attribute": "enable-analytics",
                "reflect": false,
                "defaultValue": "true"
            },
            "maxPageListLength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The maximum number of pages to show at once"
                },
                "attribute": "max-page-list-length",
                "reflect": false,
                "defaultValue": "10"
            },
            "page": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The current page number"
                },
                "attribute": "page",
                "reflect": false
            },
            "pages": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The total number of pages"
                },
                "attribute": "pages",
                "reflect": false
            },
            "showLastPage": {
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
                    "text": "Display last page number when the page count exceeds\n`maxPageListLength`"
                },
                "attribute": "show-last-page",
                "reflect": false,
                "defaultValue": "false"
            },
            "unbounded": {
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
                    "text": "Don't show last page when the page count exceeds\n`maxPageListLength` (but do show the ellipsis)."
                },
                "attribute": "unbounded",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "pageSelect",
                "name": "pageSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires when a page is selected"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "componentLibraryAnalytics",
                "name": "component-library-analytics",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event used to track usage of the component. Fires when a\na page is selected if enable-analytics is true."
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
