import { Host, h, } from "@stencil/core";
import classnames from "classnames";
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import { hideOthers } from "aria-hidden";
import { focusableQueryString } from "../../utils/modal";
/**
 * @click Used to detect clicks outside of modal contents to close modal.
 * @keydown Used to detect Escape key to close modal.
 * @componentName Modal
 * @maturityCategory use
 * @maturityLevel deployed
 */
export class VaModal {
    constructor() {
        /**
         * Save focusable children within the modal. Populated on setup
         */
        this.focusableChildren = null;
        this.clickToClose = false;
        this.disableAnalytics = false;
        this.large = false;
        this.modalTitle = undefined;
        this.forcedModal = false;
        this.unstyled = false;
        this.initialFocusSelector = undefined;
        this.primaryButtonText = undefined;
        this.secondaryButtonText = undefined;
        this.status = undefined;
        this.visible = false;
        this.ariaHiddenNodeExceptions = [];
        this.shifted = false;
    }
    /**
     * Listen for the va-button GA event and capture it so
     * that we can emit a single va-modal GA event that includes
     * the va-button details in handlePrimaryButtonClick and
     * handleSecondaryButtonClick.
     */
    handleButtonClickAnalytics(event) {
        // Prevent va-modal GA event from firing multiple times.
        if (event.detail.componentName === 'va-modal')
            return;
        // Prevent va-button GA event from firing.
        event.stopPropagation();
    }
    // This click event listener is used to close the modal when clickToClose
    // is true and the user clicks the overlay outside of the modal contents.
    handleClick(e) {
        if (!this.clickToClose)
            return;
        // event.target is always the shadow host
        // event.composedPath()[0] returns the node clicked when shadow root is open
        if (this.visible && e.composedPath()[0] === this.el) {
            this.handleClose(e);
        }
    }
    // This keydown event listener is used to close the modal when the user hits
    // the Escape key.
    handleKeyDown(e) {
        if (!this.visible)
            return;
        const keyCode = e.key;
        if (keyCode === 'Escape') {
            this.handleClose(e);
        }
        // shift key state used for focus trap. The FocusEvent does not include a
        // way to check the key state
        this.shifted = e.shiftKey;
    }
    // Handle when the focus is leaving the last element, wrap back to the first if appropriate
    handleLastElementFocus(e) {
        var _a;
        if (this.visible) {
            // The focus is outside the modal
            if (e.key === "Tab" && !this.shifted) {
                e.preventDefault();
                const focusIndex = 0;
                (_a = this.focusableChildren[focusIndex]) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
    }
    // Handle when the focus is leaving the first element, wrap back to the last if appropriate
    handleFirstElementFocus(e) {
        var _a;
        if (this.visible) {
            // The focus is outside the modal
            if (e.key === "Tab" && this.shifted) {
                e.preventDefault();
                const focusIndex = this.focusableChildren.length - 1;
                (_a = this.focusableChildren[focusIndex]) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
    }
    // This is a workaround for determining when to call setupModal or teardownModal.
    // Elements are not yet available in the DOM due to `if (!visible) return null;`.
    // See componentDidUpdate.
    watchVisibleHandler() {
        this.isVisibleDirty = true;
    }
    componentDidLoad() {
        if (this.visible)
            this.setupModal();
    }
    // Stencil's componentDidUpdate doesn't provide us with previous props to compare
    // and determine if we need to setup or destroy the modal. We can use a boolean
    // variable inside a Watch decorator as a workaround to determine if an update needs
    // to occur.
    componentDidUpdate() {
        if (!this.isVisibleDirty)
            return;
        this.isVisibleDirty = false;
        if (this.visible) {
            this.setupModal();
        }
        else {
            this.teardownModal();
        }
    }
    disconnectedCallback() {
        this.teardownModal();
    }
    handleClose(e) {
        this.closeEvent.emit(e);
    }
    handlePrimaryButtonClick(e) {
        this.primaryButtonClick.emit(e);
        if (!this.disableAnalytics) {
            const detail = {
                componentName: 'va-modal',
                action: 'click',
                details: {
                    clickLabel: this.primaryButtonText,
                    status: this.status,
                    title: this.modalTitle,
                },
            };
            this.componentLibraryAnalytics.emit(detail);
        }
    }
    handleSecondaryButtonClick(e) {
        this.secondaryButtonClick.emit(e);
        if (!this.disableAnalytics) {
            const detail = {
                componentName: 'va-modal',
                action: 'click',
                details: {
                    clickLabel: this.secondaryButtonText,
                    status: this.status,
                    title: this.modalTitle,
                },
            };
            this.componentLibraryAnalytics.emit(detail);
        }
    }
    // Pass in an array of focusable elements and return non-hidden and elements
    // inside the shadow DOM; note: when an element inside a web component has
    // focus, document.activeElement will point to the web component itself
    getFocusableChildren() {
        var _a, _b;
        const modalContent = Array.from(((_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelectorAll(focusableQueryString)) || []);
        const actionButtons = Array.from(((_b = this.alertActions) === null || _b === void 0 ? void 0 : _b.querySelectorAll(focusableQueryString)) || []);
        // maintain tab order
        return [
            this.closeButton, // close button first
            ...modalContent,
            ...actionButtons, // action buttons last
        ].reduce((focusableElms, elm) => {
            // find not-hidden elements
            if (elm && (elm.offsetWidth || elm.offsetHeight)) {
                // hydrated class likely on web components
                if (elm.classList.contains('hydrated')) {
                    let focusElms = [];
                    // va-radio-option does not have a shadow root, but should still be included in the focusable elements
                    if (elm.shadowRoot) {
                        focusElms = Array.from(elm.shadowRoot.querySelectorAll(focusableQueryString) || []);
                    }
                    else {
                        focusElms = Array.from(elm.querySelectorAll(focusableQueryString) || []);
                    }
                    if (focusElms.length) {
                        // add the web component and focusable shadow elements
                        // document.activeElement targets the web component but the event
                        // is composed, so crosses shadow DOM and shows up in composedPath
                        focusableElms.push(elm);
                        return focusableElms.concat(focusElms);
                    }
                }
                else {
                    focusableElms.push(elm);
                }
            }
            return focusableElms;
        }, []);
    }
    // This method traps the focus inside our web component, prevents scrolling outside
    // the modal, and adds aria-hidden="true" to all elements outside the web component.
    // Fires analytics event unless disableAnalytics is true.
    setupModal() {
        // Save previous focus & restore when modal is closed
        this.savedFocus = document.activeElement;
        // find all focusable children within the modal, but maintain tab order
        this.focusableChildren = this.getFocusableChildren();
        // find first focusable item so that focus can be redirected there when needed
        const firstFocusChild = this.focusableChildren[0];
        firstFocusChild.classList.add('first-focusable-child');
        firstFocusChild.onkeydown = (e) => this.handleFirstElementFocus(e);
        // find last focusable item so that focus can be redirected there when needed
        const lastFocusChild = this.focusableChildren[this.focusableChildren.length - 1];
        lastFocusChild.classList.add('last-focusable-child');
        lastFocusChild.onkeydown = (e) => this.handleLastElementFocus(e);
        // If an initialFocusSelector is provided, the element will be focused on modal open
        // if it exists. You are able to focus elements in both light and shadow DOM.
        const initialFocus = (this.el.querySelector(this.initialFocusSelector) ||
            this.el.shadowRoot.querySelector(this.initialFocusSelector) ||
            this.closeButton);
        initialFocus.focus();
        // Prevents scrolling outside modal
        disableBodyScroll(this.el);
        // The elements to exclude from aria-hidden.
        const hideExceptions = [
            ...this.ariaHiddenNodeExceptions,
            this.el,
        ];
        // Sets aria-hidden="true" to all elements outside of the modal except
        // for the elements in the hideExceptions array.
        // This is used to limit the screen reader to content inside the modal.
        this.undoAriaHidden = hideOthers(hideExceptions);
        // Conditionally track the event.
        if (!this.disableAnalytics) {
            const detail = {
                componentName: 'va-modal',
                action: 'show',
                details: {
                    status: this.status,
                    title: this.modalTitle,
                    primaryButtonText: this.primaryButtonText,
                    secondaryButtonText: this.secondaryButtonText,
                },
            };
            this.componentLibraryAnalytics.emit(detail);
        }
    }
    // This method removes the focus trap, re-enables scrolling and
    // removes aria-hidden="true" from external elements.
    teardownModal() {
        var _a, _b;
        clearAllBodyScrollLocks();
        (_a = this.undoAriaHidden) === null || _a === void 0 ? void 0 : _a.call(this);
        (_b = this.savedFocus) === null || _b === void 0 ? void 0 : _b.focus();
    }
    render() {
        const { modalTitle, primaryButtonClick, primaryButtonText, secondaryButtonClick, secondaryButtonText, status, visible, forcedModal, unstyled, } = this;
        if (!visible)
            return null;
        const ariaLabel = modalTitle && modalTitle !== '' ? `${modalTitle} modal` : null;
        /* eslint-enable i18next/no-literal-string */
        const btnAriaLabel = modalTitle
            ? `Close ${modalTitle} modal`
            : 'Close modal';
        const wrapperClass = classnames({
            'usa-modal': true,
            'va-modal-alert': status,
            'usa-modal--lg': this.large,
        });
        const contentClass = classnames({
            'usa-modal__content': true,
            'usa-modal-alert': status,
        });
        const bodyClass = classnames({
            'usa-modal__main': true,
            'usa-modal-alert': status,
            'va-modal-alert-body': status,
        });
        const titleClass = classnames({
            'usa-modal__heading': true,
            'va-modal-alert-title': status,
        });
        const closingButton = forcedModal ? ('') : (h("button", { "aria-label": btnAriaLabel, class: "va-modal-close", onClick: e => this.handleClose(e), ref: el => (this.closeButton = el), type: "button" }, h("va-icon", { icon: "cancel", size: 4 })));
        /* eslint-disable i18next/no-literal-string */
        /** Icons to show for each status type */
        const statusIcons = {
            continue: 'lock',
            error: 'error',
            info: 'info',
            success: 'check',
            warning: 'warning',
        };
        /* eslint-enable i18next/no-literal-string */
        const statusIcon = statusIcons[status];
        return (h(Host, null, h("div", { class: wrapperClass, role: status === 'warning' || status === 'error'
                ? 'alertdialog'
                : 'dialog', "aria-label": ariaLabel, "aria-modal": "true" }, h("div", { class: contentClass }, closingButton, status && (h("va-icon", { class: "va-modal-alert__icon", icon: statusIcon, size: 4 })), h("div", { class: bodyClass }, h("div", { role: "document" }, modalTitle && (h("h2", { class: titleClass, tabindex: -1, id: "heading" }, modalTitle)), h("div", { class: "usa-prose", id: "description" }, h("slot", null))), ((primaryButtonClick && primaryButtonText) ||
            (secondaryButtonClick && secondaryButtonText)) && (h("div", { class: "usa-modal__footer", ref: el => (this.alertActions = el) }, h("ul", { class: "usa-button-group" }, primaryButtonClick && primaryButtonText && (h("li", { class: "usa-button-group__item" }, h("va-button", { onClick: e => this.handlePrimaryButtonClick(e), text: primaryButtonText }))), secondaryButtonClick && secondaryButtonText && (h("li", { class: "usa-button-group__item" }, !unstyled && (h("va-button", { onClick: e => this.handleSecondaryButtonClick(e), secondary: true, text: secondaryButtonText })), unstyled && (h("button", { onClick: e => this.handlePrimaryButtonClick(e), type: "button", class: "usa-button usa-button--unstyled" }, secondaryButtonText))))))))))));
    }
    static get is() { return "va-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-modal.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-modal.css"]
        };
    }
    static get properties() {
        return {
            "clickToClose": {
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
                    "text": "Click outside modal will trigger closeEvent"
                },
                "attribute": "click-to-close",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "If true, analytics event won't be fired"
                },
                "attribute": "disable-analytics",
                "reflect": false,
                "defaultValue": "false"
            },
            "large": {
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
                    "text": "If `true`, modal will be wider."
                },
                "attribute": "large",
                "reflect": true,
                "defaultValue": "false"
            },
            "modalTitle": {
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
                    "text": "Title/header text for the modal"
                },
                "attribute": "modal-title",
                "reflect": false
            },
            "forcedModal": {
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
                    "text": "Whether or not the component will be forced to take action."
                },
                "attribute": "forced-modal",
                "reflect": false,
                "defaultValue": "false"
            },
            "unstyled": {
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
                    "text": "Whether or not the component will be using the unstyled button."
                },
                "attribute": "unstyled",
                "reflect": false,
                "defaultValue": "false"
            },
            "initialFocusSelector": {
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
                    "text": "Selector to explicitly specify which element should receive\nfocus when the modal is open, if the initially focused element\nis not the first focusable element in the document"
                },
                "attribute": "initial-focus-selector",
                "reflect": false
            },
            "primaryButtonText": {
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
                    "text": "Primary button text"
                },
                "attribute": "primary-button-text",
                "reflect": false
            },
            "secondaryButtonText": {
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
                    "text": "Secondary button text"
                },
                "attribute": "secondary-button-text",
                "reflect": false
            },
            "status": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'continue' | 'error' | 'info' | 'success' | 'warning'",
                    "resolved": "\"continue\" | \"error\" | \"info\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "status",
                "reflect": false
            },
            "visible": {
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
                    "text": "If the modal is visible or not"
                },
                "attribute": "visible",
                "reflect": true,
                "defaultValue": "false"
            },
            "ariaHiddenNodeExceptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "HTMLElement[]",
                    "resolved": "HTMLElement[]",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Additional DOM-nodes that should not be hidden from screen readers.\nUseful when an open modal shouldn't hide all content behind the overlay."
                },
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "shifted": {}
        };
    }
    static get events() {
        return [{
                "method": "closeEvent",
                "name": "closeEvent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires when modal is closed."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "primaryButtonClick",
                "name": "primaryButtonClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires when primary button is clicked."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "secondaryButtonClick",
                "name": "secondaryButtonClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fires when secondary button is clicked."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "componentLibraryAnalytics",
                "name": "component-library-analytics",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event used to track usage of the component. Fires when a\na page is selected if enable-analytics is true."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "visible",
                "methodName": "watchVisibleHandler"
            }];
    }
    static get listeners() {
        return [{
                "name": "component-library-analytics",
                "method": "handleButtonClickAnalytics",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "click",
                "method": "handleClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleKeyDown",
                "target": "window",
                "capture": false,
                "passive": false
            }];
    }
}
