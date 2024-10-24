import { Host, h, Fragment, } from "@stencil/core";
import { i18next } from "../..";
import { months, days, validate, getErrorParameters, zeroPadStart, } from "../../utils/date-utils";
/**
 * By default all date components have the following validation:
 * - Cannot have blank values
 * - Month and Day must be valid numbers
 * - The Year cannot fall outside of the range of 1900 through the current year plus 100 years
 */
/**
 * @componentName Date input
 * @maturityCategory use
 * @maturityLevel deployed
 * @guidanceHref form/date-input
 */
export class VaDate {
    constructor() {
        this.dayTouched = false;
        this.monthTouched = false;
        this.yearTouched = false;
        this.handleDateBlur = (event) => {
            const [year, month, day] = (this.value || '')
                .split('-')
                .map(val => Number(val));
            validate({
                component: this,
                year,
                month,
                day,
                yearTouched: this.yearTouched,
                monthTouched: this.monthTouched,
                dayTouched: this.dayTouched,
                monthSelect: true
            });
            if (this.error) {
                return;
            }
            this.setValue(year, month, day);
            this.dateBlur.emit(event);
            if (this.enableAnalytics) {
                const detail = {
                    componentName: 'va-date',
                    action: 'blur',
                    details: {
                        year,
                        month,
                        day,
                        'month-year-only': this.monthYearOnly,
                    },
                };
                this.componentLibraryAnalytics.emit(detail);
            }
        };
        this.handleDateChange = (event) => {
            const target = event.target;
            let [currentYear, currentMonth, currentDay] = (this.value || '').split('-');
            if (target.classList.contains('select-month')) {
                currentMonth = target.value;
            }
            // This won't happen for monthYearOnly dates
            if (target.classList.contains('select-day')) {
                currentDay = target.value;
            }
            if (target.classList.contains('input-year')) {
                currentYear = target.value;
            }
            this.setValue(parseInt(currentYear), parseInt(currentMonth), parseInt(currentDay));
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
        this.label = undefined;
        this.name = undefined;
        this.hint = undefined;
        this.error = undefined;
        this.monthYearOnly = false;
        this.value = undefined;
        this.invalidDay = false;
        this.invalidMonth = false;
        this.invalidYear = false;
        this.enableAnalytics = false;
    }
    /**
     * Set the value prop as an ISO-8601 date using provided arguments.
     * Strips trailing hyphens and sets date to be null if the
     * date values are all NaNs.
     */
    setValue(year, month, day) {
        // Ternary to prevent NaN displaying as value for Year
        // Ternary to prevent Month or Day from displaying as single digit
        /* eslint-disable i18next/no-literal-string */
        const val = `${year ? year : ''}-${month ? zeroPadStart(month) : ''}-${day ? zeroPadStart(day) : ''}`.replace(/-+$/, '');
        /* eslint-enable i18next/no-literal-string */
        this.value = val ? val : null;
    }
    render() {
        const { required, label, name, error, handleDateBlur, handleDateChange, monthYearOnly, value, hint, } = this;
        const [year, month, day] = (value || '')
            .split('-')
            .map(val => parseInt(val));
        const daysForSelectedMonth = month > 0 ? days[month] : [];
        const errorParameters = (error) => {
            return getErrorParameters(error, year, month);
        };
        // Fieldset has an implicit aria role of group
        return (h(Host, { onBlur: handleDateBlur }, h("fieldset", null, h("legend", null, label, " ", required && h("span", { class: "required" }, "(*Required)")), hint && h("span", { class: "hint-text" }, hint), h("slot", null), h("span", { id: "error-message", role: "alert" }, error && (h(Fragment, null, h("span", { class: "sr-only" }, "Error"), " ", i18next.t(error, errorParameters(error))))), h("div", { class: "date-container" }, h("va-select", { label: "Month", "aria-describedby": error ? 'error-message' : undefined, name: `${name}Month`,
            // Value must be a string
            value: month === null || month === void 0 ? void 0 : month.toString(), onVaSelect: handleDateChange, onBlur: this.handleMonthBlur, invalid: this.invalidMonth, class: "select-month", "aria-label": "Please enter two digits for the month", error: this.monthTouched && this.invalidMonth ? error : null, showError: false }, h("option", { value: "" }), months &&
            months.map(month => (h("option", { value: month.value }, month.label)))), !monthYearOnly && (h("va-select", { label: "Day", "aria-describedby": error ? 'error-message' : undefined, name: `${name}Day`,
            // If day value set is greater than amount of days in the month
            // set to empty string instead
            // Value must be a string
            value: daysForSelectedMonth.length < day ? '' : day === null || day === void 0 ? void 0 : day.toString(), onVaSelect: handleDateChange, onBlur: this.handleDayBlur, invalid: this.invalidDay, class: "select-day", "aria-label": "Please enter two digits for the day", error: this.dayTouched && this.invalidDay ? this.error : null, showError: false }, h("option", { value: "" }), daysForSelectedMonth &&
            daysForSelectedMonth.map(day => (h("option", { value: day }, day))))), h("va-text-input", { label: "Year", "aria-describedby": error ? 'error-message' : undefined, name: `${name}Year`, maxlength: 4, pattern: "[0-9]{4}",
            // Value must be a string
            // Checking is NaN if so provide empty string
            value: year ? year.toString() : '', invalid: this.invalidYear, onInput: handleDateChange, onBlur: this.handleYearBlur, error: this.yearTouched && this.invalidYear ? error : null, "show-input-error": "false", class: "input-year", inputmode: "numeric", type: "text", "aria-label": "Please enter four digits for the year" })))));
    }
    static get is() { return "va-date"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-date.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-date.css"]
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
                    "text": "Optional hint text."
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
            "monthYearOnly": {
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
                    "text": "Whether or not only the Month and Year inputs should be displayed."
                },
                "attribute": "month-year-only",
                "reflect": false,
                "defaultValue": "false"
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
