import { Host, h, } from "@stencil/core";
const DISMISSED_BANNERS_KEY = 'DISMISSED_BANNERS';
/**
 * Reset the banners in storage by opening Developer Tools in the browser
 * and then clicking on the Application Tab. Under Storage you will see
 * both Local and Session Storage check each Storage to see if a
 * DISMISSED_BANNERS Key exists. If it does right click and delete it and
 * refresh your page to see the banners again.
 */
/**
 * @componentName Banner
 * @maturityCategory use
 * @maturityLevel deployed
 */
export class VaBanner {
    constructor() {
        /* eslint-disable-next-line i18next/no-literal-string */
        this.prepareBannerID = () => `${this.headline}:${this.el.innerHTML}`;
        this.dismiss = () => {
            // Derive the current banner ID.
            const currentBannerID = this.prepareBannerID();
            // Escape early if the banner is already dismissed.
            if (this.dismissedBanners.includes(currentBannerID)) {
                return;
            }
            // Add the banner ID to the list of dismissed banners. If showClose enabled
            if (this.showClose) {
                // Derive the updated dismissed banners.
                const updatedDismissedBanners = [
                    ...this.dismissedBanners,
                    currentBannerID,
                ];
                //   Set storage type
                const storageType = this.windowSession
                    ? window.sessionStorage
                    : window.localStorage;
                // Set banner dismissed in storage
                storageType.setItem(DISMISSED_BANNERS_KEY, JSON.stringify(updatedDismissedBanners));
                // Update dismissedBanners in state.
                this.dismissedBanners = updatedDismissedBanners;
                // Track the dismiss event in Google Analytics
                if (!this.disableAnalytics) {
                    const detail = {
                        componentName: 'va-banner',
                        action: 'close',
                        details: {
                            headline: this.headline,
                        },
                    };
                    this.componentLibraryAnalytics.emit(detail);
                }
            }
        };
        this.disableAnalytics = false;
        this.showClose = false;
        this.headline = undefined;
        this.type = 'info';
        this.visible = true;
        this.windowSession = false;
        this.dataLabel = undefined;
        this.dismissedBanners = [];
    }
    // Called once just after the component is first connected to the DOM
    // Fixes rerender issues that could be potentially created by calling dismissedBanners multiple times
    componentWillLoad() {
        // Only fire if showClose enabled
        if (this.showClose) {
            // Set the storage type
            const storageType = this.windowSession
                ? window.sessionStorage
                : window.localStorage;
            // Derive dismissed banners from storage.
            const dismissedBannersString = storageType.getItem(DISMISSED_BANNERS_KEY);
            this.dismissedBanners = dismissedBannersString
                ? JSON.parse(dismissedBannersString)
                : [];
        }
    }
    render() {
        var _a;
        // Derive if the banner is dismissed.
        const isBannerDismissed = this.showClose && ((_a = this.dismissedBanners) === null || _a === void 0 ? void 0 : _a.includes(this.prepareBannerID()));
        // Escape early if the banner isn't visible or is dismissed.
        if (!this.visible || isBannerDismissed) {
            return null;
        }
        // Derive onCloseAlert depending if the close icon is shown.
        const onCloseAlert = this.showClose ? this.dismiss : undefined;
        // Derive the banner Aria label i.e. Info Banner
        const bannerAriaLabel = this.dataLabel ||
            // eslint-disable-next-line i18next/no-literal-string
            `${this.type[0].toUpperCase()}${this.type.slice(1)} banner`;
        return (h(Host, null, h("va-alert", { visible: true, "full-width": true, closeable: this.showClose, onCloseEvent: onCloseAlert, status: this.type, "data-role": "region", "data-label": bannerAriaLabel }, h("h3", { slot: "headline" }, this.headline), h("slot", null))));
    }
    static get is() { return "va-banner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-banner.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-banner.css"]
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
                    "text": "If true, doesn't fire the CustomEvent which can be used for analytics tracking."
                },
                "attribute": "disable-analytics",
                "reflect": false,
                "defaultValue": "false"
            },
            "showClose": {
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
                    "text": "Enable the close functionality. The banner will be closed until storage is cleared."
                },
                "attribute": "show-close",
                "reflect": false,
                "defaultValue": "false"
            },
            "headline": {
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
                    "text": "The headline of the banner."
                },
                "attribute": "headline",
                "reflect": false
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'info' | 'warning' | 'error' | 'success' | 'continue'",
                    "resolved": "\"continue\" | \"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The type of the banner. This affects both the icon of the AlertBox and border color / background."
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'info'"
            },
            "visible": {
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
                    "text": "A boolean that when false makes it so that the banner does not render."
                },
                "attribute": "visible",
                "reflect": false,
                "defaultValue": "true"
            },
            "windowSession": {
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
                    "text": "Enable sessionStorage for the Banner otherwise storage\nif showClose is enabled will default to localStorage"
                },
                "attribute": "window-session",
                "reflect": false,
                "defaultValue": "false"
            },
            "dataLabel": {
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
                    "text": "Aria Label for the \"region\" of the nested va-alert."
                },
                "attribute": "data-label",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "dismissedBanners": {}
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
                    "text": "The event used to track usage of the component. This is emitted when an\nanchor link or the dismiss icon is clicked and disableAnalytics is not true."
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
