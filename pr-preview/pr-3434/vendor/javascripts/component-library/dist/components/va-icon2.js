import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';
import { c as consoleDevError } from './utils.js';

const vaIconCss = ".usa-icon{display:inline-block;fill:currentColor;height:1em;position:relative;width:1em}.usa-icon--size-3{height:1.5rem;width:1.5rem}.usa-icon--size-4{height:2rem;width:2rem}.usa-icon--size-5{height:2.5rem;width:2.5rem}.usa-icon--size-6{height:3rem;width:3rem}.usa-icon--size-7{height:3.5rem;width:3.5rem}.usa-icon--size-8{height:4rem;width:4rem}.usa-icon--size-9{height:4.5rem;width:4.5rem}:host{display:inline-block;line-height:0;vertical-align:bottom}";
const VaIconStyle0 = vaIconCss;

const VaIcon = /*@__PURE__*/ proxyCustomElement(class VaIcon extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get assetsDirs() { return ["../img"]; }
    static get style() { return VaIconStyle0; }
}, [1, "va-icon", {
        "icon": [1],
        "size": [2],
        "srtext": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "va-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaIcon);
            }
            break;
    } });
}

export { VaIcon as V, defineCustomElement as d };
