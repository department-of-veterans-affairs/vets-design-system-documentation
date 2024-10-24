import { h, Host, } from "@stencil/core";
import { i18next } from "../..";
/**
 * A component that manages multiple file inputs, allowing users to upload several files.
 * It supports adding, changing, and removing files with dynamic error handling.
 *
 * @componentName File input multiple
 * @maturityCategory caution
 * @maturityLevel available
 * @guidanceHref form/file-input-multiple
 */
export class VaFileInputMultiple {
    constructor() {
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
            const requiredSpan = required ? (h("span", { class: "required" }, " ", i18next.t('required'))) : null;
            if (headerSize && headerSize >= 1 && headerSize <= 6) {
                const HeaderTag = `h${headerSize}`;
                return (h("div", { class: "label-header" }, h(HeaderTag, { htmlFor: "fileInputField", part: "label", class: "label-header-tag" }, label, requiredSpan)));
            }
            else {
                return (h("div", { class: "label-header" }, h("span", { part: "label", class: "usa-label" }, label), requiredSpan));
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
        return (h(Host, { key: 'af7427e886d01affb931a59db070773af9ec4bf6', class: hasError }, label && this.renderLabelOrHeader(label, required, headerSize), hint && (h("div", { key: 'ed07b915f544da437498eb9cdf576e49696b2f00', class: "usa-hint", id: "input-hint-message" }, hint)), h("div", { key: 'edfb6730639935c14cac0a1354c1b2c4c8ad1cf5', class: outerWrapClass }, h("div", { key: 'daf2a66eac7cd43d46fa1fd9b68034a0f4ede021', class: 'usa-sr-only', "aria-live": "polite", id: "statusMessage" }), !this.isEmpty() && (h("div", { key: '2aa2b95c19f8d5f4fff169a5a0b723fdbb775c99', class: "selected-files-label" }, "Selected files")), files.map((fileEntry, pageIndex) => {
            return (h("va-file-input", { key: fileEntry.key, headless: true, label: label, hint: hint, name: `${name}-${fileEntry.key}`, accept: accept, required: required, error: errors[pageIndex], onVaChange: event => this.handleChange(event, fileEntry.key, pageIndex), "enable-analytics": enableAnalytics }));
        })), h("slot", { key: '66b602ad8c45c9db6debfe099ed30a8a9f5540a3' })));
    }
    static get is() { return "va-file-input-multiple"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-file-input-multiple.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-file-input-multiple.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "Label for the file input, displayed above the input."
                },
                "attribute": "label",
                "reflect": false
            },
            "name": {
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
                    "text": "Name attribute for the file input element, used to identify the form data in the submission."
                },
                "attribute": "name",
                "reflect": false
            },
            "required": {
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
                    "text": "If true, the file input is marked as required, and users must select a file."
                },
                "attribute": "required",
                "reflect": false,
                "defaultValue": "false"
            },
            "accept": {
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
                    "text": "Defines acceptable file types the user can select; uses file type or extensions."
                },
                "attribute": "accept",
                "reflect": false
            },
            "errors": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Array of error messages corresponding to each file input. The length and order match the files array."
                },
                "defaultValue": "[]"
            },
            "hint": {
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
                    "text": "Hint text provided to guide users on the expected format or type of files."
                },
                "attribute": "hint",
                "reflect": false
            },
            "enableAnalytics": {
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
                    "text": "If enabled, emits custom analytics events when file changes occur."
                },
                "attribute": "enable-analytics",
                "reflect": false,
                "defaultValue": "false"
            },
            "headerSize": {
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
                    "text": "Specifies the header size of the label element, from 1 (largest) to 6 (smallest)."
                },
                "attribute": "header-size",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "files": {}
        };
    }
    static get events() {
        return [{
                "method": "vaMultipleChange",
                "name": "vaMultipleChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when any change to the file inputs occurs."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
