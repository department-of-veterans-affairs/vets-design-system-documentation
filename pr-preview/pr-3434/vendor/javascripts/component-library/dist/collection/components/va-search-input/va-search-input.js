import { Fragment, Host, h, } from "@stencil/core";
import classnames from "classnames";
/**
 * @componentName Search input
 * @maturityCategory use
 * @maturityLevel deployed
 */
export class VaSearchInput {
    constructor() {
        // Host event handlers
        /**
         * Closes listbox when focus is outside of the host element
         * and fires analytics event.
         */
        this.handleBlur = () => {
            if (!this.disableAnalytics) {
                this.componentLibraryAnalytics.emit({
                    componentName: 'va-search-input',
                    action: 'blur',
                    details: {
                        value: this.value,
                    },
                });
            }
            this.isTouched = false;
            this.isListboxOpen = false;
        };
        /**
         * Fires a submit and analytics events.
         */
        this.handleSubmit = () => {
            const form = this.el.shadowRoot.querySelector('form');
            if (form) {
                form.onsubmit = (event) => {
                    event.preventDefault();
                };
            }
            this.el.dispatchEvent(new SubmitEvent('submit', {
                bubbles: true,
                cancelable: true,
                composed: true,
            }));
            if (!this.disableAnalytics) {
                this.componentLibraryAnalytics.emit({
                    componentName: 'va-search-input',
                    action: 'click',
                    details: {
                        value: this.value,
                    },
                });
            }
        };
        // Input event handlers
        /**
         * Updates suggestion formatting as user types
         */
        this.handleInput = (event) => {
            this.value = event.target.value;
            if (!this.suggestions)
                return;
            this.updateSuggestions(this.suggestions);
        };
        /**
         * Opens listbox when search input has focus and suggestions are provided
         */
        this.handleInputFocus = () => {
            this.isTouched = true;
            if (this.formattedSuggestions.length && !this.isListboxOpen) {
                this.isListboxOpen = true;
            }
        };
        /**
         * Implements keyboard interface from Keyboard Support at
         * https://www.w3.org/TR/wai-aria-practices-1.1/examples/combobox/aria1.1pattern/listbox-combo.html
         *
         * Enter key was added to fire a submit event.
         * Tab key was added to aid in isListboxOpen state management.
         */
        this.handleInputKeyDown = (event) => {
            const options = this.el.shadowRoot.querySelectorAll('[role="option"]');
            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault();
                    // Option doesn't exist if suggestions aren't provided
                    if (!(options === null || options === void 0 ? void 0 : options.length))
                        return;
                    const firstOption = options[0];
                    this.selectSuggestion(firstOption);
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    // Option doesn't exist if suggestions aren't provided
                    if (!(options === null || options === void 0 ? void 0 : options.length))
                        return;
                    const lastOption = options[options.length - 1];
                    this.selectSuggestion(lastOption);
                    break;
                case 'Enter':
                    event.preventDefault();
                    this.handleSubmit();
                    break;
                case 'Escape':
                    this.inputRef.value = '';
                    this.inputRef.dispatchEvent(new InputEvent('input', {
                        bubbles: true,
                        composed: true,
                    }));
                    break;
                case 'Tab':
                    this.isListboxOpen = false;
                    break;
                default:
                    break;
            }
        };
        // Button event handlers
        /**
         * Fires a submit event when search button is clicked
         */
        this.handleButtonClick = () => {
            this.handleSubmit();
        };
        // Listbox event handlers
        /**
         * Sets search input value to the suggestion clicked,
         * closes the listbox and fires a submit event.
         */
        this.handleListboxClick = (index) => {
            const suggestion = this.el.shadowRoot.getElementById(`listbox-option-${index}`);
            this.inputRef.value = suggestion.innerText;
            this.inputRef.dispatchEvent(new InputEvent('input', {
                bubbles: true,
                composed: true,
            }));
            this.inputRef.removeAttribute('aria-activedescendant');
            this.isListboxOpen = false;
            this.handleSubmit();
        };
        /**
         * Implements keyboard interface from Keyboard Support and guidance from Role, Property, State, and Tabindex Attribute at
         * https://www.w3.org/TR/wai-aria-practices-1.1/examples/combobox/aria1.1pattern/listbox-combo.html
         *
         * Enter key was modified to also fire a submit event.
         */
        this.handleListboxKeyDown = (event, index) => {
            const options = this.el.shadowRoot.querySelectorAll('[role="option"]');
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault();
                    if (index === 0) {
                        this.selectSuggestion(options[options.length - 1]);
                    }
                    else {
                        this.selectSuggestion(options[index - 1]);
                    }
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    if (index === options.length - 1) {
                        this.selectSuggestion(options[0]);
                    }
                    else {
                        this.selectSuggestion(options[index + 1]);
                    }
                    break;
                case 'Enter':
                    event.preventDefault();
                    this.inputRef.value = options[index].innerText;
                    this.inputRef.dispatchEvent(new InputEvent('input', {
                        bubbles: true,
                        composed: true,
                    }));
                    this.inputRef.focus();
                    this.inputRef.removeAttribute('aria-activedescendant');
                    this.isListboxOpen = false;
                    this.isTouched = false;
                    this.handleSubmit();
                    break;
                case 'Escape':
                    this.inputRef.value = '';
                    this.inputRef.dispatchEvent(new InputEvent('input', {
                        bubbles: true,
                        composed: true,
                    }));
                    this.inputRef.focus();
                    this.inputRef.removeAttribute('aria-activedescendant');
                    this.isListboxOpen = false;
                    break;
                case 'Home':
                    event.preventDefault();
                    this.inputRef.focus();
                    this.inputRef.setSelectionRange(0, 0);
                    break;
                case 'ArrowRight':
                case 'End':
                    event.preventDefault();
                    this.inputRef.focus();
                    this.inputRef.setSelectionRange(this.inputRef.value.length + 1, this.inputRef.value.length + 1);
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    this.inputRef.focus();
                    this.inputRef.setSelectionRange(this.inputRef.value.length, this.inputRef.value.length);
                    break;
                default:
                    this.inputRef.focus();
                    break;
            }
        };
        /**
         * Formats suggested characters to bold
         */
        this.formatSuggestion = (suggestion) => {
            const lowercaseSuggestion = suggestion.toLowerCase();
            const inputValue = this.inputRef.value.toLowerCase();
            if (lowercaseSuggestion.includes(inputValue)) {
                return (h(Fragment, null, inputValue, h("strong", null, lowercaseSuggestion.replace(inputValue, ''))));
            }
            return h("strong", null, lowercaseSuggestion);
        };
        /**
         * Focuses a suggestion, sets its aria-selected attribute to true, updates aria-activedescendant on input
         * and removes aria-selected from previously selected option if it exists
         */
        this.selectSuggestion = (suggestion) => {
            const selectedSuggestion = this.el.shadowRoot.querySelector('[aria-selected="true"]');
            selectedSuggestion === null || selectedSuggestion === void 0 ? void 0 : selectedSuggestion.removeAttribute('aria-selected');
            suggestion.focus();
            suggestion.setAttribute('aria-selected', 'true');
            this.inputRef.setAttribute('aria-activedescendant', suggestion.id);
        };
        /**
         * Updates formatting for all suggestions
         */
        this.updateSuggestions = (suggestionsArr) => {
            // If it's an empty array, reset formatted suggestions and close the listbox
            if (!suggestionsArr.length) {
                this.formattedSuggestions = [];
                this.isListboxOpen = false;
                return;
            }
            this.formattedSuggestions = suggestionsArr
                .slice(0, 5)
                .sort()
                .map(suggestion => this.formatSuggestion(suggestion));
            // only open the listbox after the search input has been touched
            this.isTouched ? this.isListboxOpen = true : this.isListboxOpen = false;
        };
        this.formattedSuggestions = [];
        this.isListboxOpen = undefined;
        this.isTouched = false;
        this.buttonText = 'Search';
        this.label = 'Search';
        this.suggestions = undefined;
        this.value = '';
        this.big = false;
        this.small = false;
        this.disableAnalytics = false;
    }
    /**
     * If suggestions are provided, then format suggestions and open the listbox.
     * Limits suggestions to 5 and sorts them.
     */
    componentDidLoad() {
        var _a;
        if (!Array.isArray(this.suggestions) || !((_a = this.suggestions) === null || _a === void 0 ? void 0 : _a.length))
            return;
        this.updateSuggestions(this.suggestions);
    }
    /**
     * Fixes issue where submit event dispatches the initial value of value
     * instead of the current value of the input field.
     */
    watchValueHandler() {
        this.value = this.inputRef.value;
    }
    /**
     * If suggestions are provided, then format suggestions and open the listbox.
     * Limits suggestions to 5 and sorts them.
     */
    watchSuggestionsHandler(newSuggestions) {
        if (!Array.isArray(newSuggestions))
            return;
        this.updateSuggestions(newSuggestions);
    }
    render() {
        const { buttonText, formattedSuggestions, handleBlur, handleButtonClick, handleInput, handleInputFocus, handleInputKeyDown, handleListboxClick, handleListboxKeyDown, isListboxOpen, label, value, big, small, } = this;
        /**
         * If suggestions are provided, this component will be recognized as
         * a combobox. Used in determining what attributes should exist or be omitted on search input.
         */
        const isCombobox = formattedSuggestions.length;
        const ariaAutoComplete = isCombobox ? 'list' : 'none';
        /* eslint-disable-next-line i18next/no-literal-string */
        const ariaControls = isCombobox ? 'va-search-listbox' : undefined;
        /**
         * If isCombobox is false, set aria-expanded to undefined
         * If isCombobox is true and isListboxOpen is true, set aria-expanded to "true"
         * If isCombobox is true but isListboxOpen is false, set aria-expanded to "false"
         */
        const ariaExpanded = isCombobox
            ? isListboxOpen
                ? 'true'
                : 'false'
            : undefined;
        /* eslint-disable i18next/no-literal-string */
        const ariaHasPopup = isCombobox ? 'listbox' : undefined;
        const role = isCombobox ? 'combobox' : undefined;
        /* eslint-enable i18next/no-literal-string */
        const formClasses = classnames({
            'usa-search': true,
            'usa-search--big': big && !small,
            'usa-search--small': small && !big,
        });
        return (h(Host, { key: 'eb35f45653c403d132e8c84f6bc0350aa3625ffa', onBlur: handleBlur }, h("form", { key: '45cd65d86161f47a760f2d56093d9bbb0c004a32', class: formClasses, role: "search" }, h("label", { key: 'd8ebc006c6e8356a5cfe16fb7b7f9a13082c2a04', class: "usa-sr-only", htmlFor: "search-field" }, label), h("input", { key: '440da88c09c87df8dcde8b755eabdb0b0a3ef87a', class: "usa-input", id: "search-field", name: "search", type: "search", ref: el => (this.inputRef = el), "aria-autocomplete": ariaAutoComplete, "aria-controls": ariaControls, "aria-expanded": ariaExpanded, "aria-haspopup": ariaHasPopup, "aria-label": label, autocomplete: "off", onFocus: handleInputFocus, onInput: handleInput, onKeyDown: handleInputKeyDown, role: role, value: value }), h("button", { key: 'bd583abd6a472fdda92111945759888a25cd886e', class: "usa-button", type: "submit", onClick: handleButtonClick }, !small && (h("span", { key: 'd98711b4761a71aaef3b24d63293fbde1c216d23', class: "usa-search__submit-text" }, buttonText)), h("va-icon", { key: '9e4d5b26bc5bf8dca309126d3e246d911377d9b0', class: "usa-search__submit-icon", icon: "search", size: 3 })), isListboxOpen && (h("ul", { key: '1a0fd7ddd56fd3ee76fe18b863f92f545acc6a4e', id: "va-search-listbox", "aria-label": "Search Suggestions", role: "listbox" }, formattedSuggestions.map((suggestion, index) => {
            return (h("li", { id: `listbox-option-${index}`, class: "va-search-suggestion", onClick: () => handleListboxClick(index), onKeyDown: e => handleListboxKeyDown(e, index), role: "option", tabIndex: -1 }, suggestion));
        }))))));
    }
    static get is() { return "va-search-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-search-input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-search-input.css"]
        };
    }
    static get properties() {
        return {
            "buttonText": {
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
                    "text": "Text displayed inside the search button"
                },
                "attribute": "button-text",
                "reflect": false,
                "defaultValue": "'Search'"
            },
            "label": {
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
                    "text": "The aria-label for search input and button. Default is 'Search'."
                },
                "attribute": "label",
                "reflect": false,
                "defaultValue": "'Search'"
            },
            "suggestions": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "An array of strings containing suggestions to be displayed in listbox.\nThis component displays up to 5 suggestions."
                },
                "attribute": "suggestions",
                "reflect": false
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The value of the input field"
                },
                "attribute": "value",
                "reflect": true,
                "defaultValue": "''"
            },
            "big": {
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
                    "text": "If `true`, the component will use the big variant."
                },
                "attribute": "big",
                "reflect": false,
                "defaultValue": "false"
            },
            "small": {
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
                    "text": "If `true`, the component will use the small variant."
                },
                "attribute": "small",
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
                    "text": "If `true`, the component-library-analytics event is disabled."
                },
                "attribute": "disable-analytics",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "formattedSuggestions": {},
            "isListboxOpen": {},
            "isTouched": {}
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
                    "text": "The event used to track usage of the component. This is emitted when the\nsearch button is clicked and when blur occurs on the input field."
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
                "propName": "value",
                "methodName": "watchValueHandler"
            }, {
                "propName": "suggestions",
                "methodName": "watchSuggestionsHandler"
            }];
    }
}
