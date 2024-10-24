import { forceUpdate, Host, h, Fragment, } from "@stencil/core";
import classnames from "classnames";
import { i18next } from "../..";
import { Build } from "@stencil/core";
import { getHeaderLevel } from "../../utils/utils";
if (Build.isTesting) {
    // Make i18next.t() return the key instead of the value
    i18next.init({ lng: 'cimode' });
}
/**
 * @vaChange The event emitted when the input value changes.
 * @componentName Checkbox group
 * @maturityCategory use
 * @maturityLevel deployed
 * @guidanceHref form/checkbox
 * @translations English
 * @translations Spanish
 * @translations Tagalog
 */
export class VaCheckboxGroup {
    constructor() {
        this.label = undefined;
        this.required = false;
        this.error = undefined;
        this.enableAnalytics = false;
        this.hint = undefined;
        this.labelHeaderLevel = undefined;
        this.messageAriaDescribedby = undefined;
        this.useFormsPattern = undefined;
        this.formHeadingLevel = 3;
        this.formHeading = undefined;
    }
    vaChangeHandler(event) {
        const clickedItem = event.target;
        if (this.enableAnalytics)
            this.fireAnalyticsEvent(clickedItem.label);
    }
    fireAnalyticsEvent(optionLabel) {
        this.componentLibraryAnalytics.emit({
            componentName: 'va-checkbox-group',
            action: 'change',
            details: {
                label: this.label,
                optionLabel,
                required: this.required,
            },
        });
    }
    getHeaderLevel() {
        const number = parseInt(this.labelHeaderLevel, 10);
        return number >= 1 && number <= 6 ? `h${number}` : null;
    }
    connectedCallback() {
        i18next.on('languageChanged', () => {
            forceUpdate(this.el);
        });
    }
    disconnectedCallback() {
        i18next.off('languageChanged');
    }
    render() {
        const { label, required, error, hint, messageAriaDescribedby, useFormsPattern, formHeadingLevel, formHeading, } = this;
        const HeaderLevel = this.getHeaderLevel();
        const ariaLabeledByIds = `${useFormsPattern && formHeading ? 'form-question' : ''} ${useFormsPattern ? 'form-description' : ''} ${useFormsPattern === 'multiple' ? 'header-message' : ''}`.trim() || null;
        const messageAriaDescribedbyId = messageAriaDescribedby ? 'description-message' : null;
        const legendClass = classnames({
            'usa-legend': true,
            'usa-label--error': error
        });
        const isFormsPattern = useFormsPattern === 'single' || useFormsPattern === 'multiple' ? true : false;
        let formsHeading = null;
        if (isFormsPattern) {
            const HeaderLevel = getHeaderLevel(formHeadingLevel);
            formsHeading = (h(Fragment, { key: '8fb7824ff53963fb5e6981077c784566ec17e4a8' }, formHeading &&
                h(HeaderLevel, { key: 'd475600c5d0af03c870039c04ad454772d6fd1dc', id: "form-question", part: "form-header" }, formHeading), h("div", { key: 'd3239b0c68dc526ed4163cc57955114ad5c9050d', id: "form-description" }, h("slot", { key: '85d2efbf6da0d5780d4f699c989ef3b06491450d', name: "form-description" }))));
        }
        return (h(Host, { key: '909f07618d22eee17856b3292e17897e255d256c', role: "group" }, formsHeading, h("div", { key: '1e797a55018f9d37c3fc6299c2e1889cb71ee9b8', class: "input-wrap" }, h("fieldset", { key: '679733b6b5e508ffdb8d59aaec0ea58cf297286f', class: "usa-fieldset", "aria-labelledby": ariaLabeledByIds }, h("legend", { key: 'd10173163a53ebf861332e4019815b1dcaf17e29', class: legendClass, "aria-describedby": messageAriaDescribedbyId }, HeaderLevel ? (h(HeaderLevel, { part: "header" }, label)) : (label), "\u00A0", useFormsPattern === 'multiple' && (h("span", { key: 'b8531a5bdf7a061945de0f309fad06d50deb65d6', id: "header-message", class: "usa-sr-only" }, label)), messageAriaDescribedby && (h("span", { key: 'cc927da977780eeeac8ca1d18c55ef08fbf58add', id: "description-message", class: "usa-sr-only" }, messageAriaDescribedby)), required && h("span", { key: 'e91a258fbef40861dc88371904a54cf14fdca2eb', class: "usa-label--required" }, i18next.t('required')), hint && h("div", { key: 'ab215f4ae3b96ed701a5a8eb36147fdbdf236089', class: "usa-hint" }, hint)), h("span", { key: '5e0d05ba52c2c79ec0661ebe794eff3e9e71c504', id: "checkbox-error-message", role: "alert" }, error && (h(Fragment, { key: '7cc8f93cabbe6b155bcb4aaadd5e9d8d107d6097' }, h("span", { key: '7a1dfc7275f7657b7dd44c629b63de60cb416d1f', class: "usa-sr-only" }, i18next.t('error')), h("span", { key: '425cc804f0de77ddd17bac7b648b26a2cd59cff5', class: "usa-error-message" }, error)))), h("slot", { key: '684117a5c78c0edabfbc157a2fbde51f8cd78468' })))));
    }
    static get is() { return "va-checkbox-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-checkbox-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-checkbox-group.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                    "text": "The text label for the checkbox group."
                },
                "attribute": "label",
                "reflect": false
            },
            "required": {
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
                    "text": "Whether or not this input field is required."
                },
                "attribute": "required",
                "reflect": false,
                "defaultValue": "false"
            },
            "error": {
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
                    "text": "A string with an error message."
                },
                "attribute": "error",
                "reflect": false
            },
            "enableAnalytics": {
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
                "attribute": "enable-analytics",
                "reflect": false,
                "defaultValue": "false"
            },
            "hint": {
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
                    "text": "Optional hint text."
                },
                "attribute": "hint",
                "reflect": false
            },
            "labelHeaderLevel": {
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
                    "text": "Insert a header with defined level inside the label (legend)"
                },
                "attribute": "label-header-level",
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
                    "text": "An optional message that will be read by screen readers when a checkbox is focused."
                },
                "attribute": "message-aria-describedby",
                "reflect": false
            },
            "useFormsPattern": {
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
                    "text": "Enabling this will add a heading and description for integrating into the forms pattern. Accepts `single` or `multiple` to indicate if the form is a single input or will have multiple inputs."
                },
                "attribute": "use-forms-pattern",
                "reflect": false
            },
            "formHeadingLevel": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The heading level for the heading if `useFormsPattern` is true."
                },
                "attribute": "form-heading-level",
                "reflect": false,
                "defaultValue": "3"
            },
            "formHeading": {
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
                    "text": "The content of the heading if `useFormsPattern` is true."
                },
                "attribute": "form-heading",
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
                    "text": "The event used to track usage of the component. This is emitted when an\ninput value changes and enableAnalytics is true."
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
                "name": "vaChange",
                "method": "vaChangeHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
