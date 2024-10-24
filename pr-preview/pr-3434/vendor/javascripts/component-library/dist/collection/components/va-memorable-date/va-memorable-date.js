import { forceUpdate, Host, h, Fragment, } from "@stencil/core";
import { getErrorParameters, months, validate, zeroPadStart, } from "../../utils/date-utils";
import { getHeaderLevel } from "../../utils/utils";
import { i18next } from "../..";
import { Build } from "@stencil/core";
import classnames from "classnames";
if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    i18next.init({ lng: 'cimode' });
}
/**
 * By default all date components have the following validation:
 * - Cannot have blank values
 * - Month and Day must be valid numbers
 * - The Year cannot fall outside of the range of 1900 through the current year plus 100 years
 */
/**
 * @componentName Memorable date
 * @maturityCategory caution
 * @maturityLevel available
 * @guidanceHref form/memorable-date
 * @translations English
 * @translations Spanish
 */
export class VaMemorableDate {
    constructor() {
        this.dayTouched = false;
        this.monthTouched = false;
        this.yearTouched = false;
        this.handleDateBlur = (event) => {
            const [year, month, day] = (this.value || '').split('-');
            const yearNum = Number(year);
            const monthNum = Number(month);
            const dayNum = Number(day);
            validate({
                component: this,
                year: yearNum,
                month: monthNum,
                day: dayNum,
                yearTouched: this.yearTouched,
                monthTouched: this.monthTouched,
                dayTouched: this.dayTouched,
                monthSelect: this.monthSelect
            });
            if (this.error) {
                return;
            }
            /* eslint-disable i18next/no-literal-string */
            this.value = year || month || day ? `${year}-${month ? zeroPadStart(monthNum) : ''}-${day ? zeroPadStart(dayNum) : ''}` : '';
            /* eslint-enable i18next/no-literal-string */
            // Any custom validation will happen first; otherwise consumer code clearing
            // errors will also remove internal errors.
            this.dateBlur.emit(event);
            if (this.enableAnalytics) {
                const detail = {
                    componentName: 'va-memorable-date',
                    action: 'blur',
                    details: {
                        label: this.label,
                        year: yearNum,
                        month: monthNum,
                        day: dayNum,
                    },
                };
                this.componentLibraryAnalytics.emit(detail);
            }
        };
        this.handleMonthChange = (event) => {
            this.handleDateChange(event);
        };
        this.handleDateChange = (event) => {
            const target = event.target;
            let [currentYear, currentMonth, currentDay] = (this.value || '').split('-');
            if (target.classList.contains('input-month') || target.classList.contains('usa-form-group--month-input') || target.classList.contains('usa-form-group--month-select')) {
                currentMonth = target.value;
            }
            if (target.classList.contains('input-day') || target.classList.contains('usa-form-group--day-input')) {
                currentDay = target.value;
            }
            if (target.classList.contains('input-year') || target.classList.contains('usa-form-group--year-input')) {
                currentYear = target.value;
            }
            /* eslint-disable i18next/no-literal-string */
            this.value = currentYear || currentMonth || currentDay ? `${currentYear}-${currentMonth ? currentMonth : ''}-${currentDay ? currentDay : ''}` : '';
            /* eslint-enable i18next/no-literal-string */
            // This event should always fire to allow for validation handling
            this.dateChange.emit(event);
        };
        this.handleMonthBlur = () => {
            this.monthTouched = true;
        };
        this.handleDayBlur = () => {
            this.dayTouched = true;
        };
        this.handleYearBlur = () => {
            this.yearTouched = true;
        };
        this.required = false;
        this.useFormsPattern = undefined;
        this.formHeadingLevel = 3;
        this.formHeading = undefined;
        this.monthSelect = false;
        this.label = undefined;
        this.name = undefined;
        this.hint = undefined;
        this.error = undefined;
        this.value = undefined;
        this.customDayErrorMessage = undefined;
        this.customMonthErrorMessage = undefined;
        this.customYearErrorMessage = undefined;
        this.invalidDay = false;
        this.invalidMonth = false;
        this.invalidYear = false;
        this.enableAnalytics = false;
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
        const { required, label, name, hint, error, handleDateBlur, handleDateChange, value, monthSelect, useFormsPattern, formHeadingLevel, formHeading, } = this;
        const [year, month, day] = (value || '').split('-');
        const describedbyIds = ['dateHint', hint ? 'hint' : '']
            .filter(Boolean)
            .join(' ');
        const hintText = monthSelect ? i18next.t('date-hint-with-select') : i18next.t('date-hint');
        const errorParameters = (error) => {
            const yearNum = parseInt(year);
            const monthNum = parseInt(month);
            return getErrorParameters(error, yearNum, monthNum);
        };
        // get a custom error method if existent when internal validation fails
        // otherwise take standard error message
        const getErrorMessage = (error) => {
            let errorMessage = '';
            if (this.invalidDay) {
                errorMessage = this.customDayErrorMessage;
            }
            else if (this.invalidMonth) {
                errorMessage = this.customMonthErrorMessage;
            }
            else if (this.invalidYear) {
                errorMessage = this.customYearErrorMessage;
            }
            return errorMessage ? errorMessage : getStandardErrorMessage(error);
        };
        // get the default message if internal validation fails
        const getStandardErrorMessage = (error) => {
            return i18next.t(error, errorParameters(error));
        };
        // Error attribute should be leveraged for custom error messaging
        // Fieldset has an implicit aria role of group
        const ariaLabeledByIds = `${useFormsPattern && formHeading ? 'form-question' : ''} ${useFormsPattern ? 'form-description' : ''} ${useFormsPattern && label ? 'input-label' : ''}`.trim() || null;
        const isFormsPattern = useFormsPattern === 'single' || useFormsPattern === 'multiple' ? true : false;
        let formsHeading = null;
        if (isFormsPattern) {
            const HeaderLevel = getHeaderLevel(formHeadingLevel);
            formsHeading = (h(Fragment, null, formHeading &&
                h(HeaderLevel, { id: "form-question", part: "form-header" }, formHeading), h("div", { id: "form-description" }, h("slot", { name: "form-description" }))));
        }
        const monthDisplay = monthSelect
            ? h("div", { class: "usa-form-group usa-form-group--month usa-form-group--select" }, h("va-select", { label: i18next.t('month'), name: name ? `${name}Month` : 'Month', "aria-describedby": describedbyIds, "aria-labelledby": ariaLabeledByIds, invalid: this.invalidMonth, onVaSelect: this.handleMonthChange, onBlur: this.handleMonthBlur, class: 'usa-form-group--month-select', reflectInputError: error === 'month-range' ? true : false, value: month ? String(parseInt(month)) : month, error: this.invalidMonth ? getStandardErrorMessage(error) : null, showError: false }, months &&
                months.map(monthOption => (h("option", { value: monthOption.value, selected: monthOption.value === parseInt(month) }, monthOption.label)))))
            : h("div", { class: "usa-form-group usa-form-group--month" }, h("va-text-input", { label: i18next.t('month'), name: name ? `${name}Month` : 'Month', maxlength: 2, pattern: "[0-9]*", "aria-describedby": describedbyIds, "aria-labelledby": ariaLabeledByIds, invalid: this.invalidMonth,
                // Value must be a string
                // if NaN provide empty string
                value: month === null || month === void 0 ? void 0 : month.toString(), onInput: handleDateChange, onBlur: this.handleMonthBlur, class: "usa-form-group--month-input memorable-date-input", reflectInputError: error === 'month-range' ? true : false, inputmode: "numeric", type: "text", error: this.invalidMonth ? getStandardErrorMessage(error) : null, "show-input-error": "false" }));
        const legendClass = classnames({
            'usa-legend': true,
            'usa-label--error': error
        });
        return (h(Host, { onBlur: handleDateBlur }, formsHeading, h("div", { class: "input-wrap" }, h("fieldset", { class: "usa-form usa-fieldset" }, h("legend", { class: legendClass, id: "input-label", part: "legend" }, label, required && h("span", { class: "usa-label--required" }, " ", i18next.t('required')), hint && h("div", { class: "usa-hint", id: "hint" }, hint), h("span", { class: "usa-hint", id: "dateHint" }, hintText)), h("span", { id: "error-message", role: "alert" }, error && (h(Fragment, null, h("span", { class: "usa-sr-only" }, i18next.t('error')), h("span", { class: "usa-error-message" }, getErrorMessage(error))))), h("slot", null), h("div", { class: "usa-memorable-date" }, monthDisplay, h("div", { class: "usa-form-group usa-form-group--day" }, h("va-text-input", { label: i18next.t('day'), name: name ? `${name}Day` : 'Day', maxlength: 2, pattern: "[0-9]*", "aria-describedby": describedbyIds, invalid: this.invalidDay,
            // Value must be a string
            // if NaN provide empty string
            value: day === null || day === void 0 ? void 0 : day.toString(), onInput: handleDateChange, onBlur: this.handleDayBlur, class: "usa-form-group--day-input memorable-date-input", reflectInputError: error === 'day-range' ? true : false, inputmode: "numeric", type: "text", error: this.invalidDay ? getStandardErrorMessage(error) : null, "show-input-error": "false" })), h("div", { class: "usa-form-group usa-form-group--year" }, h("va-text-input", { label: i18next.t('year'), name: name ? `${name}Year` : 'Year', maxlength: 4, pattern: "[0-9]*", "aria-describedby": describedbyIds, invalid: this.invalidYear,
            // Value must be a string
            // if NaN provide empty string
            value: year === null || year === void 0 ? void 0 : year.toString(), onInput: handleDateChange, onBlur: this.handleYearBlur, class: "usa-form-group--year-input memorable-date-input", reflectInputError: error === 'year-range' ? true : false, inputmode: "numeric", type: "text", error: this.invalidYear ? getStandardErrorMessage(error) : null, "show-input-error": "false" })))))));
    }
    static get is() { return "va-memorable-date"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-memorable-date.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-memorable-date.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Render marker indicating field is required."
                },
                "attribute": "required",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "The heading level for the heading if `useFormsPattern`."
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
                    "text": "The content of the heading if `useFormsPattern`."
                },
                "attribute": "form-heading",
                "reflect": false
            },
            "monthSelect": {
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
                    "text": "Whether or not to use the month as an input or select."
                },
                "attribute": "month-select",
                "reflect": false,
                "defaultValue": "false"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label for the field."
                },
                "attribute": "label",
                "reflect": false
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to create unique name attributes for each input."
                },
                "attribute": "name",
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
                    "text": "Hint text string"
                },
                "attribute": "hint",
                "reflect": false
            },
            "error": {
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
                    "text": "The error message to render (if any)\nThis prop should be leveraged to display any custom validations needed for this component"
                },
                "attribute": "error",
                "reflect": true
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
                    "text": "Set the default date value must be in YYYY-MM-DD format."
                },
                "attribute": "value",
                "reflect": true
            },
            "customDayErrorMessage": {
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
                    "text": "A custom error message to display if the day is invalid"
                },
                "attribute": "custom-day-error-message",
                "reflect": false
            },
            "customMonthErrorMessage": {
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
                    "text": "A custom error message to display if the month is invalid"
                },
                "attribute": "custom-month-error-message",
                "reflect": false
            },
            "customYearErrorMessage": {
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
                    "text": "A custom error message to display if the year is invalid"
                },
                "attribute": "custom-year-error-message",
                "reflect": false
            },
            "invalidDay": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "invalid-day",
                "reflect": false,
                "defaultValue": "false"
            },
            "invalidMonth": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "invalid-month",
                "reflect": false,
                "defaultValue": "false"
            },
            "invalidYear": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "invalid-year",
                "reflect": false,
                "defaultValue": "false"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether or not an analytics event will be fired."
                },
                "attribute": "enable-analytics",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "dateChange",
                "name": "dateChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires when the date input loses focus after its value was changed"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "dateBlur",
                "name": "dateBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires when the date input loses focus"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "componentLibraryAnalytics",
                "name": "component-library-analytics",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event used to track usage of the component. This is emitted when an\ninput value changes and enableAnalytics is true."
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
