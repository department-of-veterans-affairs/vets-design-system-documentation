import { Host, h, } from "@stencil/core";
// Shadow DOM turned off so the va-process-list has visibility into component and can apply styles
export class VaProcessListItem {
    constructor() {
        this.header = undefined;
        this.level = 3;
        this.active = false;
        this.pending = false;
        this.checkmark = false;
    }
    render() {
        const { header, level, checkmark, active, pending } = this;
        // eslint-disable-next-line i18next/no-literal-string
        const HeaderTag = `h${level}`;
        return (h(Host, { key: 'd1b706c813491a6fde5bd055fdf693d69aca15f3', role: "listitem", class: 'usa-process-list__item' }, checkmark || active || pending ?
            h("span", { class: 'sr-only' }, checkmark ? 'Completed:' : active ? 'Current Step:' : pending ? 'Pending:' : null)
            : null, header ? h(HeaderTag, { class: 'usa-process-list__heading' }, header) : null, h("slot", { key: '4b570acb800d0187aefe38f55b91adbed06a1ac9' })));
    }
    static get is() { return "va-process-list-item"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-process-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-process-list-item.css"]
        };
    }
    static get properties() {
        return {
            "header": {
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
                    "text": "The process list item header text"
                },
                "attribute": "header",
                "reflect": false
            },
            "level": {
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
                    "text": "Header level for item header. Must be between 1 and 6"
                },
                "attribute": "level",
                "reflect": false,
                "defaultValue": "3"
            },
            "active": {
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
                    "text": "Whether or not the item is active"
                },
                "attribute": "active",
                "reflect": false,
                "defaultValue": "false"
            },
            "pending": {
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
                    "text": "Whether or not the item is pending"
                },
                "attribute": "pending",
                "reflect": false,
                "defaultValue": "false"
            },
            "checkmark": {
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
                    "text": "Whether or not the item should display the checkmark icon"
                },
                "attribute": "checkmark",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
