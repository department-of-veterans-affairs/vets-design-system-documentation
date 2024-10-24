import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const vaProgressBarCss = ".sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}div{-webkit-box-sizing:border-box;box-sizing:border-box}.progress-bar{border:2px solid var(--vads-color-primary);border-radius:1em;display:block;height:1em;margin:1em 0;width:100%}.progress-bar-inner{background-color:var(--vads-color-primary);content:'&nbsp;';display:block;height:100%;max-width:100%}";
const VaProgressBarStyle0 = vaProgressBarCss;

const VaProgressBar$1 = /*@__PURE__*/ proxyCustomElement(class VaProgressBar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
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
    static get style() { return VaProgressBarStyle0; }
}, [1, "va-progress-bar", {
        "enableAnalytics": [4, "enable-analytics"],
        "percent": [2],
        "label": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-progress-bar"];
    components.forEach(tagName => { switch (tagName) {
        case "va-progress-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaProgressBar$1);
            }
            break;
    } });
}

const VaProgressBar = VaProgressBar$1;
const defineCustomElement = defineCustomElement$1;

export { VaProgressBar, defineCustomElement };
