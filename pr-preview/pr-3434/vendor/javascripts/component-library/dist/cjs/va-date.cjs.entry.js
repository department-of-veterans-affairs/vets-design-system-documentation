'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');
require('./contacts-f7ea2d3e.js');
const dateUtils = require('./date-utils-7bfc55b3.js');
const i18next = require('./i18next-1fd09d7c.js');

const vaDateCss = ".sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}#error-message{margin-bottom:0.75rem}#error-message,#input-error-message{color:var(--vads-color-secondary-dark);display:block;font-weight:700;font-size:1.06rem}:host([error]:not([error=''])){border-left:0.3rem solid var(--vads-color-secondary-dark);padding-left:1.25rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=''])){margin-left:-1.4375rem;}}.hint-text{color:#71767A;display:block;font-size:1.06rem}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}.usa-label--required{color:var(--vads-color-secondary-dark)}.usa-error-message{color:var(--vads-color-secondary-dark)}:host{display:block;font-family:var(--font-source-sans);margin-top:1.875rem}fieldset{border:none;margin:0;padding:0}legend{border:0;font-size:1.06rem;padding:0}span.required{color:var(--vads-color-secondary-dark)}#error-message{color:var(--vads-color-secondary-dark);display:block;margin-bottom:0}.date-container{display:-ms-flexbox;display:flex;margin-top:12px;-ms-flex-wrap:wrap;flex-wrap:wrap}:host([error]:not([error=\"\"])) .date-container{padding-top:0}.select-month{width:8.125rem;margin-right:0.9375rem}.select-day{width:5rem;margin-right:0.9375rem}.input-year{width:5rem}va-select::part(label),va-text-input::part(label){margin-top:0;margin-bottom:12px}va-text-input::part(validation){display:none}";
const VaDateStyle0 = vaDateCss;

const VaDate = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateChange = index.createEvent(this, "dateChange", 7);
        this.dateBlur = index.createEvent(this, "dateBlur", 7);
        this.componentLibraryAnalytics = index.createEvent(this, "component-library-analytics", 7);
        this.dayTouched = false;
        this.monthTouched = false;
        this.yearTouched = false;
        this.handleDateBlur = (event) => {
            const [year, month, day] = (this.value || '')
                .split('-')
                .map(val => Number(val));
            dateUtils.validate({
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
        const val = `${year ? year : ''}-${month ? dateUtils.zeroPadStart(month) : ''}-${day ? dateUtils.zeroPadStart(day) : ''}`.replace(/-+$/, '');
        /* eslint-enable i18next/no-literal-string */
        this.value = val ? val : null;
    }
    render() {
        const { required, label, name, error, handleDateBlur, handleDateChange, monthYearOnly, value, hint, } = this;
        const [year, month, day] = (value || '')
            .split('-')
            .map(val => parseInt(val));
        const daysForSelectedMonth = month > 0 ? dateUtils.days[month] : [];
        const errorParameters = (error) => {
            return dateUtils.getErrorParameters(error, year, month);
        };
        // Fieldset has an implicit aria role of group
        return (index.h(index.Host, { onBlur: handleDateBlur }, index.h("fieldset", null, index.h("legend", null, label, " ", required && index.h("span", { class: "required" }, "(*Required)")), hint && index.h("span", { class: "hint-text" }, hint), index.h("slot", null), index.h("span", { id: "error-message", role: "alert" }, error && (index.h(index.Fragment, null, index.h("span", { class: "sr-only" }, "Error"), " ", i18next.instance.t(error, errorParameters(error))))), index.h("div", { class: "date-container" }, index.h("va-select", { label: "Month", "aria-describedby": error ? 'error-message' : undefined, name: `${name}Month`,
            // Value must be a string
            value: month === null || month === void 0 ? void 0 : month.toString(), onVaSelect: handleDateChange, onBlur: this.handleMonthBlur, invalid: this.invalidMonth, class: "select-month", "aria-label": "Please enter two digits for the month", error: this.monthTouched && this.invalidMonth ? error : null, showError: false }, index.h("option", { value: "" }), dateUtils.months &&
            dateUtils.months.map(month => (index.h("option", { value: month.value }, month.label)))), !monthYearOnly && (index.h("va-select", { label: "Day", "aria-describedby": error ? 'error-message' : undefined, name: `${name}Day`,
            // If day value set is greater than amount of days in the month
            // set to empty string instead
            // Value must be a string
            value: daysForSelectedMonth.length < day ? '' : day === null || day === void 0 ? void 0 : day.toString(), onVaSelect: handleDateChange, onBlur: this.handleDayBlur, invalid: this.invalidDay, class: "select-day", "aria-label": "Please enter two digits for the day", error: this.dayTouched && this.invalidDay ? this.error : null, showError: false }, index.h("option", { value: "" }), daysForSelectedMonth &&
            daysForSelectedMonth.map(day => (index.h("option", { value: day }, day))))), index.h("va-text-input", { label: "Year", "aria-describedby": error ? 'error-message' : undefined, name: `${name}Year`, maxlength: 4, pattern: "[0-9]{4}",
            // Value must be a string
            // Checking is NaN if so provide empty string
            value: year ? year.toString() : '', invalid: this.invalidYear, onInput: handleDateChange, onBlur: this.handleYearBlur, error: this.yearTouched && this.invalidYear ? error : null, "show-input-error": "false", class: "input-year", inputmode: "numeric", type: "text", "aria-label": "Please enter four digits for the year" })))));
    }
    get el() { return index.getElement(this); }
};
VaDate.style = VaDateStyle0;

exports.va_date = VaDate;
