import { Host, h, } from "@stencil/core";
import classnames from "classnames";
/**
 * @componentName Additional info
 * @maturityCategory use
 * @maturityLevel deployed
 */
export class VaAdditionalInfo {
    constructor() {
        this.open = undefined;
        this.trigger = undefined;
        this.disableAnalytics = false;
        this.disableBorder = false;
    }
    handleResize() {
        this.updateInfoMaxHeight();
    }
    toggleOpen() {
        // Conditionally track the event.
        if (!this.disableAnalytics) {
            this.componentLibraryAnalytics.emit({
                componentName: 'va-additional-info',
                action: !this.open ? 'expand' : 'collapse',
                details: {
                    triggerText: this.trigger,
                },
            });
        }
        this.open = !this.open;
    }
    handleKeydown(event) {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.toggleOpen();
        }
    }
    // Ensures that the CSS animation is consistent and uses the correct max-height for its content
    updateInfoMaxHeight() {
        const infoElm = this.el.shadowRoot.getElementById('info');
        /* eslint-disable i18next/no-literal-string */
        const contentHeight = infoElm.scrollHeight + 'px';
        // the additional 2em is #info margin-top and margin-bottom when open
        infoElm.style.setProperty('--calc-max-height', 'calc(' + contentHeight + ' + 1.125rem)');
        /* eslint-enable i18next/no-literal-string */
    }
    componentDidRender() {
        this.updateInfoMaxHeight();
    }
    render() {
        const infoClass = classnames({
            'open': this.open,
            'closed': !this.open
        });
        return (h(Host, { key: '7ecc3bd7445b911ef0e130dfd6ae48f911e707d0' }, h("a", { key: '651409ca62ed7ab5c3c7125d520c7d0004e377e0', role: "button", "aria-controls": "info", "aria-expanded": this.open ? 'true' : 'false', tabIndex: 0, onClick: this.toggleOpen.bind(this), onKeyDown: this.handleKeydown.bind(this) }, h("div", { key: '151a2e757ff3042df48516ee7501916c811d757c' }, h("span", { key: '337dc1b7c1f3a1edec24fe7e16caa6151db5f866', class: "additional-info-title" }, this.trigger), h("va-icon", { key: 'fce25a84051219134fb592b6c9577cfcb4709882', class: "additional-info-icon", icon: "chevron_right", size: 3 }))), h("div", { key: '92630d5719c2fcbffa7faf813c70894e7dffd76a', id: "info", class: infoClass }, h("slot", { key: 'a12bc2fa98fab92b4983e41b464d25ef40d33242' }))));
    }
    static get is() { return "va-additional-info"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-additional-info.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-additional-info.css"]
        };
    }
    static get properties() {
        return {
            "trigger": {
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
                    "text": "The text to trigger the expansion"
                },
                "attribute": "trigger",
                "reflect": false
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
                    "text": "If `true`, doesn't fire the CustomEvent which can be used for analytics tracking."
                },
                "attribute": "disable-analytics",
                "reflect": false,
                "defaultValue": "false"
            },
            "disableBorder": {
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
                    "text": "If `true`, left blue border and padding is removed."
                },
                "attribute": "disable-border",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "open": {}
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
                    "text": "The event used to track usage of the component. This is emitted when an\nanchor link is clicked and disableAnalytics is not true."
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
                "name": "resize",
                "method": "handleResize",
                "target": "window",
                "capture": false,
                "passive": true
            }];
    }
}
