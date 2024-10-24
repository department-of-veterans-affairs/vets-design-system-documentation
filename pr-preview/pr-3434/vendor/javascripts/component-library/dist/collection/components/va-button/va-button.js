import { Host, h, } from "@stencil/core";
import classnames from "classnames";
/**
 * @componentName Button
 * @nativeHandler onClick
 * @maturityCategory caution
 * @maturityLevel candidate
 */
export class VaButton {
    constructor() {
        this.handleClick = () => {
            if (!this.disableAnalytics) {
                const detail = {
                    componentName: 'va-button',
                    action: 'click',
                    details: {
                        type: this.secondary ? 'secondary' : 'primary',
                        label: this.getButtonText(),
                    },
                };
                this.componentLibraryAnalytics.emit(detail);
            }
        };
        this.getButtonText = () => {
            if (this.continue)
                return 'Continue';
            if (this.back)
                return 'Back';
            return this.text;
        };
        this.back = false;
        this.big = false;
        this.continue = false;
        this.disableAnalytics = false;
        this.disabled = false;
        this.label = undefined;
        this.primaryAlternate = false;
        this.secondary = false;
        this.submit = undefined;
        this.text = undefined;
        this.messageAriaDescribedby = undefined;
    }
    handleSubmit() {
        if (this.submit === undefined) {
            return;
        }
        // eslint-disable-next-line i18next/no-literal-string
        const theForm = this.el.closest('form');
        if (!theForm) {
            return;
        }
        const submitEvent = new CustomEvent('submit', {
            bubbles: true,
            cancelable: true,
            composed: true,
        });
        if (this.submit !== 'skip') {
            theForm.dispatchEvent(submitEvent);
        }
        if (this.submit !== 'prevent') {
            theForm.submit();
        }
    }
    /**
     * This workaround allows us to use disabled for styling and to prevent the click event from firing while improving
     * the button's accessibility by allowing it to be focusable and through the use of aria-disabled.
     *
     * Using a click handler on the button with this same check for disabled results in the event bubbling.
     */
    handleClickOverride(e) {
        if (this.disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.handleClick();
        this.handleSubmit();
    }
    render() {
        const { back, continue: _continue, disabled, getButtonText, label, submit, secondary, primaryAlternate, big, messageAriaDescribedby, } = this;
        const ariaDescribedbyIds = `${messageAriaDescribedby ? 'button-description' : ''}`.trim() || null;
        const ariaDisabled = disabled ? 'true' : undefined;
        const buttonText = getButtonText();
        const type = submit !== undefined ? 'submit' : 'button';
        const buttonClass = classnames({
            'usa-button': true,
            'usa-button--big': big,
            'usa-button--outline': back || secondary,
            'va-button-primary--alternate': primaryAlternate,
        });
        return (h(Host, { key: '62e45ff82229c98a3917c0fbcc6280c22da9a37b' }, h("button", { key: 'aff1f9a0ce358f582c39471a014519e7b6080c94', class: buttonClass, "aria-disabled": ariaDisabled, "aria-label": label, "aria-describedby": ariaDescribedbyIds, type: type, part: "button" }, back && !_continue && h("va-icon", { key: 'fc8c8d493fe967074b2f905ee4a38912f7b5384c', icon: "navigate_far_before" }), buttonText, _continue && !back && h("va-icon", { key: 'f1c20f165d2106d643c32259e8ecb56889bb05df', icon: "navigate_far_next" })), messageAriaDescribedby && (h("span", { key: 'fda5cbe483f17b8e2fb1921b6b7a55ffed46e778', id: "button-description", class: "usa-sr-only" }, messageAriaDescribedby))));
    }
    static get is() { return "va-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-button.css"]
        };
    }
    static get properties() {
        return {
            "back": {
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
                    "text": "If `true`, the button will use `Back` as its text and an icon to represent going back in form flows."
                },
                "attribute": "back",
                "reflect": true,
                "defaultValue": "false"
            },
            "big": {
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
                    "text": "If `true`, the button will use the big variant."
                },
                "attribute": "big",
                "reflect": true,
                "defaultValue": "false"
            },
            "continue": {
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
                    "text": "If `true`, the button will use `Continue` as its text and an icon to represent proceeding forward in form flows."
                },
                "attribute": "continue",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "If `true`, the component-library-analytics event is disabled."
                },
                "attribute": "disable-analytics",
                "reflect": false,
                "defaultValue": "false"
            },
            "disabled": {
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
                    "text": "If `true`, the click event will not fire."
                },
                "attribute": "disabled",
                "reflect": true,
                "defaultValue": "false"
            },
            "label": {
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
                    "text": "The aria-label of the component."
                },
                "attribute": "label",
                "reflect": false
            },
            "primaryAlternate": {
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
                    "text": "If `true`, the button will use the primary alternate variant."
                },
                "attribute": "primary-alternate",
                "reflect": false,
                "defaultValue": "false"
            },
            "secondary": {
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
                    "text": "If `true`, the button will use the secondary variant."
                },
                "attribute": "secondary",
                "reflect": true,
                "defaultValue": "false"
            },
            "submit": {
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
                    "text": "Having this attribute present will set the type of this button as 'submit'.\nThe va-button element must be within a `form` element for this functionality to take place\nA value of: `prevent` will trigger the onsubmit callback on the form, but won't submit the form;\n`skip` will submit the form but not trigger the onsubmit callback;\nAll other values will trigger the onsubmit and onclick callbacks, then submit the form; in that order."
                },
                "attribute": "submit",
                "reflect": false
            },
            "text": {
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
                    "text": "The text displayed on the button. If `continue` or `back` is true, the value of text is ignored."
                },
                "attribute": "text",
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
                    "text": "An optional message that will be read by screen readers when the input is focused."
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
                    "text": "The event used to track usage of the component."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleClickOverride",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
