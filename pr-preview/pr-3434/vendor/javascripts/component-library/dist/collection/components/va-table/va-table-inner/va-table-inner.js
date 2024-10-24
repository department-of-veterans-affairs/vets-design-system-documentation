import { h } from "@stencil/core";
import classnames from "classnames";
/**
 * This component expects <span> elements as children where each span corresponds to a cell
 * in a flattened 2D table.
 */
/**
 * @componentName Table
 * @maturityCategory use
 * @maturityLevel best_practice
 */
export class VaTableInner {
    constructor() {
        this.headers = null;
        this.tableTitle = undefined;
        this.rows = undefined;
        this.cols = undefined;
        this.tableType = 'borderless';
        this.stacked = false;
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    /**
     * Generate the markup for a table row where row is the zero-indexed row number
     */
    makeRow(row) {
        return (h("tr", null, Array.from({ length: this.cols }).map((_, i) => {
            const slotName = `va-table-slot-${row * this.cols + i}`;
            const slot = h("slot", { name: slotName });
            return (i === 0 || row === 0)
                ? h("th", { scope: "row" }, slot)
                : h("td", null, slot);
        })));
    }
    /**
     * Generate the table body rows
     */
    getBodyRows() {
        const rows = [];
        for (let i = 1; i < this.rows; i++) {
            rows.push(this.makeRow(i));
        }
        return rows;
    }
    render() {
        const { tableTitle, tableType, stacked } = this;
        const classes = classnames({
            'usa-table': true,
            'usa-table--stacked': stacked,
            'usa-table--borderless': tableType === 'borderless',
        });
        return (h("table", { key: '5ae0585e6163f1c051b7b307c8a527d779af0c3a', class: classes }, tableTitle && h("caption", { key: '6e7337b37b7eae2524526a6a8aeae3fb82fae4dd' }, tableTitle), h("thead", { key: 'd1d67f88c8e313d3422a0e7055efd71d7623fbb7' }, this.makeRow(0)), h("tbody", { key: '415d8109e95a917971cc1d3d3353e73aeb89929a', id: "va-table-body" }, this.getBodyRows())));
    }
    static get is() { return "va-table-inner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-table-inner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-table-inner.css"]
        };
    }
    static get properties() {
        return {
            "tableTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The title of the table"
                },
                "attribute": "table-title",
                "reflect": false
            },
            "rows": {
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
                    "text": ""
                },
                "attribute": "rows",
                "reflect": false
            },
            "cols": {
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
                    "text": "The number of columns in the table"
                },
                "attribute": "cols",
                "reflect": false
            },
            "tableType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'borderless'",
                    "resolved": "\"borderless\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The type of table to be used"
                },
                "attribute": "table-type",
                "reflect": false,
                "defaultValue": "'borderless'"
            },
            "stacked": {
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
                    "text": "If true convert to a stacked table when screen size is small"
                },
                "attribute": "stacked",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get elementRef() { return "el"; }
}
