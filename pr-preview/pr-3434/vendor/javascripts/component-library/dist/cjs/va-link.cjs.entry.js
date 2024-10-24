'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');
const index$1 = require('./index-c4897a3e.js');

const vaLinkCss = "p,a,ol,ul,li,dl,dt,dd,form,label,button{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5}button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}a{text-decoration:none;color:var(--vads-color-link);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:color, background-color, border-color;transition-property:color, background-color, border-color}a:hover{background-color:rgba(0, 0, 0, 0.05);color:inherit}a:visited{color:var(--vads-color-link-visited)}.usa-sr-only{position:absolute;left:-999em;right:auto}:host{display:inline}:host([href]:focus){outline:none !important}:host a{cursor:pointer;text-decoration:underline;font:inherit}:host a.va-link--reverse,:host a.va-link--reverse .link-icon--back{color:var(--vads-color-white)}:host a.va-link--reverse:hover,:host a.va-link--reverse:active,:host a.va-link--reverse:hover .link-icon--back,:host a.va-link--reverse:active .link-icon--back,:host a.va-link--reverse .link-icon--back:hover,:host a.va-link--reverse .link-icon--back:active,:host a.va-link--reverse .link-icon--back:hover .link-icon--back,:host a.va-link--reverse .link-icon--back:active .link-icon--back{color:var(--vads-color-action-focus-on-light);background-color:transparent}:host([active]:not([active=false])) a{font-weight:700}:host([icon-name]) va-icon{margin-right:4px}.link-icon--active{vertical-align:baseline;position:relative;top:3px}.link-icon--left{margin-right:4px;vertical-align:baseline;position:relative;top:3px}.link-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.link-icon--back{color:var(--vads-color-gray-medium);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:color, background-color, border-color;transition-property:color, background-color, border-color}.link--center{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}dfn{font-style:normal}abbr{text-decoration:none}.external-link-icon{margin-left:4px}";
const VaLinkStyle0 = vaLinkCss;

const VaLink = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentLibraryAnalytics = index.createEvent(this, "component-library-analytics", 7);
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
        const linkClass = index$1.classnames({
            'va-link--reverse': reverse,
            'link--center': iconName || external,
        });
        // Active link variant
        if (active) {
            return (index.h(index.Host, null, index.h("a", { href: href, class: linkClass, onClick: handleClick, "aria-label": this.label }, text, index.h("va-icon", { class: "link-icon--active", icon: "chevron_right" }))));
        }
        // Back link variant
        if (back) {
            const backArrow = (index.h("va-icon", { icon: "arrow_back", class: "link-icon--left link-icon--back" }));
            return (index.h(index.Host, null, index.h("div", { class: "link-container" }, backArrow, index.h("a", { href: href, class: linkClass, onClick: handleClick, "aria-label": this.label }, text))));
        }
        // Channel and Video link variant
        if (channel || video) {
            const linkIcon = channel ? 'youtube' : 'play_circle';
            return (index.h(index.Host, null, index.h("a", { href: href, class: linkClass, onClick: handleClick, rel: "noopener", target: "_blank" }, index.h("va-icon", { class: "link-icon--left", icon: linkIcon }), text, " ", index.h("dfn", null, channel ? 'YouTube' : 'on YouTube'))));
        }
        // Calendar link variant
        if (calendar) {
            return (index.h(index.Host, null, index.h("a", { href: href, class: linkClass, download: filename, onClick: handleClick }, index.h("va-icon", { class: "link-icon--left", icon: "calendar_today" }), text)));
        }
        // Download link variant
        if (download) {
            return (index.h(index.Host, null, index.h("a", { href: href, class: linkClass, download: filename, onClick: handleClick }, index.h("va-icon", { class: "link-icon--left", icon: "file_download" }), text, ' ', filetype && (index.h("dfn", null, "(", index.h("abbr", { title: getAbbreviationTitle() }, filetype), pages && `, ${pages} pages`, ")")))));
        }
        // Icon link Variant
        if (iconName) {
            return (index.h(index.Host, null, index.h("a", { href: href, class: linkClass, onClick: handleClick }, index.h("va-icon", { icon: iconName, size: iconSize, part: "icon" }), text)));
        }
        if (external) {
            return (index.h(index.Host, null, index.h("a", { href: href, rel: "noreferrer", class: linkClass, onClick: handleClick, target: "_blank" }, text, index.h("va-icon", { class: "external-link-icon", icon: "launch" }), index.h("span", { class: "usa-sr-only" }, "opens in a new tab"))));
        }
        // Default
        return (index.h(index.Host, null, index.h("a", { href: href, class: linkClass, onClick: handleClick, "aria-label": this.label }, text)));
    }
};
VaLink.style = VaLinkStyle0;

exports.va_link = VaLink;
