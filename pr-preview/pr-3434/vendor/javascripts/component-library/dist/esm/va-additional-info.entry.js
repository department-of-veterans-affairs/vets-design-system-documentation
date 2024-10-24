import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-f0e1e12e.js';
import { c as classnames } from './index-6d7ecf98.js';

const vaAdditionalInfoCss = "p,a,ol,ul,li,dl,dt,dd,form,label,button{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5}button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}a{text-decoration:none;color:var(--vads-color-link);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:color, background-color, border-color;transition-property:color, background-color, border-color}a:hover{background-color:rgba(0, 0, 0, 0.05);color:inherit}a:visited{color:var(--vads-color-link-visited)}:host{display:block}:host(:not([disable-border])) a[aria-expanded='true']~#info,:host([disable-border='false']) a[aria-expanded='true']~#info{padding-left:calc(20px - 7px);border-left:7px solid transparent;border-left-color:var(--vads-color-primary-alt-darkest)}#info{overflow:hidden}#info.closed{visibility:hidden}a{-ms-flex-align:start;align-items:flex-start;cursor:pointer;display:-ms-flexbox;display:flex}.additional-info-title{border-bottom-right-radius:1px;border-bottom:2px dotted var(--vads-color-primary-alt-darkest);color:var(--vads-color-base-darker);cursor:pointer}.closed{opacity:0;max-height:0}.open{height:auto;opacity:1;-webkit-transition:max-height 700ms 0ms, opacity 500ms 200ms, visibility 500ms 200ms;transition:max-height 700ms 0ms, opacity 500ms 200ms, visibility 500ms 200ms;max-height:var(--calc-max-height);margin-bottom:16px;margin-top:16px}.additional-info-icon{display:inline-block;color:var(--vads-color-primary-alt-darkest);font-size:16px;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transition:-webkit-transform 0.15s linear;transition:-webkit-transform 0.15s linear;transition:transform 0.15s linear;transition:transform 0.15s linear, -webkit-transform 0.15s linear;line-height:1;vertical-align:bottom}a[aria-expanded='true'] .additional-info-icon{-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-transition:-webkit-transform 0.15s linear;transition:-webkit-transform 0.15s linear;transition:transform 0.15s linear;transition:transform 0.15s linear, -webkit-transform 0.15s linear}::slotted(*){margin-bottom:0 !important;margin-top:0 !important}";
const VaAdditionalInfoStyle0 = vaAdditionalInfoCss;

const VaAdditionalInfo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        this.open = undefined;
        this.trigger = undefined;
        this.disableAnalytics = false;
        this.disableBorder = false;
    }
    handleResize() {
        this.updateInfoMaxHeight();
    }
    toggleOpen() {
        // Conditionally track the event.
        if (!this.disableAnalytics) {
            this.componentLibraryAnalytics.emit({
                componentName: 'va-additional-info',
                action: !this.open ? 'expand' : 'collapse',
                details: {
                    triggerText: this.trigger,
                },
            });
        }
        this.open = !this.open;
    }
    handleKeydown(event) {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.toggleOpen();
        }
    }
    // Ensures that the CSS animation is consistent and uses the correct max-height for its content
    updateInfoMaxHeight() {
        const infoElm = this.el.shadowRoot.getElementById('info');
        /* eslint-disable i18next/no-literal-string */
        const contentHeight = infoElm.scrollHeight + 'px';
        // the additional 2em is #info margin-top and margin-bottom when open
        infoElm.style.setProperty('--calc-max-height', 'calc(' + contentHeight + ' + 1.125rem)');
        /* eslint-enable i18next/no-literal-string */
    }
    componentDidRender() {
        this.updateInfoMaxHeight();
    }
    render() {
        const infoClass = classnames({
            'open': this.open,
            'closed': !this.open
        });
        return (h(Host, { key: '7ecc3bd7445b911ef0e130dfd6ae48f911e707d0' }, h("a", { key: '651409ca62ed7ab5c3c7125d520c7d0004e377e0', role: "button", "aria-controls": "info", "aria-expanded": this.open ? 'true' : 'false', tabIndex: 0, onClick: this.toggleOpen.bind(this), onKeyDown: this.handleKeydown.bind(this) }, h("div", { key: '151a2e757ff3042df48516ee7501916c811d757c' }, h("span", { key: '337dc1b7c1f3a1edec24fe7e16caa6151db5f866', class: "additional-info-title" }, this.trigger), h("va-icon", { key: 'fce25a84051219134fb592b6c9577cfcb4709882', class: "additional-info-icon", icon: "chevron_right", size: 3 }))), h("div", { key: '92630d5719c2fcbffa7faf813c70894e7dffd76a', id: "info", class: infoClass }, h("slot", { key: 'a12bc2fa98fab92b4983e41b464d25ef40d33242' }))));
    }
    get el() { return getElement(this); }
};
VaAdditionalInfo.style = VaAdditionalInfoStyle0;

export { VaAdditionalInfo as va_additional_info };
