import { Host, h } from "@stencil/core";
import classNames from "classnames";
/**
 * @componentName Link - Action
 * @maturityCategory caution
 * @maturityLevel candidate
 */
export class VaLinkAction {
    constructor() {
        /** @ts-ignore */
        this.handleClick = (e) => {
            if (!this.disableAnalytics) {
                const detail = {
                    componentName: 'va-link-action',
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
        this.disableAnalytics = false;
        this.href = undefined;
        this.text = undefined;
        this.messageAriaDescribedby = undefined;
        this.type = 'primary';
        this.label = undefined;
        this.isSingleLine = true;
    }
    componentDidLoad() {
        this.checkTextLines();
    }
    checkTextLines() {
        if (this.linkRef) {
            const computedStyle = getComputedStyle(this.linkRef);
            const lineHeight = parseFloat(computedStyle.lineHeight);
            const height = this.linkRef.clientHeight;
            this.isSingleLine = height <= lineHeight;
        }
    }
    render() {
        const { handleClick, href, text, messageAriaDescribedby, type, label } = this;
        const linkClass = classNames({
            'va-link--reverse': type === 'reverse',
            'va-link--primary': type === 'primary',
            'va-link--secondary': type === 'secondary',
        });
        // eslint-disable-next-line i18next/no-literal-string
        const iconClass = classNames('link-icon--left', 'link-icon', {
            'link-icon--reverse': type === 'reverse',
        });
        const ariaDescribedbyIds = messageAriaDescribedby
            ? 'link-description'
            : null;
        return (h(Host, { key: 'eb517903e355dac7615651174417dac4b401b8f5' }, h("a", { key: 'eb7780b0ce6712102ce401cc778e193811614962', href: href, class: linkClass, "aria-label": label, "aria-describedby": ariaDescribedbyIds, onClick: handleClick, ref: el => (this.linkRef = el) }, h("va-icon", { key: '5d23a38a3c9e7e9af5e1022a26c490507499282d', class: iconClass, icon: "chevron_right", size: 3 }), h("span", { key: 'ba6e5703344849b7bd469b59140ca9e323be3191', class: "link-text" }, text)), messageAriaDescribedby && (h("span", { key: '63e028a4a35003ea50f4de60cbf98d752c5e0327', id: "link-description", class: "sr-only" }, messageAriaDescribedby))));
    }
    static get is() { return "va-link-action"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-link-action.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-link-action.css"]
        };
    }
    static get properties() {
        return {
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
            "messageAriaDescribedby": {
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
                    "text": "An optional message that will be read by screen readers when the link is focused."
                },
                "attribute": "message-aria-describedby",
                "reflect": false
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'reverse'",
                    "resolved": "\"primary\" | \"reverse\" | \"secondary\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of the link, which determines its style.\nCan be 'primary', 'secondary', or 'reverse'."
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'primary'"
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
                    "text": "This provides an aria-label to the link, if present"
                },
                "attribute": "label",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isSingleLine": {}
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
    static get watchers() {
        return [{
                "propName": "text",
                "methodName": "checkTextLines"
            }];
    }
}
