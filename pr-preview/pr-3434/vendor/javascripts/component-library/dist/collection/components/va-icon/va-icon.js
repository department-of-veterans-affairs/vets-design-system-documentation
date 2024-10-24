import { Host, h } from "@stencil/core";
import classnames from "classnames";
import { consoleDevError } from "../../utils/utils";
/**
 * @componentName Icon
 * @maturityCategory caution
 * @maturityLevel candidate
 */
export class VaIcon {
    constructor() {
        this.icon = undefined;
        this.size = undefined;
        this.srtext = undefined;
    }
    getSize() {
        const sizes = [3, 4, 5, 6, 7, 8, 9];
        if (!!this.size && !sizes.includes(this.size)) {
            consoleDevError(`Size must be an integer between 3 and 9, inclusive.`);
            return null;
        }
        return this.size;
    }
    render() {
        const { icon, srtext } = this;
        const size = this.getSize();
        const iconClass = classnames({
            'usa-icon': true,
            [`usa-icon--size-${size}`]: !!size,
        });
        const imageSrc = `/img/sprite.svg#${icon}`; //* getAssetPath() had no perceivable effect here
        return (h(Host, { key: '0961b0be2beca6744838c757ce30bb25a9e7933f' }, h("svg", { key: '90e089fb4db082e243d1814f526857ee30120045', class: iconClass, "aria-labelledby": !!srtext ? 'icon-title' : null, "aria-hidden": !!srtext ? null : 'true', focusable: "false", role: "img" }, srtext && h("title", { key: 'd3370ee6736ea55b8254dd05d44880b5dc6260ed', id: "icon-title" }, srtext), h("use", { key: 'e1d27cad525cbaa534ac007d7bef26c5cb523bef', href: imageSrc }))));
    }
    static get is() { return "va-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-icon.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-icon.css"]
        };
    }
    static get assetsDirs() { return ["../img"]; }
    static get properties() {
        return {
            "icon": {
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
                    "text": "The name of the icon to use"
                },
                "attribute": "icon",
                "reflect": false
            },
            "size": {
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
                    "text": "The size variant of the icon,\nan integer between 3 and 9 inclusive"
                },
                "attribute": "size",
                "reflect": false
            },
            "srtext": {
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
                    "text": "Screen-reader text if the icon has semantic meaning\nand is not purely decorative."
                },
                "attribute": "srtext",
                "reflect": false
            }
        };
    }
}
