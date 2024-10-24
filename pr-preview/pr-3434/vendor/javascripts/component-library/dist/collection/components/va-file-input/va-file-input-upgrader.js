/* eslint-disable i18next/no-literal-string */
import { Sanitizer, selectOrMatches } from "../../utils/utils";
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
    instructions.innerHTML = Sanitizer.escapeHTML(`<span class="${DRAG_TEXT_CLASS}">${dragText}</span> <span class="${CHOOSE_CLASS}">${chooseText}</span>`);
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
        previewHeadingText = Sanitizer.escapeHTML(`Selected file <span class="usa-file-input__choose">${changeItemText}</span>`);
    }
    else if (fileNames.length > 1) {
        changeItemText = 'Change files';
        previewHeadingText = Sanitizer.escapeHTML(`${fileNames.length} files selected <span class="usa-file-input__choose">${changeItemText}</span>`);
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
            instructions.insertAdjacentHTML('afterend', Sanitizer.escapeHTML(`<div class="${PREVIEW_CLASS}" aria-hidden="true">
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
export const fileInput = {
    init(root) {
        selectOrMatches(DROPZONE, root).forEach(fileInputEl => {
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
        selectOrMatches(INPUT, root).forEach(fileInputEl => {
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
