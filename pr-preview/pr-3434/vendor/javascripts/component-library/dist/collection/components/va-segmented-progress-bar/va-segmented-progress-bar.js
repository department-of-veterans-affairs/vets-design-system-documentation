import { Host, h } from "@stencil/core";
import classNames from "classnames";
/**
 * @componentName Progress bar - segmented
 * @maturityCategory use
 * @maturityLevel deployed
 * @guidanceHref form/progress-bar-segmented
 */
export class VaSegmentedProgressBar {
    constructor() {
        this.enableAnalytics = false;
        this.current = undefined;
        this.total = undefined;
        this.label = undefined;
        this.headerLevel = 4;
        this.progressTerm = 'Step';
        this.labels = undefined;
        this.centeredLabels = undefined;
        this.counters = undefined;
        this.headingText = undefined;
        this.useDiv = undefined;
    }
    componentDidRender() {
        if (this.enableAnalytics) {
            this.componentLibraryAnalytics.emit({
                componentName: 'va-segmented-progress-bar',
                action: 'change',
                details: {
                    current: this.current,
                    total: this.total,
                },
            });
        }
    }
    render() {
        const { current, total, labels, centeredLabels, counters, headingText, headerLevel, progressTerm, useDiv, } = this;
        let labelsArray;
        if (labels) {
            labelsArray = labels.split(';');
        }
        const range = Array.from({ length: total }, (_, i) => i);
        // eslint-disable-next-line i18next/no-literal-string
        const Tag = useDiv ? `div` : `h${headerLevel}`;
        const indicatorClass = classNames({
            'usa-step-indicator': true,
            'usa-step-indicator--center': centeredLabels,
            'usa-step-indicator--counters': counters === 'default',
            'usa-step-indicator--counters-sm': counters === 'small'
        });
        const computeSegmentClass = (step) => {
            return classNames({
                'usa-step-indicator__segment': true,
                'usa-step-indicator__segment--complete': current > step + 1,
                'usa-step-indicator__segment--current': current === step + 1
            });
        };
        return (h(Host, null, h("div", { class: indicatorClass }, h("ol", { class: "usa-step-indicator__segments", "aria-hidden": labels ? null : 'true' }, range.map(step => (h("li", { class: computeSegmentClass(step), "aria-current": current === step + 1 ? 'step' : null }, labels ? (h("span", { class: "usa-step-indicator__segment-label" }, labelsArray[step], current !== step + 1 ? (h("span", { class: "usa-sr-only" }, current > step + 1 ? 'completed' : 'not completed')) : null)) : null)))), h("div", { class: "usa-step-indicator__header" }, h(Tag, { class: "usa-step-indicator__heading" }, h("span", { class: "usa-step-indicator__heading-counter" }, h("span", { class: "usa-sr-only" }, progressTerm), h("span", { class: "usa-step-indicator__current-step" }, current), h("span", { class: "usa-step-indicator__total-steps" }, " of ", total)), h("span", { class: "usa-step-indicator__heading-text" }, labels ? labelsArray[current - 1] : headingText))))));
    }
    static get is() { return "va-segmented-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-segmented-progress-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-segmented-progress-bar.css"]
        };
    }
    static get properties() {
        return {
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
            "current": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The current segment in progress"
                },
                "attribute": "current",
                "reflect": false
            },
            "total": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The total number of segments in the progress bar"
                },
                "attribute": "total",
                "reflect": false
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
                    "text": "An override for the default aria label."
                },
                "attribute": "label",
                "reflect": false
            },
            "headerLevel": {
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
                    "text": "Header level for button wrapper. Must be between 1 and 6"
                },
                "attribute": "header-level",
                "reflect": false,
                "defaultValue": "4"
            },
            "progressTerm": {
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
                    "text": "The term used to indicate the current progress for the heading \"[progressTerm] 2 of 5\". (Screen reader only)"
                },
                "attribute": "progress-term",
                "reflect": false,
                "defaultValue": "'Step'"
            },
            "labels": {
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
                    "text": "String containing a list of step labels delimited by a semi-colon. Example: `\"Step 1;Step 2;Step 3\"`"
                },
                "attribute": "labels",
                "reflect": false
            },
            "centeredLabels": {
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
                    "text": "Whether or not to center the step labels"
                },
                "attribute": "centered-labels",
                "reflect": false
            },
            "counters": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "\"default\" | \"small\"",
                    "resolved": "\"default\" | \"small\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Show number counters for each step"
                },
                "attribute": "counters",
                "reflect": false
            },
            "headingText": {
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
                    "text": "Text of current step"
                },
                "attribute": "heading-text",
                "reflect": false
            },
            "useDiv": {
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
                    "text": "When true, this makes the segmented-progress-bar use a div instead of a heading"
                },
                "attribute": "use-div",
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
                    "text": "The event used to track usage of the component. This is emitted when the\ncomponent renders and enableAnalytics is true."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
