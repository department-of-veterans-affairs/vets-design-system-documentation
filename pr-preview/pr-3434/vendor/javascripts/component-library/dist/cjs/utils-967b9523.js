'use strict';

require('./index-cef0edc2.js');

/**
 * Get all of the slotted children in the root element that match `nodeName`
 * If nodeName is null we still want all children to be accessible
 */
function getSlottedNodes(root, nodeName) {
    // This will only get the first slot on a component
    const children = root.shadowRoot.querySelector('slot').assignedNodes();
    return nodeName !== null
        ? Array.from(children).filter(item => item.nodeName.toLowerCase() === nodeName)
        : Array.from(children);
}
/**
 *
 * Take the length of a string; if the length is "1" then return blank string for no plurality
 * otherwise return an 's' for plurality
 */
function plurality(length) {
    return length === 1 ? '' : 's';
}
/**
 * Generates message to update character count.
 * Currently used in va-text-input and va-text-area components.
 * update this method with translations instead of string literals
 */
function getCharacterMessage(value, maxlength) {
    if (value === undefined || value === '') {
        return `${maxlength} character${plurality(maxlength)} allowed`;
    }
    let message;
    if (value.length <= maxlength) {
        const chars = maxlength - value.length;
        message = `${chars} character${plurality(chars)} left`;
    }
    else {
        const chars = value.length - maxlength;
        message = `${chars} character${plurality(chars)} over limit`;
    }
    return message;
}
// generate a list of positive consecutive integers from start to end, inclusive
// start and end are both positive integers where start < end.
function makeArray(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
/**
 * @name isElement
 * @desc returns whether or not the given argument is a DOM element.
 */
const isElement = (value) => value && typeof value === 'object' && value.nodeType === 1;
/**
 * @name select
 * @desc selects elements from the DOM by class selector or ID selector
 */
function select(selector, context) {
    if (typeof selector !== 'string') {
        return [];
    }
    if (!context || !isElement(context)) {
        return [];
    }
    const selection = context.shadowRoot.querySelectorAll(selector);
    return Array.from(selection);
}
/**
 * @name selectOrMatches
 * @desc selects elements from a specific DOM context by class selector or ID selector.
 */
function selectOrMatches(selector, context) {
    const selection = select(selector, context);
    if (typeof selector !== 'string') {
        return selection;
    }
    if (isElement(context) && context.matches(selector)) {
        selection.push(context);
    }
    return selection;
}
/**
 * Sanitizes strings of HTML to be output in innerHTML of an element
 */
const Sanitizer = {
    _entity: /[&<>"'/]/g,
    /* eslint-disable i18next/no-literal-string */
    _entities: {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;',
        '/': '&#x2F;',
    },
    /* eslint-enable i18next/no-literal-string */
    getEntity: function (s) {
        return Sanitizer._entities[s];
    },
    /**
     * Escapes HTML for all values in a tagged template string.
     */
    escapeHTML: function (strings) {
        var result = '';
        for (var i = 0; i < strings.length; i++) {
            result += strings[i];
            if (i + 1 < arguments.length) {
                var value = arguments[i + 1] || '';
                result += String(value).replace(Sanitizer._entity, Sanitizer.getEntity);
            }
        }
        return result;
    },
};
/**
 * return the heading level based on an integer input
 * if invalid input return null
 */
function getHeaderLevel(headerInput) {
    let headerLevel = null;
    if (typeof headerInput === 'string') {
        headerLevel = parseInt(headerInput, 10);
    }
    else {
        headerLevel = Math.floor(headerInput);
    }
    return headerLevel >= 1 && headerLevel <= 6 ? `h${headerLevel}` : null;
}

exports.Sanitizer = Sanitizer;
exports.getCharacterMessage = getCharacterMessage;
exports.getHeaderLevel = getHeaderLevel;
exports.getSlottedNodes = getSlottedNodes;
exports.makeArray = makeArray;
exports.selectOrMatches = selectOrMatches;
