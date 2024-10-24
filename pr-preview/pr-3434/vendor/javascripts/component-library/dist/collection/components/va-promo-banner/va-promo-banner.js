import { Host, h, } from "@stencil/core";
const DISMISSED_PROMO_BANNERS_LOCAL_STORAGE_NAME = 'DISMISSED_PROMO_BANNERS';
/**
 * Reset the banner in storage by opening Developer Tools in the browser and
 * then clicking on the Application Tab. Under Storage you will see Local
 * Storage and check the Storage to see if a DISMISSED_PROMO_BANNERS Key exists.
 * If it does right click and delete it and refresh your page to see the banner
 * again. Alternatively you can change the id on the component since the new id
 * would not match the id in storage.
 */
/**
 * @componentName Banner - Promo
 * @maturityCategory use
 * @maturityLevel deployed
 * @guidanceHref banner/promo
 */
export class VaPromoBanner {
    constructor() {
        this.href = undefined;
        this.type = undefined;
        this.disableAnalytics = false;
        this.dismissedBanners = [];
    }
    closeHandler() {
        this.closeEvent.emit();
        if (this.el.id) {
            // Derive the updated dismissed banners based on the id attribute set on the component.
            const updatedDismissedBanners = [...this.dismissedBanners, this.el.id];
            // Update dismissedBanners in state.
            this.dismissedBanners = updatedDismissedBanners;
            // Add the promo banner ID to local storage.
            localStorage.setItem(DISMISSED_PROMO_BANNERS_LOCAL_STORAGE_NAME, JSON.stringify(updatedDismissedBanners));
        }
        if (!this.disableAnalytics) {
            const detail = {
                componentName: 'va-promo-banner',
                action: 'close',
                details: {
                    text: this.el.innerText,
                    type: this.type,
                },
            };
            this.componentLibraryAnalytics.emit(detail);
        }
    }
    handleLinkClick() {
        if (!this.disableAnalytics) {
            const detail = {
                componentName: 'va-promo-banner',
                action: 'linkClick',
                details: {
                    text: this.el.innerText,
                    href: this.href,
                    type: this.type,
                },
            };
            this.componentLibraryAnalytics.emit(detail);
        }
    }
    componentWillLoad() {
        // Derive dismissed banners from storage.
        const dismissedBannersString = localStorage.getItem(DISMISSED_PROMO_BANNERS_LOCAL_STORAGE_NAME);
        this.dismissedBanners = dismissedBannersString
            ? JSON.parse(dismissedBannersString)
            : [];
        // Add additional padding on component load to prevent position fixed text overlap in footer
        document.body.classList.add('va-pad-promo-banner');
    }
    render() {
        var _a;
        // Derive if the banner is dismissed based on the id attribute set on the component.
        const isBannerDismissed = (_a = this.dismissedBanners) === null || _a === void 0 ? void 0 : _a.includes(this.el.id);
        // Do not render if the promo banner is dismissed.
        if (isBannerDismissed) {
            // Remove additional padding set on the body during component load
            document.body.classList.remove('va-pad-promo-banner');
            return null;
        }
        /* eslint-disable i18next/no-literal-string */
        const typeIconName = {
            'announcement': 'campaign',
            'email-signup': 'mail',
            'news': 'info',
        };
        return (h(Host, null, h("div", { class: "va-banner-body" }, h("va-icon", { class: "va-promo-banner__icon", icon: typeIconName[this.type], size: 4 }), h("a", { class: "va-banner-content-link", href: this.href, onClick: () => this.handleLinkClick() }, h("slot", null), " ", h("va-icon", { icon: "chevron_right", size: 3 })), h("button", { type: "button", "aria-label": "Dismiss this promo banner", onClick: () => this.closeHandler() }, h("va-icon", { icon: "cancel", size: 3 })))));
    }
    static get is() { return "va-promo-banner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-promo-banner.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-promo-banner.css"]
        };
    }
    static get properties() {
        return {
            "href": {
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
                    "text": "`href` attribute for the anchor tag."
                },
                "attribute": "href",
                "reflect": false
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'announcement' | 'news' | 'email-signup'",
                    "resolved": "\"announcement\" | \"email-signup\" | \"news\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controls which icon gets used. Options are 'announcement', 'news', or 'email-signup'."
                },
                "attribute": "type",
                "reflect": false
            },
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
                    "text": "Analytics tracking function(s) will not be called"
                },
                "attribute": "disable-analytics",
                "reflect": false,
                "defaultValue": "false"
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
