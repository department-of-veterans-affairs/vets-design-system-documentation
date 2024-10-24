import { r as registerInstance, c as createEvent, h, H as Host } from './index-f0e1e12e.js';

const vaButtonPairCss = ".usa-button-group{margin-bottom:0;margin-top:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;list-style-type:none;margin-left:-0.25rem;margin-right:-0.25rem;padding-left:0}@media all and (min-width: 30em){.usa-button-group{-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:stretch;align-items:stretch;-ms-flex-direction:row;flex-direction:row}}.usa-button-group .usa-button-group{height:100%}@media all and (min-width: 30em){.usa-button-group .usa-button-group .usa-button-group__item{margin-top:0;margin-bottom:0}}.usa-button-group .usa-button-group--segmented .usa-button-group__item{margin-top:0;margin-bottom:0}.usa-button-group__item{margin:0.25rem}@media all and (min-width: 30em){.usa-button-group__item:last-child{margin-right:0}}.usa-button-group__item .usa-button{height:100%;margin-left:0;margin-right:0}.usa-button-group--segmented{-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;margin-left:0;margin-right:0}@media all and (min-width: 30em){.usa-button-group--segmented{-ms-flex-pack:start;justify-content:flex-start}}.usa-button-group--segmented .usa-button{position:relative;width:calc(100% + 2px)}@media all and (min-width: 30em){.usa-button-group--segmented .usa-button{width:auto}}.usa-button-group--segmented .usa-button:hover,.usa-button-group--segmented .usa-button:active{z-index:2}.usa-button-group--segmented .usa-button:focus{z-index:3}.usa-button-group--segmented .usa-button-group__item{margin-left:0;margin-right:0;width:100%}@media all and (min-width: 30em){.usa-button-group--segmented .usa-button-group__item{width:auto}}.usa-button-group--segmented .usa-button-group__item:first-child>.usa-button{border-top-right-radius:0;border-bottom-right-radius:0;margin-right:-1px}.usa-button-group--segmented .usa-button-group__item:last-child>.usa-button{border-top-left-radius:0;border-bottom-left-radius:0;margin-right:0;margin-left:-2px;width:calc(100% + 2px)}@media all and (min-width: 30em){.usa-button-group--segmented .usa-button-group__item:last-child>.usa-button{margin-left:-1px;width:auto}}.usa-button-group--segmented .usa-button-group__item:where(:not(:first-child):not(:last-child))>.usa-button{border-radius:0;margin-right:-1px;margin-left:-1px}.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button::before{border-right:1px solid #1a4480;bottom:0;content:\"\";display:block;height:100%;position:absolute;right:1px;top:0;width:1px;z-index:3}.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button--secondary::before{border-right-color:#b50909}.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button--accent-cool::before{border-right-color:#28a0cb}.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button--base::before{border-right-color:#565c65}.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) [class*=usa-button]:disabled::before,.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) [class*=usa-button][aria-disabled=true]::before{border-right-color:white}.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button:active::before,.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button--outline::before{display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host va-button::part(button){margin-right:0}@media (max-width: 480px){:host va-button{display:block}.usa-button-group{margin:0 auto;width:100%}}";
const VaButtonPairStyle0 = vaButtonPairCss;

const VaButtonPair = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.primaryClick = createEvent(this, "primaryClick", 7);
        this.secondaryClick = createEvent(this, "secondaryClick", 7);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        this.handlePrimaryClick = (e) => {
            this.primaryClick.emit(e);
        };
        this.handleSecondaryClick = (e) => {
            this.secondaryClick.emit(e);
        };
        // get text for the left button; custom text takes precedence
        this.getLeftButtonText = () => {
            let text;
            if (this.leftButtonText) {
                text = this.leftButtonText;
            }
            else {
                text = this.update ? 'Update' : 'Yes';
            }
            return text;
        };
        // get text for the right button; custom text takes precedence
        this.getRightButtonText = () => {
            let text;
            if (this.rightButtonText) {
                text = this.rightButtonText;
            }
            else {
                text = this.update ? 'Cancel' : 'No';
            }
            return text;
        };
        this.continue = false;
        this.disableAnalytics = false;
        this.primaryLabel = undefined;
        this.secondaryLabel = undefined;
        this.submit = undefined;
        this.update = false;
        this.leftButtonText = undefined;
        this.rightButtonText = undefined;
    }
    /**
     * Listen for the va-button GA event and capture it so
     * that we can emit a single va-button-pair GA event that includes
     * the va-button details.
     */
    handleButtonAnalytics(event) {
        var _a;
        // Prevent va-button-pair GA event from firing multiple times.
        if (event.detail.componentName === 'va-button-pair')
            return;
        // Prevent va-button GA event from firing.
        event.stopPropagation();
        if (!this.disableAnalytics) {
            const detail = {
                componentName: 'va-button-pair',
                action: 'click',
                details: Object.assign({ type: null, label: null }, (_a = event.detail) === null || _a === void 0 ? void 0 : _a.details),
            };
            this.componentLibraryAnalytics.emit(detail);
        }
    }
    render() {
        const { continue: _continue, disableAnalytics, handlePrimaryClick, handleSecondaryClick, primaryLabel, secondaryLabel, submit, } = this;
        if (_continue) {
            return (h(Host, null, h("ul", { class: "usa-button-group" }, h("li", { class: "usa-button-group__item" }, h("va-button", { back: true, "disable-analytics": disableAnalytics, label: secondaryLabel, onClick: handleSecondaryClick })), h("li", { class: "usa-button-group__item" }, h("va-button", { continue: true, "disable-analytics": disableAnalytics, label: primaryLabel, onClick: handlePrimaryClick, submit: submit })))));
        }
        return (h(Host, null, h("ul", { class: "usa-button-group" }, h("li", { class: "usa-button-group__item" }, h("va-button", { "disable-analytics": disableAnalytics, label: primaryLabel, onClick: handlePrimaryClick, text: this.getLeftButtonText(), submit: submit })), h("li", { class: "usa-button-group__item" }, h("va-button", { "disable-analytics": disableAnalytics, label: secondaryLabel, onClick: handleSecondaryClick, secondary: true, text: this.getRightButtonText() })))));
    }
};
VaButtonPair.style = VaButtonPairStyle0;

export { VaButtonPair as va_button_pair };
