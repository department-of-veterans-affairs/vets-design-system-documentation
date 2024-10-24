import { Host, h } from "@stencil/core";
/**
 * @componentName Need help?
 * @maturityCategory caution
 * @maturityLevel candidate
 * @guidanceHref form/need-help
 */
export class VaNeedHelp {
    render() {
        return (h(Host, { key: 'f53fac89736e059f6c1d1fed88caaf946a63d53b' }, h("div", { key: '818d469820492d3a365b84cd216b99bc54199880', class: "need-help" }, h("h2", { key: '6d660d63e8383eca6356a62cfa77d1c0e34a6cd4', id: "need-help" }, "Need help?"), h("slot", { key: '79240ac91e8da1308a635a36bef57daacc3003bf', name: "content" }))));
    }
    static get is() { return "va-need-help"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-need-help.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-need-help.css"]
        };
    }
}
