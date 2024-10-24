import { forceUpdate, h } from "@stencil/core";
import { i18next } from "../..";
import { Build } from "@stencil/core";
import { consoleDevError } from "../../utils/utils";
if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    i18next.init({ lng: 'cimode' });
}
/**
 * This component will render links based on the content around it. It scans the document for any `<h2>`
 * elements that contain an `id` inside of an `<article>` and will create a list of links to the headings.
 */
/**
 * @componentName On this page
 * @maturityCategory use
 * @maturityLevel best_practice
 * @translations English
 * @translations Spanish
 * @translations Tagalog
 */
export class VaOnThisPage {
    constructor() {
        this.handleOnClick = event => {
            var _a, _b, _c, _d;
            if (this.disableAnalytics)
                return;
            this.componentLibraryAnalytics.emit({
                componentName: 'va-on-this-page',
                action: 'click',
                details: {
                    'click-text': ((_b = (_a = event.composedPath()) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.textContent) ||
                        ((_d = (_c = event.path) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.textContent),
                },
            });
        };
        this.disableAnalytics = false;
    }
    connectedCallback() {
        i18next.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        i18next.off('languageChanged');
    }
    render() {
        const { handleOnClick } = this;
        const h2s = Array.from(document.querySelectorAll('article h2')).filter(heading => {
            if (!heading.id) {
                consoleDevError(`${heading.textContent} is missing an id`);
            }
            return heading.id;
        });
        return (h("nav", { "aria-labelledby": "on-this-page" }, h("ul", null, h("li", { id: "on-this-page" }, i18next.t('on-this-page')), h2s.map(heading => (h("li", null, h("a", { href: `#${heading.id}`, onClick: handleOnClick }, h("va-icon", { icon: "arrow_downward" }), h("span", null, heading.innerText))))))));
    }
    static get is() { return "va-on-this-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-on-this-page.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-on-this-page.css"]
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
                    "text": "If true, analytics event will not be fired"
                },
                "attribute": "disable-analytics",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "The event used to track usage of the component. This is emitted when the\nuser clicks on a link and enableAnalytics is true."
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
