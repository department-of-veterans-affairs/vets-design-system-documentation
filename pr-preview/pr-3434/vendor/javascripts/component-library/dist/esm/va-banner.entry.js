import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-f0e1e12e.js';

const vaBannerCss = "";
const VaBannerStyle0 = vaBannerCss;

const DISMISSED_BANNERS_KEY = 'DISMISSED_BANNERS';
const VaBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
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
    get el() { return getElement(this); }
};
VaBanner.style = VaBannerStyle0;

export { VaBanner as va_banner };
