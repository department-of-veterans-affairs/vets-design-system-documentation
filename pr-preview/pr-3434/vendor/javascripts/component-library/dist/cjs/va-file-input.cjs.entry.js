'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cef0edc2.js');
require('./contacts-f7ea2d3e.js');
const utils = require('./utils-967b9523.js');
const i18next = require('./i18next-1fd09d7c.js');

/* eslint-disable i18next/no-literal-string */
const PREFIX = 'usa';
const DROPZONE_CLASS = `${PREFIX}-file-input`;
const DROPZONE = `.${DROPZONE_CLASS}`;
const INPUT_CLASS = `${PREFIX}-file-input__input`;
const TARGET_CLASS = `${PREFIX}-file-input__target`;
const INPUT = `.${INPUT_CLASS}`;
const BOX_CLASS = `${PREFIX}-file-input__box`;
const INSTRUCTIONS_CLASS = `${PREFIX}-file-input__instructions`;
const PREVIEW_CLASS = `${PREFIX}-file-input__preview`;
const PREVIEW_HEADING_CLASS = `${PREFIX}-file-input__preview-heading`;
const DISABLED_CLASS = `${PREFIX}-file-input--disabled`;
const CHOOSE_CLASS = `${PREFIX}-file-input__choose`;
const ACCEPTED_FILE_MESSAGE_CLASS = `${PREFIX}-file-input__accepted-files-message`;
const DRAG_TEXT_CLASS = `${PREFIX}-file-input__drag-text`;
const DRAG_CLASS = `${PREFIX}-file-input--drag`;
const LOADING_CLASS = 'is-loading';
const INVALID_FILE_CLASS = 'has-invalid-file';
const GENERIC_PREVIEW_CLASS_NAME = `${PREFIX}-file-input__preview-image`;
const GENERIC_PREVIEW_CLASS = `${GENERIC_PREVIEW_CLASS_NAME}--generic`;
const PDF_PREVIEW_CLASS = `${GENERIC_PREVIEW_CLASS_NAME}--pdf`;
const WORD_PREVIEW_CLASS = `${GENERIC_PREVIEW_CLASS_NAME}--word`;
const VIDEO_PREVIEW_CLASS = `${GENERIC_PREVIEW_CLASS_NAME}--video`;
const EXCEL_PREVIEW_CLASS = `${GENERIC_PREVIEW_CLASS_NAME}--excel`;
const SR_ONLY_CLASS = `${PREFIX}-sr-only`;
const SPACER_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
let TYPE_IS_VALID = Boolean(true); // logic gate for change listener
let DEFAULT_ARIA_LABEL_TEXT = '';
let DEFAULT_FILE_STATUS_TEXT = '';
/**
 * The properties and elements within the file input.
 * @typedef {Object} FileInputContext
 * @property {HTMLDivElement} dropZoneEl
 * @property {HTMLInputElement} inputEl
 */
/**
 * Get an object of the properties and elements belonging directly to the given
 * file input component.
 *
 * @param {HTMLElement} el the element within the file input
 * @returns {FileInputContext} elements
 */
const getFileInputContext = el => {
    const dropZoneEl = el.closest(DROPZONE);
    if (!dropZoneEl) {
        throw new Error(`Element is missing outer ${DROPZONE}`);
    }
    const inputEl = dropZoneEl.querySelector(INPUT);
    return {
        dropZoneEl,
        inputEl,
    };
};
/**
 * Disable the file input component
 *
 * @param {HTMLElement} el An element within the file input component
 */
const disable = el => {
    const { dropZoneEl, inputEl } = getFileInputContext(el);
    inputEl.disabled = true;
    dropZoneEl.classList.add(DISABLED_CLASS);
};
/**
 * Set aria-disabled attribute to file input component
 *
 * @param {HTMLElement} el An element within the file input component
 */
const ariaDisable = el => {
    const { dropZoneEl } = getFileInputContext(el);
    dropZoneEl.classList.add(DISABLED_CLASS);
};
/**
 * Enable the file input component
 *
 * @param {HTMLElement} el An element within the file input component
 */
const enable = el => {
    const { dropZoneEl, inputEl } = getFileInputContext(el);
    inputEl.disabled = false;
    dropZoneEl.classList.remove(DISABLED_CLASS);
    dropZoneEl.removeAttribute('aria-disabled');
};
/**
 *
 * @param {String} s special characters
 * @returns {String} replaces specified values
 */
const replaceName = s => {
    const c = s.charCodeAt(0);
    if (c === 32)
        return '-';
    if (c >= 65 && c <= 90)
        return `img_${s.toLowerCase()}`;
    return `__000${c.toString(16).slice(-4)}`;
};
/**
 * Creates an ID name for each file that strips all invalid characters.
 * @param {String} name - name of the file added to file input (search value)
 * @returns {String} same characters as the name with invalid chars removed (new value)
 */
const makeSafeForID = name => name.replace(/[^a-z0-9]/g, replaceName);
// Takes a generated safe ID and creates a unique ID.
const createUniqueID = name => `${name}-${Math.floor(Date.now() / 1000)}`;
/**
 * Determines if the singular or plural item label should be used
 * Determination is based on the presence of the `multiple` attribute
 *
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @returns {HTMLDivElement} The singular or plural version of "item"
 */
const getItemsLabel = fileInputEl => {
    const acceptsMultiple = fileInputEl.hasAttribute('multiple');
    const itemsLabel = acceptsMultiple ? 'files' : 'file';
    return itemsLabel;
};
/**
 * Scaffold the file input component with a parent wrapper and
 * Create a target area overlay for drag and drop functionality
 *
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @returns {HTMLDivElement} The drag and drop target area.
 */
const createTargetArea = fileInputEl => {
    const fileInputParent = document.createElement('div');
    const dropTarget = document.createElement('div');
    const box = document.createElement('div');
    // Adds class names and other attributes
    fileInputEl.classList.remove(DROPZONE_CLASS);
    fileInputEl.classList.add(INPUT_CLASS);
    fileInputParent.classList.add(DROPZONE_CLASS);
    box.classList.add(BOX_CLASS);
    dropTarget.classList.add(TARGET_CLASS);
    // Adds child elements to the DOM
    dropTarget.prepend(box);
    fileInputEl.parentNode.insertBefore(dropTarget, fileInputEl);
    fileInputEl.parentNode.insertBefore(fileInputParent, dropTarget);
    dropTarget.appendChild(fileInputEl);
    fileInputParent.appendChild(dropTarget);
    return dropTarget;
};
/**
 * Build the visible element with default interaction instructions.
 *
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @returns {HTMLDivElement} The container for visible interaction instructions.
 */
const createVisibleInstructions = fileInputEl => {
    const fileInputParent = fileInputEl.closest(DROPZONE);
    const itemsLabel = getItemsLabel(fileInputEl);
    const instructions = document.createElement('div');
    const dragText = `Drag ${itemsLabel} here or`;
    const chooseText = 'choose from folder';
    // Create instructions text for aria-label
    DEFAULT_ARIA_LABEL_TEXT = `${dragText} ${chooseText}`;
    // Adds class names and other attributes
    instructions.classList.add(INSTRUCTIONS_CLASS);
    instructions.setAttribute('aria-hidden', 'true');
    // Add initial instructions for input usage
    fileInputEl.setAttribute('aria-label', DEFAULT_ARIA_LABEL_TEXT);
    instructions.innerHTML = utils.Sanitizer.escapeHTML(`<span class="${DRAG_TEXT_CLASS}">${dragText}</span> <span class="${CHOOSE_CLASS}">${chooseText}</span>`);
    // Add the instructions element to the DOM
    fileInputEl.parentNode.insertBefore(instructions, fileInputEl);
    // IE11 and Edge do not support drop files on file inputs, so we've removed text that indicates that
    if (/rv:11.0/i.test(navigator.userAgent) ||
        /Edge\/\d./i.test(navigator.userAgent)) {
        fileInputParent.querySelector(`.${DRAG_TEXT_CLASS}`).outerHTML = '';
    }
    return instructions;
};
/**
 * Build a screen reader-only message element that contains file status updates and
 * Create and set the default file status message
 *
 * @param {HTMLInputElement} fileInputEl - The input element.
 */
const createSROnlyStatus = fileInputEl => {
    const statusEl = document.createElement('div');
    const itemsLabel = getItemsLabel(fileInputEl);
    const fileInputParent = fileInputEl.closest(DROPZONE);
    const fileInputTarget = fileInputEl.closest(`.${TARGET_CLASS}`);
    DEFAULT_FILE_STATUS_TEXT = `No ${itemsLabel} selected.`;
    // Adds class names and other attributes
    statusEl.classList.add(SR_ONLY_CLASS);
    statusEl.setAttribute('aria-live', 'polite');
    // Add initial file status message
    statusEl.textContent = DEFAULT_FILE_STATUS_TEXT;
    // Add the status element to the DOM
    fileInputParent.insertBefore(statusEl, fileInputTarget);
};
/**
 * Scaffold the component with all required elements
 *
 * @param {HTMLInputElement} fileInputEl - The original input element.
 */
const enhanceFileInput = fileInputEl => {
    const isInputDisabled = fileInputEl.hasAttribute('aria-disabled') ||
        fileInputEl.hasAttribute('disabled');
    const dropTarget = createTargetArea(fileInputEl);
    const instructions = createVisibleInstructions(fileInputEl);
    const { dropZoneEl } = getFileInputContext(fileInputEl);
    if (isInputDisabled) {
        dropZoneEl.classList.add(DISABLED_CLASS);
    }
    else {
        createSROnlyStatus(fileInputEl);
    }
    return { instructions, dropTarget };
};
/**
 * Removes image previews
 * We want to start with a clean list every time files are added to the file input
 *
 * @param {HTMLDivElement} dropTarget - The drag and drop target area.
 * @param {HTMLDivElement} instructions - The container for visible interaction instructions.
 */
const removeOldPreviews = (dropTarget, instructions) => {
    const filePreviews = dropTarget.querySelectorAll(`.${PREVIEW_CLASS}`);
    const currentPreviewHeading = dropTarget.querySelector(`.${PREVIEW_HEADING_CLASS}`);
    const currentErrorMessage = dropTarget.querySelector(`.${ACCEPTED_FILE_MESSAGE_CLASS}`);
    /**
     * finds the parent of the passed node and removes the child
     * @param {HTMLElement} node
     */
    const removeImages = node => {
        node.parentNode.removeChild(node);
    };
    // Remove the heading above the previews
    if (currentPreviewHeading) {
        currentPreviewHeading.outerHTML = '';
    }
    // Remove existing error messages
    if (currentErrorMessage) {
        currentErrorMessage.outerHTML = '';
        dropTarget.classList.remove(INVALID_FILE_CLASS);
    }
    // Get rid of existing previews if they exist, show instructions
    if (filePreviews !== null) {
        if (instructions) {
            instructions.removeAttribute('hidden');
        }
        Array.prototype.forEach.call(filePreviews, removeImages);
    }
};
/**
 * Update the screen reader-only status message after interaction
 *
 * @param {HTMLDivElement} statusElement - The screen reader-only container for file status updates.
 * @param {Object} fileNames - The selected files found in the fileList object.
 * @param {Array} fileStore - The array of uploaded file names created from the fileNames object.
 */
const updateStatusMessage = (statusElement, fileNames, fileStore) => {
    const statusEl = statusElement;
    let statusMessage = DEFAULT_FILE_STATUS_TEXT;
    // If files added, update the status message with file name(s)
    if (fileNames.length === 1) {
        statusMessage = `You have selected the file: ${fileStore}`;
    }
    else if (fileNames.length > 1) {
        statusMessage = `You have selected ${fileNames.length} files: ${fileStore.join(', ')}`;
    }
    // Add delay to encourage screen reader readout
    setTimeout(() => {
        statusEl.textContent = statusMessage;
    }, 1000);
};
/**
 * Show the preview heading, hide the initial instructions and
 * Update the aria-label with new instructions text
 *
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @param {Object} fileNames - The selected files found in the fileList object.
 */
const addPreviewHeading = (fileInputEl, fileNames) => {
    const filePreviewsHeading = document.createElement('div');
    const dropTarget = fileInputEl.closest(`.${TARGET_CLASS}`);
    const instructions = dropTarget.querySelector(`.${INSTRUCTIONS_CLASS}`);
    let changeItemText = 'Change file';
    let previewHeadingText = '';
    if (fileNames.length === 1) {
        previewHeadingText = utils.Sanitizer.escapeHTML(`Selected file <span class="usa-file-input__choose">${changeItemText}</span>`);
    }
    else if (fileNames.length > 1) {
        changeItemText = 'Change files';
        previewHeadingText = utils.Sanitizer.escapeHTML(`${fileNames.length} files selected <span class="usa-file-input__choose">${changeItemText}</span>`);
    }
    // Hides null state content and sets preview heading
    instructions.setAttribute('hidden', 'true');
    filePreviewsHeading.classList.add(PREVIEW_HEADING_CLASS);
    filePreviewsHeading.innerHTML = previewHeadingText;
    dropTarget.insertBefore(filePreviewsHeading, instructions);
    // Update aria label to match the visible action text
    fileInputEl.setAttribute('aria-label', changeItemText);
};
/**
 * When new files are applied to file input, this function generates previews
 * and removes old ones.
 *
 * @param {event} e
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @param {HTMLDivElement} instructions - The container for visible interaction instructions.
 * @param {HTMLDivElement} dropTarget - The drag and drop target area.
 */
const handleChange = (e, fileInputEl, instructions, dropTarget) => {
    const multiple = fileInputEl.getAttribute('multiple'); // TODO: Double-check this works correctly when multiple is re-enabled
    const fileNames = multiple ? e.target.files : [e.target.files[0]];
    const inputParent = dropTarget.closest(`.${DROPZONE_CLASS}`);
    const statusElement = inputParent.querySelector(`.${SR_ONLY_CLASS}`);
    const fileStore = [];
    // First, get rid of existing previews
    removeOldPreviews(dropTarget, instructions);
    // Then, iterate through files list and create previews
    for (let i = 0; i < fileNames.length; i += 1) {
        const reader = new FileReader();
        const fileName = fileNames[i].name;
        let imageId;
        // Push updated file names into the store array
        fileStore.push(fileName);
        // Starts with a loading image while preview is created
        reader.onloadstart = function createLoadingImage() {
            imageId = createUniqueID(makeSafeForID(fileName));
            instructions.insertAdjacentHTML('afterend', utils.Sanitizer.escapeHTML(`<div class="${PREVIEW_CLASS}" aria-hidden="true">
          <img id="${imageId}" src="${SPACER_GIF}" alt="" class="${GENERIC_PREVIEW_CLASS_NAME} ${LOADING_CLASS}"/>${fileName}
        <div>`));
        };
        // Not all files will be able to generate previews. In case this happens, we provide several types of "generic previews" based on the file extension.
        reader.onloadend = function createFilePreview() {
            const previewImage = dropTarget.querySelector(`#${imageId}`);
            if (fileName.indexOf('.pdf') > 0) {
                previewImage.setAttribute('onerror', `this.onerror=null;this.src="${SPACER_GIF}"; this.classList.add("${PDF_PREVIEW_CLASS}")`);
            }
            else if (fileName.indexOf('.doc') > 0 ||
                fileName.indexOf('.pages') > 0) {
                previewImage.setAttribute('onerror', `this.onerror=null;this.src="${SPACER_GIF}"; this.classList.add("${WORD_PREVIEW_CLASS}")`);
            }
            else if (fileName.indexOf('.xls') > 0 ||
                fileName.indexOf('.numbers') > 0) {
                previewImage.setAttribute('onerror', `this.onerror=null;this.src="${SPACER_GIF}"; this.classList.add("${EXCEL_PREVIEW_CLASS}")`);
            }
            else if (fileName.indexOf('.mov') > 0 || fileName.indexOf('.mp4') > 0) {
                previewImage.setAttribute('onerror', `this.onerror=null;this.src="${SPACER_GIF}"; this.classList.add("${VIDEO_PREVIEW_CLASS}")`);
            }
            else {
                previewImage.setAttribute('onerror', `this.onerror=null;this.src="${SPACER_GIF}"; this.classList.add("${GENERIC_PREVIEW_CLASS}")`);
            }
            // Removes loader and displays preview
            previewImage.classList.remove(LOADING_CLASS);
            previewImage.src = reader.result;
        };
        if (fileNames[i]) {
            reader.readAsDataURL(fileNames[i]);
        }
    }
    if (fileNames.length === 0) {
        // Reset input aria-label with default message
        fileInputEl.setAttribute('aria-label', DEFAULT_ARIA_LABEL_TEXT);
    }
    else {
        addPreviewHeading(fileInputEl, fileNames);
    }
    updateStatusMessage(statusElement, fileNames, fileStore);
};
/**
 * When using an Accept attribute, invalid files will be hidden from
 * file browser, but they can still be dragged to the input. This
 * function prevents them from being dragged and removes error states
 * when correct files are added.
 *
 * @param {event} e
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @param {HTMLDivElement} instructions - The container for visible interaction instructions.
 * @param {HTMLDivElement} dropTarget - The drag and drop target area.
 */
const preventInvalidFiles = (e, fileInputEl, instructions, dropTarget) => {
    const acceptedFilesAttr = fileInputEl.getAttribute('accept');
    dropTarget.classList.remove(INVALID_FILE_CLASS);
    /**
     * We can probably move away from this once IE11 support stops, and replace
     * with a simple es `.includes`
     * check if element is in array
     * check if 1 or more alphabets are in string
     * if element is present return the position value and -1 otherwise
     * @param {Object} file
     * @param {String} value
     * @returns {Boolean}
     */
    const isIncluded = (file, value) => {
        let returnValue = false;
        const pos = file.indexOf(value);
        if (pos >= 0) {
            returnValue = true;
        }
        return returnValue;
    };
    // Runs if only specific files are accepted
    if (acceptedFilesAttr) {
        const acceptedFiles = acceptedFilesAttr.split(',');
        const errorMessage = document.createElement('div');
        // If multiple files are dragged, this iterates through them and look for any files that are not accepted.
        let allFilesAllowed = true;
        const scannedFiles = e.target.files || e.dataTransfer.files;
        for (let i = 0; i < scannedFiles.length; i += 1) {
            const file = scannedFiles[i];
            if (allFilesAllowed) {
                for (let j = 0; j < acceptedFiles.length; j += 1) {
                    const fileType = acceptedFiles[j];
                    allFilesAllowed =
                        file.name.indexOf(fileType) > 0 ||
                            isIncluded(file.type, fileType.replace(/\*/g, ''));
                    if (allFilesAllowed) {
                        TYPE_IS_VALID = true;
                        break;
                    }
                }
            }
            else
                break;
        }
        // If dragged files are not accepted, this removes them from the value of the input and creates and error state
        if (!allFilesAllowed) {
            removeOldPreviews(dropTarget, instructions);
            fileInputEl.value = ''; // eslint-disable-line no-param-reassign
            dropTarget.insertBefore(errorMessage, fileInputEl);
            errorMessage.textContent =
                fileInputEl.dataset.errormessage || `This is not a valid file type.`;
            errorMessage.classList.add(ACCEPTED_FILE_MESSAGE_CLASS);
            dropTarget.classList.add(INVALID_FILE_CLASS);
            TYPE_IS_VALID = false;
            e.preventDefault();
            e.stopPropagation();
        }
    }
};
/**
 * 1. passes through gate for preventing invalid files
 * 2. handles updates if file is valid
 *
 * @param {event} event
 * @param {HTMLInputElement} fileInputEl - The input element.
 * @param {HTMLDivElement} instructions - The container for visible interaction instructions.
 * @param {HTMLDivElement} dropTarget - The drag and drop target area.
 */
const handleUpload = (event, fileInputEl, instructions, dropTarget) => {
    preventInvalidFiles(event, fileInputEl, instructions, dropTarget);
    if (TYPE_IS_VALID === true) {
        handleChange(event, fileInputEl, instructions, dropTarget);
    }
};
const fileInput = {
    init(root) {
        utils.selectOrMatches(DROPZONE, root).forEach(fileInputEl => {
            const { instructions, dropTarget } = enhanceFileInput(fileInputEl);
            dropTarget.addEventListener('dragover', function handleDragOver() {
                this.classList.add(DRAG_CLASS);
            }, false);
            dropTarget.addEventListener('dragleave', function handleDragLeave() {
                this.classList.remove(DRAG_CLASS);
            }, false);
            dropTarget.addEventListener('drop', function handleDrop(e) {
                e.preventDefault(); // Prevents browser from opening file instead of adding it to input
                this.classList.remove(DRAG_CLASS);
                // Because of the way 'drop' works differently from 'change', need to get files from the dataTransfer object
                const dt = e.dataTransfer;
                e.target.files = dt.files;
                // Don't allow user to drop multiple files
                if (dt.files.length > 1) {
                    return;
                }
                handleUpload(e, fileInputEl, instructions, dropTarget);
                // Because we're preventing the default behavior, need to manually fire off a change event
                const changeEvent = new CustomEvent('change', {
                    detail: { files: dt.files },
                });
                fileInputEl.dispatchEvent(changeEvent);
            }, false);
            // Listens for "input" event so that it fires before the "change" event, which is being captured by the component
            fileInputEl.addEventListener('input', e => handleUpload(e, fileInputEl, instructions, dropTarget), false);
        });
    },
    teardown(root) {
        utils.selectOrMatches(INPUT, root).forEach(fileInputEl => {
            const fileInputTopElement = fileInputEl.parentElement.parentElement;
            fileInputTopElement.parentElement.replaceChild(fileInputEl, fileInputTopElement);
            // eslint-disable-next-line no-param-reassign
            fileInputEl.className = DROPZONE_CLASS;
        });
    },
    getFileInputContext,
    disable,
    ariaDisable,
    enable,
};

/* eslint-disable i18next/no-literal-string */
/**
 * A mapping of common file extensions to their corresponding MIME types.
 * This mapping is used to validate and identify file types during file uploads.
 *
 * @constant
 * @type {Object.<string, string>}
 *
 */
const extensionToMimeType = {
    '.txt': 'text/plain',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.odt': 'application/vnd.oasis.opendocument.text',
    '.rtf': 'application/rtf',
    '.csv': 'text/csv',
    '.xls': 'application/vnd.ms-excel',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.ppt': 'application/vnd.ms-powerpoint',
    '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.bmp': 'image/bmp',
    '.webp': 'image/webp',
    '.tif': 'image/tiff',
    '.tiff': 'image/tiff',
    '.svg': 'image/svg+xml',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.ogg': 'audio/ogg',
    '.m4a': 'audio/mp4',
    '.aac': 'audio/aac',
    '.mp4': 'video/mp4',
    '.avi': 'video/x-msvideo',
    '.mov': 'video/quicktime',
    '.wmv': 'video/x-ms-wmv',
    '.flv': 'video/x-flv',
    '.mkv': 'video/x-matroska',
    '.webm': 'video/webm',
    '.zip': 'application/zip',
    '.rar': 'application/x-rar-compressed',
    '.7z': 'application/x-7z-compressed',
    '.tar': 'application/x-tar',
    '.gz': 'application/gzip',
    '.json': 'application/json',
    '.xml': 'application/xml',
    '.html': 'text/html',
    '.htm': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
};

const vaFileInputCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}h1{margin-top:0}h1,h2,h3,h4,h5,h6{margin-bottom:0;margin-top:0;clear:both}*+h1,*+h2,*+h3,*+h4,*+h5,*+h6{margin-top:1.5em}h1+*,h2+*,h3+*,h4+*,h5+*,h6+*{margin-top:1em}h1{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:2.44rem;line-height:1.2;font-weight:700}h2{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.95rem;line-height:1.2;font-weight:700}h3{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.34rem;line-height:1.2;font-weight:700}h4{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.98rem;line-height:1.2;font-weight:700}h5{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:0.91rem;line-height:1.2;font-weight:700}h6{font-family:Source Sans Pro Web, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;font-size:0.87rem;line-height:1.1;font-weight:normal;letter-spacing:0.025em;text-transform:uppercase}h1,h2,h3,h4,h5{font-family:Bitter, Georgia, Cambria, \"Times New Roman\", Times, serif;font-weight:700}h6{font-family:\"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;font-weight:700}h1{margin-top:0;font-size:2.5rem}h2{font-size:1.875rem}h3{font-size:1.25rem}h4{font-size:1.0625rem}h5{font-size:0.9375rem}h6{font-size:0.9375rem}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}@media (max-width: 481px){h1{font-size:30px}h2{font-size:24px}}h6{margin:0.5em 0 0;text-transform:none;font-weight:700}:host legend :is(h1,h2,h3,h4,h5,h6),:host label :is(h1,h2,h3,h4,h5,h6){display:inline;margin:0px}:host legend :is(h1,h2,h3,h4,h5),:host label :is(h1,h2,h3,h4,h5){font-family:var(--font-serif)}:host h1+*,:host h2+*,:host h3+*,:host h4+*,:host h5+*,:host h6+*{margin-top:unset}:host #form-question{margin-bottom:1rem}.usa-hint{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}[hidden]{display:none}:host{display:block;font-family:var(--font-source-sans);font-size:16.96px;}:host .label-header{color:var(--vads-color-base);font-weight:var(--font-weight-normal)}:host .label-header-tag{margin:0;display:inline-block}:host .file-input-wrapper{display:block;max-width:30rem;width:100%;position:relative;margin:8px 0}:host .file-input{cursor:pointer;height:100%;width:100%;max-width:none;top:0;left:0;z-index:1;margin:0;position:absolute;text-indent:-999em;-webkit-box-sizing:border-box;box-sizing:border-box}:host .file-input-target{border:1px dashed var(--vads-color-action-border-base-active-on-dark);display:block;margin-top:0.3125rem;position:relative;text-align:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}:host .file-input-target.file-input-target-error{border:2px dashed var(--vads-color-secondary-dark)}:host .file-input-box{background:var(--vads-color-white);height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:2}:host .file-input-instructions{font-size:1.06rem;padding:1.25rem 0.625rem;pointer-events:none;position:relative;z-index:3}:host .file-input-choose-text{color:var(--vads-color-link);text-decoration:underline;font-weight:var(--font-weight-normal)}:host .file-icon{color:var(--vads-color-primary-alt-darkest)}:host .selected-files-wrapper{background-color:var(--vads-color-primary-lighter);border:1px solid var(--vads-color-base-light)}:host .selected-files-label{color:var(--vads-color-base);font-weight:var(--font-weight-bold);font-size:1.06rem;border-bottom:1px solid var(--vads-color-white);margin-bottom:8px;padding:8px}:host .va-card{margin:8px}:host .file-label{color:var(--vads-color-base);font-weight:var(--font-weight-bold);font-size:1.06rem;padding:0 8px;display:block;width:100%;word-wrap:break-word;word-break:break-word;overflow:hidden}:host #input-error-message{padding:0 8px;width:100%}:host .file-size-label{color:var(--vads-color-base-dark);font-weight:var(--font-weight-normal);font-size:1.06rem;padding:0 8px;display:block}:host .file-info-section{border-bottom:1px solid var(--vads-color-base-lighter);padding:0 8px 8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .file-button-section{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-direction:row;flex-direction:row}:host .file-button-section>va-button-icon{font-size:1.06rem}@media screen and (max-width: 481px){:host .file-button-section{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start}}:host .additional-info-slot{padding-bottom:16px}:host .vads-u-line-height--2{line-height:1.15}:host .thumbnail-container{height:40px;width:40px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host .thumbnail-preview{max-width:40px;width:auto;max-height:40px;height:auto}:host .thumbnail-error{color:#b21d38}:host(.has-error){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host(.has-error){margin-left:-0.9rem}}.required{color:var(--vads-color-secondary-dark);margin-left:0.25rem}";
const VaFileInputStyle0 = vaFileInputCss;

const VaFileInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.vaChange = index.createEvent(this, "vaChange", 7);
        this.componentLibraryAnalytics = index.createEvent(this, "component-library-analytics", 7);
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
            const requiredSpan = required ? (index.h("span", { class: "required" }, " ", i18next.instance.t('required'))) : null;
            if (headerSize && headerSize >= 1 && headerSize <= 6) {
                const HeaderTag = `h${headerSize}`;
                return (index.h("div", { class: "label-header" }, index.h(HeaderTag, { htmlFor: "fileInputField", part: "label", class: "label-header-tag" }, label, requiredSpan)));
            }
            else {
                return (index.h("div", { class: "label-header" }, index.h("label", { htmlFor: "fileInputField", part: "label", class: "usa-label" }, label, requiredSpan)));
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
        let fileThumbnail = (index.h("div", { key: 'a01e616b023996b1e430db4d555a5cfb57da40e5', class: "thumbnail-container" }, index.h("svg", { key: 'a6d59732d8473f2ed2c3fd51b6f038f0f299ae39', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", fill: "#07648d", width: "40px", height: "40px" }, index.h("path", { key: 'add0b444331deffab5324e255259f66acee5b61f', d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" }))));
        if (error) {
            fileThumbnail = (index.h("div", { key: '33beee8e31cb693aae331274b44f9a5df9b4ed6a', class: "thumbnail-container" }, index.h("va-icon", { key: '1f4fd0237a037cc056d91955e8c75b75634c74bc', icon: "error", size: 3, class: "thumbnail-preview thumbnail-error" })));
        }
        else if (fileContents) {
            if (fileType.startsWith('image/')) {
                fileThumbnail = (index.h("div", { key: 'a23e881670ca55216d6625df51050ba4183c8414', class: "thumbnail-container", "aria-hidden": "true" }, index.h("img", { key: 'a81a90cf213dc62e81454de7efc629baa258a850', class: "thumbnail-preview", src: fileContents, alt: "image" })));
            }
            else if (fileType === 'application/pdf') {
                fileThumbnail = (index.h("div", { key: '9c243dcd577b144340612cb7e4456c00fc8e83b4', class: "thumbnail-container", "aria-hidden": "true" }, index.h("object", { key: 'abe62891232567a0a49cef9d12846e7efe012ecb', class: "thumbnail-preview", data: fileContents, type: "application/pdf" })));
            }
        }
        let selectedFileClassName = headless ? "headless-selected-files-wrapper" : "selected-files-wrapper";
        const hintClass = "usa-hint" + (headless ? " usa-sr-only" : "");
        return (index.h(index.Host, { key: 'a4db25a88485ed629f402f02eb82578cc1e8170f', class: { 'has-error': !!displayError } }, index.h("span", { key: '9f261a935232ecbdf87a00fcbcc89e64d4a9bf5b', class: { 'usa-sr-only': !!headless } }, label && this.renderLabelOrHeader(label, required, headerSize)), hint && (index.h("div", { key: 'd2d65b768b601e22292924ae0835817fb1df30d0', class: hintClass, id: "input-hint-message" }, hint)), index.h("div", { key: '198358215e291200de6df7998ae3f74ef8a15772', class: "file-input-wrapper", onDrop: this.handleDrop }, index.h("input", { key: 'adbb43a169d798d6781974b5ce362d1ff88d48f2', id: "fileInputField", class: "file-input", style: {
                visibility: this.uploadStatus === 'success' ? 'hidden' : 'unset',
            }, type: "file", ref: el => (this.fileInputRef = el), name: name, accept: accept, "aria-describedby": ariaDescribedbyIds, onChange: this.handleChange }), uploadStatus === 'idle' && (index.h("div", { key: '8ae66fa7bc3b641ae13a62038e9a3492a04df7df' }, index.h("span", { key: '36c7bf30c35b9713cef61a269e4e4ec41ee80e7b', id: "file-input-error-alert", role: "alert" }, displayError && (index.h(index.Fragment, { key: '0ad1ccd9feca840ebe79d406bfd42db947396798' }, index.h("span", { key: '1c009370c174b95954b1a143f446ef84e73480a9', class: "usa-sr-only" }, i18next.instance.t('error')), index.h("span", { key: 'b027cb5e4e52d61b6d0f7a3f639a692ce5215c26', class: "usa-error-message" }, displayError)))), index.h("div", { key: '74c9f6323c9f9665f7cbf28af6d859d7ab30bdcd', class: 'usa-sr-only', "aria-live": "polite", id: "statusMessage" }), index.h("div", { key: '0808a878db5ff66e295924c387c05aa36fd66829', class: fileInputTargetClasses }, index.h("div", { key: 'd1446d2551b594447ab3fd3970aa805262464690', class: "file-input-box" }), index.h("div", { key: '93656cba26f9e4f3c31259f619fe420aa4db2239', class: "file-input-instructions" }, index.h("span", { key: '1f7fa2649fcc4df3c74e4e115317dea3ea934501', class: "file-input-drag-text" }, "Drag files here or", ' '), index.h("span", { key: 'ebe7f9449c87acfbe337233f526debb7286f46c6', class: "file-input-choose-text" }, "choose from folder"))))), uploadStatus !== 'idle' && (index.h("div", { key: '1ba201a6e8977f12c61e4879efff431cafe00e91', class: selectedFileClassName }, !headless &&
            index.h("div", { key: 'f968f10be58a63653e870e2dd98ee70024ddfa37', class: "selected-files-label" }, "Selected files"), index.h("div", { key: 'ad11ac7134af92335d6fa0b403dd341aa777d098', class: 'usa-sr-only', "aria-live": "polite", id: "statusMessage" }), index.h("va-card", { key: '3aff1f1bb0e2fb5765beb04820df1a5183f61c38', class: "va-card" }, index.h("div", { key: '631b52dcd1e33f9c9e052b2be7c6abfb5173d922', class: "file-info-section" }, fileThumbnail, index.h("div", { key: 'd3e68e809269e673ef7258ed77ef456e3b0141b7', class: "file-info-group vads-u-line-height--2" }, index.h("span", { key: '68d94c44d52375236161fee06ee84820a8e564a8', class: "file-label" }, file.name), index.h("span", { key: 'f3bb8867dc544661f8cc8c5f33d5b57908c09839', id: "input-error-message", role: "alert" }, displayError && (index.h(index.Fragment, { key: 'd73828c7e49da11c17c571fdfc2ed8c0637a119c' }, index.h("span", { key: '20d7d2aa16fb2e02b6152d1316177c80e6bededa', class: "usa-sr-only" }, i18next.instance.t('error')), index.h("span", { key: 'a0311edf43faddc81d751fcf3b758e41036e7a77', class: "usa-error-message" }, displayError)))), index.h("span", { key: 'b6091ec3cedae8704b0365b2f0e48bdf2a9402c9', class: "file-size-label" }, this.formatFileSize(file.size)))), file && (index.h("div", { key: '1cdfff9d744fc368f371599b33b22f4788ef0b00' }, index.h("div", { key: '485836e73fe72b3932fc1656702fc831ddab6de0', class: "additional-info-slot" }, index.h("slot", { key: '808ab16d495d92879eacc120834a717823f36b37' })), index.h("div", { key: 'a24dd3732aadc2893eefc1105b8368b224501587', class: "file-button-section" }, index.h("va-button-icon", { key: '8c9e7751e25529f7ef7e1db65104bef01ecf5126', buttonType: "change-file", onClick: this.changeFile, label: "Change file", "aria-label": 'change file ' + file.name }), index.h("va-button-icon", { key: '2bb6e989624cac3756b1e3a4f5f79ec432bc042d', id: "delete", buttonType: "delete", onClick: this.openModal, "aria-label": 'delete file ' + file.name, label: "Delete" })), index.h("va-modal", { key: '96b445468a91fc70dbd2870e3e6d3ea092675b95', modalTitle: 'Delete this file?', visible: this.showModal, primaryButtonText: 'Yes, remove this', secondaryButtonText: 'No, keep this', onCloseEvent: this.closeModal, onPrimaryButtonClick: () => this.removeFile(true), onSecondaryButtonClick: this.closeModalAndKeepFile }, "We'll remove the uploaded document ", index.h("span", { key: '877d1341cbe1ec6daba1f6d74646dd2915621d14', class: "file-label" }, file.name))))))))));
    }
    get el() { return index.getElement(this); }
};
VaFileInput.style = VaFileInputStyle0;

exports.va_file_input = VaFileInput;
