import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './va-checkbox2.js';
import { d as defineCustomElement$4 } from './va-icon2.js';
import { d as defineCustomElement$3 } from './va-link2.js';
import { d as defineCustomElement$2 } from './va-text-input2.js';

const vaStatementOfTruthCss = ".usa-sr-only{position:absolute;left:-999em;right:auto}[class*=font-mono-]{font-family:Roboto Mono Web, Bitstream Vera Sans Mono, Consolas, Courier, monospace}[class*=font-sans-]{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans}[class*=font-serif-]{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif}[class*=font-ui-]{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans}[class*=font-heading-]{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif}[class*=font-body-]{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans}[class*=font-code-]{font-family:Roboto Mono Web, Bitstream Vera Sans Mono, Consolas, Courier, monospace}[class*=font-alt-]{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif}:host :not(h3){font-size:16.96px}:host h3{font-family:var(--font-serif);margin:24px 0}:host>p{margin:24px}:host va-text-input{margin-bottom:24px}:host article{background-color:var(--vads-color-base-lightest);padding:1px 24px 24px 24px;margin-bottom:24px}va-checkbox::part(checkbox){max-width:100%}a{color:var(--vads-color-link)}";
const VaStatementOfTruthStyle0 = vaStatementOfTruthCss;

const VaStatementOfTruth$1 = /*@__PURE__*/ proxyCustomElement(class VaStatementOfTruth extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.vaInputChange = createEvent(this, "vaInputChange", 7);
        this.vaInputBlur = createEvent(this, "vaInputBlur", 7);
        this.vaCheckboxChange = createEvent(this, "vaCheckboxChange", 7);
        this.handleInputChange = (event) => {
            const { value } = event.currentTarget;
            this.vaInputChange.emit({ value });
        };
        this.handleInputBlur = (event) => {
            this.vaInputBlur.emit(event);
        };
        this.handleCheckboxChange = (event) => {
            const { checked } = event.currentTarget;
            this.vaCheckboxChange.emit({ checked });
        };
        this.heading = 'Statement of truth';
        this.inputValue = '';
        this.inputError = '';
        this.checkboxError = '';
        this.inputMessageAriaDescribedby = '';
        this.checked = undefined;
        this.inputLabel = 'Your full name';
        this.checkboxLabel = 'I certify the information above is correct and true to the best of my knowledge and belief.';
    }
    render() {
        const { heading, inputLabel, checkboxLabel, inputMessageAriaDescribedby, checked, inputValue, inputError, checkboxError, } = this;
        return (h(Host, { key: '4463c2700c0100fc5b487e8d50812a8997da61b8' }, h("p", { key: '97be20c903141887f855cfad67536c44292a7164', class: "font-sans-6" }, h("strong", { key: '82b385c6b0eb14ea8eac2794159c8e7aa4aa7a03' }, "Note:"), " According to federal law, there are criminal penalties, including a fine and/or imprisonment for up to 5 years, for withholding information or for providing incorrect information (Reference: 18 U.S.C. 1001)."), h("article", { key: '43757585701911f9f2a4bbd5609261f12d0b7fe9' }, h("h3", { key: '00b11161a5b33c3bcc758138fd6195ad41b36971' }, heading), h("slot", { key: '4179eb9802a93e062087da8a1ef4db55fc1a18e2' }), h("p", { key: '91ea0f1a7ce7eca92b0da96d848579a5220e0e98', class: "font-sans-6" }, "I have read and accept the\u00A0", h("va-link", { key: '6da7e9ffdae0487c98ff78014fd74c9eaf7b7a8c', external: true, text: 'privacy policy', href: '/privacy-policy/' }), "."), h("va-text-input", { key: '463663a9baf49df5024d88f385f8e5c184ec6159', id: "veteran-signature", name: "veteran-signature", label: inputLabel, value: inputValue, "message-aria-describedby": inputMessageAriaDescribedby, required: true, error: inputError, onInput: this.handleInputChange, onBlur: this.handleInputBlur }), h("va-checkbox", { key: '5f9dbb6b2373643ab1bb6d68295838764bff6a6e', id: "veteran-certify", name: "veteran-certify", label: checkboxLabel, required: true, checked: checked, error: checkboxError, onVaChange: this.handleCheckboxChange }))));
    }
    get el() { return this; }
    static get style() { return VaStatementOfTruthStyle0; }
}, [1, "va-statement-of-truth", {
        "heading": [1],
        "inputValue": [1, "input-value"],
        "inputError": [1, "input-error"],
        "checkboxError": [1, "checkbox-error"],
        "inputMessageAriaDescribedby": [1, "input-message-aria-describedby"],
        "checked": [4],
        "inputLabel": [1, "input-label"],
        "checkboxLabel": [1, "checkbox-label"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-statement-of-truth", "va-checkbox", "va-icon", "va-link", "va-text-input"];
    components.forEach(tagName => { switch (tagName) {
        case "va-statement-of-truth":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaStatementOfTruth$1);
            }
            break;
        case "va-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "va-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "va-link":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "va-text-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const VaStatementOfTruth = VaStatementOfTruth$1;
const defineCustomElement = defineCustomElement$1;

export { VaStatementOfTruth, defineCustomElement };
