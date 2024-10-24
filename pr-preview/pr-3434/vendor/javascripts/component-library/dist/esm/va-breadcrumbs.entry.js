import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-f0e1e12e.js';
import { c as classnames } from './index-6d7ecf98.js';

const vaBreadcrumbsCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}.usa-icon{display:inline-block;fill:currentColor;height:1em;position:relative;width:1em}.usa-icon--size-3{height:1.5rem;width:1.5rem}.usa-icon--size-4{height:2rem;width:2rem}.usa-icon--size-5{height:2.5rem;width:2.5rem}.usa-icon--size-6{height:3rem;width:3rem}.usa-icon--size-7{height:3.5rem;width:3.5rem}.usa-icon--size-8{height:4rem;width:4rem}.usa-icon--size-9{height:4.5rem;width:4.5rem}.usa-breadcrumb{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;color:#1b1b1b;background-color:white;padding-left:0;padding-right:0}@media all and (min-width: 30em){.usa-breadcrumb{padding-bottom:1rem;padding-top:1rem}}@media all and (min-width: 30em){.usa-breadcrumb:not(.usa-breadcrumb--wrap) .usa-breadcrumb__list{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}}.usa-breadcrumb__list{margin-bottom:0;margin-top:0;list-style-type:none;padding-left:0;display:block;padding:0.25rem;margin-left:-0.25rem;margin-right:-0.25rem}.usa-breadcrumb__list>li{margin-bottom:0;max-width:unset}.usa-breadcrumb__list-item{position:absolute;left:-999em;right:auto;display:inline}@media all and (max-width: 29.99em){.usa-breadcrumb__list-item{white-space:normal}.usa-breadcrumb__list-item:nth-last-child(2){position:static}.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link{color:#005ea2;text-decoration:underline;background-color:transparent;border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;font-weight:normal;-ms-flex-pack:normal;justify-content:normal;text-align:left;margin:0;padding:0;padding-left:calc(2ex + 0px);text-indent:calc((2ex + 0px) * -1);color:#005ea2;display:inline-block;padding-bottom:1rem;padding-top:1rem}.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:visited{color:#54278f}.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:hover{color:#1a4480}.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:active{color:#162e51}.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:focus{outline:0.25rem solid #2491ff;outline-offset:0rem}.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:hover,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link.usa-button--hover,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled:hover,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:hover,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled.usa-button--hover,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true].usa-button--hover,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:active,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link.usa-button--active,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled:active,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:active,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled.usa-button--active,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true].usa-button--active,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled:focus,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:focus,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled.usa-focus,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true].usa-focus,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true],.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link.usa-button--disabled{background-color:transparent;-webkit-box-shadow:none;box-shadow:none;text-decoration:underline}.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link.usa-button--hover{color:#1a4480}.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link.usa-button--active{color:#162e51}.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true],.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled:hover,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:hover,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:focus{color:#757575}}@media (max-width: 29.99em) and (forced-colors: active){.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true],.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:disabled:hover,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:hover,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link[aria-disabled=true]:focus{color:GrayText}}@media all and (max-width: 29.99em){.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z%22%2F%3E%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:center center;background-size:2ex 2ex;display:inline-block;height:2ex;width:2ex;content:\"\";vertical-align:baseline;margin-right:0rem}@supports ((-webkit-mask: url(\"\")) or (mask: url(\"\"))){.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link::before{background:none;background-color:#71767a;-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);-webkit-mask-position:center center;mask-position:center center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:2ex 2ex;mask-size:2ex 2ex}}}@media all and (max-width: 29.99em){.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:visited{color:#54278f}}@media all and (max-width: 29.99em){.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:hover,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:active{color:#1a4480}}@media all and (max-width: 29.99em){.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:before{bottom:-0.2em;height:2ex;position:relative}}@media all and (max-width: 29.99em){.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:hover,.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link:active{text-decoration:none}}@media all and (max-width: 29.99em){.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link span{text-decoration:underline}}@media all and (max-width: 29.99em){.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link::before{margin-right:0px}}@media all and (min-width: 30em){.usa-breadcrumb__list-item{position:static}.usa-breadcrumb__list-item:not(:last-child)::after{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z%22%2F%3E%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:center center;background-size:2ex 2ex;display:inline-block;height:2ex;width:2ex;content:\"\";vertical-align:baseline;margin-left:0rem}@supports ((-webkit-mask: url(\"\")) or (mask: url(\"\"))){.usa-breadcrumb__list-item:not(:last-child)::after{background:none;background-color:#71767a;-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);-webkit-mask-position:center center;mask-position:center center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:2ex 2ex;mask-size:2ex 2ex}}.usa-breadcrumb__list-item:not(:last-child)::after{bottom:-0.2em;margin-left:0px;margin-right:0px;height:2ex;position:relative}}.usa-breadcrumb__link{color:#005ea2;display:inline;text-decoration:none}.usa-breadcrumb__link:visited{color:#54278f}.usa-breadcrumb__link:hover,.usa-breadcrumb__link:active{color:#1a4480}.usa-breadcrumb__link span{text-decoration:underline}@media all and (min-width: 30em){.usa-breadcrumb--wrap{line-height:1.4}}.usa-breadcrumb--wrap .usa-breadcrumb__list-item{display:inline-block}:host{display:block}.usa-breadcrumb__link span{pointer-events:none}@media screen and (max-width: 29.99em){.usa-breadcrumb__list-item:not(:nth-last-child(2)){display:none}}.usa-breadcrumb{padding-top:20px;padding-bottom:32px}@media (min-width: 768px){.usa-breadcrumb{padding-bottom:48px}}.usa-breadcrumb__link{color:var(--vads-color-link)}.usa-breadcrumb__link:hover{color:var(--vads-color-primary-dark)}.usa-breadcrumb__link{color:var(--vads-color-link)}.usa-breadcrumb__link:hover{color:var(--vads-color-primary-dark)}.usa-breadcrumb__list-item:not(:last-child)::after{background:var(--vads-color-gray-medium)}@media (max-width: 29.99em){.usa-breadcrumb__list-item:nth-last-child(2) .usa-breadcrumb__link{padding-top:0;padding-bottom:0}}.usa-current a{font-weight:bold}";
const VaBreadcrumbsStyle0 = vaBreadcrumbsCss;

const VaBreadcrumbs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        this.routeChange = createEvent(this, "routeChange", 7);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "breadcrumbList": ["watchBreadcrumbListHandler"]
    }; }
};
VaBreadcrumbs.style = VaBreadcrumbsStyle0;

export { VaBreadcrumbs as va_breadcrumbs };
