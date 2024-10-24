import { Host, h } from "@stencil/core";
/**
 * @componentName Summary box
 * @maturityCategory use
 * @maturityLevel deployed
 */
export class VaSummaryBox {
    constructor() {
        this.headlineText = null;
    }
    componentWillLoad() {
        let childElements = Array.from(this.el.children);
        this.headlineText = childElements.find(element => element.slot === "headline").textContent.trim();
    }
    componentDidLoad() {
        // add uswds classes
        const nodes = this.el.shadowRoot
            .querySelectorAll('slot');
        const headline = nodes[0];
        const content = nodes[1];
        headline.classList.add('usa-summary-box__heading');
        content.classList.add('usa-summary-box__text');
        let childElements = Array.from(this.el.children);
        this.headlineText = childElements.find(element => element.slot === "headline").textContent.trim();
    }
    render() {
        return (h(Host, { key: '3a4df31d0375781ed92065cb9bc426daa5635e17' }, h("div", { key: '6fa44952eec0e192710fa9f099404cd6f0712e15', class: "usa-summary-box", role: "region", "aria-label": this.headlineText }, h("div", { key: '7117e1a4f36a5eb182053fdae38d52cd52258992', class: "usa-summary-box__body" }, h("slot", { key: '2e30ad6a1b10f1505ee2e0cbf87107ad0d4bc68c', name: "headline" }), h("slot", { key: '1b3feb98fceb7c9ca9b700d1fb2eca21e135b065' })))));
    }
    static get is() { return "va-summary-box"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-summary-box.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-summary-box.css"]
        };
    }
    static get states() {
        return {
            "headlineText": {}
        };
    }
    static get elementRef() { return "el"; }
}
