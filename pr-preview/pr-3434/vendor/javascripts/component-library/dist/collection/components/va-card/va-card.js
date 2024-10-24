import { Host, h } from "@stencil/core";
/**
 * @componentName Card
 * @maturityCategory caution
 * @maturityLevel candidate
 */
export class VaCard {
    constructor() {
        this.showShadow = false;
        this.background = false;
    }
    render() {
        return (h(Host, { key: 'c7ccec50762bb212bde4dec48d89c4efd46da28a' }, h("slot", { key: '8058992c88418906133cc58b2702ea3adc7325e2' })));
    }
    static get is() { return "va-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-card.css"]
        };
    }
    static get properties() {
        return {
            "showShadow": {
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
                    "text": "If `true`, a drop-shadow will be displayed with a white background."
                },
                "attribute": "show-shadow",
                "reflect": false,
                "defaultValue": "false"
            },
            "background": {
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
                    "text": "If `true`, the card will have a gray background."
                },
                "attribute": "background",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
