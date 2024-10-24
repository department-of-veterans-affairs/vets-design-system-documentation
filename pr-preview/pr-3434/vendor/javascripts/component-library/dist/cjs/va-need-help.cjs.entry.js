'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');

const vaNeedHelpCss = ":host{display:block}.need-help h2{border-bottom:3px solid var(--vads-color-primary);margin:0.3em 0;font-family:var(--font-serif);font-size:1.35em;line-height:1.5;font-weight:bold}::slotted([slot='content']){font-family:var(--font-sans-serif);margin-top:0 !important}::slotted(p){font-family:var(--font-sans-serif);margin:0.5em 0 !important;padding:0 !important}";
const VaNeedHelpStyle0 = vaNeedHelpCss;

const VaNeedHelp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'f53fac89736e059f6c1d1fed88caaf946a63d53b' }, index.h("div", { key: '818d469820492d3a365b84cd216b99bc54199880', class: "need-help" }, index.h("h2", { key: '6d660d63e8383eca6356a62cfa77d1c0e34a6cd4', id: "need-help" }, "Need help?"), index.h("slot", { key: '79240ac91e8da1308a635a36bef57daacc3003bf', name: "content" }))));
    }
};
VaNeedHelp.style = VaNeedHelpStyle0;

exports.va_need_help = VaNeedHelp;
