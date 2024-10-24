import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './va-button2.js';
import { d as defineCustomElement$4 } from './va-icon2.js';
import { d as defineCustomElement$3 } from './va-modal2.js';
import { d as defineCustomElement$2 } from './va-telephone2.js';

const vaOmbInfoCss = ":host{display:block;font-size:1.06rem}";
const VaOmbInfoStyle0 = vaOmbInfoCss;

const VaOmbInfo$1 = /*@__PURE__*/ proxyCustomElement(class VaOmbInfo extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.modalContents = null;
        this.toggleModalVisible = () => {
            this.visible = !this.visible;
        };
        this.handleSlotChange = () => {
            this.modalContents = null;
        };
        this.visible = undefined;
        this.shifted = false;
        this.benefitType = 'benefits';
        this.expDate = undefined;
        this.ombNumber = undefined;
        this.resBurden = undefined;
    }
    // This keydown event listener tracks if the shift key is held down while changing focus
    trackShiftKey(e) {
        this.shifted = e.shiftKey;
    }
    // Redirects focus back to the modal, if the modal is open/visible
    trapFocus() {
        var _a;
        const modal = (_a = this.el) === null || _a === void 0 ? void 0 : _a.shadowRoot.querySelector('va-modal');
        const modalVisible = modal === null || modal === void 0 ? void 0 : modal.getAttribute('visible');
        if (modalVisible !== null && modalVisible !== 'false') {
            let focusedChild;
            const query = this.shifted
                ? '.last-focusable-child'
                : '[role="document"]';
            if (this.shifted) {
                focusedChild = modal === null || modal === void 0 ? void 0 : modal.querySelector('va-telephone').shadowRoot.querySelector(query);
            }
            else {
                focusedChild = modal === null || modal === void 0 ? void 0 : modal.shadowRoot.querySelector(query);
            }
            focusedChild === null || focusedChild === void 0 ? void 0 : focusedChild.focus();
        }
    }
    componentWillLoad() {
        /* eslint-disable i18next/no-literal-string */
        this.modalContents = (h("div", null, this.resBurden && (h("p", null, h("strong", null, "Respondent Burden:"), " We need this information to determine your eligibility for ", this.benefitType, " (38 U.S.C. 3471). Title 38, United States Code, allows us to ask for this information. We estimate that you will need an average of ", this.resBurden, ' ', "minutes to review the instructions, find the information, and complete this form. The VA cannot conduct or sponsor a collection of information unless a valid OMB (Office of Management and Budget) control number is displayed. You are not required to respond to a collection of information if this number is not displayed. Valid OMB control numbers can be located on the OMB Internet Page at www.reginfo.gov/public/do/PRAMain. If desired, you can call", ' ', h("va-telephone", { contact: "8008271000", international: true }), " to get information on where to send comments or suggestions about this form.")), h("p", null, h("strong", null, "Privacy Act Notice:"), " The VA will not disclose information collected on this form to any source other than what has been authorized under the Privacy Act of 1974 or title 38, Code of Federal Regulations, section 1.576 for routine uses (e.g., the VA sends educational forms or letters with a veteran\u2019s identifying information to the Veteran\u2019s school or training establishment to (1) assist the veteran in the completion of claims forms or (2) for the VA to obtain further information as may be necessary from the school for VA to properly process the Veteran\u2019s education claim or to monitor his or her progress during training) as identified in the VA system of records, 58VA21/22/28, Compensation, Pension, Education, and Vocational Rehabilitation and Employment Records - VA, and published in the Federal Register. Your obligation to respond is required to obtain or retain", this.benefitType, ". Giving us your SSN account information is voluntary. Refusal to provide your SSN by itself will not result in the denial of benefits. The VA will not deny an individual benefits for refusing to provide his or her SSN unless the disclosure of the SSN is required by a Federal Statute of law enacted before January 1, 1975, and still in effect. The requested information is considered relevant and necessary to determine the maximum benefits under the law. While you do not have to respond, VA cannot process your claim for education assistance unless the information is furnished as required by existing law (38 U.S.C. 3471). The responses you submit are considered confidential (38 U.S.C. 5701). Any information provided by applicants, recipients, and others may be subject to verification through computer matching programs with other agencies.")));
        /* eslint-enable i18next/no-literal-string */
    }
    render() {
        const { expDate, handleSlotChange, modalContents, ombNumber, resBurden, toggleModalVisible, visible, } = this;
        /* eslint-disable i18next/no-literal-string */
        return (h(Host, { key: 'd119be27cf09bf7b0a606098abf8c49272a6f967' }, resBurden && (h("div", { key: 'e165c07ac0b1303092b7a73e5f0ce9e29f4c3db1' }, "Respondent burden: ", h("strong", { key: '1c7b0ea808083629263da76867eec18368acc5bc' }, resBurden, " minutes"))), ombNumber && (h("div", { key: 'e3680ff201b3baa8dc7496bf49b4719adca3b279' }, "OMB Control #: ", h("strong", { key: '114b6d074cb13e770c7c315db0a329c268b040d8' }, ombNumber))), h("div", { key: 'bb16a678eb039107631e3348e096bfdc9ef6e045' }, "Expiration date: ", h("strong", { key: '50f4dd4a192a3b089b25addfdd8793d16ec72742' }, expDate)), h("div", { key: '3d8c5837ef8cf1ab5b47223dab68b51384e0745a' }, h("va-button", { key: 'd8b61fcd0067574e8e5c1d0b72817e2ac0acf258', onClick: toggleModalVisible, onFocusin: () => this.trapFocus(), secondary: true, text: "View Privacy Act Statement" })), h("va-modal", { key: 'a0e08e7085582ea96963012424c7bdbaa3950667', large: true, modalTitle: "Privacy Act Statement", onCloseEvent: toggleModalVisible, visible: visible, ariaHiddenNodeExceptions: [this.el] }, h("slot", { key: '32447c245ce607ea452300545c64d24ab717a5da', onSlotchange: handleSlotChange }), modalContents)));
    }
    get el() { return this; }
    static get style() { return VaOmbInfoStyle0; }
}, [1, "va-omb-info", {
        "benefitType": [1, "benefit-type"],
        "expDate": [1, "exp-date"],
        "ombNumber": [1, "omb-number"],
        "resBurden": [2, "res-burden"],
        "visible": [32],
        "shifted": [32]
    }, [[8, "keydown", "trackShiftKey"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-omb-info", "va-button", "va-icon", "va-modal", "va-telephone"];
    components.forEach(tagName => { switch (tagName) {
        case "va-omb-info":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaOmbInfo$1);
            }
            break;
        case "va-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "va-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "va-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "va-telephone":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const VaOmbInfo = VaOmbInfo$1;
const defineCustomElement = defineCustomElement$1;

export { VaOmbInfo, defineCustomElement };
