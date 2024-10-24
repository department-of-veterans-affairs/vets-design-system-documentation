import { r as registerInstance, c as createEvent, h, g as getElement } from './index-f0e1e12e.js';
import { c as classnames } from './index-6d7ecf98.js';

const vaRadioOptionCss = ".usa-radio__label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-radio{background:white}.usa-radio__label{color:#1b1b1b}.usa-radio__label::before{background:white;-webkit-box-shadow:0 0 0 2px #1b1b1b;box-shadow:0 0 0 2px #1b1b1b}@media (forced-colors: active){.usa-radio__label::before{outline:2px solid transparent;outline-offset:2px}}.usa-radio__input:checked+[class*=__label]::before{background-color:#005ea2;-webkit-box-shadow:0 0 0 2px #005ea2;box-shadow:0 0 0 2px #005ea2}.usa-radio__input:disabled+[class*=__label],.usa-radio__input[aria-disabled=true]+[class*=__label]{color:#757575;cursor:not-allowed}@media (forced-colors: active){.usa-radio__input:disabled+[class*=__label],.usa-radio__input[aria-disabled=true]+[class*=__label]{color:GrayText}}.usa-radio__input:disabled+[class*=__label]::before,.usa-radio__input[aria-disabled=true]+[class*=__label]::before{background-color:white;-webkit-box-shadow:0 0 0 2px #757575;box-shadow:0 0 0 2px #757575}.usa-radio__input--tile+[class*=__label]{background-color:white;border:2px solid #c9c9c9;color:#1b1b1b}.usa-radio__input--tile:checked+[class*=__label]{background-color:rgba(0, 94, 162, 0.1);border-color:#005ea2}@media (forced-colors: active){.usa-radio__input--tile:checked+[class*=__label]{border:ButtonText solid 0.25rem}}.usa-radio__input--tile:disabled+[class*=__label],.usa-radio__input--tile[aria-disabled=true]+[class*=__label]{border-color:#e6e6e6}.usa-radio__input--tile:disabled:checked+[class*=__label],.usa-radio__input--tile:disabled:indeterminate+[class*=__label],.usa-radio__input--tile:disabled[data-indeterminate]+[class*=__label],.usa-radio__input--tile[aria-disabled=true]:checked+[class*=__label],.usa-radio__input--tile[aria-disabled=true]:indeterminate+[class*=__label],.usa-radio__input--tile[aria-disabled=true][data-indeterminate]+[class*=__label]{background-color:white}.usa-radio__input:checked+[class*=__label]::before{-webkit-box-shadow:0 0 0 2px #005ea2, inset 0 0 0 2px white;box-shadow:0 0 0 2px #005ea2, inset 0 0 0 2px white}@media (forced-colors: active){.usa-radio__input:checked+[class*=__label]::before{background-color:ButtonText}}.usa-radio__input:checked:disabled+[class*=__label]::before,.usa-radio__input:checked[aria-disabled=true]+[class*=__label]::before{background-color:#757575;-webkit-box-shadow:0 0 0 2px #757575, inset 0 0 0 2px white;box-shadow:0 0 0 2px #757575, inset 0 0 0 2px white}@media (forced-colors: active){.usa-radio__input:checked:disabled+[class*=__label]::before,.usa-radio__input:checked[aria-disabled=true]+[class*=__label]::before{background-color:GrayText}}.usa-radio__input{position:absolute;left:-999em;right:auto}.usa-radio__input:focus+[class*=__label]::before{outline:0.25rem solid #2491ff;outline-offset:0.25rem}.usa-radio__input--tile+[class*=__label]{border-radius:0.25rem;margin-top:0.5rem;padding:0.75rem 1rem 0.75rem 2.5rem}.usa-radio__input--tile+[class*=__label]::before{left:0.5rem}@media print{.usa-radio__input:checked+[class*=__label]::before{-webkit-box-shadow:inset 0 0 0 2px white, inset 0 0 0 1rem #005ea2, 0 0 0 2px #005ea2;box-shadow:inset 0 0 0 2px white, inset 0 0 0 1rem #005ea2, 0 0 0 2px #005ea2}}.usa-radio__label{cursor:pointer;display:inherit;font-weight:normal;margin-top:0.75rem;padding-left:2rem;position:relative}.usa-radio__label::before{content:\" \";display:block;left:0;margin-left:2px;margin-top:0.064rem;position:absolute}.usa-radio__label::before{height:1.25rem;border-radius:99rem;width:1.25rem}.usa-radio__label-description{display:block;font-size:0.93rem;margin-top:0.5rem}va-radio-option label{max-width:480px;-webkit-box-sizing:border-box;box-sizing:border-box}.usa-radio{background:transparent}va-radio-option{display:block;margin-top:12px}input[type=radio].usa-radio__input{margin-left:unset;opacity:unset;right:auto;left:-999em}va-radio-option input:focus{outline:none !important}va-radio-option label.usa-radio__label::before{-webkit-box-shadow:#1b1b1b 0px 0px 0px 2px;box-shadow:#1b1b1b 0px 0px 0px 2px;height:20px;width:20px;margin-left:2px}va-radio-option .usa-radio__input:focus+[class*=__label]::before{outline:2px solid var(--vads-color-action-focus-on-light)}va-radio-option input[disabled=true]:focus+label.usa-radio__label::before{outline:none}";
const VaRadioOptionStyle0 = vaRadioOptionCss;

const VaRadioOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.radioOptionSelected = createEvent(this, "radioOptionSelected", 7);
        this.name = undefined;
        this.label = undefined;
        this.value = undefined;
        this.checked = false;
        this.tile = false;
        this.description = undefined;
        this.disabled = false;
        this.ariaDescribedby = undefined;
    }
    handleChange() {
        this.radioOptionSelected.emit();
    }
    render() {
        const { checked, name, value, label, disabled, tile, description } = this;
        const id = this.el.id || name + value;
        const ariaChecked = checked ? 'true' : 'false';
        const inputClass = classnames({
            'usa-radio__input': true,
            'usa-radio__input--tile': tile,
        });
        return (h("div", { key: '0c0b521e30a78cfe8b6b1ef9d5d55d5e0505240e', class: "usa-radio" }, h("input", { key: '6d16aba7ec1e33767f153629e4f2b789785a86bc', class: inputClass, type: "radio", name: name, value: value, checked: checked, disabled: disabled, onClick: () => this.handleChange(), id: id + 'input' }), h("label", { key: 'd2e5c838dbf84e23b86a56b9a6ddabe9733b6055', class: "usa-radio__label", htmlFor: id + 'input', role: "radio", "aria-checked": ariaChecked }, label, description && (h("span", { key: '99ade2ffe8974118d69bdb49626446d1feb6f49a', class: "usa-radio__label-description dd-privacy-hidden", "data-dd-action-name": "description" }, description)))));
    }
    get el() { return getElement(this); }
};
VaRadioOption.style = VaRadioOptionStyle0;

export { VaRadioOption as va_radio_option };
