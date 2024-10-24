import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';

const vaTelephoneCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}a{text-decoration:none;color:var(--vads-color-link);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:color, background-color, border-color;transition-property:color, background-color, border-color}a:hover{background-color:rgba(0, 0, 0, 0.05);color:inherit}a:visited{color:var(--vads-color-link-visited)}.sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}:host{font-size:1.06rem}a{white-space:nowrap}a,a:hover{text-decoration:underline}";
const VaTelephoneStyle0 = vaTelephoneCss;

const VaTelephone = /*@__PURE__*/ proxyCustomElement(class VaTelephone extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        this.contact = undefined;
        this.extension = undefined;
        this.notClickable = false;
        this.international = false;
        this.tty = false;
        this.sms = false;
        this.vanity = undefined;
        this.messageAriaDescribedby = undefined;
    }
    static cleanContact(contact) {
        return (contact || '').replace(/[^\d]/g, '');
    }
    static splitContact(contact) {
        const cleanedContact = VaTelephone.cleanContact(contact);
        if (cleanedContact.length === 10) {
            // const regex = /(?<area>\d{3})(?<local>\d{3})(?<last4>\d{4})/g;
            // const { area, local, last4 } = regex.exec(contact).groups;
            // *******
            // Many Veterans are still using older browsers that do not support regexp
            // named capture groups (e.g. Safari 11.0); see
            // vets-design-system-documentation #1834
            const regex = /^(\d{3})(\d{3})(\d{4})$/g;
            const result = [...regex.exec(cleanedContact)];
            return result.length === 4 ? result.slice(-3) : [cleanedContact];
        }
        return [cleanedContact];
    }
    /**
     * Format telephone number for display.
     * `international` and `extension` args only work on 10 digit contacts
     */
    static formatPhoneNumber(num, extension, international = false, vanity, tty = false) {
        const splitNumber = VaTelephone.splitContact(num);
        let formattedNum = splitNumber.join('');
        if (formattedNum.length === 10) {
            const [area, local, last4] = splitNumber;
            formattedNum = `${area}-${local}-${last4}`;
            if (international)
                formattedNum = `+1-${formattedNum}`;
            if (extension)
                formattedNum = `${formattedNum}, ext. ${extension}`;
            if (vanity) {
                formattedNum = `${area}-${local}-${vanity} (${last4})`;
            }
        }
        if (tty) {
            formattedNum = `TTY: ${formattedNum}`;
        }
        return formattedNum;
    }
    static createHref(contact, extension, sms) {
        const cleanedContact = VaTelephone.cleanContact(contact);
        const isN11 = cleanedContact.length === 3;
        // extension format ";ext=" from RFC3966 https://tools.ietf.org/html/rfc3966#page-5
        // but it seems that using a comma to pause for 2 seconds might be a better
        // solution - see https://dsva.slack.com/archives/C8E985R32/p1589814301103200
        let href = null;
        if (sms) {
            href = `sms:${cleanedContact}`;
        }
        else if (isN11) {
            href = `tel:${cleanedContact}`;
        }
        else {
            href = `tel:+1${cleanedContact}`;
        }
        return `${href}${extension ? `,${extension}` : ''}`;
    }
    handleClick() {
        this.componentLibraryAnalytics.emit({
            componentName: 'va-telephone',
            action: 'click',
            details: {
                contact: this.contact,
                extension: this.extension,
            },
        });
    }
    render() {
        const { contact, extension, notClickable, international, tty, vanity, sms, messageAriaDescribedby } = this;
        const formattedNumber = VaTelephone.formatPhoneNumber(contact, extension, international, vanity, tty);
        // Null so we don't add the attribute if we have an empty string
        const ariaDescribedbyIds = messageAriaDescribedby ? 'number-description' : null;
        return (h(Host, { key: 'c4850a9fc90f007fc8712331913edd0d102dcf91' }, notClickable ? (h(Fragment, null, h("span", { "aria-hidden": "true", "aria-describedby": ariaDescribedbyIds }, formattedNumber))) : (h("a", { "aria-describedby": ariaDescribedbyIds, href: VaTelephone.createHref(contact, extension, sms), onClick: this.handleClick.bind(this) }, formattedNumber)), messageAriaDescribedby && (h("span", { key: '6736d7ff067a3e2b0f050c0ffa75c11c36b60217', id: "number-description", class: "sr-only" }, messageAriaDescribedby))));
    }
    static get style() { return VaTelephoneStyle0; }
}, [1, "va-telephone", {
        "contact": [1],
        "extension": [1],
        "notClickable": [4, "not-clickable"],
        "international": [4],
        "tty": [4],
        "sms": [4],
        "vanity": [1],
        "messageAriaDescribedby": [1, "message-aria-describedby"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-telephone"];
    components.forEach(tagName => { switch (tagName) {
        case "va-telephone":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaTelephone);
            }
            break;
    } });
}

export { VaTelephone as V, defineCustomElement as d };
