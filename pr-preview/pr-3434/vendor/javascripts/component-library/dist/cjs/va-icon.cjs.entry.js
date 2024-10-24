'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');
const index$1 = require('./index-c4897a3e.js');

const vaIconCss = ".usa-icon{display:inline-block;fill:currentColor;height:1em;position:relative;width:1em}.usa-icon--size-3{height:1.5rem;width:1.5rem}.usa-icon--size-4{height:2rem;width:2rem}.usa-icon--size-5{height:2.5rem;width:2.5rem}.usa-icon--size-6{height:3rem;width:3rem}.usa-icon--size-7{height:3.5rem;width:3.5rem}.usa-icon--size-8{height:4rem;width:4rem}.usa-icon--size-9{height:4.5rem;width:4.5rem}:host{display:inline-block;line-height:0;vertical-align:bottom}";
const VaIconStyle0 = vaIconCss;

const VaIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.icon = undefined;
        this.size = undefined;
        this.srtext = undefined;
    }
    getSize() {
        const sizes = [3, 4, 5, 6, 7, 8, 9];
        if (!!this.size && !sizes.includes(this.size)) {
            return null;
        }
        return this.size;
    }
    render() {
        const { icon, srtext } = this;
        const size = this.getSize();
        const iconClass = index$1.classnames({
            'usa-icon': true,
            [`usa-icon--size-${size}`]: !!size,
        });
        const imageSrc = `/img/sprite.svg#${icon}`; //* getAssetPath() had no perceivable effect here
        return (index.h(index.Host, { key: '0961b0be2beca6744838c757ce30bb25a9e7933f' }, index.h("svg", { key: '90e089fb4db082e243d1814f526857ee30120045', class: iconClass, "aria-labelledby": !!srtext ? 'icon-title' : null, "aria-hidden": !!srtext ? null : 'true', focusable: "false", role: "img" }, srtext && index.h("title", { key: 'd3370ee6736ea55b8254dd05d44880b5dc6260ed', id: "icon-title" }, srtext), index.h("use", { key: 'e1d27cad525cbaa534ac007d7bef26c5cb523bef', href: imageSrc }))));
    }
    static get assetsDirs() { return ["../img"]; }
};
VaIcon.style = VaIconStyle0;

exports.va_icon = VaIcon;
