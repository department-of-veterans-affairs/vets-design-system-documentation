'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');
const index$1 = require('./index-c4897a3e.js');
const dateUtils = require('./date-utils-7bfc55b3.js');
require('./i18next-1fd09d7c.js');

const vaMaintenanceBannerCss = "p,a,ol,ul,li,dl,dt,dd,form,label,button{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5}button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;border-radius:5px;color:var(--vads-button-color-text-primary-alt-on-light);cursor:pointer;display:inline-block;font-family:var(--font-source-sans);font-size:1rem;font-weight:700;line-height:1;padding:0.625rem 1.25rem;text-align:center;text-decoration:none}.maintenance-banner{border-top:8px solid;background-color:var(--vads-color-base-lightest);position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.maintenance-banner__content{font-size:1.06rem}.maintenance-banner p{-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-after:1em;margin-block-end:1em}.maintenance-banner--warning{border-color:var(--vads-color-warning)}.maintenance-banner--error{border-color:var(--vads-color-secondary-dark)}.maintenance-banner__icon{position:absolute;top:18px;left:18px}.maintenance-banner--error .maintenance-banner__icon{color:var(--vads-color-secondary-dark)}.maintenance-banner__title{font-family:var(--font-serif);margin:0 0 8px;font-size:20px}.maintenance-banner__body{padding:16px 56px;position:relative;max-width:1000px;margin:0px auto}.maintenance-banner__close{-ms-flex-item-align:start;align-self:flex-start;color:var(--vads-color-base);margin-top:8px}.maintenance-banner__close:hover{color:var(--vads-color-base)}";
const VaMaintenanceBannerStyle0 = vaMaintenanceBannerCss;

const VaMaintenanceBanner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeEvent = index.createEvent(this, "closeEvent", 7);
        this.componentLibraryAnalytics = index.createEvent(this, "component-library-analytics", 7);
        this.derivePostContent = (maintenanceStartDateTime, maintenanceEndDateTime) => {
            let milliseconds = (maintenanceEndDateTime.getTime() - maintenanceStartDateTime.getTime());
            const hours = Math.floor(milliseconds / (1000 * 60 * 60));
            const minutes = ((milliseconds / (1000 * 60 * 60)) - hours) * 60;
            const duration = `${hours > 0 ? hours + ' hours ' : ''} ${minutes > 0 ? minutes + ' minutes' : ''}`;
            if (dateUtils.isDateSameDay(maintenanceStartDateTime, maintenanceEndDateTime)) {
                return (index.h("div", null, index.h("p", null, index.h("strong", null, "Date:"), " ", dateUtils.formatDate(maintenanceStartDateTime, { dateStyle: 'full' })), index.h("p", null, index.h("strong", null, "Time:"), " ", dateUtils.formatDate(maintenanceStartDateTime, { hour: 'numeric', minute: 'numeric', timeZoneName: 'short' })), index.h("p", null, index.h("strong", null, "Duration:"), " ", duration)));
            }
            return (index.h("div", null, index.h("p", null, index.h("strong", null, "Date:"), " ", dateUtils.formatDate(maintenanceStartDateTime, { dateStyle: 'full' })), index.h("p", null, index.h("strong", null, "Time:"), " ", dateUtils.formatDate(maintenanceStartDateTime, { hour: 'numeric', minute: 'numeric', timeZoneName: 'short' })), index.h("p", null, index.h("strong", null, "Duration:"), " ", duration)));
        };
        this.onCloseAlert = () => {
            this.closeEvent.emit();
            window.localStorage.setItem('MAINTENANCE_BANNER', this.bannerId);
            this.maintenanceBannerEl.remove();
            if (!this.disableAnalytics) {
                const detail = {
                    componentName: 'va-maintenance-banner',
                    action: 'close',
                    details: {
                        header: dateUtils.isDateBefore(new Date(), new Date(this.maintenanceStartDateTime)) ? this.upcomingWarnTitle : this.maintenanceTitle,
                        upcomingWarnStartDateTime: this.upcomingWarnStartDateTime,
                        maintenanceStartDateTime: this.maintenanceStartDateTime,
                        maintenanceEndDateTime: this.maintenanceEndDateTime,
                        displayedContent: this.maintenanceBannerContent.innerText,
                    }
                };
                this.componentLibraryAnalytics.emit(detail);
            }
        };
        this.disableAnalytics = false;
        this.bannerId = undefined;
        this.maintenanceStartDateTime = undefined;
        this.maintenanceEndDateTime = undefined;
        this.maintenanceTitle = undefined;
        this.upcomingWarnStartDateTime = undefined;
        this.upcomingWarnTitle = undefined;
        this.isError = undefined;
    }
    render() {
        const { upcomingWarnStartDateTime, maintenanceEndDateTime, isError } = this, now = new Date();
        // Escape early if it's before when it should show.
        if (dateUtils.isDateBefore(now, new Date(upcomingWarnStartDateTime))) {
            return null;
        }
        // Escape early if it's after when it should show.
        if (dateUtils.isDateAfter(now, new Date(maintenanceEndDateTime))) {
            return null;
        }
        if (window.localStorage.getItem('MAINTENANCE_BANNER') !== this.bannerId) {
            const { upcomingWarnTitle, maintenanceStartDateTime, maintenanceTitle } = this;
            const isWarning = dateUtils.isDateBefore(now, new Date(maintenanceStartDateTime)) && !isError;
            const maintenanceBannerClass = index$1.classnames({
                'maintenance-banner': true,
                'maintenance-banner--warning': isWarning,
                'maintenance-banner--error': !isWarning
            });
            const bannerIconName = isError ? 'error' : 'warning';
            return (index.h(index.Host, null, index.h("div", { class: maintenanceBannerClass, ref: el => (this.maintenanceBannerEl = el) }, index.h("va-icon", { class: "maintenance-banner__icon", icon: bannerIconName, size: 4 }), index.h("div", { class: "maintenance-banner__body" }, index.h("h4", { class: "maintenance-banner__title" }, isWarning ? upcomingWarnTitle : maintenanceTitle), index.h("div", { class: "maintenance-banner__content", ref: el => (this.maintenanceBannerContent = el) }, isWarning ? (index.h("slot", { name: "warn-content" })) : (index.h("slot", { name: "maintenance-content" }))), index.h("div", { class: "maintenance-banner__derived-content" }, this.derivePostContent(new Date(maintenanceStartDateTime), new Date(maintenanceEndDateTime)))), index.h("button", { "aria-label": "Close notification", class: "maintenance-banner__close", onClick: this.onCloseAlert, type: "button" }, index.h("va-icon", { icon: "cancel", size: 4 })))));
        }
        else {
            return null;
        }
    }
};
VaMaintenanceBanner.style = VaMaintenanceBannerStyle0;

exports.va_maintenance_banner = VaMaintenanceBanner;
