import { Host, h } from "@stencil/core";
import classNames from "classnames";
/**
 * @componentName Link
 * @maturityCategory caution
 * @maturityLevel candidate
 */
export class VaLink {
    constructor() {
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
        const linkClass = classNames({
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
    static get is() { return "va-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-link.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-link.css"]
        };
    }
    static get properties() {
        return {
            "abbrTitle": {
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
                    "text": "The title used in the abbr element. If filetype is PDF, the abbr title will be Portable Document Format."
                },
                "attribute": "abbr-title",
                "reflect": false
            },
            "active": {
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
                    "text": "If `true`, the anchor text will be bolded and include a right arrow icon."
                },
                "attribute": "active",
                "reflect": true,
                "defaultValue": "false"
            },
            "back": {
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
                    "text": "If 'true', renders a \"back arrow\" in front of the link text"
                },
                "attribute": "back",
                "reflect": false,
                "defaultValue": "false"
            },
            "calendar": {
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
                    "text": "If `true`, a calendar icon will be displayed before the anchor text."
                },
                "attribute": "calendar",
                "reflect": false,
                "defaultValue": "false"
            },
            "channel": {
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
                    "text": "If `true`, a channel icon will be displayed before the anchor text."
                },
                "attribute": "channel",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "If `true`, the component-library-analytics event is disabled."
                },
                "attribute": "disable-analytics",
                "reflect": false,
                "defaultValue": "false"
            },
            "download": {
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
                    "text": "If `true`, the link will be treated as a download, and a download icon will be displayed before the anchor text."
                },
                "attribute": "download",
                "reflect": false,
                "defaultValue": "false"
            },
            "href": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The href attribute of the anchor."
                },
                "attribute": "href",
                "reflect": false
            },
            "filename": {
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
                    "text": "The suggested filename. Only valid if download or calendar is `true`."
                },
                "attribute": "filename",
                "reflect": false
            },
            "filetype": {
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
                    "text": "The type of the file. Only displayed if download is `true`."
                },
                "attribute": "filetype",
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The number of pages of the file. Only displayed if download is `true`."
                },
                "attribute": "pages",
                "reflect": false
            },
            "text": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The anchor text."
                },
                "attribute": "text",
                "reflect": false
            },
            "video": {
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
                    "text": "If `true`, a video icon will be displayed before the anchor text."
                },
                "attribute": "video",
                "reflect": false,
                "defaultValue": "false"
            },
            "reverse": {
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
                    "text": "If 'true', will represent the link with white text instead of blue."
                },
                "attribute": "reverse",
                "reflect": false,
                "defaultValue": "false"
            },
            "external": {
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
                    "text": "If 'true', will open in a new tab and have icon denoting that. Will also have the text \"opens in a new tab\" appended to the link text in screen reader only span"
                },
                "attribute": "external",
                "reflect": false,
                "defaultValue": "false"
            },
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
                    "text": "Adds an aria-label attribute to the link element."
                },
                "attribute": "label",
                "reflect": false,
                "defaultValue": "null"
            },
            "iconName": {
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
                    "text": "The name of the icon to be displayed in the link."
                },
                "attribute": "icon-name",
                "reflect": false,
                "defaultValue": "null"
            },
            "iconSize": {
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
                    "text": "The size variant of the icon,\nan integer between 3 and 9 inclusive."
                },
                "attribute": "icon-size",
                "reflect": false,
                "defaultValue": "3"
            }
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
                    "text": "The event used to track usage of the component."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
