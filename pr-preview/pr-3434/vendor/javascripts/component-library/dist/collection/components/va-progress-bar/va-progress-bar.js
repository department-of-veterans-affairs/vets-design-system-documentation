import { Host, h } from "@stencil/core";
/**
 * @componentName Progress bar - activity
 * @maturityCategory use
 * @maturityLevel deployed
 */
export class VaProgressBar {
    constructor() {
        this.enableAnalytics = false;
        this.percent = undefined;
        this.label = undefined;
    }
    componentDidRender() {
        if (this.enableAnalytics && (this.percent === 0 || this.percent === 100)) {
            this.componentLibraryAnalytics.emit({
                componentName: 'va-progress-bar',
                action: 'change',
                details: {
                    label: this.label || `${this.percent}% complete`,
                    percent: this.percent,
                },
            });
        }
    }
    render() {
        const { label = `${this.percent.toFixed(0)}% complete`, percent } = this;
        return (h(Host, { key: '6d41c1a1d62ccb08a85a03fd4bca216319bdbfe2' }, h("div", { key: '60536ea0b71099558c33682cedd597d76b51dea8', "aria-label": label, "aria-valuemax": "100", "aria-valuemin": "0", "aria-valuenow": percent.toFixed(0), "aria-valuetext": label, class: "progress-bar", tabindex: "0", role: "progressbar" }, h("div", { key: '32cc03ebe2b6c7c6ec822d08647b61c951dde7d5', class: "progress-bar-inner", style: { width: `${percent}%` } })), h("span", { key: '1b322dd3d66173ed42c9d102686fcef02e7510dc', "aria-atomic": "true", "aria-live": "polite", class: "sr-only" }, percent.toFixed(0), "% complete")));
    }
    static get is() { return "va-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-progress-bar.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-progress-bar.css"]
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
            "percent": {
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
                    "text": "Percent of progress made. 0 to 100."
                },
                "attribute": "percent",
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
                    "text": "The text label for the progress bar."
                },
                "attribute": "label",
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
                    "text": "The event used to track usage of the component. This is emitted when percent\nis 0 or 100 and enableAnalytics is true."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
