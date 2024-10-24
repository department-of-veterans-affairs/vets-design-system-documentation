import { Host, h } from "@stencil/core";
import classnames from "classnames";
/**
 * @componentName Breadcrumbs
 * @maturityCategory use
 * @maturityLevel deployed
 */
export class VaBreadcrumbs {
    constructor() {
        this.label = 'Breadcrumb';
        this.wrapping = false;
        this.breadcrumbList = undefined;
        this.homeVeteransAffairs = true;
        this.formattedBreadcrumbs = [];
        this.disableAnalytics = false;
    }
    /**
     *
     * This is a method that watches for changes in the 'breadcrumbList' prop.
     * When the 'breadcrumbList' prop changes, this method parses the new value (provided as a JSON-formatted string)
     * into a JavaScript object and assigns it to the 'breadcrumbsState' state.
     */
    watchBreadcrumbListHandler(breadcrumbList) {
        var _a;
        if (!((_a = this.breadcrumbList) === null || _a === void 0 ? void 0 : _a.length))
            return;
        let potentialBreadcrumbs = this.validateBreadcrumbs(breadcrumbList);
        if (potentialBreadcrumbs) {
            this.updateBreadCrumbList(potentialBreadcrumbs);
        }
    }
    /**
     * This method is used to update the formattedBreadcrumbs state.
     * It either parses a JSON string into an array of breadcrumb objects or uses the passed array as is.
     *
     * @param breadcrumbList - An array of breadcrumb objects or a stringified version of it.
     * @private
     */
    updateBreadCrumbList(breadcrumbList) {
        const firstBreadcrumb = breadcrumbList[0];
        if (firstBreadcrumb && this.homeVeteransAffairs) {
            firstBreadcrumb.label = 'VA.gov home';
        }
        this.formattedBreadcrumbs = breadcrumbList;
    }
    getClickLevel(target) {
        const anchorNodes = Array.from(this.el.shadowRoot.querySelectorAll('a'));
        const index = anchorNodes.findIndex((node) => node.isEqualNode(target));
        return index + 1;
    }
    fireAnalyticsEvent(event) {
        if (!this.disableAnalytics) {
            const target = event.target;
            // If it's a link being clicked, dispatch an analytics event
            if ((target === null || target === void 0 ? void 0 : target.tagName) === 'A') {
                const details = {
                    componentName: 'va-breadcrumbs',
                    action: 'linkClick',
                    details: {
                        clickLabel: target.innerText.trim(),
                        clickLevel: this.getClickLevel(target),
                        totalLevels: this.el.shadowRoot.querySelectorAll('a').length + 1
                    },
                };
                this.componentLibraryAnalytics.emit(details);
            }
        }
    }
    handleAnchorNode(node, index, slotNodes) {
        const li = document.createElement('li');
        li.classList.add('va-breadcrumbs-li');
        if (index === slotNodes.length - 1) {
            /* eslint-disable-next-line i18next/no-literal-string */
            node.setAttribute('aria-current', 'page');
        }
        node.parentNode.replaceChild(li, node);
        li.appendChild(node);
    }
    handleListNode(node, index, slotNodes) {
        node.classList.add('va-breadcrumbs-li');
        const anchor = node.querySelector('a');
        if (anchor && index === slotNodes.length - 1) {
            /* eslint-disable-next-line i18next/no-literal-string */
            anchor.setAttribute('aria-current', 'page');
        }
    }
    validateBreadcrumbs(breadcrumbList) {
        let potentialBreadcrumbs;
        if (Array.isArray(breadcrumbList)) {
            potentialBreadcrumbs = breadcrumbList;
        }
        else if (typeof breadcrumbList === 'string') {
            try {
                potentialBreadcrumbs = JSON.parse(breadcrumbList);
            }
            catch (e) {
                return false;
            }
        }
        else
            return false;
        // Now validate that potentialBreadcrumbs is an array of objects with the properties "label" and "href"
        // eslint-disable-next-line i18next/no-literal-string
        if (Array.isArray(potentialBreadcrumbs) &&
            potentialBreadcrumbs.every(item => typeof item === 'object' &&
                item.hasOwnProperty('label') &&
                item.hasOwnProperty('href'))) {
            return potentialBreadcrumbs;
        }
        else {
            return false;
        }
    }
    componentDidLoad() {
        var _a;
        // We are getting the slot nodes so that we can handle either receiving an
        // anchor tag or a list item with an anchor tag.
        const slotNodes = (_a = this.el.shadowRoot.querySelector('slot')) === null || _a === void 0 ? void 0 : _a.assignedNodes();
        if (!slotNodes)
            return;
        // This handles two different slot node scenarios:
        // 1. <li><a href="...">...</a></li>
        // 2. <a href="...">...</a>
        slotNodes.forEach((node, index) => {
            if (node.nodeName === 'LI') {
                this.handleListNode(node, index, slotNodes);
            }
            else if (node.nodeName === 'A') {
                this.handleAnchorNode(node, index, slotNodes);
            }
        });
    }
    /**
     * This method is invoked once before the component is first rendered.
     * Its main purpose is to validate and format the breadcrumbList prop, if present.
     *
     */
    componentWillLoad() {
        var _a;
        if (!((_a = this.breadcrumbList) === null || _a === void 0 ? void 0 : _a.length))
            return;
        let potentialBreadcrumbs = this.validateBreadcrumbs(this.breadcrumbList);
        if (potentialBreadcrumbs) {
            this.updateBreadCrumbList(potentialBreadcrumbs);
        }
        else
            return;
    }
    /**
     * This handles the use case of the component dynamically receiving
     * new breadcrumb items. It will programmatically toggle the
     * aria-current attribute on the last anchor tag and add the
     * va-breadcrumbs-li class to the list item.
     */
    handleSlotChange() {
        var _a;
        // Get all of the slot nodes and filter out only the list items.
        const slotNodes = (_a = this.el.shadowRoot.querySelector('slot')) === null || _a === void 0 ? void 0 : _a.assignedNodes().filter((node) => node.nodeName === 'LI');
        if (!slotNodes)
            return;
        slotNodes.forEach((node, index) => {
            // We are only handling li nodes during slot change because it is
            // expected that the dynamic state usage of this component will
            // only be adding new breadcrumbs items in the format of
            // <li><a href="...">...</a></li>.
            if (node.nodeName === 'LI') {
                node.classList.add('usa-breadcrumb__list-item');
                const anchor = node.querySelector('a');
                if (index === 0 && anchor && this.homeVeteransAffairs) {
                    anchor.innerText = 'VA.gov home';
                }
                const isAriaCurrent = anchor === null || anchor === void 0 ? void 0 : anchor.getAttribute('aria-current');
                if (isAriaCurrent && index !== slotNodes.length - 1) {
                    anchor.removeAttribute('aria-current');
                }
                const span = document.createElement('span');
                span.textContent = anchor.textContent;
                anchor.innerHTML = '';
                anchor.appendChild(span);
                if (index === slotNodes.length - 1) {
                    const span = document.createElement('span');
                    span.textContent = anchor.textContent;
                    node.classList.add('usa-current');
                    node.replaceChild(span, anchor);
                    /* eslint-disable-next-line i18next/no-literal-string */
                    node === null || node === void 0 ? void 0 : node.setAttribute('aria-current', 'page');
                }
            }
        });
    }
    /**
     * Emit event with payload equal to href of the link clinked
     * Only fires if link is part of breadcrumb object that also has isLinkRouter = true property
     */
    handleRouteChange(e, href) {
        e.preventDefault();
        this.routeChange.emit({ href });
    }
    /**
     * Handle click event on breadcrumb
     */
    handleClick(e, breadcrumb) {
        const { href, isRouterLink } = breadcrumb;
        if (isRouterLink) {
            this.handleRouteChange(e, href);
        }
        this.fireAnalyticsEvent(e);
    }
    render() {
        const { label, wrapping } = this;
        const wrapClass = classnames({
            'usa-breadcrumb': true,
            'usa-breadcrumb--wrap': wrapping,
        });
        return (h(Host, { key: 'bad1db01e0e41c1d062ce8cca9d2220ee64e2d17' }, h("nav", { key: 'fc74e436bb6dd64c42d5ceb7ec3a96aa795e5386', "aria-label": label, class: wrapClass }, h("ol", { key: '8cd9dfc7661b88a305794d0b843a8c7844549998', role: "list", class: "usa-breadcrumb__list" }, this.formattedBreadcrumbs.map((item, index) => (h("li", { class: `usa-breadcrumb__list-item ${index === this.formattedBreadcrumbs.length - 1
                ? 'usa-current'
                : ''}`, "aria-current": index === this.formattedBreadcrumbs.length - 1
                ? 'page'
                : undefined }, index === this.formattedBreadcrumbs.length - 1 ? (h("a", { class: "usa-breadcrumb__link", href: "#content", onClick: e => this.fireAnalyticsEvent(e), lang: item.lang || 'en-US', hreflang: item.lang || 'en-US' }, h("span", null, item.label))) : (h("a", { class: "usa-breadcrumb__link", href: item.href, onClick: e => this.handleClick(e, item), lang: item.lang || 'en-US', hreflang: item.lang || 'en-US' }, h("span", null, item.label))))))))));
    }
    static get is() { return "va-breadcrumbs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-breadcrumbs.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-breadcrumbs.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                    "text": "Adds an aria-label attribute to the <nav /> element."
                },
                "attribute": "label",
                "reflect": false,
                "defaultValue": "'Breadcrumb'"
            },
            "wrapping": {
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
                    "text": "Whether or not the component will wrap the breadcrumbs."
                },
                "attribute": "wrapping",
                "reflect": false,
                "defaultValue": "false"
            },
            "breadcrumbList": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Breadcrumb[] | string",
                    "resolved": "Breadcrumb[] | string",
                    "references": {
                        "Breadcrumb": {
                            "location": "local",
                            "path": "/home/runner/work/component-library/component-library/packages/web-components/src/components/va-breadcrumbs/va-breadcrumbs.tsx",
                            "id": "src/components/va-breadcrumbs/va-breadcrumbs.tsx::Breadcrumb"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Represents a list of breadcrumbs. Use a JSON array of objects with label and href properties, then wrap in a string if using non-React-binding version. See Storybook examples for React-binding version. For pure web components, here's an example link: ``[{\"href\": \"/link1\", \"label\": \"Link 1\"}]`."
                },
                "attribute": "breadcrumb-list",
                "reflect": false
            },
            "homeVeteransAffairs": {
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
                    "text": "When true, the first breadcrumb label will be \"VA.gov home\"."
                },
                "attribute": "home-veterans-affairs",
                "reflect": false,
                "defaultValue": "true"
            },
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
                    "text": "Analytics tracking function(s) will not be called"
                },
                "attribute": "disable-analytics",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "formattedBreadcrumbs": {}
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
                    "text": "The event used to track usage of the component. This is emitted when a\nbreadcrumb anchor is clicked and disableAnalytics is not true."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "routeChange",
                "name": "routeChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires when user clicks on breadcrumb anchor tag.\nHas no effect unless the href of anchor tag is part of\nbreadcrumb object that also has isRouterLink: true"
                },
                "complexType": {
                    "original": "{ href: string }",
                    "resolved": "{ href: string; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "breadcrumbList",
                "methodName": "watchBreadcrumbListHandler"
            }];
    }
}
