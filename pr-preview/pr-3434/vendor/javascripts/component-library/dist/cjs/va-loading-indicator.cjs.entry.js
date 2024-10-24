'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');

/* eslint-env browser */

var isChromatic = function isChromatic(windowArg) {
  const windowToCheck = windowArg || (typeof window !== 'undefined' && window);
  return !!(
    windowToCheck &&
    (windowToCheck.navigator.userAgent.match(/Chromatic/) ||
      windowToCheck.location.href.match(/chromatic=true/))
  );
};

const vaLoadingIndicatorCss = ":host{display:block;font-size:1.06rem;text-align:center}.loading-indicator{display:block;height:4rem;margin-top:1rem}.loading-indicator:after{content:' ';display:inline-block;width:2.1875rem;height:2.1875rem;margin:1px;border-radius:50%;border:8px solid var(--vads-color-primary);border-color:var(--vads-color-primary) transparent var(--vads-color-primary)\n    transparent;-webkit-animation:spin 1.5s linear infinite;animation:spin 1.5s linear infinite}.loading-indicator.chromatic:after{-webkit-animation:none;animation:none}.loading-indicator:focus{outline:none}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
const VaLoadingIndicatorStyle0 = vaLoadingIndicatorCss;

const VaLoadingIndicator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.componentLibraryAnalytics = index.createEvent(this, "component-library-analytics", 7);
        this.loadingStartTime = null;
        this.observer = null;
        this.message = undefined;
        this.label = 'Loading';
        this.setFocus = false;
        this.enableAnalytics = false;
    }
    componentDidLoad() {
        if (this.setFocus && this.spinner) {
            this.spinner.focus();
        }
        this.loadingStartTime = Date.now();
        const parentNode = this.el.parentNode;
        const callback = mutationsList => {
            // Use traditional 'for loops' for IE 11
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    const loadingIndicatorRemoved = Array.from(mutation.removedNodes.values()).filter((node) => { var _a; return ((_a = node === null || node === void 0 ? void 0 : node.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === 'va-loading-indicator'; }).length > 0;
                    if (this.enableAnalytics && loadingIndicatorRemoved) {
                        const ev = new CustomEvent('component-library-analytics', {
                            bubbles: true,
                            composed: true,
                            detail: {
                                componentName: 'va-loading-indicator',
                                action: 'displayed',
                                details: {
                                    displayTime: Date.now() - this.loadingStartTime,
                                    message: this.message,
                                },
                            },
                        });
                        parentNode.dispatchEvent(ev);
                    }
                }
            }
        };
        this.observer = new MutationObserver(callback);
        this.observer.observe(parentNode, {
            childList: true,
        });
    }
    render() {
        const { message, label } = this;
        let className = "loading-indicator";
        if (isChromatic()) {
            className += " chromatic";
        }
        return (index.h(index.Host, { key: '547679969619d7b801adda549710bfe3eb449faa', "aria-live": "polite" }, index.h("div", { key: '44f15fc373bc890fa3fede96cef680d6885a3815', ref: el => (this.spinner = el), class: className, role: "progressbar", "aria-label": label, "aria-valuetext": message, tabindex: "-1" }), message));
    }
    get el() { return index.getElement(this); }
};
VaLoadingIndicator.style = VaLoadingIndicatorStyle0;

exports.va_loading_indicator = VaLoadingIndicator;
