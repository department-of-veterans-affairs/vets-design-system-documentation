import { Host, h, forceUpdate, } from "@stencil/core";
import { getSlottedNodes } from "../../utils/utils";
import { i18next } from "../..";
import { Build } from "@stencil/core";
import classNames from "classnames";
if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    i18next.init({ lng: 'cimode' });
}
/**
 * Accordions are a list of headers that can be clicked to hide or reveal additional content.
 *
 * ## Usability
 * ### When to use
 * - Users only need a few specific pieces of content within a page.
 * - Information needs to be displayed in a small space.
 *
 * ### When to consider something else
 * - If visitors need to see most or all of the information on a page. Use well-formatted text instead.
 * - If there is not enough content to warrant condensing. Accordions increase cognitive load and interaction cost, as users have to make decisions about what headers to click on.
 *
 * ### Guidance
 *
 * - Allow users to click anywhere in the header area to expand or collapse the content; a larger target is easier to manipulate.
 * - Make sure interactive elements within the collapsible region are far enough from the headers that users don’t accidentally trigger a collapse. (The exact distance depends on the device.
 */
/**
 * @componentName Accordion
 * @accordionItemToggled This event is fired when an accordion item is opened or closed
 * @maturityCategory use
 * @maturityLevel best_practice
 * @translations English
 * @translations Spanish
 * @translations Tagalog
 */
export class VaAccordion {
    constructor() {
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
        i18next.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        i18next.off('languageChanged');
    }
    // if one or more accordion-items are open on load, then we should put component in state to "Collapse all"
    componentDidLoad() {
        this.accordionsOpened('some');
    }
    render() {
        const { openSingle } = this;
        const accordionClass = classNames({
            'usa-accordion': true,
        });
        const accordionItemIDs = [...this.el.children]
            .filter((el) => el.tagName.toLowerCase() === 'va-accordion-item')
            .map((el) => el.id);
        return (h(Host, { key: 'cf227d8049ad6b7b5fb35d8ffd7c9b463ca11485' }, h("div", { key: 'a44e2be0b6f3076998fb17ea2c9f21f9cae3e55b', class: accordionClass, ref: (accordionContainer) => this.accordionContainer = accordionContainer }, !openSingle ? (h("button", { class: "va-accordion__button", ref: el => (this.expandCollapseBtn = el), onClick: () => this.expandCollapseAll(!this.expanded), "aria-label": this.expanded
                ? i18next.t('collapse-all-aria-label')
                : i18next.t('expand-all-aria-label'), "aria-controls": accordionItemIDs.join(' '), "aria-expanded": `${this.expanded}` }, this.expanded
            ? `${i18next.t('collapse-all')} -`
            : `${i18next.t('expand-all')} +`)) : null, h("slot", { key: '4c71a973c15cc8881be11ba84ddaa15326883958' }))));
    }
    static get is() { return "va-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-accordion.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-accordion.css"]
        };
    }
    static get properties() {
        return {
            "openSingle": {
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
                    "text": "True if only a single item can be opened at once"
                },
                "attribute": "open-single",
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
                    "text": "If `true`, doesn't fire the CustomEvent which can be used for analytics tracking."
                },
                "attribute": "disable-analytics",
                "reflect": false,
                "defaultValue": "false"
            },
            "sectionHeading": {
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
                    "text": "Optional accordion section heading text. Only used in analytics event. Default is null."
                },
                "attribute": "section-heading",
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "expanded": {}
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
                    "text": "The event used to track usage of the component. This is emitted when an\naccordion item is toggled and disableAnalytics is not true."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "accordionItemToggled",
                "method": "itemToggledHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
