import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const vaCardCss = ":host{display:block;border:1px solid var(--vads-color-gray-medium);background-color:var(--vads-color-white);padding:16px}:host([show-shadow]:not([show-shadow=false])),:host([show-shadow]:not([show-shadow=false])[background]:not([background=false])){-webkit-box-shadow:1px 1px 5px 1px rgba(0, 0, 0, 0.32);box-shadow:1px 1px 5px 1px rgba(0, 0, 0, 0.32);border:1px solid var(--vads-color-gray-medium);background-color:var(--vads-color-white)}:host([background]:not([background=false])){background-color:var(--vads-color-base-lightest);border:none}";
const VaCardStyle0 = vaCardCss;

const VaCard = /*@__PURE__*/ proxyCustomElement(class VaCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.showShadow = false;
        this.background = false;
    }
    render() {
        return (h(Host, { key: 'c7ccec50762bb212bde4dec48d89c4efd46da28a' }, h("slot", { key: '8058992c88418906133cc58b2702ea3adc7325e2' })));
    }
    static get style() { return VaCardStyle0; }
}, [1, "va-card", {
        "showShadow": [4, "show-shadow"],
        "background": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-card"];
    components.forEach(tagName => { switch (tagName) {
        case "va-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaCard);
            }
            break;
    } });
}

export { VaCard as V, defineCustomElement as d };
