import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { g as getSlottedNodes } from './utils.js';
import { c as classnames } from './index2.js';

const vaAccordionItemCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}.usa-accordion{margin-bottom:0;margin-top:0;list-style-type:none;padding-left:0;color:#1b1b1b;margin:0;padding:0;width:100%;font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5}.usa-accordion>li{margin-bottom:0;max-width:unset}.usa-accordion>ul li ul{list-style:disc}.usa-accordion>ul li ul>li>ul{list-style:circle}.usa-accordion>ul li ul>li>ul>li>ul{list-style:square}.usa-accordion+.usa-accordion,.usa-accordion+.usa-accordion--bordered{margin-top:0.5rem}.usa-accordion--bordered .usa-accordion__content{border-bottom:0.25rem solid #f0f0f0;border-left:0.25rem solid #f0f0f0;border-right:0.25rem solid #f0f0f0;padding-bottom:1rem}.usa-accordion--bordered .usa-accordion__heading{margin-bottom:0}.usa-accordion__heading,.usa-prose .usa-accordion__heading{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:0.9;margin:0}.usa-accordion__heading:not(:first-child),.usa-prose .usa-accordion__heading:not(:first-child){margin-top:0.5rem}.usa-accordion__content{color:#1b1b1b;background-color:white;margin-top:0;overflow:auto;padding:1rem 1.25rem calc(1rem - 0.25rem) 1.25rem}.usa-accordion__content>*:first-child{margin-top:0}.usa-accordion__content>*:last-child{margin-bottom:0}.usa-accordion__button{color:#005ea2;text-decoration:underline;background-color:transparent;border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;font-weight:normal;-ms-flex-pack:normal;justify-content:normal;text-align:left;margin:0;padding:0;color:#1b1b1b;background-color:#f0f0f0;background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat;background-position:right 1.25rem center;background-size:1.5rem;cursor:pointer;display:inline-block;font-weight:700;margin:0;padding:1rem 3.5rem 1rem 1.25rem;text-decoration:none;width:100%}.usa-accordion__button:visited{color:#54278f}.usa-accordion__button:hover{color:#1a4480}.usa-accordion__button:active{color:#162e51}.usa-accordion__button:focus{outline:0.25rem solid #2491ff;outline-offset:0rem}.usa-accordion__button:hover,.usa-accordion__button.usa-button--hover,.usa-accordion__button:disabled:hover,.usa-accordion__button[aria-disabled=true]:hover,.usa-accordion__button:disabled.usa-button--hover,.usa-accordion__button[aria-disabled=true].usa-button--hover,.usa-accordion__button:active,.usa-accordion__button.usa-button--active,.usa-accordion__button:disabled:active,.usa-accordion__button[aria-disabled=true]:active,.usa-accordion__button:disabled.usa-button--active,.usa-accordion__button[aria-disabled=true].usa-button--active,.usa-accordion__button:disabled:focus,.usa-accordion__button[aria-disabled=true]:focus,.usa-accordion__button:disabled.usa-focus,.usa-accordion__button[aria-disabled=true].usa-focus,.usa-accordion__button:disabled,.usa-accordion__button[aria-disabled=true],.usa-accordion__button.usa-button--disabled{background-color:transparent;-webkit-box-shadow:none;box-shadow:none;text-decoration:underline}.usa-accordion__button.usa-button--hover{color:#1a4480}.usa-accordion__button.usa-button--active{color:#162e51}.usa-accordion__button:disabled,.usa-accordion__button[aria-disabled=true],.usa-accordion__button:disabled:hover,.usa-accordion__button[aria-disabled=true]:hover,.usa-accordion__button[aria-disabled=true]:focus{color:#757575}@media (forced-colors: active){.usa-accordion__button:disabled,.usa-accordion__button[aria-disabled=true],.usa-accordion__button:disabled:hover,.usa-accordion__button[aria-disabled=true]:hover,.usa-accordion__button[aria-disabled=true]:focus{color:GrayText}}.usa-accordion__button:hover{color:#1b1b1b;background-color:#dfe1e2;background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat;text-decoration:none}@media (forced-colors: active){.usa-accordion__button{border:2px solid transparent;position:relative}.usa-accordion__button::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:center center;background-size:1.5rem 1.5rem;display:inline-block;height:1.5rem;width:1.5rem;height:100%;position:absolute;right:1.25rem;top:0;content:\"\"}@supports ((-webkit-mask: url(\"\")) or (mask: url(\"\"))){.usa-accordion__button::before{background:none;background-color:ButtonText;-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13H5v-2h14v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);-webkit-mask-position:center center;mask-position:center center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:1.5rem 1.5rem;mask-size:1.5rem 1.5rem}}}.usa-accordion__button[aria-expanded=false]{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat;background-size:1.5rem}.usa-accordion__button[aria-expanded=false]:hover{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);background-repeat:no-repeat}@media (forced-colors: active){.usa-accordion__button[aria-expanded=false]::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:center center;background-size:1.5rem 1.5rem;display:inline-block;height:1.5rem;width:1.5rem;height:100%;position:absolute;right:1.25rem;top:0}@supports ((-webkit-mask: url(\"\")) or (mask: url(\"\"))){.usa-accordion__button[aria-expanded=false]::before{background:none;background-color:ButtonText;-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);-webkit-mask-position:center center;mask-position:center center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:1.5rem 1.5rem;mask-size:1.5rem 1.5rem}}}:host{display:block}:host(:not(:last-child)){margin-bottom:0.5rem}:host(:last-child){margin-bottom:0.3125rem}button{font:inherit;line-height:1.15}::slotted([slot=headline]){display:none}::slotted([slot=icon]),::slotted([slot=subheader-icon]){width:0.625rem;margin-right:0.938rem}::slotted([slot=subheader-icon]){margin-top:0.2rem}.va-accordion__header,.va-accordion__subheader{display:block}.va-accordion__header ::slotted([slot=icon]),.va-accordion__subheader ::slotted([slot=subheader-icon]){margin-right:15px;width:inherit;vertical-align:text-top}.va-accordion__subheader{font-weight:400;font-size:16px;line-height:26px;margin-top:2px}.usa-prose>::slotted(p){line-height:1.5;max-width:64ex}@media print{:host(:not([open])) #content,:host([open=false]) #content{display:block}}:host(:not([open])) #content,:host([open=false]) #content{display:none}";
const VaAccordionItemStyle0 = vaAccordionItemCss;

const VaAccordionItem$1 = /*@__PURE__*/ proxyCustomElement(class VaAccordionItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.accordionItemToggled = createEvent(this, "accordionItemToggled", 7);
        /**
         * Toggle button reference
         */
        this.expandButton = null;
        this.header = undefined;
        this.subheader = null;
        this.open = false;
        this.level = 2;
        this.bordered = false;
        this.slotHeader = null;
        this.slotTag = null;
    }
    toggleOpen(e) {
        this.accordionItemToggled.emit(e);
    }
    // Using onSlotChange to fire event on inital load
    // Data access from slot html element is being perfomed by this function
    // Function allows us to provide context to state
    // State is then being digested by the Header Function below
    populateStateValues() {
        getSlottedNodes(this.el, null).forEach((node) => {
            this.slotHeader = node.innerHTML;
            this.slotTag = node.tagName.toLowerCase();
        });
    }
    componentDidLoad() {
        // auto-expand accordion if the window hash matches the ID
        if (this.el.id && this.el.id === window.location.hash.slice(1)) {
            const currentTarget = this.expandButton;
            if (currentTarget) {
                this.open = true;
                this.el.setAttribute('open', 'true');
                this.el.scrollIntoView();
            }
        }
    }
    render() {
        const { bordered, header, subheader, level, open } = this;
        const accordionItemClass = classnames({
            'usa-accordion--bordered': bordered,
        });
        const Header = () => {
            const headline = this.el.querySelector('[slot="headline"]');
            const ieSlotCheckHeader = headline === null || headline === void 0 ? void 0 : headline.innerHTML;
            // eslint-disable-next-line i18next/no-literal-string
            const Tag = (headline && headline.tagName.includes("H"))
                ? headline.tagName.toLowerCase()
                // eslint-disable-next-line i18next/no-literal-string
                : `h${level}`;
            return (h(Tag, { class: "usa-accordion__heading" }, h("button", { type: "button", class: "usa-accordion__button", "aria-expanded": open ? 'true' : 'false', "aria-controls": "content", onClick: this.toggleOpen.bind(this), ref: el => {
                    this.expandButton = el;
                }, part: "accordion-header" }, h("span", { class: "va-accordion__header" }, h("slot", { name: "icon" }), this.slotHeader || header || ieSlotCheckHeader), this.subheader &&
                h("span", { class: "va-accordion__subheader" }, h("slot", { name: "subheader-icon" }), subheader))));
        };
        return (h(Host, null, h("div", { class: accordionItemClass }, h(Header, null), h("slot", { name: "headline", onSlotchange: () => this.populateStateValues() }), h("div", { id: "content", class: "usa-accordion__content usa-prose", hidden: !open, part: "accordion-content" }, h("slot", null)))));
    }
    get el() { return this; }
    static get style() { return VaAccordionItemStyle0; }
}, [1, "va-accordion-item", {
        "header": [1],
        "subheader": [1],
        "open": [4],
        "level": [2],
        "bordered": [4],
        "slotHeader": [32],
        "slotTag": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-accordion-item"];
    components.forEach(tagName => { switch (tagName) {
        case "va-accordion-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaAccordionItem$1);
            }
            break;
    } });
}

const VaAccordionItem = VaAccordionItem$1;
const defineCustomElement = defineCustomElement$1;

export { VaAccordionItem, defineCustomElement };
