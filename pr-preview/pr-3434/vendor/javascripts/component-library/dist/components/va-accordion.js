import { Build, proxyCustomElement, HTMLElement, createEvent, forceUpdate, h, Host } from '@stencil/core/internal/client';
import { g as getSlottedNodes } from './utils.js';
import './i18n-setup.js';
import './contacts.js';
import { c as classnames } from './index2.js';
import { i as instance } from './i18next.js';

const vaAccordionCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}.usa-accordion{margin-bottom:0;margin-top:0;list-style-type:none;padding-left:0;color:#1b1b1b;margin:0;padding:0;width:100%;font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5}.usa-accordion>li{margin-bottom:0;max-width:unset}.usa-accordion>ul li ul{list-style:disc}.usa-accordion>ul li ul>li>ul{list-style:circle}.usa-accordion>ul li ul>li>ul>li>ul{list-style:square}.usa-accordion+.usa-accordion,.usa-accordion+.usa-accordion--bordered{margin-top:0.5rem}.usa-accordion--bordered .usa-accordion__content{border-bottom:0.25rem solid #f0f0f0;border-left:0.25rem solid #f0f0f0;border-right:0.25rem solid #f0f0f0;padding-bottom:1rem}.usa-accordion--bordered .usa-accordion__heading{margin-bottom:0}.usa-accordion__heading,.usa-prose .usa-accordion__heading{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:0.9;margin:0}.usa-accordion__heading:not(:first-child),.usa-prose .usa-accordion__heading:not(:first-child){margin-top:0.5rem}.usa-accordion__content{color:#1b1b1b;background-color:white;margin-top:0;overflow:auto;padding:1rem 1.25rem calc(1rem - 0.25rem) 1.25rem}.usa-accordion__content>*:first-child{margin-top:0}.usa-accordion__content>*:last-child{margin-bottom:0}.usa-accordion__button{color:#005ea2;text-decoration:underline;background-color:transparent;border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;font-weight:normal;-ms-flex-pack:normal;justify-content:normal;text-align:left;margin:0;padding:0;color:#1b1b1b;background-color:#f0f0f0;background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat;background-position:right 1.25rem center;background-size:1.5rem;cursor:pointer;display:inline-block;font-weight:700;margin:0;padding:1rem 3.5rem 1rem 1.25rem;text-decoration:none;width:100%}.usa-accordion__button:visited{color:#54278f}.usa-accordion__button:hover{color:#1a4480}.usa-accordion__button:active{color:#162e51}.usa-accordion__button:focus{outline:0.25rem solid #2491ff;outline-offset:0rem}.usa-accordion__button:hover,.usa-accordion__button.usa-button--hover,.usa-accordion__button:disabled:hover,.usa-accordion__button[aria-disabled=true]:hover,.usa-accordion__button:disabled.usa-button--hover,.usa-accordion__button[aria-disabled=true].usa-button--hover,.usa-accordion__button:active,.usa-accordion__button.usa-button--active,.usa-accordion__button:disabled:active,.usa-accordion__button[aria-disabled=true]:active,.usa-accordion__button:disabled.usa-button--active,.usa-accordion__button[aria-disabled=true].usa-button--active,.usa-accordion__button:disabled:focus,.usa-accordion__button[aria-disabled=true]:focus,.usa-accordion__button:disabled.usa-focus,.usa-accordion__button[aria-disabled=true].usa-focus,.usa-accordion__button:disabled,.usa-accordion__button[aria-disabled=true],.usa-accordion__button.usa-button--disabled{background-color:transparent;-webkit-box-shadow:none;box-shadow:none;text-decoration:underline}.usa-accordion__button.usa-button--hover{color:#1a4480}.usa-accordion__button.usa-button--active{color:#162e51}.usa-accordion__button:disabled,.usa-accordion__button[aria-disabled=true],.usa-accordion__button:disabled:hover,.usa-accordion__button[aria-disabled=true]:hover,.usa-accordion__button[aria-disabled=true]:focus{color:#757575}@media (forced-colors: active){.usa-accordion__button:disabled,.usa-accordion__button[aria-disabled=true],.usa-accordion__button:disabled:hover,.usa-accordion__button[aria-disabled=true]:hover,.usa-accordion__button[aria-disabled=true]:focus{color:GrayText}}.usa-accordion__button:hover{color:#1b1b1b;background-color:#dfe1e2;background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat;text-decoration:none}@media (forced-colors: active){.usa-accordion__button{border:2px solid transparent;position:relative}.usa-accordion__button::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:center center;background-size:1.5rem 1.5rem;display:inline-block;height:1.5rem;width:1.5rem;height:100%;position:absolute;right:1.25rem;top:0;content:\"\"}@supports ((-webkit-mask: url(\"\")) or (mask: url(\"\"))){.usa-accordion__button::before{background:none;background-color:ButtonText;-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);-webkit-mask-position:center center;mask-position:center center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:1.5rem 1.5rem;mask-size:1.5rem 1.5rem}}}.usa-accordion__button[aria-expanded=false]{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat;background-size:1.5rem}.usa-accordion__button[aria-expanded=false]:hover{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat}@media (forced-colors: active){.usa-accordion__button[aria-expanded=false]::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:center center;background-size:1.5rem 1.5rem;display:inline-block;height:1.5rem;width:1.5rem;height:100%;position:absolute;right:1.25rem;top:0}@supports ((-webkit-mask: url(\"\")) or (mask: url(\"\"))){.usa-accordion__button[aria-expanded=false]::before{background:none;background-color:ButtonText;-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);-webkit-mask-position:center center;mask-position:center center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:1.5rem 1.5rem;mask-size:1.5rem 1.5rem}}}button.va-accordion__button{border:none;color:var(--vads-color-link);background:transparent;padding:0.625rem;cursor:pointer;font-family:inherit;font-weight:bold;float:right}@media print{button.va-accordion__button{display:none}}";
const VaAccordionStyle0 = vaAccordionCss;

if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    instance.init({ lng: 'cimode' });
}
const VaAccordion$1 = /*@__PURE__*/ proxyCustomElement(class VaAccordion extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        // Expand or Collapse All Function for Button Click
        this.expandCollapseAll = (expanded) => {
            this.expanded = expanded;
            getSlottedNodes(this.el, 'va-accordion-item').forEach((item) => {
                item.setAttribute('open', `${expanded}`);
            });
        };
        this.expanded = false;
        this.openSingle = false;
        this.disableAnalytics = false;
        this.sectionHeading = null;
    }
    itemToggledHandler(event) {
        var _a;
        // eslint-disable-next-line i18next/no-literal-string
        const clickedItem = event.target.closest('va-accordion-item');
        // Usage for slot to provide context to analytics for header and level
        const header = clickedItem.querySelector('[slot="headline"]');
        // using the slot to provide context to analytics for header and level
        let headerText;
        let headerLevel;
        if (header) {
            headerText = header === null || header === void 0 ? void 0 : header.innerHTML;
            headerLevel = parseInt((_a = header === null || header === void 0 ? void 0 : header.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase().split('')[1]);
        }
        else {
            // using the props to provide context to analytics for header and level
            headerText = clickedItem.header;
            headerLevel = clickedItem.level;
        }
        if (this.openSingle) {
            getSlottedNodes(this.el, 'va-accordion-item')
                .filter(item => item !== clickedItem)
                /* eslint-disable-next-line i18next/no-literal-string */
                .forEach(item => item.setAttribute('open', 'false'));
        }
        const prevAttr = clickedItem.getAttribute('open') === 'true' ? true : false;
        if (!this.disableAnalytics) {
            const detail = {
                componentName: 'va-accordion',
                action: prevAttr ? 'collapse' : 'expand',
                details: {
                    header: headerText || clickedItem.header,
                    subheader: clickedItem.subheader,
                    level: headerLevel || clickedItem.level,
                    sectionHeading: this.sectionHeading,
                },
            };
            this.componentLibraryAnalytics.emit(detail);
        }
        /* eslint-disable-next-line i18next/no-literal-string */
        clickedItem.setAttribute('open', !prevAttr ? "true" : "false");
        if (!this.isScrolledIntoView(clickedItem)) {
            clickedItem.scrollIntoView();
        }
        // Check if all accordions are open or closed due to user clicks
        this.accordionsOpened();
    }
    accordionsOpened(method = 'every') {
        // Track user clicks on va-accordion-item within an array to compare if all values are true or false
        let accordionItems = [];
        getSlottedNodes(this.el, 'va-accordion-item').forEach(item => {
            accordionItems.push(item.getAttribute('open'));
        });
        const allOpen = currentValue => currentValue === 'true';
        const allClosed = currentValue => currentValue === 'false';
        if (accordionItems[method](allOpen)) {
            this.expanded = true;
        }
        if (accordionItems[method](allClosed)) {
            this.expanded = false;
        }
    }
    isScrolledIntoView(el) {
        const elemTop = el === null || el === void 0 ? void 0 : el.getBoundingClientRect().top;
        if (!elemTop && elemTop !== 0) {
            return false;
        }
        // Only partially || completely visible elements return true
        return elemTop >= 0 && elemTop <= window.innerHeight;
    }
    connectedCallback() {
        instance.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        instance.off('languageChanged');
    }
    // if one or more accordion-items are open on load, then we should put component in state to "Collapse all"
    componentDidLoad() {
        this.accordionsOpened('some');
    }
    render() {
        const { openSingle } = this;
        const accordionClass = classnames({
            'usa-accordion': true,
        });
        const accordionItemIDs = [...this.el.children]
            .filter((el) => el.tagName.toLowerCase() === 'va-accordion-item')
            .map((el) => el.id);
        return (h(Host, { key: 'cf227d8049ad6b7b5fb35d8ffd7c9b463ca11485' }, h("div", { key: 'a44e2be0b6f3076998fb17ea2c9f21f9cae3e55b', class: accordionClass, ref: (accordionContainer) => this.accordionContainer = accordionContainer }, !openSingle ? (h("button", { class: "va-accordion__button", ref: el => (this.expandCollapseBtn = el), onClick: () => this.expandCollapseAll(!this.expanded), "aria-label": this.expanded
                ? instance.t('collapse-all-aria-label')
                : instance.t('expand-all-aria-label'), "aria-controls": accordionItemIDs.join(' '), "aria-expanded": `${this.expanded}` }, this.expanded
            ? `${instance.t('collapse-all')} -`
            : `${instance.t('expand-all')} +`)) : null, h("slot", { key: '4c71a973c15cc8881be11ba84ddaa15326883958' }))));
    }
    get el() { return this; }
    static get style() { return VaAccordionStyle0; }
}, [1, "va-accordion", {
        "openSingle": [4, "open-single"],
        "disableAnalytics": [4, "disable-analytics"],
        "sectionHeading": [1, "section-heading"],
        "expanded": [32]
    }, [[0, "accordionItemToggled", "itemToggledHandler"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-accordion"];
    components.forEach(tagName => { switch (tagName) {
        case "va-accordion":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaAccordion$1);
            }
            break;
    } });
}

const VaAccordion = VaAccordion$1;
const defineCustomElement = defineCustomElement$1;

export { VaAccordion, defineCustomElement };
