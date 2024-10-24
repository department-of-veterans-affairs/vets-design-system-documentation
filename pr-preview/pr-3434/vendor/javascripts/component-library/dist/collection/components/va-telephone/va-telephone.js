import { Fragment, h, Host, } from "@stencil/core";
/**
 * @componentName Telephone
 * @maturityCategory use
 * @maturityLevel best_practice
 */
export class VaTelephone {
    constructor() {
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
    static get is() { return "va-telephone"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-telephone.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-telephone.css"]
        };
    }
    static get properties() {
        return {
            "contact": {
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
                    "text": "Numeric string representing the contact number. Typical length is 3 or 10 digits - SMS short codes will be 5 or 6 digits."
                },
                "attribute": "contact",
                "reflect": false
            },
            "extension": {
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
                    "text": "Optional numeric string phone number extension"
                },
                "attribute": "extension",
                "reflect": false
            },
            "notClickable": {
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
                    "text": "Indicates if the phone number can be clicked or not"
                },
                "attribute": "not-clickable",
                "reflect": false,
                "defaultValue": "false"
            },
            "international": {
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
                    "text": "Indicates if this is a number meant to be called from outside the US.\nPrepends a \"+1\" to the formatted number."
                },
                "attribute": "international",
                "reflect": false,
                "defaultValue": "false"
            },
            "tty": {
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
                    "text": "Indicates if this is a number meant to be called\nfrom a teletypewriter for deaf users."
                },
                "attribute": "tty",
                "reflect": false,
                "defaultValue": "false"
            },
            "sms": {
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
                    "text": "Indicates if this is a number meant to be used\nto text."
                },
                "attribute": "sms",
                "reflect": false,
                "defaultValue": "false"
            },
            "vanity": {
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
                    "text": "Optional vanity phone number.\nReplaces the last 4 digits with the vanity text input"
                },
                "attribute": "vanity",
                "reflect": false
            },
            "messageAriaDescribedby": {
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
                    "text": "An optional message that will be read by screen readers when the phone number is focused."
                },
                "attribute": "message-aria-describedby",
                "reflect": false
            }
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
                    "text": "The event used to track usage of the component. This is emitted when\nclicking on an anchor link."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
