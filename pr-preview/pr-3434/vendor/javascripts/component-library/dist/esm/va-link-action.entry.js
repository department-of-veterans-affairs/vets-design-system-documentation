import { r as registerInstance, c as createEvent, h, H as Host } from './index-f0e1e12e.js';
import { c as classnames } from './index-6d7ecf98.js';

const vaLinkActionCss = "/* From the USWDS styles: */\n/*   https://github.com/uswds/uswds/blob/3dc296ec56cd621fe52d918701fd94621d96a198/src/stylesheets/core/mixins/_focus.scss#L12-L13 */\nbutton:not([disabled]):focus,\nselect:not([disabled]):focus,\na:not([disabled]):focus,\nh1:focus,\ninput:not([disabled]):focus,\ntextarea:not([disabled]):focus,\n#form-question\n[role='option']:focus {\n  outline: 2px solid var(--vads-color-action-focus-on-light);\n  outline-offset: 2px;\n}\n\n\na {\n  text-decoration: none;\n  color: var(--vads-color-link);\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-in-out;\n  transition-timing-function: ease-in-out;\n  -webkit-transition-property: color, background-color, border-color;\n  transition-property: color, background-color, border-color;\n}\n\na:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n  color: inherit;\n}\n\na:visited {\n  color: var(--vads-color-link-visited);\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  -webkit-clip-path: inset(50%);\n  clip-path: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute !important;\n  width: 1px;\n  /*  Workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=1241631 */\n  word-wrap: normal !important;\n}\n\n\n:host {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n:host a {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  cursor: pointer;\n  text-decoration: underline;\n  font-weight: 700;\n  font-size: 1.06rem;\n  padding: 0.5rem 0;\n  &:active {\n    outline: 2px solid var(--vads-color-action-focus-on-light);\n    outline-offset: 2px;\n  }\n}\n\n:host a.va-link--primary,\n:host a.va-link--secondary {\n  &:hover, &:active {\n    color: var(--vads-color-link) !important;\n  }\n}\n\n:host a.va-link--reverse {\n  color: var(--vads-color-white);\n\n  &:hover, &:active {\n    color: var(--vads-color-action-focus-on-light);\n    background-color: transparent;\n  }\n}\n\n:host a.va-link--reverse va-icon {\n  &:hover, &:active {\n    background-color: var(--vads-color-action-focus-on-light);\n  }\n}\n\n.link-icon--left {\n  margin-right: 8px;\n  vertical-align: baseline;\n  position: relative;\n}\n\n.link-icon {\n  border-radius: 50%;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  color: white;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-in-out;\n  transition-timing-function: ease-in-out;\n  -webkit-transition-property: color, background-color, border-color;\n  transition-property: color, background-color, border-color;\n}\n\n.va-link--primary {\n  va-icon {\n    background-color: var(--vads-color-success-dark);\n  }\n}\n\n.va-link--secondary {\n  va-icon {\n    background-color: var(--vads-color-primary);\n  }\n}\n\n.link-icon--reverse {\n  background-color: var(--vads-color-white);\n  color: var(--vads-color-black);\n}\n\n:host a.va-link--reverse:hover va-icon,\n:host a.va-link--reverse:active va-icon {\n  background-color: var(--vads-color-action-focus-on-light) !important;\n}\n\n.link-text {\n  display: inline-block;\n  vertical-align: top;\n  max-width: calc(100% - 24px);\n  white-space: pre-wrap;\n}";
const VaLinkActionStyle0 = vaLinkActionCss;

const VaLinkAction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        /** @ts-ignore */
        this.handleClick = (e) => {
            if (!this.disableAnalytics) {
                const detail = {
                    componentName: 'va-link-action',
                    action: 'click',
                    details: {
                        label: this.text,
                        destination: this.href,
                        origin: window.location.href,
                    },
                };
                this.componentLibraryAnalytics.emit(detail);
            }
        };
        this.disableAnalytics = false;
        this.href = undefined;
        this.text = undefined;
        this.messageAriaDescribedby = undefined;
        this.type = 'primary';
        this.label = undefined;
        this.isSingleLine = true;
    }
    componentDidLoad() {
        this.checkTextLines();
    }
    checkTextLines() {
        if (this.linkRef) {
            const computedStyle = getComputedStyle(this.linkRef);
            const lineHeight = parseFloat(computedStyle.lineHeight);
            const height = this.linkRef.clientHeight;
            this.isSingleLine = height <= lineHeight;
        }
    }
    render() {
        const { handleClick, href, text, messageAriaDescribedby, type, label } = this;
        const linkClass = classnames({
            'va-link--reverse': type === 'reverse',
            'va-link--primary': type === 'primary',
            'va-link--secondary': type === 'secondary',
        });
        // eslint-disable-next-line i18next/no-literal-string
        const iconClass = classnames('link-icon--left', 'link-icon', {
            'link-icon--reverse': type === 'reverse',
        });
        const ariaDescribedbyIds = messageAriaDescribedby
            ? 'link-description'
            : null;
        return (h(Host, { key: 'eb517903e355dac7615651174417dac4b401b8f5' }, h("a", { key: 'eb7780b0ce6712102ce401cc778e193811614962', href: href, class: linkClass, "aria-label": label, "aria-describedby": ariaDescribedbyIds, onClick: handleClick, ref: el => (this.linkRef = el) }, h("va-icon", { key: '5d23a38a3c9e7e9af5e1022a26c490507499282d', class: iconClass, icon: "chevron_right", size: 3 }), h("span", { key: 'ba6e5703344849b7bd469b59140ca9e323be3191', class: "link-text" }, text)), messageAriaDescribedby && (h("span", { key: '63e028a4a35003ea50f4de60cbf98d752c5e0327', id: "link-description", class: "sr-only" }, messageAriaDescribedby))));
    }
    static get watchers() { return {
        "text": ["checkTextLines"]
    }; }
};
VaLinkAction.style = VaLinkActionStyle0;

export { VaLinkAction as va_link_action };
