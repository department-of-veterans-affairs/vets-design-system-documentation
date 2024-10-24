import { Host, h, } from "@stencil/core";
import { getSlottedNodes } from "../../utils/utils";
import classNames from "classnames";
export class VaAccordionItem {
    constructor() {
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
        const accordionItemClass = classNames({
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
    static get is() { return "va-accordion-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-accordion-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-accordion-item.css"]
        };
    }
    static get properties() {
        return {
            "header": {
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
                    "text": "The accordion item header text"
                },
                "attribute": "header",
                "reflect": false
            },
            "subheader": {
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
                    "text": "Optional accordion item subheader text. Default is null."
                },
                "attribute": "subheader",
                "reflect": false,
                "defaultValue": "null"
            },
            "open": {
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
                    "text": "True if the item is open"
                },
                "attribute": "open",
                "reflect": false,
                "defaultValue": "false"
            },
            "level": {
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
                    "text": "Header level for button wrapper. Must be between 1 and 6"
                },
                "attribute": "level",
                "reflect": false,
                "defaultValue": "2"
            },
            "bordered": {
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
                    "text": "Whether or not the accordion item will have a border"
                },
                "attribute": "bordered",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "slotHeader": {},
            "slotTag": {}
        };
    }
    static get events() {
        return [{
                "method": "accordionItemToggled",
                "name": "accordionItemToggled",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "This event is fired so that va-accordion element can manage which items are opened or closed"
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
