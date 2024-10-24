import { Host, h } from "@stencil/core";
export class VaTableRow {
    render() {
        return (h(Host, { key: '726db2ebaffaa5d770fd06031b6fc19d9e1fe6a2', role: "row" }, h("slot", { key: '1d6884ca0caab1c522cf8e70e702a72f45610bd7' })));
    }
    static get is() { return "va-table-row"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-table-row.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-table-row.css"]
        };
    }
}
