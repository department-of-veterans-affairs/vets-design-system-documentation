'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');

const vaPromoBannerCss = "p,a,ol,ul,li,dl,dt,dd,form,label,button{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5}button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}:host{z-index:1;position:fixed;bottom:0;left:0;width:100%;background-color:var(--vads-color-base-lightest);color:var(--vads-color-link);font-weight:700}.va-banner-body{max-width:62.5rem;margin:0 auto;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.va-promo-banner__icon{background-color:var(--vads-color-white);border-radius:50%;height:42px;width:42px;margin-left:0.5rem;margin-right:0.8rem;margin-top:0.8rem;margin-bottom:0.8rem;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:4px}@media (max-width: 767px){.va-promo-banner__icon{display:none}}.va-banner-content-link{padding:0.5rem;line-height:1.375rem;text-decoration:none;color:var(--vads-color-link);-ms-flex-positive:2;flex-grow:2;border-right:1px solid var(--vads-color-base-lighter)}.va-banner-content-link:hover{text-decoration:underline}button{background:none;background-color:transparent;color:var(--vads-color-link);border:none;font-size:1.25rem;padding:0 1rem}button:hover{cursor:pointer}@media screen and (min-width: 768px){.va-banner-body>i{display:block}.va-banner-content-link{border:none}}";
const VaPromoBannerStyle0 = vaPromoBannerCss;

const DISMISSED_PROMO_BANNERS_LOCAL_STORAGE_NAME = 'DISMISSED_PROMO_BANNERS';
const VaPromoBanner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeEvent = index.createEvent(this, "closeEvent", 7);
        this.componentLibraryAnalytics = index.createEvent(this, "component-library-analytics", 7);
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
        return (index.h(index.Host, null, index.h("div", { class: "va-banner-body" }, index.h("va-icon", { class: "va-promo-banner__icon", icon: typeIconName[this.type], size: 4 }), index.h("a", { class: "va-banner-content-link", href: this.href, onClick: () => this.handleLinkClick() }, index.h("slot", null), " ", index.h("va-icon", { icon: "chevron_right", size: 3 })), index.h("button", { type: "button", "aria-label": "Dismiss this promo banner", onClick: () => this.closeHandler() }, index.h("va-icon", { icon: "cancel", size: 3 })))));
    }
    get el() { return index.getElement(this); }
};
VaPromoBanner.style = VaPromoBannerStyle0;

exports.va_promo_banner = VaPromoBanner;
