'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');
require('./contacts-f7ea2d3e.js');
const i18next = require('./i18next-1fd09d7c.js');

const vaFileInputMultipleCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}h1{margin-top:0}h1,h2,h3,h4,h5,h6{margin-bottom:0;margin-top:0;clear:both}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:1.5em}h1+*,h2+*,h3+*,h4+*,h5+*,h6+*{margin-top:1em}h1{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:2.44rem;line-height:1.2;font-weight:700}h2{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.95rem;line-height:1.2;font-weight:700}h3{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.34rem;line-height:1.2;font-weight:700}h4{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.98rem;line-height:1.2;font-weight:700}h5{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.91rem;line-height:1.2;font-weight:700}h6{font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;font-size:0.87rem;line-height:1.1;font-weight:normal;letter-spacing:0.025em;text-transform:uppercase}h1,h2,h3,h4,h5{font-family:Bitter, Georgia, Cambria, \"Times New Roman\", Times, serif;font-weight:700}h6{font-family:\"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;font-weight:700}h1{margin-top:0;font-size:2.5rem}h2{font-size:1.875rem}h3{font-size:1.25rem}h4{font-size:1.0625rem}h5{font-size:0.9375rem}h6{font-size:0.9375rem}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}:host legend :is(h1,h2,h3,h4,h5,h6),:host label :is(h1,h2,h3,h4,h5,h6){display:inline;margin:0px}:host legend :is(h1,h2,h3,h4,h5),:host label :is(h1,h2,h3,h4,h5){font-family:var(--font-serif)}:host h1+*,:host h2+*,:host h3+*,:host h4+*,:host h5+*,:host h6+*{margin-top:unset}:host #form-question{margin-bottom:1rem}@import '~@department-of-veterans-affairs/css-library/dist/stylesheets/base/headings.css';:host legend :is(h1,h2,h3,h4,h5,h6),:host label :is(h1,h2,h3,h4,h5,h6){display:inline;margin:0px}:host legend :is(h1,h2,h3,h4,h5),:host label :is(h1,h2,h3,h4,h5){font-family:var(--font-serif)}:host h1+*,:host h2+*,:host h3+*,:host h4+*,:host h5+*,:host h6+*{margin-top:unset}:host #form-question{margin-bottom:1rem}.usa-hint{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}[hidden]{display:none}:host{display:block;font-family:var(--font-source-sans);font-size:16.96px;}:host .label-header{color:var(--vads-color-base);font-weight:var(--font-weight-normal)}:host .label-header-tag{margin:0;display:inline-block}:host .file-input-wrapper{display:block;max-width:30rem;width:100%;position:relative;margin:8px 0}:host .file-input{cursor:pointer;height:100%;width:100%;max-width:none;top:0;left:0;z-index:1;margin:0;position:absolute;text-indent:-999em;-webkit-box-sizing:border-box;box-sizing:border-box}:host .file-input-target{border:1px dashed var(--vads-color-action-border-base-active-on-dark);display:block;margin-top:0.3125rem;position:relative;text-align:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}:host .file-input-target.file-input-target-error{border:2px dashed var(--vads-color-secondary-dark)}:host .file-input-box{background:var(--vads-color-white);height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:2}:host .file-input-instructions{font-size:1.06rem;padding:1.25rem 0.625rem;pointer-events:none;position:relative;z-index:3}:host .file-input-choose-text{color:var(--vads-color-link);text-decoration:underline;font-weight:var(--font-weight-normal)}:host .file-icon{color:var(--vads-color-primary-alt-darkest)}:host .selected-files-wrapper{background-color:var(--vads-color-primary-lighter);border:1px solid var(--vads-color-base-light)}:host .selected-files-label{color:var(--vads-color-base);font-weight:var(--font-weight-bold);font-size:1.06rem;border-bottom:1px solid var(--vads-color-white);margin-bottom:8px;padding:8px}:host .va-card{margin:8px}:host .file-label{color:var(--vads-color-base);font-weight:var(--font-weight-bold);font-size:1.06rem;padding:0 8px;display:block;width:100%;word-wrap:break-word;word-break:break-word;overflow:hidden}:host #input-error-message{padding:0 8px;width:100%}:host .file-size-label{color:var(--vads-color-base-dark);font-weight:var(--font-weight-normal);font-size:1.06rem;padding:0 8px;display:block}:host .file-info-section{border-bottom:1px solid var(--vads-color-base-lighter);padding:0 8px 8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .file-button-section{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-direction:row;flex-direction:row}:host .file-button-section>va-button-icon{font-size:1.06rem}@media screen and (max-width: 481px){:host .file-button-section{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}}:host .additional-info-slot{padding-bottom:16px}:host .vads-u-line-height--2{line-height:1.15}:host .thumbnail-container{height:40px;width:40px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host .thumbnail-preview{max-width:40px;width:auto;max-height:40px;height:auto}:host .thumbnail-error{color:#b21d38}:host(.has-error){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host(.has-error){margin-left:-0.9rem}}.required{color:var(--vads-color-secondary-dark);margin-left:0.25rem}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}:host.has-error{border-left:0.25rem solid #b50909;padding-left:1rem}:host .outer-wrap{background-color:var(--vads-color-primary-lighter);border:1px solid var(--vads-color-base-light);display:block;max-width:30rem;width:100%;position:relative;margin:8px 0}:host .outer-wrap va-file-input:last-child{padding:0 8px}:host va-file-input:not(:last-child){border-bottom:1px solid var(--vads-color-white)}:host va-file-input.has-error{border-left:none;padding-left:0}@media screen and (min-width: 1008px){:host va-file-input.has-error{margin-left:0}}";
const VaFileInputMultipleStyle0 = vaFileInputMultipleCss;

const VaFileInputMultiple = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.vaMultipleChange = index.createEvent(this, "vaMultipleChange", 7);
        /**
         * Counter to assign unique keys to new file inputs.
         */
        this.fileKeyCounter = 0;
        this.additionalSlot = null;
        /**
         * Renders the label or header based on the provided configuration.
         * @param {string} label - The text of the label.
         * @param {boolean} required - Whether the input is required.
         * @param {number} headerSize - The size of the header element.
         * @returns {JSX.Element} A JSX element representing the label or header.
         */
        this.renderLabelOrHeader = (label, required, headerSize) => {
            const requiredSpan = required ? (index.h("span", { class: "required" }, " ", i18next.instance.t('required'))) : null;
            if (headerSize && headerSize >= 1 && headerSize <= 6) {
                const HeaderTag = `h${headerSize}`;
                return (index.h("div", { class: "label-header" }, index.h(HeaderTag, { htmlFor: "fileInputField", part: "label", class: "label-header-tag" }, label, requiredSpan)));
            }
            else {
                return (index.h("div", { class: "label-header" }, index.h("span", { part: "label", class: "usa-label" }, label), requiredSpan));
            }
        };
        /**
         * Checks if there are any errors in the errors array.
         * @returns {boolean} True if there are errors, false otherwise.
         */
        this.hasErrors = () => {
            return this.errors.some(error => !!error);
        };
        this.label = undefined;
        this.name = undefined;
        this.required = false;
        this.accept = undefined;
        this.errors = [];
        this.hint = undefined;
        this.enableAnalytics = false;
        this.headerSize = undefined;
        this.files = [{ key: 0, file: null, content: null }];
    }
    /**
     * Finds a file entry by its unique key.
     * @param {number} fileKey - The unique key of the file.
     * @returns {FileIndex | undefined} The matching file index object or undefined if not found.
     */
    findFileByKey(fileKey) {
        return this.files.find(file => file.key === fileKey);
    }
    /**
     * Checks if the first file input is empty.
     * @returns {boolean} True if the first file input has no file, false otherwise.
     */
    isEmpty() {
        return this.files[0].file === null;
    }
    /**
     * Sets the content for the slots by finding the first 'slot' within the shadow DOM of this component.
     * If there is no additionalSlot set, it fetches the assigned elements to this slot, ensuring that content
     * is managed only if the slot exists. This prevents the default slot content from rendering.
     */
    setSlotContent() {
        const slot = this.el.shadowRoot.querySelector('slot');
        if (!this.additionalSlot) {
            this.additionalSlot = slot
                ? slot.assignedElements({ flatten: true })
                : [];
        }
        slot === null || slot === void 0 ? void 0 : slot.remove();
    }
    /**
     * Retrieves cloned nodes of the additional content that was originally assigned to the slot.
     * This allows for independent manipulation and reuse of the content in multiple instances
     * without altering the original nodes.
     *
     * @returns {Node[]} An array of cloned nodes from the additionalSlot.
     */
    getAdditionalContent() {
        return this.additionalSlot.map(n => n.cloneNode(true));
    }
    /**
     * Handles file input changes by updating, adding, or removing files based on user interaction.
     * @param {any} event - The event object containing file details.
     * @param {number} fileKey - The key of the file being changed.
     * @param {number} pageIndex - The index of the file in the files array.
     */
    handleChange(event, fileKey, pageIndex) {
        const newFile = event.detail.files[0];
        if (newFile) {
            const fileObject = this.findFileByKey(fileKey);
            if (fileObject.file) {
                // Change file
                fileObject.file = newFile;
            }
            else {
                // New file
                fileObject.file = newFile;
                fileObject.content = this.getAdditionalContent();
                this.fileKeyCounter++;
                this.files.push({
                    file: null,
                    key: this.fileKeyCounter,
                    content: null,
                });
            }
        }
        else {
            // Deleted file
            this.files.splice(pageIndex, 1);
            const statusMessageDiv = this.el.shadowRoot.querySelector("#statusMessage");
            // empty status message so it is read when updated
            statusMessageDiv.textContent = "";
            setTimeout(() => {
                statusMessageDiv.textContent = "File removed.";
            }, 1000);
        }
        this.vaMultipleChange.emit({ files: this.files.map(fileObj => fileObj.file).filter((file => { return !!file; })) });
        this.files = Array.of(...this.files);
    }
    /**
     * It first ensures that the slot content is correctly set up, then iterates over each file input in the component,
     * appending cloned additional content where applicable. This method ensures that additional content is
     * consistently rendered across multiple file inputs after updates to the DOM.
     */
    componentDidRender() {
        const theFileInputs = this.el.shadowRoot.querySelectorAll(`va-file-input`);
        this.setSlotContent();
        theFileInputs.forEach((fileEntry, index) => {
            if (this.files[index].content) {
                this.files[index].content.forEach(node => fileEntry.append(node));
            }
        });
    }
    /**
     * The render method to display the component structure.
     * @returns {JSX.Element} The rendered component.
     */
    render() {
        const { label, required, headerSize, hint, files, name, accept, errors, enableAnalytics, } = this;
        const outerWrapClass = this.isEmpty() ? '' : 'outer-wrap';
        const hasError = this.hasErrors() ? 'has-error' : '';
        return (index.h(index.Host, { key: 'af7427e886d01affb931a59db070773af9ec4bf6', class: hasError }, label && this.renderLabelOrHeader(label, required, headerSize), hint && (index.h("div", { key: 'ed07b915f544da437498eb9cdf576e49696b2f00', class: "usa-hint", id: "input-hint-message" }, hint)), index.h("div", { key: 'edfb6730639935c14cac0a1354c1b2c4c8ad1cf5', class: outerWrapClass }, index.h("div", { key: 'daf2a66eac7cd43d46fa1fd9b68034a0f4ede021', class: 'usa-sr-only', "aria-live": "polite", id: "statusMessage" }), !this.isEmpty() && (index.h("div", { key: '2aa2b95c19f8d5f4fff169a5a0b723fdbb775c99', class: "selected-files-label" }, "Selected files")), files.map((fileEntry, pageIndex) => {
            return (index.h("va-file-input", { key: fileEntry.key, headless: true, label: label, hint: hint, name: `${name}-${fileEntry.key}`, accept: accept, required: required, error: errors[pageIndex], onVaChange: event => this.handleChange(event, fileEntry.key, pageIndex), "enable-analytics": enableAnalytics }));
        })), index.h("slot", { key: '66b602ad8c45c9db6debfe099ed30a8a9f5540a3' })));
    }
    get el() { return index.getElement(this); }
};
VaFileInputMultiple.style = VaFileInputMultipleStyle0;

exports.va_file_input_multiple = VaFileInputMultiple;
