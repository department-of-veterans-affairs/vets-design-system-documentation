import { h } from "@stencil/core";
/**
 * @componentName Process list
 * @maturityCategory use
 * @maturityLevel deployed
 */
export class VaProcessList {
    render() {
        return (h("ol", { key: '97a0a12cf2ece581dd173b6c1465e9dc7c367560', role: "list", class: 'usa-process-list' }, h("slot", { key: 'f36cb2563ac957bc9bcf5a7be9ad23d92285e084' })));
    }
    static get is() { return "va-process-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-process-list.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-process-list.css"]
        };
    }
}
