/* eslint-disable i18next/no-literal-string */
import { Host, h } from "@stencil/core";
export class VaTable {
    constructor() {
        this.tableTitle = undefined;
        this.tableType = 'borderless';
        this.stacked = true;
        this.rows = undefined;
        this.cols = undefined;
        this.cells = null;
    }
    /**
     * Generate an array of span elements that are inside
     * a particular va-table-row element
     */
    getCellsInRow(row) {
        const children = row.querySelectorAll('span');
        const cells = Array.from(children);
        if (!this.cols) {
            this.cols = cells.length;
        }
        return cells;
    }
    /**
     * Generate an array holding the va-table-rows from the component's slot
     */
    getRows() {
        const rows = Array.from(this.el.querySelectorAll('va-table-row'));
        // remove the role attr for each va-table-row; this line can be deleted when V1 is removed
        rows.forEach(row => row.removeAttribute('role'));
        if (!this.rows) {
            this.rows = rows.length;
        }
        return rows;
    }
    /**
     * Generate an array of all the spans in all the va-table-rows
     * in the slot in order starting with row 0, column 0.
     */
    getAllCells() {
        const cells = [];
        let count = 0;
        for (const row of this.getRows()) {
            const cellsInRow = this.getCellsInRow(row);
            cellsInRow.forEach((cell) => {
                cell.setAttribute('slot', `va-table-slot-${count}`);
                count++;
            });
            cells.push(...cellsInRow);
        }
        this.cells = cells;
    }
    /**
     * Generate a DocumentFragment that holds the cells
     * to be slotted into a va-table-inner component
     */
    makeFragment() {
        const frag = document.createDocumentFragment();
        this.cells.forEach(cell => {
            frag.appendChild(cell.cloneNode(true));
        });
        return frag;
    }
    /**
     * Generate a va-table-inner to add to the DOM
     */
    makeVATable() {
        const vaTable = document.createElement('va-table-inner');
        // add attributes
        vaTable.setAttribute('rows', `${this.rows}`);
        vaTable.setAttribute('cols', `${this.cols}`);
        vaTable.setAttribute('stacked', this.stacked ? "true" : "false");
        if (this.tableTitle) {
            vaTable.setAttribute('table-title', this.tableTitle);
        }
        if (this.tableType) {
            vaTable.setAttribute('table-type', this.tableType);
        }
        //make a fragment containing all the cells, one for each slot
        const frag = this.makeFragment();
        vaTable.appendChild(frag);
        return vaTable;
    }
    watchForDataChanges() {
        // Watch for changes to the slot.
        const row = this.el.querySelectorAll('va-table-row')[1];
        const callback = () => {
            const oldTable = this.el.querySelector('va-table-inner');
            if (oldTable) {
                oldTable.remove();
                this.rows = null;
                this.cols = null;
                this.cells = null;
            }
            this.addVaTableInner();
        };
        this.observer = new MutationObserver(callback);
        this.observer.observe(row, {
            childList: true,
            subtree: true,
            characterData: true,
        });
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    // Add a va-table-inner instance to the DOM
    addVaTableInner() {
        // generate a list of all table cells
        this.getAllCells();
        // create a va-table-inner with the cells in the slots
        const vaTable = this.makeVATable();
        // add the table to the component
        this.el.appendChild(vaTable);
    }
    componentDidLoad() {
        // add a va-table-inner instance to the DOM
        this.addVaTableInner();
        // watch for changes to content
        this.watchForDataChanges();
    }
    render() {
        return (h(Host, { key: '3034e05e25b0ad0c1713b5869e6485ba805233a3' }, h("slot", { key: '6c9ff0c65ceffcda78e4024250048e84345f85cb' })));
    }
    static get is() { return "va-table"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-table.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-table.css"]
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The title of the table"
                },
                "attribute": "table-title",
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
                    "text": "If uswds is true, the type of table"
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
                    "text": "Convert to a stacked table when screen size is small\nTrue by default, must specify if false if this is unwanted"
                },
                "attribute": "stacked",
                "reflect": false,
                "defaultValue": "true"
            }
        };
    }
    static get states() {
        return {
            "rows": {},
            "cols": {},
            "cells": {}
        };
    }
    static get elementRef() { return "el"; }
}
