import { r as registerInstance, c as createEvent, h, H as Host } from './index-f0e1e12e.js';
import { c as classnames } from './index-6d7ecf98.js';

const vaPrivacyAgreementCss = ".sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-label{font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}:host{display:block}va-checkbox::part(checkbox){max-width:100%}:host .description{font-size:16.96px}a{color:var(--vads-color-link)}.privacy-policy-icon{margin-left:4px;vertical-align:text-top}";
const VaPrivacyAgreementStyle0 = vaPrivacyAgreementCss;

const VaPrivacyAgreement = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        this.vaChange = createEvent(this, "vaChange", 7);
        this.handleCheckboxChange = (e) => {
            this.checked = e.target.checked;
            this.vaChange.emit({ checked: this.checked });
            if (this.enableAnalytics) {
                this.componentLibraryAnalytics.emit({
                    componentName: 'va-privacy-agreement',
                    action: 'click',
                    details: {
                        checked: this.checked
                    },
                });
            }
        };
        this.checked = false;
        this.showError = false;
        this.enableAnalytics = false;
    }
    errorMessage() {
        return (this.showError && !this.checked)
            ? "You must accept the privacy policy before continuing."
            : null;
    }
    render() {
        const labelClass = classnames({
            'usa-label--error': this.showError
        });
        return (h(Host, { key: 'ae62338a2e8475f12f3407524702c7d561f06081' }, h("va-checkbox", { key: 'dd121aef9f7d461f338ecfd155e17582c3eb97ed', required: true, error: this.errorMessage(), id: "checkbox", label: "I have read and accept the privacy policy.", checked: this.checked, onVaChange: this.handleCheckboxChange }, h("span", { key: 'd531e4af848d7fbf8edc09ccd5d9815300344303', class: `${labelClass} description`, slot: "description" }, "Please read and accept the\u00A0", h("a", { key: '96f8241aec3f6592fe0c8f56fcb9dbc7ae04e55b', href: "/privacy-policy/", target: "_blank" }, "privacy policy", h("va-icon", { key: 'e684d794200629d5e5eafbc2d6fc3f571dd968db', class: "privacy-policy-icon", icon: "launch", size: 2 }), h("span", { key: '0f4a636d0c36575300b39780e5bd53def0f7be3e', class: "usa-sr-only" }, "opens in a new window")), "."))));
    }
};
VaPrivacyAgreement.style = VaPrivacyAgreementStyle0;

export { VaPrivacyAgreement as va_privacy_agreement };
