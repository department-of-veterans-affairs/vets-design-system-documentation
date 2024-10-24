import { Build, Host, h, forceUpdate, Fragment, } from "@stencil/core";
import classnames from "classnames";
import { i18next } from "../..";
import { consoleDevError, getCharacterMessage, getHeaderLevel } from "../../utils/utils";
if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    i18next.init({ lng: 'cimode' });
}
/**
 * @nativeHandler onInput
 * @nativeHandler onBlur
 * @componentName Text input
 * @maturityCategory use
 * @maturityLevel deployed
 * @guidanceHref form/text-input
 * @translations English
 * @translations Spanish
 * @translations Tagalog
 */
export class VaTextInput {
    constructor() {
        /**
         * Input types we will allow to be specified with the "type" prop.
         */
        /* eslint-disable-next-line i18next/no-literal-string */
        this.allowedInputTypes = ['email', 'number', 'search', 'tel', 'text', 'url'];
        this.updatePaddingLeft = () => {
            if (this.inputIconPrefix) {
                // eslint-disable-next-line i18next/no-literal-string
                this.paddingLeftValue = '2.5rem';
            }
            else if (this.inputPrefix) {
                const textLength = this.inputPrefix ? Math.min(this.inputPrefix.length, 25) : null;
                // eslint-disable-next-line i18next/no-literal-string
                this.paddingLeftValue = `${textLength * 0.5 + 1}rem`;
            }
        };
        this.updatePaddingRight = () => {
            const textLength = this.inputSuffix ? Math.min(this.inputSuffix.length, 25) : null;
            // eslint-disable-next-line i18next/no-literal-string
            this.paddingRightValue = `${textLength * 0.5 + 1}rem`;
        };
        this.handleInput = (e) => {
            const target = e.target;
            this.value = target.value;
        };
        this.handleBlur = (e) => {
            if (this.enableAnalytics) {
                this.componentLibraryAnalytics.emit({
                    componentName: 'va-text-input',
                    action: 'blur',
                    details: {
                        label: this.label,
                        value: this.value,
                    },
                });
            }
            if (this.inputmode === 'decimal' || this.inputmode === 'numeric' || this.currency) {
                let defaultError = i18next.t('number-error');
                const target = e.target;
                const valid = target.checkValidity();
                if (!this.error && !valid) {
                    this.error = defaultError;
                    this.el.setAttribute('error', defaultError);
                }
                else if (this.error && this.error === defaultError && valid) {
                    this.error = null;
                    this.el.setAttribute('error', '');
                }
            }
        };
        this.label = undefined;
        this.error = undefined;
        this.reflectInputError = false;
        this.showInputError = true;
        this.invalid = false;
        this.required = false;
        this.inputmode = undefined;
        this.step = undefined;
        this.type = 'text';
        this.maxlength = undefined;
        this.autocomplete = undefined;
        this.enableAnalytics = false;
        this.name = undefined;
        this.pattern = undefined;
        this.hint = undefined;
        this.messageAriaDescribedby = undefined;
        this.value = undefined;
        this.success = false;
        this.width = undefined;
        this.useFormsPattern = undefined;
        this.formHeadingLevel = 3;
        this.formHeading = undefined;
        this.charcount = false;
        this.currency = false;
        this.inputPrefix = undefined;
        this.inputIconPrefix = undefined;
        this.inputSuffix = undefined;
        this.inputIconSuffix = undefined;
        this.min = undefined;
        this.max = undefined;
        this.paddingLeftValue = '0';
        this.paddingRightValue = '0';
    }
    componentWillLoad() {
        this.updatePaddingLeft();
        this.updatePaddingRight();
    }
    componentDidUpdate() {
        this.updatePaddingLeft();
        this.updatePaddingRight();
    }
    getInputType() {
        if (!this.allowedInputTypes.includes(this.type)) {
            consoleDevError(`The input type "${this.type}" is invalid or unsupported!`);
            /* eslint-disable-next-line i18next/no-literal-string */
            return 'text';
        }
        if (this.max || this.min) {
            return 'number';
        }
        return this.type;
    }
    /**
     * This ensures that the `maxlength` property will be positive
     * or it won't be used at all
     */
    getMaxlength() {
        if (this.maxlength <= 0) {
            consoleDevError('The maxlength prop must be positive!');
            return undefined;
        }
        return this.maxlength;
    }
    // get the pattern for the input. note: currency has its own pattern
    getPattern() {
        // currency should have its own pattern
        if (this.currency) {
            return '^[0-9]+(\.[0-9]{2})?$';
        }
        const isNumericWithNoPattern = this.pattern === undefined && (this.inputmode === 'decimal' || this.inputmode === 'numeric');
        // if input will hold a number then set the pattern to a default
        return isNumericWithNoPattern ? "[0-9]+(\.[0-9]{1,})?" : this.pattern;
    }
    // get the inputmode for the component. if currency is true always use 'numeric'
    getInputmode() {
        if (this.currency) {
            return 'numeric';
        }
        return this.inputmode ? this.inputmode : undefined;
    }
    // get the step for the input, if inputMode is decimal default to .01
    getStep() {
        if (!this.step && this.inputmode === 'decimal') {
            return '.01';
        }
        return this.step ? this.step : undefined;
    }
    connectedCallback() {
        i18next.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        i18next.off('languageChanged');
    }
    render() {
        const { label, error, reflectInputError, showInputError, invalid, required, value, name, autocomplete, hint, handleInput, handleBlur, success, messageAriaDescribedby, width, useFormsPattern, formHeadingLevel, formHeading, charcount, min, max, currency, inputPrefix, inputIconPrefix, inputSuffix, inputIconSuffix } = this;
        const type = this.getInputType();
        const maxlength = this.getMaxlength();
        const inputmode = this.getInputmode();
        const step = this.getStep();
        const ariaDescribedbyIds = `${messageAriaDescribedby ? 'input-message' : ''} ${error ? 'input-error-message' : ''} ${charcount && maxlength ? 'charcount-message' : ''}`.trim() || null; // Null so we don't add the attribute if we have an empty string
        const ariaLabeledByIds = `${useFormsPattern && formHeading ? 'form-question' : ''} ${useFormsPattern ? 'form-description' : ''} ${useFormsPattern && label ? 'input-label' : ''}`.trim() || null;
        const pattern = this.getPattern();
        const currencyWrapper = classnames({
            'currency-wrapper': currency,
            'usa-input-group': inputSuffix || inputPrefix || inputIconPrefix || inputIconSuffix
        });
        const getInputStyle = () => {
            if (this.paddingLeftValue !== '0' && inputPrefix) {
                return { paddingLeft: this.paddingLeftValue };
            }
            else if (inputSuffix) {
                return { paddingRight: this.paddingRightValue };
            }
            else {
                return {};
            }
        };
        const style = getInputStyle();
        const charCountTooHigh = maxlength && ((value === null || value === void 0 ? void 0 : value.length) > maxlength);
        const labelClass = classnames({
            'usa-label': true,
            'usa-label--error': error,
        });
        const inputClass = classnames({
            'usa-input': true,
            'usa-input--success': success,
            'usa-input--error': error || reflectInputError,
            [`usa-input--${width}`]: width,
        });
        const messageClass = classnames({
            'usa-hint': true,
            'usa-character-count__status': maxlength,
            'usa-character-count__status--invalid': maxlength && (value === null || value === void 0 ? void 0 : value.length) > maxlength
        });
        const errorClass = classnames({
            'usa-sr-only': !showInputError,
        });
        const isFormsPattern = useFormsPattern === 'single' || useFormsPattern === 'multiple' ? true : false;
        let formsHeading = null;
        if (isFormsPattern) {
            const HeaderLevel = getHeaderLevel(formHeadingLevel);
            formsHeading = (h(Fragment, null, formHeading &&
                h(HeaderLevel, { id: "form-question", part: "form-header" }, formHeading), h("div", { id: "form-description" }, h("slot", { name: "form-description" }))));
        }
        return (h(Host, null, formsHeading, h("div", { class: "input-wrap" }, label && (h("label", { htmlFor: "inputField", id: "input-label", class: labelClass, part: "label" }, label, required && (h("span", { class: "usa-label--required" }, ' ', i18next.t('required'))), hint && h("span", { class: "usa-hint" }, hint))), h("slot", null), h("span", { id: "input-error-message", role: "alert", class: errorClass }, error && (h(Fragment, null, h("span", { class: "usa-sr-only" }, i18next.t('error')), h("span", { class: "usa-error-message" }, error)))), h("div", { class: currencyWrapper }, currency && h("div", { id: "symbol" }, "$"), inputPrefix && h("div", { class: "usa-input-prefix", part: "input-prefix" }, inputPrefix.substring(0, 25)), inputIconPrefix && h("div", { class: "usa-input-prefix", part: "input-prefix" }, h("va-icon", { icon: inputIconPrefix, size: 3, part: "icon" })), h("input", { class: inputClass, id: "inputField", type: type, value: value, onInput: handleInput, onBlur: handleBlur, "aria-describedby": ariaDescribedbyIds, style: style, "aria-labelledby": ariaLabeledByIds, "aria-invalid": invalid || error || charCountTooHigh ? 'true' : 'false', inputmode: inputmode, step: step, maxlength: maxlength, pattern: pattern, name: name, autocomplete: autocomplete, required: required || null, part: "input", min: min, max: max }), inputSuffix && h("div", { class: "usa-input-suffix", part: "suffix", "aria-hidden": "true" }, inputSuffix.substring(0, 25)), inputIconSuffix && h("div", { class: "usa-input-suffix", part: "input-suffix" }, h("va-icon", { icon: inputIconSuffix, size: 3, part: "icon" }))), messageAriaDescribedby && (h("span", { id: "input-message", class: "usa-sr-only dd-privacy-hidden" }, messageAriaDescribedby)), charcount && maxlength && (h("span", { id: "charcount-message", class: messageClass, "aria-live": "polite" }, getCharacterMessage(value, maxlength))))));
    }
    static get is() { return "va-text-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-text-input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-text-input.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                    "text": "The label for the text input."
                },
                "attribute": "label",
                "reflect": false
            },
            "error": {
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
                    "text": "The error message to render."
                },
                "attribute": "error",
                "reflect": true
            },
            "reflectInputError": {
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
                    "text": "Whether or not to add usa-input--error as class if error message is outside of component"
                },
                "attribute": "reflect-input-error",
                "reflect": false,
                "defaultValue": "false"
            },
            "showInputError": {
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
                    "text": "When `false`, hides the error message from view, but not from the screen reader. Should only be used if error is being displayed elsewhere. Must use kebab-case on this attribute for it to work properly."
                },
                "attribute": "show-input-error",
                "reflect": true,
                "defaultValue": "true"
            },
            "invalid": {
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
                    "text": "Whether or not `aria-invalid` will be set on the inner input. Useful when\ncomposing the component into something larger, like a date component."
                },
                "attribute": "invalid",
                "reflect": false,
                "defaultValue": "false"
            },
            "required": {
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
                    "text": "Set the input to required and render the (Required) text."
                },
                "attribute": "required",
                "reflect": false,
                "defaultValue": "false"
            },
            "inputmode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 'decimal'\n    | 'email'\n    | 'numeric'\n    | 'search'\n    | 'tel'\n    | 'text'\n    | 'url'",
                    "resolved": "\"decimal\" | \"email\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The inputmode attribute."
                },
                "attribute": "inputmode",
                "reflect": false
            },
            "step": {
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
                    "text": "The step attribute is a number, or the string 'any', that specifies the granularity of the value. For example: `<va-text-input type=\"number\" step=\".1\"/>` enables float/decimal values to be valid and increment by one-tenth. <br/>\nDefaults to 1 for every field type except for time and datetime-local which default to 60 (seconds). View more documentation on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/step)"
                },
                "attribute": "step",
                "reflect": false
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'email' | 'number' | 'search' | 'tel' | 'text' | 'url'",
                    "resolved": "\"email\" | \"number\" | \"search\" | \"tel\" | \"text\" | \"url\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The type attribute."
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'text'"
            },
            "maxlength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The maximum number of characters allowed in the input.\nNegative and zero values will be ignored."
                },
                "attribute": "maxlength",
                "reflect": false
            },
            "autocomplete": {
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
                    "text": "Allows the browser to automatically complete the input."
                },
                "attribute": "autocomplete",
                "reflect": false
            },
            "enableAnalytics": {
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
                    "text": "Emit component-library-analytics events on the blur event."
                },
                "attribute": "enable-analytics",
                "reflect": false,
                "defaultValue": "false"
            },
            "name": {
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
                    "text": "The name to pass to the input element."
                },
                "attribute": "name",
                "reflect": false
            },
            "pattern": {
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
                    "text": "The regular expression that the input element's value is checked against on submission"
                },
                "attribute": "pattern",
                "reflect": false
            },
            "hint": {
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
                    "text": "Optional hint text."
                },
                "attribute": "hint",
                "reflect": false
            },
            "messageAriaDescribedby": {
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
                    "text": "An optional message that will be read by screen readers when the input is focused."
                },
                "attribute": "message-aria-describedby",
                "reflect": false
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The value for the input."
                },
                "attribute": "value",
                "reflect": true
            },
            "success": {
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
                    "text": "Adds styling based on status value"
                },
                "attribute": "success",
                "reflect": false,
                "defaultValue": "false"
            },
            "width": {
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
                    "text": "Displays the input at a specific width. Accepts 2xs (4ex), xs (7ex), sm or small (10ex), md or medium (20ex), lg (30ex), xl (40ex), and 2xl (50ex)."
                },
                "attribute": "width",
                "reflect": false
            },
            "useFormsPattern": {
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
                    "text": "Enabling this will add a heading and description for integrating into the forms pattern. Accepts `single` or `multiple` to indicate if the form is a single input or will have multiple inputs."
                },
                "attribute": "use-forms-pattern",
                "reflect": false
            },
            "formHeadingLevel": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The heading level for the heading if `useFormsPattern`is true."
                },
                "attribute": "form-heading-level",
                "reflect": false,
                "defaultValue": "3"
            },
            "formHeading": {
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
                    "text": "The content of the heading if `useFormsPattern` is true."
                },
                "attribute": "form-heading",
                "reflect": false
            },
            "charcount": {
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
                    "text": "Whether the component should show a character count message.\nHas no effect without maxlength being set."
                },
                "attribute": "charcount",
                "reflect": false,
                "defaultValue": "false"
            },
            "currency": {
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
                    "text": "Whether this component will be used to accept a currency value."
                },
                "attribute": "currency",
                "reflect": false,
                "defaultValue": "false"
            },
            "inputPrefix": {
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
                    "text": "Displays a fixed prefix string at the start of the input field."
                },
                "attribute": "input-prefix",
                "reflect": false
            },
            "inputIconPrefix": {
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
                    "text": "This property displays a prefix that accepts a string which represents icon name."
                },
                "attribute": "input-icon-prefix",
                "reflect": false
            },
            "inputSuffix": {
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
                    "text": "Displays a fixed suffix string at the end of the input field."
                },
                "attribute": "input-suffix",
                "reflect": false
            },
            "inputIconSuffix": {
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
                    "text": "A string that represents the name of an icon passed to va-icon, which will be applied as a suffix to the input."
                },
                "attribute": "input-icon-suffix",
                "reflect": false
            },
            "min": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "number | string",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The min attribute specifies the minimum value for an input element\nif the inputmode is numeric."
                },
                "attribute": "min",
                "reflect": false
            },
            "max": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "number | string",
                    "resolved": "number | string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The max attribute specifies the maximum value for an input element\nif the inputmode is numeric."
                },
                "attribute": "max",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "paddingLeftValue": {},
            "paddingRightValue": {}
        };
    }
    static get events() {
        return [{
                "method": "componentLibraryAnalytics",
                "name": "component-library-analytics",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event used to track usage of the component. This is emitted when the\ninput is blurred and enableAnalytics is true."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
