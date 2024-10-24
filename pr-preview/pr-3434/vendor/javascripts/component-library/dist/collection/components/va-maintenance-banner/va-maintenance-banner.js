import { Host, h } from "@stencil/core";
import classNames from "classnames";
import { formatDate, isDateAfter, isDateBefore, isDateSameDay, } from "../../utils/date-utils";
/**
 * @componentName Banner - Maintenance
 * @maturityCategory caution
 * @maturityLevel available
 */
export class VaMaintenanceBanner {
    constructor() {
        this.derivePostContent = (maintenanceStartDateTime, maintenanceEndDateTime) => {
            let milliseconds = (maintenanceEndDateTime.getTime() - maintenanceStartDateTime.getTime());
            const hours = Math.floor(milliseconds / (1000 * 60 * 60));
            const minutes = ((milliseconds / (1000 * 60 * 60)) - hours) * 60;
            const duration = `${hours > 0 ? hours + ' hours ' : ''} ${minutes > 0 ? minutes + ' minutes' : ''}`;
            if (isDateSameDay(maintenanceStartDateTime, maintenanceEndDateTime)) {
                return (h("div", null, h("p", null, h("strong", null, "Date:"), " ", formatDate(maintenanceStartDateTime, { dateStyle: 'full' })), h("p", null, h("strong", null, "Time:"), " ", formatDate(maintenanceStartDateTime, { hour: 'numeric', minute: 'numeric', timeZoneName: 'short' })), h("p", null, h("strong", null, "Duration:"), " ", duration)));
            }
            return (h("div", null, h("p", null, h("strong", null, "Date:"), " ", formatDate(maintenanceStartDateTime, { dateStyle: 'full' })), h("p", null, h("strong", null, "Time:"), " ", formatDate(maintenanceStartDateTime, { hour: 'numeric', minute: 'numeric', timeZoneName: 'short' })), h("p", null, h("strong", null, "Duration:"), " ", duration)));
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
                        header: isDateBefore(new Date(), new Date(this.maintenanceStartDateTime)) ? this.upcomingWarnTitle : this.maintenanceTitle,
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
        if (isDateBefore(now, new Date(upcomingWarnStartDateTime))) {
            return null;
        }
        // Escape early if it's after when it should show.
        if (isDateAfter(now, new Date(maintenanceEndDateTime))) {
            return null;
        }
        if (window.localStorage.getItem('MAINTENANCE_BANNER') !== this.bannerId) {
            const { upcomingWarnTitle, maintenanceStartDateTime, maintenanceTitle } = this;
            const isWarning = isDateBefore(now, new Date(maintenanceStartDateTime)) && !isError;
            const maintenanceBannerClass = classNames({
                'maintenance-banner': true,
                'maintenance-banner--warning': isWarning,
                'maintenance-banner--error': !isWarning
            });
            const bannerIconName = isError ? 'error' : 'warning';
            return (h(Host, null, h("div", { class: maintenanceBannerClass, ref: el => (this.maintenanceBannerEl = el) }, h("va-icon", { class: "maintenance-banner__icon", icon: bannerIconName, size: 4 }), h("div", { class: "maintenance-banner__body" }, h("h4", { class: "maintenance-banner__title" }, isWarning ? upcomingWarnTitle : maintenanceTitle), h("div", { class: "maintenance-banner__content", ref: el => (this.maintenanceBannerContent = el) }, isWarning ? (h("slot", { name: "warn-content" })) : (h("slot", { name: "maintenance-content" }))), h("div", { class: "maintenance-banner__derived-content" }, this.derivePostContent(new Date(maintenanceStartDateTime), new Date(maintenanceEndDateTime)))), h("button", { "aria-label": "Close notification", class: "maintenance-banner__close", onClick: this.onCloseAlert, type: "button" }, h("va-icon", { icon: "cancel", size: 4 })))));
        }
        else {
            return null;
        }
    }
    static get is() { return "va-maintenance-banner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-maintenance-banner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-maintenance-banner.css"]
        };
    }
    static get properties() {
        return {
            "disableAnalytics": {
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
                    "text": "Whether or not an analytics event will be fired."
                },
                "attribute": "disable-analytics",
                "reflect": false,
                "defaultValue": "false"
            },
            "bannerId": {
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
                    "text": "A unique ID that will be used for conditionally rendering the banner based on if the user has dismissed it already."
                },
                "attribute": "banner-id",
                "reflect": false
            },
            "maintenanceStartDateTime": {
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
                    "text": "The Date/Time of when the maintenance is scheduled to begin."
                },
                "attribute": "maintenance-start-date-time",
                "reflect": false
            },
            "maintenanceEndDateTime": {
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
                    "text": "The Date/Time of when the maintenance is scheduled to end."
                },
                "attribute": "maintenance-end-date-time",
                "reflect": false
            },
            "maintenanceTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The title of the banner shown during active maintenance."
                },
                "attribute": "maintenance-title",
                "reflect": false
            },
            "upcomingWarnStartDateTime": {
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
                    "text": "The Date/Time of when to be begin warning users of upcoming site maintenance."
                },
                "attribute": "upcoming-warn-start-date-time",
                "reflect": false
            },
            "upcomingWarnTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The title of the banner shown for upcoming site maintenance."
                },
                "attribute": "upcoming-warn-title",
                "reflect": false
            },
            "isError": {
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
                    "text": "Override logic for whether to show error or warning"
                },
                "attribute": "is-error",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "closeEvent",
                "name": "closeEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires when the component is closed by clicking on the close icon."
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
                    "text": "The event used to track usage of the component. This is emitted when the\ncomponent renders and enableAnalytics is true."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
