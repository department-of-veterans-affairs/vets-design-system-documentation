'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');
const dateUtils = require('./date-utils-7bfc55b3.js');
const utils = require('./utils-967b9523.js');
require('./contacts-f7ea2d3e.js');
const index$1 = require('./index-c4897a3e.js');
const i18next = require('./i18next-1fd09d7c.js');

const vaMemorableDateCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}#error-message{margin-bottom:0.75rem}#error-message,#input-error-message{color:var(--vads-color-secondary-dark);display:block;font-weight:700;font-size:1.06rem}:host([error]:not([error=''])){border-left:0.3rem solid var(--vads-color-secondary-dark);padding-left:1.25rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=''])){margin-left:-1.4375rem;}}h1{margin-top:0}h1,h2,h3,h4,h5,h6{margin-bottom:0;margin-top:0;clear:both}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:1.5em}h1+*,h2+*,h3+*,h4+*,h5+*,h6+*{margin-top:1em}h1{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:2.44rem;line-height:1.2;font-weight:700}h2{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.95rem;line-height:1.2;font-weight:700}h3{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.34rem;line-height:1.2;font-weight:700}h4{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.98rem;line-height:1.2;font-weight:700}h5{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.91rem;line-height:1.2;font-weight:700}h6{font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;font-size:0.87rem;line-height:1.1;font-weight:normal;letter-spacing:0.025em;text-transform:uppercase}h1,h2,h3,h4,h5{font-family:Bitter, Georgia, Cambria, \"Times New Roman\", Times, serif;font-weight:700}h6{font-family:\"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;font-weight:700}h1{margin-top:0;font-size:2.5rem}h2{font-size:1.875rem}h3{font-size:1.25rem}h4{font-size:1.0625rem}h5{font-size:0.9375rem}h6{font-size:0.9375rem}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}:host legend :is(h1,h2,h3,h4,h5,h6),:host label :is(h1,h2,h3,h4,h5,h6){display:inline;margin:0px}:host legend :is(h1,h2,h3,h4,h5),:host label :is(h1,h2,h3,h4,h5){font-family:var(--font-serif)}:host h1+*,:host h2+*,:host h3+*,:host h4+*,:host h5+*,:host h6+*{margin-top:unset}:host #form-question{margin-bottom:1rem}.usa-hint,.usa-fieldset{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-form{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}@media all and (min-width: 30em){.usa-form{max-width:20rem}}.usa-form abbr[title=required]{text-decoration:none}.usa-form .usa-input,.usa-form .usa-range,.usa-form .usa-select,.usa-form .usa-textarea{max-width:none}.usa-form .usa-input--2xs,.usa-form .usa-input-group--2xs{max-width:5ex}.usa-form .usa-input--xs,.usa-form .usa-input-group--xs{max-width:9ex}.usa-form .usa-input--sm,.usa-form .usa-input--small,.usa-form .usa-input-group--sm,.usa-form .usa-input-group--small{max-width:13ex}.usa-form .usa-input--md,.usa-form .usa-input--medium,.usa-form .usa-input-group--md,.usa-form .usa-input-group--medium{max-width:20ex}.usa-form .usa-input--lg,.usa-form .usa-input-group--lg{max-width:30ex}.usa-form .usa-input--xl,.usa-form .usa-input-group--xl{max-width:40ex}.usa-form .usa-input--2xl,.usa-form .usa-input-group--2xl{max-width:50ex}.usa-form .usa-button{margin-top:0.5rem}@media all and (min-width: 30em){.usa-form .usa-button{margin-top:1.5rem}}.usa-form a:where(:not(.usa-button)){color:#005ea2;text-decoration:underline}.usa-form a:where(:not(.usa-button)):visited{color:#54278f}.usa-form a:where(:not(.usa-button)):hover{color:#1a4480}.usa-form a:where(:not(.usa-button)):active{color:#162e51}.usa-form a:where(:not(.usa-button)):focus{outline:0.25rem solid #2491ff;outline-offset:0rem}@media all and (min-width: 30em){.usa-form--large{max-width:30rem}}.usa-show-password{color:#005ea2;text-decoration:underline;background-color:transparent;border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;font-weight:normal;-ms-flex-pack:normal;justify-content:normal;text-align:left;margin:0;padding:0;cursor:pointer}.usa-show-password:visited{color:#54278f}.usa-show-password:hover{color:#1a4480}.usa-show-password:active{color:#162e51}.usa-show-password:focus{outline:0.25rem solid #2491ff;outline-offset:0rem}.usa-show-password:hover,.usa-show-password.usa-button--hover,.usa-show-password:disabled:hover,.usa-show-password[aria-disabled=true]:hover,.usa-show-password:disabled.usa-button--hover,.usa-show-password[aria-disabled=true].usa-button--hover,.usa-show-password:active,.usa-show-password.usa-button--active,.usa-show-password:disabled:active,.usa-show-password[aria-disabled=true]:active,.usa-show-password:disabled.usa-button--active,.usa-show-password[aria-disabled=true].usa-button--active,.usa-show-password:disabled:focus,.usa-show-password[aria-disabled=true]:focus,.usa-show-password:disabled.usa-focus,.usa-show-password[aria-disabled=true].usa-focus,.usa-show-password:disabled,.usa-show-password[aria-disabled=true],.usa-show-password.usa-button--disabled{background-color:transparent;-webkit-box-shadow:none;box-shadow:none;text-decoration:underline}.usa-show-password.usa-button--hover{color:#1a4480}.usa-show-password.usa-button--active{color:#162e51}.usa-show-password:disabled,.usa-show-password[aria-disabled=true],.usa-show-password:disabled:hover,.usa-show-password[aria-disabled=true]:hover,.usa-show-password[aria-disabled=true]:focus{color:#757575}@media (forced-colors: active){.usa-show-password:disabled,.usa-show-password[aria-disabled=true],.usa-show-password:disabled:hover,.usa-show-password[aria-disabled=true]:hover,.usa-show-password[aria-disabled=true]:focus{color:GrayText}}.usa-form__note,.usa-show-password{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:0.93rem;line-height:1.3;float:right;margin:0.25rem 0 1rem}.usa-fieldset{border:none;margin:0;padding:0}.usa-legend{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-legend--large{font-size:2.13rem;font-weight:700;margin-top:1rem}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-form-group{margin-top:1.5rem}.usa-form-group .usa-label:first-child{margin-top:0}.usa-form-group--error{border-left-width:0.25rem;border-left-color:#b50909;border-left-style:solid;padding-left:1rem;position:relative}@media all and (min-width: 64em){.usa-form-group--error{margin-left:-1.25rem}}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-memorable-date{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.usa-memorable-date [type=number]{-moz-appearance:textfield}.usa-memorable-date [type=number]::-webkit-inner-spin-button{-webkit-appearance:none;appearance:none}.usa-memorable-date [type=number]::-webkit-contacts-auto-fill-button{visibility:hidden;display:none !important;pointer-events:none;height:0;width:0;margin:0}.usa-memorable-date .usa-form-group{margin-top:1rem}.usa-form-group--day,.usa-form-group--month,.usa-form-group--year{-ms-flex:0 1 auto;flex:0 1 auto;margin-right:1rem;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.usa-form-group--day input,.usa-form-group--month input{width:3rem}.usa-form-group--month select{width:15rem}.usa-form-group--year input{width:4.5rem}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}:host{display:block;font-family:var(--font-source-sans);margin-top:24px}#error-message{margin-bottom:0}.usa-hint{display:block}slot:not([name])::slotted(*){margin-bottom:0.5rem}va-select::part(label),va-text-input::part(label){margin-top:0;margin-bottom:12px}va-text-input::part(validation){display:none}.usa-memorable-date{margin-top:16px;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.usa-memorable-date .usa-form-group{margin-top:0px}.usa-form-group--month{margin-right:16px}.usa-form-group--month-input{width:48px}.usa-form-group--month-select{width:15rem}.usa-form-group--day-input{width:3rem}.usa-form-group--year-input{width:4.5rem}@media (max-width: 480px){.usa-form-group--month-select{width:100%}.usa-form-group--select{-ms-flex:0 1 50%;flex:0 1 50%;width:50%}}";
const VaMemorableDateStyle0 = vaMemorableDateCss;

const VaMemorableDate = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.dateChange = index.createEvent(this, "dateChange", 7);
        this.dateBlur = index.createEvent(this, "dateBlur", 7);
        this.componentLibraryAnalytics = index.createEvent(this, "component-library-analytics", 7);
        this.dayTouched = false;
        this.monthTouched = false;
        this.yearTouched = false;
        this.handleDateBlur = (event) => {
            const [year, month, day] = (this.value || '').split('-');
            const yearNum = Number(year);
            const monthNum = Number(month);
            const dayNum = Number(day);
            dateUtils.validate({
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
            this.value = year || month || day ? `${year}-${month ? dateUtils.zeroPadStart(monthNum) : ''}-${day ? dateUtils.zeroPadStart(dayNum) : ''}` : '';
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
        i18next.instance.on('languageChanged', () => {
            index.forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        i18next.instance.off('languageChanged');
    }
    render() {
        const { required, label, name, hint, error, handleDateBlur, handleDateChange, value, monthSelect, useFormsPattern, formHeadingLevel, formHeading, } = this;
        const [year, month, day] = (value || '').split('-');
        const describedbyIds = ['dateHint', hint ? 'hint' : '']
            .filter(Boolean)
            .join(' ');
        const hintText = monthSelect ? i18next.instance.t('date-hint-with-select') : i18next.instance.t('date-hint');
        const errorParameters = (error) => {
            const yearNum = parseInt(year);
            const monthNum = parseInt(month);
            return dateUtils.getErrorParameters(error, yearNum, monthNum);
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
            return i18next.instance.t(error, errorParameters(error));
        };
        // Error attribute should be leveraged for custom error messaging
        // Fieldset has an implicit aria role of group
        const ariaLabeledByIds = `${useFormsPattern && formHeading ? 'form-question' : ''} ${useFormsPattern ? 'form-description' : ''} ${useFormsPattern && label ? 'input-label' : ''}`.trim() || null;
        const isFormsPattern = useFormsPattern === 'single' || useFormsPattern === 'multiple' ? true : false;
        let formsHeading = null;
        if (isFormsPattern) {
            const HeaderLevel = utils.getHeaderLevel(formHeadingLevel);
            formsHeading = (index.h(index.Fragment, null, formHeading &&
                index.h(HeaderLevel, { id: "form-question", part: "form-header" }, formHeading), index.h("div", { id: "form-description" }, index.h("slot", { name: "form-description" }))));
        }
        const monthDisplay = monthSelect
            ? index.h("div", { class: "usa-form-group usa-form-group--month usa-form-group--select" }, index.h("va-select", { label: i18next.instance.t('month'), name: name ? `${name}Month` : 'Month', "aria-describedby": describedbyIds, "aria-labelledby": ariaLabeledByIds, invalid: this.invalidMonth, onVaSelect: this.handleMonthChange, onBlur: this.handleMonthBlur, class: 'usa-form-group--month-select', reflectInputError: error === 'month-range' ? true : false, value: month ? String(parseInt(month)) : month, error: this.invalidMonth ? getStandardErrorMessage(error) : null, showError: false }, dateUtils.months &&
                dateUtils.months.map(monthOption => (index.h("option", { value: monthOption.value, selected: monthOption.value === parseInt(month) }, monthOption.label)))))
            : index.h("div", { class: "usa-form-group usa-form-group--month" }, index.h("va-text-input", { label: i18next.instance.t('month'), name: name ? `${name}Month` : 'Month', maxlength: 2, pattern: "[0-9]*", "aria-describedby": describedbyIds, "aria-labelledby": ariaLabeledByIds, invalid: this.invalidMonth,
                // Value must be a string
                // if NaN provide empty string
                value: month === null || month === void 0 ? void 0 : month.toString(), onInput: handleDateChange, onBlur: this.handleMonthBlur, class: "usa-form-group--month-input memorable-date-input", reflectInputError: error === 'month-range' ? true : false, inputmode: "numeric", type: "text", error: this.invalidMonth ? getStandardErrorMessage(error) : null, "show-input-error": "false" }));
        const legendClass = index$1.classnames({
            'usa-legend': true,
            'usa-label--error': error
        });
        return (index.h(index.Host, { onBlur: handleDateBlur }, formsHeading, index.h("div", { class: "input-wrap" }, index.h("fieldset", { class: "usa-form usa-fieldset" }, index.h("legend", { class: legendClass, id: "input-label", part: "legend" }, label, required && index.h("span", { class: "usa-label--required" }, " ", i18next.instance.t('required')), hint && index.h("div", { class: "usa-hint", id: "hint" }, hint), index.h("span", { class: "usa-hint", id: "dateHint" }, hintText)), index.h("span", { id: "error-message", role: "alert" }, error && (index.h(index.Fragment, null, index.h("span", { class: "usa-sr-only" }, i18next.instance.t('error')), index.h("span", { class: "usa-error-message" }, getErrorMessage(error))))), index.h("slot", null), index.h("div", { class: "usa-memorable-date" }, monthDisplay, index.h("div", { class: "usa-form-group usa-form-group--day" }, index.h("va-text-input", { label: i18next.instance.t('day'), name: name ? `${name}Day` : 'Day', maxlength: 2, pattern: "[0-9]*", "aria-describedby": describedbyIds, invalid: this.invalidDay,
            // Value must be a string
            // if NaN provide empty string
            value: day === null || day === void 0 ? void 0 : day.toString(), onInput: handleDateChange, onBlur: this.handleDayBlur, class: "usa-form-group--day-input memorable-date-input", reflectInputError: error === 'day-range' ? true : false, inputmode: "numeric", type: "text", error: this.invalidDay ? getStandardErrorMessage(error) : null, "show-input-error": "false" })), index.h("div", { class: "usa-form-group usa-form-group--year" }, index.h("va-text-input", { label: i18next.instance.t('year'), name: name ? `${name}Year` : 'Year', maxlength: 4, pattern: "[0-9]*", "aria-describedby": describedbyIds, invalid: this.invalidYear,
            // Value must be a string
            // if NaN provide empty string
            value: year === null || year === void 0 ? void 0 : year.toString(), onInput: handleDateChange, onBlur: this.handleYearBlur, class: "usa-form-group--year-input memorable-date-input", reflectInputError: error === 'year-range' ? true : false, inputmode: "numeric", type: "text", error: this.invalidYear ? getStandardErrorMessage(error) : null, "show-input-error": "false" })))))));
    }
    get el() { return index.getElement(this); }
};
VaMemorableDate.style = VaMemorableDateStyle0;

exports.va_memorable_date = VaMemorableDate;
