import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const vaSummaryBoxCss = ".usa-summary-box{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5;color:#1b1b1b;background-color:#e7f6f8;border-radius:0.25rem;border:1px #99deea solid;padding:1.5rem;position:relative}.usa-summary-box .usa-list:last-child{margin-bottom:0}*+.usa-summary-box{margin-top:1rem}.usa-summary-box__heading{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.46rem;line-height:1.1;margin-top:0;margin-bottom:0.5rem}.usa-summary-box__text{margin-bottom:0;margin-top:0}.usa-summary-box__text:only-child{margin-bottom:1px;padding-top:0.25rem}.usa-summary-box__link{color:#005ea2}.usa-summary-box__link:visited{color:#54278f}.usa-summary-box__link:hover,.usa-summary-box__link:active{color:#1a4480}.usa-summary-box__link[href^=\"#\"]:visited{color:#005ea2}.usa-summary-box__link[href^=\"#\"]:hover{color:#1a4480}:host{display:block}::slotted([slot=headline]){font-family:var(--font-serif);margin-top:0 !important}::slotted(p){font-family:var(--font-source-sans);margin-bottom:0 !important;margin-top:0 !important;padding-bottom:0.5em}::slotted(ul){margin:0 0 0.5em 1.5em !important;padding:0 !important}::slotted(li){list-style:square;margin:0}";
const VaSummaryBoxStyle0 = vaSummaryBoxCss;

const VaSummaryBox$1 = /*@__PURE__*/ proxyCustomElement(class VaSummaryBox extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    get el() { return this; }
    static get style() { return VaSummaryBoxStyle0; }
}, [1, "va-summary-box", {
        "headlineText": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-summary-box"];
    components.forEach(tagName => { switch (tagName) {
        case "va-summary-box":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaSummaryBox$1);
            }
            break;
    } });
}

const VaSummaryBox = VaSummaryBox$1;
const defineCustomElement = defineCustomElement$1;

export { VaSummaryBox, defineCustomElement };
