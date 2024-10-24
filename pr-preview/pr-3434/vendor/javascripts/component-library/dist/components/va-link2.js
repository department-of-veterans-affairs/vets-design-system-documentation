import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { d as defineCustomElement$1 } from './va-icon2.js';

const vaLinkCss = "p,a,ol,ul,li,dl,dt,dd,form,label,button{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5}button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}a{text-decoration:none;color:var(--vads-color-link);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:color, background-color, border-color;transition-property:color, background-color, border-color}a:hover{background-color:rgba(0, 0, 0, 0.05);color:inherit}a:visited{color:var(--vads-color-link-visited)}.usa-sr-only{position:absolute;left:-999em;right:auto}:host{display:inline}:host([href]:focus){outline:none !important}:host a{cursor:pointer;text-decoration:underline;font:inherit}:host a.va-link--reverse,:host a.va-link--reverse .link-icon--back{color:var(--vads-color-white)}:host a.va-link--reverse:hover,:host a.va-link--reverse:active,:host a.va-link--reverse:hover .link-icon--back,:host a.va-link--reverse:active .link-icon--back,:host a.va-link--reverse .link-icon--back:hover,:host a.va-link--reverse .link-icon--back:active,:host a.va-link--reverse .link-icon--back:hover .link-icon--back,:host a.va-link--reverse .link-icon--back:active .link-icon--back{color:var(--vads-color-action-focus-on-light);background-color:transparent}:host([active]:not([active=false])) a{font-weight:700}:host([icon-name]) va-icon{margin-right:4px}.link-icon--active{vertical-align:baseline;position:relative;top:3px}.link-icon--left{margin-right:4px;vertical-align:baseline;position:relative;top:3px}.link-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.link-icon--back{color:var(--vads-color-gray-medium);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:color, background-color, border-color;transition-property:color, background-color, border-color}.link--center{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}dfn{font-style:normal}abbr{text-decoration:none}.external-link-icon{margin-left:4px}";
const VaLinkStyle0 = vaLinkCss;

const VaLink = /*@__PURE__*/ proxyCustomElement(class VaLink extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        /** @ts-ignore */
        this.handleClick = (e) => {
            if (!this.disableAnalytics) {
                const detail = {
                    componentName: 'va-link',
                    action: 'click',
                    details: {
                        label: this.text,
                        destination: this.href,
                        origin: window.location.href,
                    },
                };
                this.componentLibraryAnalytics.emit(detail);
            }
        };
        this.getAbbreviationTitle = () => {
            const { abbrTitle, filetype } = this;
            if (filetype === 'PDF')
                return 'Portable Document Format';
            return abbrTitle;
        };
        this.abbrTitle = undefined;
        this.active = false;
        this.back = false;
        this.calendar = false;
        this.channel = false;
        this.disableAnalytics = false;
        this.download = false;
        this.href = undefined;
        this.filename = undefined;
        this.filetype = undefined;
        this.pages = undefined;
        this.text = undefined;
        this.video = false;
        this.reverse = false;
        this.external = false;
        this.label = null;
        this.iconName = null;
        this.iconSize = 3;
    }
    render() {
        const { active, back, calendar, channel, download, filetype, filename, getAbbreviationTitle, handleClick, href, pages, text, video, reverse, external, iconName, iconSize, } = this;
        const linkClass = classnames({
            'va-link--reverse': reverse,
            'link--center': iconName || external,
        });
        // Active link variant
        if (active) {
            return (h(Host, null, h("a", { href: href, class: linkClass, onClick: handleClick, "aria-label": this.label }, text, h("va-icon", { class: "link-icon--active", icon: "chevron_right" }))));
        }
        // Back link variant
        if (back) {
            const backArrow = (h("va-icon", { icon: "arrow_back", class: "link-icon--left link-icon--back" }));
            return (h(Host, null, h("div", { class: "link-container" }, backArrow, h("a", { href: href, class: linkClass, onClick: handleClick, "aria-label": this.label }, text))));
        }
        // Channel and Video link variant
        if (channel || video) {
            const linkIcon = channel ? 'youtube' : 'play_circle';
            return (h(Host, null, h("a", { href: href, class: linkClass, onClick: handleClick, rel: "noopener", target: "_blank" }, h("va-icon", { class: "link-icon--left", icon: linkIcon }), text, " ", h("dfn", null, channel ? 'YouTube' : 'on YouTube'))));
        }
        // Calendar link variant
        if (calendar) {
            return (h(Host, null, h("a", { href: href, class: linkClass, download: filename, onClick: handleClick }, h("va-icon", { class: "link-icon--left", icon: "calendar_today" }), text)));
        }
        // Download link variant
        if (download) {
            return (h(Host, null, h("a", { href: href, class: linkClass, download: filename, onClick: handleClick }, h("va-icon", { class: "link-icon--left", icon: "file_download" }), text, ' ', filetype && (h("dfn", null, "(", h("abbr", { title: getAbbreviationTitle() }, filetype), pages && `, ${pages} pages`, ")")))));
        }
        // Icon link Variant
        if (iconName) {
            return (h(Host, null, h("a", { href: href, class: linkClass, onClick: handleClick }, h("va-icon", { icon: iconName, size: iconSize, part: "icon" }), text)));
        }
        if (external) {
            return (h(Host, null, h("a", { href: href, rel: "noreferrer", class: linkClass, onClick: handleClick, target: "_blank" }, text, h("va-icon", { class: "external-link-icon", icon: "launch" }), h("span", { class: "usa-sr-only" }, "opens in a new tab"))));
        }
        // Default
        return (h(Host, null, h("a", { href: href, class: linkClass, onClick: handleClick, "aria-label": this.label }, text)));
    }
    static get style() { return VaLinkStyle0; }
}, [1, "va-link", {
        "abbrTitle": [1, "abbr-title"],
        "active": [516],
        "back": [4],
        "calendar": [4],
        "channel": [4],
        "disableAnalytics": [4, "disable-analytics"],
        "download": [4],
        "href": [1],
        "filename": [1],
        "filetype": [1],
        "pages": [2],
        "text": [1],
        "video": [4],
        "reverse": [4],
        "external": [4],
        "label": [1],
        "iconName": [1, "icon-name"],
        "iconSize": [2, "icon-size"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-link", "va-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "va-link":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaLink);
            }
            break;
        case "va-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { VaLink as V, defineCustomElement as d };
