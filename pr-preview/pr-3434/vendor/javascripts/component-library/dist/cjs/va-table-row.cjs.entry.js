'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');

const vaTableRowCss = ":host{display:table-row}::slotted([role='cell']){padding-top:1rem;padding-bottom:1rem;padding-left:1rem;word-wrap:break-word;vertical-align:top;border-left:0;border-right:0;border-top:0}::slotted(*::first-letter){text-transform:capitalize}::slotted(*){display:table-cell;border:1px solid var(--vads-color-base-dark);padding:0.625rem 0.938rem}::slotted(*:empty):before{content:'---'}@media screen and (max-width: 768px){:host{border-bottom:1px solid var(--vads-color-gray-medium)}:host:first-child{border-top:1px solid var(--vads-color-gray-medium)}::slotted([role='cell']){border:none;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}::slotted([role='cell']:first-child){margin-top:1rem}::slotted([role='cell']:last-child){margin-bottom:1rem;border-bottom:0}::slotted([role='cell'])::before{display:block;content:attr(data-label);font-weight:700}}";
const VaTableRowStyle0 = vaTableRowCss;

const VaTableRow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '726db2ebaffaa5d770fd06031b6fc19d9e1fe6a2', role: "row" }, index.h("slot", { key: '1d6884ca0caab1c522cf8e70e702a72f45610bd7' })));
    }
};
VaTableRow.style = VaTableRowStyle0;

exports.va_table_row = VaTableRow;
