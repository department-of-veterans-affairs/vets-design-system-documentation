import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as classnames } from './index2.js';

const vaSegmentedProgressBarCss = ".sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}.usa-step-indicator{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.1;background-color:white;margin-bottom:2rem;margin-left:-1px;margin-right:-1px}@media all and (min-width: 40em){.usa-step-indicator{margin-left:0;margin-right:0}}.usa-step-indicator__segments{counter-reset:usa-step-indicator;display:-ms-flexbox;display:flex;list-style:none;margin:0;padding:0}.usa-step-indicator__segment{-ms-flex:1 1 0%;flex:1 1 0%;counter-increment:usa-step-indicator;margin-left:1px;margin-right:1px;max-width:15rem;min-height:0.5rem;position:relative}.usa-step-indicator__segment:after{background-color:#919191;content:\"\";display:block;height:0.5rem;left:0;position:absolute;right:0;top:0}@media all and (min-width: 40em){.usa-step-indicator__segment:after{height:0.5rem}}.usa-step-indicator__segment--complete::after{background-color:#162e51}.usa-step-indicator__segment--complete .usa-step-indicator__segment-label{color:#162e51}.usa-step-indicator__segment--current::after{background-color:#005ea2}.usa-step-indicator__segment--current .usa-step-indicator__segment-label{color:#005ea2;font-weight:700}.usa-step-indicator__segment-label{display:none}@media all and (min-width: 40em){.usa-step-indicator__segment-label{color:#565c65;display:block;font-size:1.06rem;margin-top:calc(\n      0.5rem + 0.5rem\n    );padding-right:2rem;text-align:left}}.usa-step-indicator__header{-ms-flex-align:baseline;align-items:baseline;display:-ms-flexbox;display:flex}.usa-step-indicator__heading{color:#1b1b1b;font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.13rem;font-weight:700;margin:1rem 0 0}@media all and (min-width: 40em){.usa-step-indicator__heading{font-size:1.46rem;margin-top:2rem}}.usa-step-indicator__current-step{height:2.5rem;border-radius:99rem;width:2.5rem;font-weight:normal;-webkit-font-feature-settings:\"tnum\" 1, \"kern\" 1;font-feature-settings:\"tnum\" 1, \"kern\" 1;background-color:#005ea2;color:white;display:inline-block;padding:calc((2.5rem - (2ex * 1.1)) * 0.5);text-align:center}.usa-step-indicator__total-steps{font-weight:normal;-webkit-font-feature-settings:\"tnum\" 1, \"kern\" 1;font-feature-settings:\"tnum\" 1, \"kern\" 1;color:#005ea2;margin-right:0.5rem}@media all and (min-width: 40em){.usa-step-indicator--counters .usa-step-indicator__segment,.usa-step-indicator--counters-sm .usa-step-indicator__segment{margin-left:0;margin-right:0;margin-top:calc(\n          (\n              (\n                  2.5rem -\n                    0.5rem\n                ) /\n                2\n            ) +\n            0.25rem\n        )}.usa-step-indicator--counters .usa-step-indicator__segment:before,.usa-step-indicator--counters-sm .usa-step-indicator__segment:before{height:2.5rem;border-radius:99rem;width:2.5rem;-webkit-font-feature-settings:\"tnum\" 1, \"kern\" 1;font-feature-settings:\"tnum\" 1, \"kern\" 1;background-color:white;-webkit-box-shadow:inset 0 0 0 0.25rem #919191, 0 0 0 0.25rem white;box-shadow:inset 0 0 0 0.25rem #919191, 0 0 0 0.25rem white;color:#565c65;content:counter(usa-step-indicator);display:block;font-weight:700;left:0;line-height:0.9;padding:calc((2.5rem - (2ex * 0.9)) * 0.5);position:absolute;text-align:center;top:calc((\n              2.5rem - 0.5rem\n            ) / -2);z-index:100}.usa-step-indicator--counters .usa-step-indicator__segment:last-child:after,.usa-step-indicator--counters-sm .usa-step-indicator__segment:last-child:after{display:none}}.usa-step-indicator--counters .usa-step-indicator__segment--complete::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment--complete::before{background-color:#162e51;-webkit-box-shadow:0 0 0 0.25rem white;box-shadow:0 0 0 0.25rem white;color:white}.usa-step-indicator--counters .usa-step-indicator__segment--current::before,.usa-step-indicator--counters-sm .usa-step-indicator__segment--current::before{background-color:#005ea2;-webkit-box-shadow:0 0 0 0.25rem white;box-shadow:0 0 0 0.25rem white;color:white}@media all and (min-width: 40em){.usa-step-indicator--counters .usa-step-indicator__segment-label,.usa-step-indicator--counters-sm .usa-step-indicator__segment-label{margin-top:calc(\n        (\n            (\n                2.5rem + 0.5rem\n              ) / 2\n          ) + 0.5rem\n      )}}@media all and (min-width: 40em){.usa-step-indicator--counters.usa-step-indicator--center .usa-step-indicator__segment:first-child:after,.usa-step-indicator--counters-sm.usa-step-indicator--center .usa-step-indicator__segment:first-child:after{left:50%;right:0;width:auto}.usa-step-indicator--counters.usa-step-indicator--center .usa-step-indicator__segment:last-child:after,.usa-step-indicator--counters-sm.usa-step-indicator--center .usa-step-indicator__segment:last-child:after{display:block;left:0;right:50%;width:auto}}@media all and (min-width: 40em){.usa-step-indicator--counters-sm .usa-step-indicator__segment{margin-top:calc(\n          (\n              (\n                  1.5rem -\n                    0.5rem\n                ) /\n                2\n            ) +\n            0.25rem\n        )}.usa-step-indicator--counters-sm .usa-step-indicator__segment:before{height:1.5rem;border-radius:99rem;width:1.5rem;font-size:0.93rem;padding:calc(0.25rem + 1px);top:calc((\n              1.5rem - 0.5rem\n            ) / -2)}.usa-step-indicator--counters-sm .usa-step-indicator__segment:last-child:after{display:none}}@media all and (min-width: 40em){.usa-step-indicator--counters-sm .usa-step-indicator__segment-label{margin-top:calc(\n        (\n            (\n                1.5rem + 0.5rem\n              ) / 2\n          ) + 0.5rem\n      )}}.usa-step-indicator--no-labels{margin-left:-1px;margin-right:-1px}.usa-step-indicator--no-labels .usa-step-indicator__segment{margin-top:0;margin-left:1px;margin-right:1px}.usa-step-indicator--no-labels .usa-step-indicator__segment:before{display:none}.usa-step-indicator--no-labels .usa-step-indicator__segment:last-child:after{display:block}.usa-step-indicator--no-labels .usa-step-indicator__heading{margin-top:1rem}.usa-step-indicator--no-labels .usa-step-indicator__segment-label{display:none}.usa-step-indicator--center{margin-left:-1px;margin-right:-1px}.usa-step-indicator--center .usa-step-indicator__segment{margin-left:1px;margin-right:1px}.usa-step-indicator--center .usa-step-indicator__segment:before{left:calc(50% - (\n                  2.5rem +\n                    0.25rem\n                ) / 2)}.usa-step-indicator--center .usa-step-indicator__segment-label{padding-left:0.5rem;padding-right:0.5rem;text-align:center}.usa-step-indicator--center.usa-step-indicator--no-labels .usa-step-indicator__segment:first-child:after{left:0}.usa-step-indicator--center.usa-step-indicator--no-labels .usa-step-indicator__segment:last-child:after{right:0}.usa-step-indicator--center.usa-step-indicator--counters-sm .usa-step-indicator__segment:before{left:calc(50% - (\n                    1.5rem +\n                      0.25rem\n                  ) / 2)}.usa-sr-only{position:absolute;left:-999em;right:auto}*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}";
const VaSegmentedProgressBarStyle0 = vaSegmentedProgressBarCss;

const VaSegmentedProgressBar$1 = /*@__PURE__*/ proxyCustomElement(class VaSegmentedProgressBar extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
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
        const indicatorClass = classnames({
            'usa-step-indicator': true,
            'usa-step-indicator--center': centeredLabels,
            'usa-step-indicator--counters': counters === 'default',
            'usa-step-indicator--counters-sm': counters === 'small'
        });
        const computeSegmentClass = (step) => {
            return classnames({
                'usa-step-indicator__segment': true,
                'usa-step-indicator__segment--complete': current > step + 1,
                'usa-step-indicator__segment--current': current === step + 1
            });
        };
        return (h(Host, null, h("div", { class: indicatorClass }, h("ol", { class: "usa-step-indicator__segments", "aria-hidden": labels ? null : 'true' }, range.map(step => (h("li", { class: computeSegmentClass(step), "aria-current": current === step + 1 ? 'step' : null }, labels ? (h("span", { class: "usa-step-indicator__segment-label" }, labelsArray[step], current !== step + 1 ? (h("span", { class: "usa-sr-only" }, current > step + 1 ? 'completed' : 'not completed')) : null)) : null)))), h("div", { class: "usa-step-indicator__header" }, h(Tag, { class: "usa-step-indicator__heading" }, h("span", { class: "usa-step-indicator__heading-counter" }, h("span", { class: "usa-sr-only" }, progressTerm), h("span", { class: "usa-step-indicator__current-step" }, current), h("span", { class: "usa-step-indicator__total-steps" }, " of ", total)), h("span", { class: "usa-step-indicator__heading-text" }, labels ? labelsArray[current - 1] : headingText))))));
    }
    static get style() { return VaSegmentedProgressBarStyle0; }
}, [1, "va-segmented-progress-bar", {
        "enableAnalytics": [4, "enable-analytics"],
        "current": [2],
        "total": [2],
        "label": [1],
        "headerLevel": [2, "header-level"],
        "progressTerm": [1, "progress-term"],
        "labels": [1],
        "centeredLabels": [4, "centered-labels"],
        "counters": [1],
        "headingText": [1, "heading-text"],
        "useDiv": [4, "use-div"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["va-segmented-progress-bar"];
    components.forEach(tagName => { switch (tagName) {
        case "va-segmented-progress-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, VaSegmentedProgressBar$1);
            }
            break;
    } });
}

const VaSegmentedProgressBar = VaSegmentedProgressBar$1;
const defineCustomElement = defineCustomElement$1;

export { VaSegmentedProgressBar, defineCustomElement };
