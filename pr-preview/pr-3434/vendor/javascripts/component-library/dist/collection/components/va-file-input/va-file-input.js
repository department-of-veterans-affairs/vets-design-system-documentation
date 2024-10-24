/* eslint-disable i18next/no-literal-string */
import { Host, h, Fragment, } from "@stencil/core";
import { i18next } from "../..";
import { fileInput } from "./va-file-input-upgrader";
import { extensionToMimeType } from "./fileExtensionToMimeType";
/**
 * @componentName File input
 * @maturityCategory caution
 * @maturityLevel available
 * @guidanceHref form/file-input
 */
export class VaFileInput {
    constructor() {
        this.uploadStatus = 'idle';
        this.handleChange = (e) => {
            const input = e.target;
            if (input.files && input.files.length > 0) {
                this.handleFile(input.files[0]);
            }
            input.value = '';
        };
        this.handleDrop = (event) => {
            event.preventDefault();
            event.stopPropagation();
            const files = event.dataTransfer.files;
            if (files.length > 0) {
                this.handleFile(files[0]);
            }
        };
        this.handleFile = (file) => {
            if (this.accept) {
                const normalizedAcceptTypes = this.normalizeAcceptProp(this.accept);
                if (!this.isAcceptedFileType(file.type, normalizedAcceptTypes)) {
                    this.removeFile(false);
                    this.internalError = 'This is not a valid file type.';
                    return;
                }
            }
            this.file = file;
            this.vaChange.emit({ files: [this.file] });
            this.uploadStatus = 'success';
            this.internalError = null;
            this.generateFileContents(this.file);
            this.updateStatusMessage(`You have selected the file: ${this.file.name}`);
            this.el.focus();
            if (this.enableAnalytics) {
                this.componentLibraryAnalytics.emit({
                    componentName: 'va-file-input',
                    action: 'change',
                    details: {
                        label: this.label,
                    },
                });
            }
        };
        this.removeFile = (notifyParent = true) => {
            this.closeModal();
            this.uploadStatus = 'idle';
            this.internalError = null;
            if (notifyParent) {
                this.vaChange.emit({ files: [] });
            }
            this.file = null;
            this.updateStatusMessage(`File removed. No file selected.`);
            this.el.focus();
        };
        this.openModal = () => {
            // set the status attribute here not in markup or it will have no effect
            const modal = this.el.shadowRoot.querySelector('va-modal');
            modal.setAttribute('status', 'warning');
            this.showModal = true;
        };
        this.closeModal = () => {
            this.showModal = false;
            // wait a tick for modal to close before setting focus
            setTimeout(() => {
                this.fileInputRef.focus();
            }, 0);
        };
        this.closeModalAndKeepFile = () => {
            this.showModal = false;
            setTimeout(() => {
                var _a;
                (_a = this.el.shadowRoot.querySelector('#delete')) === null || _a === void 0 ? void 0 : _a.shadowRoot.querySelector('button').focus();
            }, 0);
        };
        this.changeFile = () => {
            if (this.fileInputRef) {
                this.fileInputRef.click();
            }
        };
        /**
         * Converts the size of a file from bytes to a more human-readable format for
         * rendering the file size label. This function calculates the file size in
         * appropriate units (B, KB, MB, GB, TB) based on the size provided. It uses
         * logarithmic scaling to determine the unit, then formats the size to one
         * decimal place for units KB and above.
         *
         * @param {number} filesSize - The size of the file in bytes.
         * @returns {string} The file size formatted as a string with the appropriate unit.
         */
        this.formatFileSize = (filesSize) => {
            const units = ['B', 'KB', 'MB', 'GB', 'TB'];
            if (filesSize === 0)
                return '0 B';
            const unitIndex = Math.floor(Math.log(filesSize) / Math.log(1024));
            if (unitIndex === 0)
                return `${filesSize} ${units[unitIndex]}`;
            const sizeInUnit = filesSize / Math.pow(1024, unitIndex);
            const formattedSize = sizeInUnit.toFixed(unitIndex < 2 ? 0 : 1);
            return `${formattedSize}\xa0${units[unitIndex]}`;
        };
        this.normalizeAcceptProp = (accept) => {
            return accept.split(',').map(item => {
                item = item.trim();
                return item.startsWith('.') ? extensionToMimeType[item] : item;
            });
        };
        this.isAcceptedFileType = (fileType, acceptedTypes) => {
            for (const type of acceptedTypes) {
                if (type === fileType) {
                    return true;
                }
                if (type.endsWith('/*') && fileType.startsWith(type.slice(0, -1))) {
                    return true;
                }
            }
            return false;
        };
        this.renderLabelOrHeader = (label, required, headerSize) => {
            const requiredSpan = required ? (h("span", { class: "required" }, " ", i18next.t('required'))) : null;
            if (headerSize && headerSize >= 1 && headerSize <= 6) {
                const HeaderTag = `h${headerSize}`;
                return (h("div", { class: "label-header" }, h(HeaderTag, { htmlFor: "fileInputField", part: "label", class: "label-header-tag" }, label, requiredSpan)));
            }
            else {
                return (h("div", { class: "label-header" }, h("label", { htmlFor: "fileInputField", part: "label", class: "usa-label" }, label, requiredSpan)));
            }
        };
        this.file = undefined;
        this.fileContents = undefined;
        this.internalError = undefined;
        this.showModal = false;
        this.label = undefined;
        this.name = undefined;
        this.buttonText = undefined;
        this.required = false;
        this.accept = undefined;
        this.error = undefined;
        this.hint = undefined;
        this.enableAnalytics = false;
        this.headerSize = undefined;
        this.headless = false;
    }
    updateStatusMessage(message) {
        // Add delay to encourage screen reader readout
        setTimeout(() => {
            const statusMessageDiv = this.el.shadowRoot.querySelector("#statusMessage");
            statusMessageDiv ? statusMessageDiv.textContent = message : "";
        }, 1000);
    }
    generateFileContents(file) {
        if (!file)
            return;
        const reader = new FileReader();
        this.fileType = file.type;
        reader.onloadend = () => {
            this.fileContents = reader.result;
        };
        if (this.fileType &&
            (this.fileType === 'application/pdf' ||
                this.fileType.startsWith('image/'))) {
            reader.readAsDataURL(file);
        }
    }
    componentDidLoad() {
        fileInput.init(this.el);
    }
    connectedCallback() {
        this.el.addEventListener('change', this.handleChange);
    }
    disconnectedCallback() {
        this.el.removeEventListener('change', this.handleChange);
    }
    render() {
        const { label, name, required, accept, error, hint, file, uploadStatus, headerSize, fileContents, fileType, headless } = this;
        const displayError = this.error || this.internalError;
        const ariaDescribedbyIds = `${hint ? 'input-hint-message' : ''} ${displayError ? 'input-error-message' : ''}`.trim() || null; // Null so we don't add the attribute if we have an empty string
        const fileInputTargetClasses = `file-input-target ${displayError ? 'file-input-target-error' : ''}`.trim();
        let fileThumbnail = (h("div", { key: 'a01e616b023996b1e430db4d555a5cfb57da40e5', class: "thumbnail-container" }, h("svg", { key: 'a6d59732d8473f2ed2c3fd51b6f038f0f299ae39', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", fill: "#07648d", width: "40px", height: "40px" }, h("path", { key: 'add0b444331deffab5324e255259f66acee5b61f', d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" }))));
        if (error) {
            fileThumbnail = (h("div", { key: '33beee8e31cb693aae331274b44f9a5df9b4ed6a', class: "thumbnail-container" }, h("va-icon", { key: '1f4fd0237a037cc056d91955e8c75b75634c74bc', icon: "error", size: 3, class: "thumbnail-preview thumbnail-error" })));
        }
        else if (fileContents) {
            if (fileType.startsWith('image/')) {
                fileThumbnail = (h("div", { key: 'a23e881670ca55216d6625df51050ba4183c8414', class: "thumbnail-container", "aria-hidden": "true" }, h("img", { key: 'a81a90cf213dc62e81454de7efc629baa258a850', class: "thumbnail-preview", src: fileContents, alt: "image" })));
            }
            else if (fileType === 'application/pdf') {
                fileThumbnail = (h("div", { key: '9c243dcd577b144340612cb7e4456c00fc8e83b4', class: "thumbnail-container", "aria-hidden": "true" }, h("object", { key: 'abe62891232567a0a49cef9d12846e7efe012ecb', class: "thumbnail-preview", data: fileContents, type: "application/pdf" })));
            }
        }
        let selectedFileClassName = headless ? "headless-selected-files-wrapper" : "selected-files-wrapper";
        const hintClass = "usa-hint" + (headless ? " usa-sr-only" : "");
        return (h(Host, { key: 'a4db25a88485ed629f402f02eb82578cc1e8170f', class: { 'has-error': !!displayError } }, h("span", { key: '9f261a935232ecbdf87a00fcbcc89e64d4a9bf5b', class: { 'usa-sr-only': !!headless } }, label && this.renderLabelOrHeader(label, required, headerSize)), hint && (h("div", { key: 'd2d65b768b601e22292924ae0835817fb1df30d0', class: hintClass, id: "input-hint-message" }, hint)), h("div", { key: '198358215e291200de6df7998ae3f74ef8a15772', class: "file-input-wrapper", onDrop: this.handleDrop }, h("input", { key: 'adbb43a169d798d6781974b5ce362d1ff88d48f2', id: "fileInputField", class: "file-input", style: {
                visibility: this.uploadStatus === 'success' ? 'hidden' : 'unset',
            }, type: "file", ref: el => (this.fileInputRef = el), name: name, accept: accept, "aria-describedby": ariaDescribedbyIds, onChange: this.handleChange }), uploadStatus === 'idle' && (h("div", { key: '8ae66fa7bc3b641ae13a62038e9a3492a04df7df' }, h("span", { key: '36c7bf30c35b9713cef61a269e4e4ec41ee80e7b', id: "file-input-error-alert", role: "alert" }, displayError && (h(Fragment, { key: '0ad1ccd9feca840ebe79d406bfd42db947396798' }, h("span", { key: '1c009370c174b95954b1a143f446ef84e73480a9', class: "usa-sr-only" }, i18next.t('error')), h("span", { key: 'b027cb5e4e52d61b6d0f7a3f639a692ce5215c26', class: "usa-error-message" }, displayError)))), h("div", { key: '74c9f6323c9f9665f7cbf28af6d859d7ab30bdcd', class: 'usa-sr-only', "aria-live": "polite", id: "statusMessage" }), h("div", { key: '0808a878db5ff66e295924c387c05aa36fd66829', class: fileInputTargetClasses }, h("div", { key: 'd1446d2551b594447ab3fd3970aa805262464690', class: "file-input-box" }), h("div", { key: '93656cba26f9e4f3c31259f619fe420aa4db2239', class: "file-input-instructions" }, h("span", { key: '1f7fa2649fcc4df3c74e4e115317dea3ea934501', class: "file-input-drag-text" }, "Drag files here or", ' '), h("span", { key: 'ebe7f9449c87acfbe337233f526debb7286f46c6', class: "file-input-choose-text" }, "choose from folder"))))), uploadStatus !== 'idle' && (h("div", { key: '1ba201a6e8977f12c61e4879efff431cafe00e91', class: selectedFileClassName }, !headless &&
            h("div", { key: 'f968f10be58a63653e870e2dd98ee70024ddfa37', class: "selected-files-label" }, "Selected files"), h("div", { key: 'ad11ac7134af92335d6fa0b403dd341aa777d098', class: 'usa-sr-only', "aria-live": "polite", id: "statusMessage" }), h("va-card", { key: '3aff1f1bb0e2fb5765beb04820df1a5183f61c38', class: "va-card" }, h("div", { key: '631b52dcd1e33f9c9e052b2be7c6abfb5173d922', class: "file-info-section" }, fileThumbnail, h("div", { key: 'd3e68e809269e673ef7258ed77ef456e3b0141b7', class: "file-info-group vads-u-line-height--2" }, h("span", { key: '68d94c44d52375236161fee06ee84820a8e564a8', class: "file-label" }, file.name), h("span", { key: 'f3bb8867dc544661f8cc8c5f33d5b57908c09839', id: "input-error-message", role: "alert" }, displayError && (h(Fragment, { key: 'd73828c7e49da11c17c571fdfc2ed8c0637a119c' }, h("span", { key: '20d7d2aa16fb2e02b6152d1316177c80e6bededa', class: "usa-sr-only" }, i18next.t('error')), h("span", { key: 'a0311edf43faddc81d751fcf3b758e41036e7a77', class: "usa-error-message" }, displayError)))), h("span", { key: 'b6091ec3cedae8704b0365b2f0e48bdf2a9402c9', class: "file-size-label" }, this.formatFileSize(file.size)))), file && (h("div", { key: '1cdfff9d744fc368f371599b33b22f4788ef0b00' }, h("div", { key: '485836e73fe72b3932fc1656702fc831ddab6de0', class: "additional-info-slot" }, h("slot", { key: '808ab16d495d92879eacc120834a717823f36b37' })), h("div", { key: 'a24dd3732aadc2893eefc1105b8368b224501587', class: "file-button-section" }, h("va-button-icon", { key: '8c9e7751e25529f7ef7e1db65104bef01ecf5126', buttonType: "change-file", onClick: this.changeFile, label: "Change file", "aria-label": 'change file ' + file.name }), h("va-button-icon", { key: '2bb6e989624cac3756b1e3a4f5f79ec432bc042d', id: "delete", buttonType: "delete", onClick: this.openModal, "aria-label": 'delete file ' + file.name, label: "Delete" })), h("va-modal", { key: '96b445468a91fc70dbd2870e3e6d3ea092675b95', modalTitle: 'Delete this file?', visible: this.showModal, primaryButtonText: 'Yes, remove this', secondaryButtonText: 'No, keep this', onCloseEvent: this.closeModal, onPrimaryButtonClick: () => this.removeFile(true), onSecondaryButtonClick: this.closeModalAndKeepFile }, "We'll remove the uploaded document ", h("span", { key: '877d1341cbe1ec6daba1f6d74646dd2915621d14', class: "file-label" }, file.name))))))))));
    }
    static get is() { return "va-file-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["va-file-input.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["va-file-input.css"]
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
                    "text": "The label for the file input."
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
                    "text": "The name for the input element."
                },
                "attribute": "name",
                "reflect": false
            },
            "buttonText": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The text displayed on the button."
                },
                "attribute": "button-text",
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
                    "text": "Sets the input to required and renders the (*Required) text."
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
                    "text": "A comma-separated list of unique file type specifiers."
                },
                "attribute": "accept",
                "reflect": false
            },
            "error": {
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
                    "text": "The error message to render."
                },
                "attribute": "error",
                "reflect": false
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
                    "text": "Optional hint text."
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
                    "text": "Emit component-library-analytics events on the file input change event."
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
                    "text": "Optionally specifies the size of the header element to use instead of the base label.\nAccepts a number from 1 to 6, corresponding to HTML header elements h1 through h6.\nIf not provided, defaults to standard label styling."
                },
                "attribute": "header-size",
                "reflect": false
            },
            "headless": {
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
                    "text": "DST only prop\nremoves extraneous display for multiple file input"
                },
                "attribute": "headless",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "file": {},
            "fileContents": {},
            "internalError": {},
            "showModal": {}
        };
    }
    static get events() {
        return [{
                "method": "vaChange",
                "name": "vaChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "The event emitted when the file input value changes."
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
                    "text": "The event used to track usage of the component. This is emitted when the\nfile input changes and enableAnalytics is true."
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
