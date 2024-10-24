import { r as registerInstance, c as createEvent, h, H as Host, g as getElement, F as Fragment } from './index-f0e1e12e.js';
import { c as classnames } from './index-6d7ecf98.js';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPosition = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

    if (_reserveScrollBarGap && scrollBarGap > 0) {
      var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10);
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + 'px';
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

var setPositionFixed = function setPositionFixed() {
  return window.requestAnimationFrame(function () {
    // If previousBodyPosition is already set, don't set it again.
    if (previousBodyPosition === undefined) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left
      };

      // Update the dom inside an animation frame 
      var _window = window,
          scrollY = _window.scrollY,
          scrollX = _window.scrollX,
          innerHeight = _window.innerHeight;

      document.body.style.position = 'fixed';
      document.body.style.top = -scrollY;
      document.body.style.left = -scrollX;

      setTimeout(function () {
        return window.requestAnimationFrame(function () {
          // Attempt to check if the bottom bar appeared due to the position change
          var bottomBarHeight = innerHeight - window.innerHeight;
          if (bottomBarHeight && scrollY >= innerHeight) {
            // Move the content further up so that the bottom bar doesn't hide it
            document.body.style.top = -(scrollY + bottomBarHeight);
          }
        });
      }, 300);
    }
  });
};

var restorePositionSetting = function restorePositionSetting() {
  if (previousBodyPosition !== undefined) {
    // Convert the position from "px" to Int
    var y = -parseInt(document.body.style.top, 10);
    var x = -parseInt(document.body.style.left, 10);

    // Restore styles
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;

    // Restore scroll
    window.scrollTo(x, y);

    previousBodyPosition = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }

  var lock = {
    targetElement: targetElement,
    options: options || {}
  };

  locks = [].concat(_toConsumableArray(locks), [lock]);

  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }

  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = true;
    }
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  }

  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }

  locks = [];
};

var getDefaultParent = function (originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var hideOthers = function (originalTarget, parentNode, markerName) {
    if (parentNode === void 0) { parentNode = getDefaultParent(originalTarget); }
    if (markerName === void 0) { markerName = "data-aria-hidden"; }
    var targets = Array.isArray(originalTarget) ? originalTarget : [originalTarget];
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var keep = (function (el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    });
    targets.forEach(keep);
    var deep = function (parent) {
        if (!parent || targets.indexOf(parent) >= 0) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function (node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            }
            else {
                var attr = node.getAttribute('aria-hidden');
                var alreadyHidden = attr !== null && attr !== 'false';
                var counterValue = (counterMap.get(node) || 0) + 1;
                var markerValue = (markerCounter.get(node) || 0) + 1;
                counterMap.set(node, counterValue);
                markerCounter.set(node, markerValue);
                hiddenNodes.push(node);
                if (counterValue === 1 && alreadyHidden) {
                    uncontrolledNodes.set(node, true);
                }
                if (markerValue === 1) {
                    node.setAttribute(markerName, 'true');
                }
                if (!alreadyHidden) {
                    node.setAttribute('aria-hidden', 'true');
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function () {
        hiddenNodes.forEach(function (node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute('aria-hidden');
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};

/* eslint-disable i18next/no-literal-string */
/**
 * Code needed to trap focus within a modal. Modified from
 * https://github.com/ionic-team/ionic-framework/blob/main/core/src/utils/overlays.ts#L85
 * A more extensive list can be found at
 * https://github.com/KittyGiraudel/focusable-selectors/blob/main/index.js
 */
const focusableQueryString = [
    'a[href]:not([tabindex^="-"])',
    '.hydrated:not([tabindex^="-"]):not(va-radio-option)', // This was selecting the component wrapper for va-radio-option, we only want to select the input
    '[tabindex]:not([tabindex^="-"])',
    'input:not([type=hidden]):not([tabindex^="-"])',
    'textarea:not([tabindex^="-"])',
    'button:not([tabindex^="-"])',
    'select:not([tabindex^="-"])',
].join(',');

const vaModalCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}button{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;border-radius:5px;color:var(--vads-button-color-text-primary-alt-on-light);cursor:pointer;display:inline-block;font-family:var(--font-source-sans);font-size:1rem;font-weight:700;line-height:1;padding:0.625rem 1.25rem;text-align:center;text-decoration:none}.usa-hint{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-label{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.3;display:block;font-weight:normal;margin-top:1.5rem;max-width:30rem}.usa-label--error{font-weight:700;margin-top:0}.usa-label--required{color:#b50909}.usa-error-message{padding-bottom:0.25rem;padding-top:0.25rem;color:#b50909;display:block;font-weight:700}.usa-hint{color:#71767a}.usa-hint--required{color:#b50909}.usa-button{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:0.9;color:white;background-color:#005ea2;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-align:center;align-items:center;border:0;border-radius:0.25rem;cursor:pointer;-webkit-column-gap:0.5rem;-moz-column-gap:0.5rem;column-gap:0.5rem;display:-ms-inline-flexbox;display:inline-flex;font-weight:700;-ms-flex-pack:center;justify-content:center;margin-right:0.5rem;padding:0.75rem 1.25rem;text-align:center;text-decoration:none;width:100%}@media all and (min-width: 30em){.usa-button{width:auto}}.usa-button:visited{color:white}.usa-button:hover,.usa-button.usa-button--hover{color:white;background-color:#1a4480;border-bottom:0;text-decoration:none}.usa-button:active,.usa-button.usa-button--active{color:white;background-color:#162e51}.usa-button:not([disabled]):focus,.usa-button:not([disabled]).usa-focus{outline-offset:0.25rem}.usa-button:disabled,.usa-button[aria-disabled=true]{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1}.usa-button:disabled:hover,.usa-button:disabled:active,.usa-button:disabled:focus,.usa-button:disabled.usa-focus,.usa-button[aria-disabled=true]:hover,.usa-button[aria-disabled=true]:active,.usa-button[aria-disabled=true]:focus,.usa-button[aria-disabled=true].usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-button:disabled,.usa-button[aria-disabled=true]{border:0;color:GrayText}.usa-button:disabled:hover,.usa-button:disabled:active,.usa-button:disabled:focus,.usa-button:disabled.usa-focus,.usa-button[aria-disabled=true]:hover,.usa-button[aria-disabled=true]:active,.usa-button[aria-disabled=true]:focus,.usa-button[aria-disabled=true].usa-focus{color:GrayText}}.usa-button:disabled.usa-button--hover,.usa-button:disabled.usa-button--active,.usa-button[aria-disabled=true].usa-button--hover,.usa-button[aria-disabled=true].usa-button--active{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1}.usa-button:disabled.usa-button--hover:hover,.usa-button:disabled.usa-button--hover:active,.usa-button:disabled.usa-button--hover:focus,.usa-button:disabled.usa-button--hover.usa-focus,.usa-button:disabled.usa-button--active:hover,.usa-button:disabled.usa-button--active:active,.usa-button:disabled.usa-button--active:focus,.usa-button:disabled.usa-button--active.usa-focus,.usa-button[aria-disabled=true].usa-button--hover:hover,.usa-button[aria-disabled=true].usa-button--hover:active,.usa-button[aria-disabled=true].usa-button--hover:focus,.usa-button[aria-disabled=true].usa-button--hover.usa-focus,.usa-button[aria-disabled=true].usa-button--active:hover,.usa-button[aria-disabled=true].usa-button--active:active,.usa-button[aria-disabled=true].usa-button--active:focus,.usa-button[aria-disabled=true].usa-button--active.usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-button:disabled.usa-button--hover,.usa-button:disabled.usa-button--active,.usa-button[aria-disabled=true].usa-button--hover,.usa-button[aria-disabled=true].usa-button--active{border:0;color:GrayText}.usa-button:disabled.usa-button--hover:hover,.usa-button:disabled.usa-button--hover:active,.usa-button:disabled.usa-button--hover:focus,.usa-button:disabled.usa-button--hover.usa-focus,.usa-button:disabled.usa-button--active:hover,.usa-button:disabled.usa-button--active:active,.usa-button:disabled.usa-button--active:focus,.usa-button:disabled.usa-button--active.usa-focus,.usa-button[aria-disabled=true].usa-button--hover:hover,.usa-button[aria-disabled=true].usa-button--hover:active,.usa-button[aria-disabled=true].usa-button--hover:focus,.usa-button[aria-disabled=true].usa-button--hover.usa-focus,.usa-button[aria-disabled=true].usa-button--active:hover,.usa-button[aria-disabled=true].usa-button--active:active,.usa-button[aria-disabled=true].usa-button--active:focus,.usa-button[aria-disabled=true].usa-button--active.usa-focus{color:GrayText}}@media (forced-colors: active){.usa-button:disabled:not(.usa-button--unstyled),.usa-button[aria-disabled=true]:not(.usa-button--unstyled){border:2px solid GrayText}}.usa-button .usa-icon{-ms-flex-negative:0;flex-shrink:0}@media (forced-colors: active){.usa-button:not(.usa-button--unstyled){border:2px solid transparent}}.usa-button--accent-cool{color:#1b1b1b;background-color:#00bde3}.usa-button--accent-cool:visited{color:#1b1b1b;background-color:#00bde3}.usa-button--accent-cool:hover,.usa-button--accent-cool.usa-button--hover{color:#1b1b1b;background-color:#28a0cb}.usa-button--accent-cool:active,.usa-button--accent-cool.usa-button--active{color:white;background-color:#07648d}.usa-button--accent-warm{color:#1b1b1b;background-color:#fa9441}.usa-button--accent-warm:visited{color:#1b1b1b;background-color:#fa9441}.usa-button--accent-warm:hover,.usa-button--accent-warm.usa-button--hover{color:white;background-color:#c05600}.usa-button--accent-warm:active,.usa-button--accent-warm.usa-button--active{color:white;background-color:#775540}.usa-button--outline{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px #005ea2;box-shadow:inset 0 0 0 2px #005ea2;color:#005ea2}.usa-button--outline:visited{color:#005ea2}.usa-button--outline:hover,.usa-button--outline.usa-button--hover{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px #1a4480;box-shadow:inset 0 0 0 2px #1a4480;color:#1a4480}.usa-button--outline:active,.usa-button--outline.usa-button--active{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px #162e51;box-shadow:inset 0 0 0 2px #162e51;color:#162e51}.usa-button--outline.usa-button--inverse{-webkit-box-shadow:inset 0 0 0 2px #dfe1e2;box-shadow:inset 0 0 0 2px #dfe1e2;color:#dfe1e2}.usa-button--outline.usa-button--inverse:visited{color:#dfe1e2}.usa-button--outline.usa-button--inverse:hover,.usa-button--outline.usa-button--inverse.usa-button--hover{-webkit-box-shadow:inset 0 0 0 2px #f0f0f0;box-shadow:inset 0 0 0 2px #f0f0f0;color:#f0f0f0}.usa-button--outline.usa-button--inverse:active,.usa-button--outline.usa-button--inverse.usa-button--active{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px white;box-shadow:inset 0 0 0 2px white;color:white}.usa-button--outline.usa-button--inverse.usa-button--unstyled{color:#005ea2;text-decoration:underline;background-color:transparent;border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;font-weight:normal;-ms-flex-pack:normal;justify-content:normal;text-align:left;margin:0;padding:0;color:#dfe1e2}.usa-button--outline.usa-button--inverse.usa-button--unstyled:visited{color:#54278f}.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover{color:#1a4480}.usa-button--outline.usa-button--inverse.usa-button--unstyled:active{color:#162e51}.usa-button--outline.usa-button--inverse.usa-button--unstyled:focus{outline:0.25rem solid #2491ff;outline-offset:0rem}.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-button--hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true].usa-button--hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled:active,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:active,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:active,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-button--active,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true].usa-button--active,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true].usa-focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true],.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--disabled{background-color:transparent;-webkit-box-shadow:none;box-shadow:none;text-decoration:underline}.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover{color:#1a4480}.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active{color:#162e51}.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true],.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:focus{color:#757575}@media (forced-colors: active){.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true],.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:focus{color:GrayText}}.usa-button--outline.usa-button--inverse.usa-button--unstyled:visited{color:#dfe1e2}.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover{color:#f0f0f0}.usa-button--outline.usa-button--inverse.usa-button--unstyled:active,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active{color:white}.usa-button--base{color:white;background-color:#71767a}.usa-button--base:hover,.usa-button--base.usa-button--hover{color:white;background-color:#565c65}.usa-button--base:active,.usa-button--base.usa-button--active{color:white;background-color:#3d4551}.usa-button--secondary{color:white;background-color:#d83933}.usa-button--secondary:hover,.usa-button--secondary.usa-button--hover{color:white;background-color:#b50909}.usa-button--secondary:active,.usa-button--secondary.usa-button--active{color:white;background-color:#8b0a03}.usa-button--big{border-radius:0.25rem;font-size:1.46rem;padding:1rem 1.5rem}.usa-button--outline:disabled,.usa-button--outline:disabled:hover,.usa-button--outline:disabled:active,.usa-button--outline:disabled:focus,.usa-button--outline[aria-disabled=true],.usa-button--outline[aria-disabled=true]:hover,.usa-button--outline[aria-disabled=true]:active,.usa-button--outline[aria-disabled=true]:focus,.usa-button--outline-inverse:disabled,.usa-button--outline-inverse:disabled:hover,.usa-button--outline-inverse:disabled:active,.usa-button--outline-inverse:disabled:focus,.usa-button--outline-inverse[aria-disabled=true],.usa-button--outline-inverse[aria-disabled=true]:hover,.usa-button--outline-inverse[aria-disabled=true]:active,.usa-button--outline-inverse[aria-disabled=true]:focus{background-color:transparent;color:#757575}.usa-button--outline:disabled,.usa-button--outline[aria-disabled=true]{-webkit-box-shadow:inset 0 0 0 2px #c9c9c9;box-shadow:inset 0 0 0 2px #c9c9c9}.usa-button--outline:disabled.usa-button--inverse,.usa-button--outline[aria-disabled=true].usa-button--inverse{-webkit-box-shadow:inset 0 0 0 2px #919191;box-shadow:inset 0 0 0 2px #919191;color:#919191}@media (forced-colors: active){.usa-button--outline:disabled.usa-button--inverse,.usa-button--outline[aria-disabled=true].usa-button--inverse{color:GrayText}}.usa-button--unstyled{color:#005ea2;text-decoration:underline;background-color:transparent;border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;font-weight:normal;-ms-flex-pack:normal;justify-content:normal;text-align:left;margin:0;padding:0}.usa-button--unstyled:visited{color:#54278f}.usa-button--unstyled:hover{color:#1a4480}.usa-button--unstyled:active{color:#162e51}.usa-button--unstyled:focus{outline:0.25rem solid #2491ff;outline-offset:0rem}.usa-button--unstyled:hover,.usa-button--unstyled.usa-button--hover,.usa-button--unstyled:disabled:hover,.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--unstyled:disabled.usa-button--hover,.usa-button--unstyled[aria-disabled=true].usa-button--hover,.usa-button--unstyled:active,.usa-button--unstyled.usa-button--active,.usa-button--unstyled:disabled:active,.usa-button--unstyled[aria-disabled=true]:active,.usa-button--unstyled:disabled.usa-button--active,.usa-button--unstyled[aria-disabled=true].usa-button--active,.usa-button--unstyled:disabled:focus,.usa-button--unstyled[aria-disabled=true]:focus,.usa-button--unstyled:disabled.usa-focus,.usa-button--unstyled[aria-disabled=true].usa-focus,.usa-button--unstyled:disabled,.usa-button--unstyled[aria-disabled=true],.usa-button--unstyled.usa-button--disabled{background-color:transparent;-webkit-box-shadow:none;box-shadow:none;text-decoration:underline}.usa-button--unstyled.usa-button--hover{color:#1a4480}.usa-button--unstyled.usa-button--active{color:#162e51}.usa-button--unstyled:disabled,.usa-button--unstyled[aria-disabled=true],.usa-button--unstyled:disabled:hover,.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--unstyled[aria-disabled=true]:focus{color:#757575}@media (forced-colors: active){.usa-button--unstyled:disabled,.usa-button--unstyled[aria-disabled=true],.usa-button--unstyled:disabled:hover,.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--unstyled[aria-disabled=true]:focus{color:GrayText}}.usa-button-group{margin-bottom:0;margin-top:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;list-style-type:none;margin-left:-0.25rem;margin-right:-0.25rem;padding-left:0}@media all and (min-width: 30em){.usa-button-group{-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:stretch;align-items:stretch;-ms-flex-direction:row;flex-direction:row}}.usa-button-group .usa-button-group{height:100%}@media all and (min-width: 30em){.usa-button-group .usa-button-group .usa-button-group__item{margin-top:0;margin-bottom:0}}.usa-button-group .usa-button-group--segmented .usa-button-group__item{margin-top:0;margin-bottom:0}.usa-button-group__item{margin:0.25rem}@media all and (min-width: 30em){.usa-button-group__item:last-child{margin-right:0}}.usa-button-group__item .usa-button{height:100%;margin-left:0;margin-right:0}.usa-button-group--segmented{-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;margin-left:0;margin-right:0}@media all and (min-width: 30em){.usa-button-group--segmented{-ms-flex-pack:start;justify-content:flex-start}}.usa-button-group--segmented .usa-button{position:relative;width:calc(100% + 2px)}@media all and (min-width: 30em){.usa-button-group--segmented .usa-button{width:auto}}.usa-button-group--segmented .usa-button:hover,.usa-button-group--segmented .usa-button:active{z-index:2}.usa-button-group--segmented .usa-button:focus{z-index:3}.usa-button-group--segmented .usa-button-group__item{margin-left:0;margin-right:0;width:100%}@media all and (min-width: 30em){.usa-button-group--segmented .usa-button-group__item{width:auto}}.usa-button-group--segmented .usa-button-group__item:first-child>.usa-button{border-top-right-radius:0;border-bottom-right-radius:0;margin-right:-1px}.usa-button-group--segmented .usa-button-group__item:last-child>.usa-button{border-top-left-radius:0;border-bottom-left-radius:0;margin-right:0;margin-left:-2px;width:calc(100% + 2px)}@media all and (min-width: 30em){.usa-button-group--segmented .usa-button-group__item:last-child>.usa-button{margin-left:-1px;width:auto}}.usa-button-group--segmented .usa-button-group__item:where(:not(:first-child):not(:last-child))>.usa-button{border-radius:0;margin-right:-1px;margin-left:-1px}.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button::before{border-right:1px solid #1a4480;bottom:0;content:\"\";display:block;height:100%;position:absolute;right:1px;top:0;width:1px;z-index:3}.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button--secondary::before{border-right-color:#b50909}.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button--accent-cool::before{border-right-color:#28a0cb}.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button--base::before{border-right-color:#565c65}.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) [class*=usa-button]:disabled::before,.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) [class*=usa-button][aria-disabled=true]::before{border-right-color:white}.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button:active::before,.usa-button-group--segmented .usa-button-group__item:where(:not(:last-child)) .usa-button--outline::before{display:none}.usa-icon{display:inline-block;fill:currentColor;height:1em;position:relative;width:1em}.usa-icon--size-3{height:1.5rem;width:1.5rem}.usa-icon--size-4{height:2rem;width:2rem}.usa-icon--size-5{height:2.5rem;width:2.5rem}.usa-icon--size-6{height:3rem;width:3rem}.usa-icon--size-7{height:3.5rem;width:3.5rem}.usa-icon--size-8{height:4rem;width:4rem}.usa-icon--size-9{height:4.5rem;width:4.5rem}.usa-js-no-click{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.usa-js-no-click .usa-modal,.usa-js-no-click .usa-modal *{pointer-events:auto;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}[data-open-modal] *{pointer-events:none}.usa-modal-wrapper{text-align:center;-webkit-transition:opacity 0.15s ease-in-out;transition:opacity 0.15s ease-in-out}.usa-modal-wrapper.is-hidden{visibility:hidden;opacity:0;position:fixed}.usa-modal-wrapper.is-visible{visibility:visible;opacity:1;position:fixed;z-index:99999}.usa-modal-overlay{background:rgba(0, 0, 0, 0.7);bottom:0;height:100%;left:0;overflow:scroll;overflow-x:hidden;padding:1.5rem;position:fixed;scroll-behavior:smooth;top:0;width:100%}.usa-modal-overlay:before{content:\"\";display:inline-block;height:100%;vertical-align:middle}.usa-modal-overlay[data-force-action=true]{pointer-events:none}.usa-modal-overlay[data-force-action=true] *{pointer-events:auto}.usa-js-loading .usa-modal-wrapper{position:absolute;left:-999em;right:auto}.usa-js-loading .usa-modal-wrapper:target{position:static}.usa-modal{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5;border-radius:0.5rem;background:white;color:#1b1b1b;display:inline-block;margin:1.25rem auto;max-width:30rem;position:relative;text-align:left;vertical-align:middle;width:100%}.usa-modal:focus{outline:none}.usa-modal__content{display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;padding-top:2rem;width:100%}.usa-modal__main{margin:0 auto;padding:0.5rem 2rem 2rem}.usa-modal-wrapper [data-close-modal]>.usa-icon,.usa-modal-wrapper [data-close-modal]>.usa-icon use{pointer-events:none !important}.usa-modal__close{-ms-flex-align:center;align-items:center;-ms-flex-item-align:end;align-self:flex-end;background-color:transparent;color:#71767a;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;font-size:0.93rem;margin:-2rem 0 0 auto;padding:0.25rem 0.25rem;width:auto}.usa-modal__close:hover,.usa-modal__close:active{background-color:transparent;color:#1b1b1b}.usa-modal__close:focus{outline-offset:0}.usa-modal__close .usa-icon{height:2rem;margin:2px 2px 0 0;width:2rem}.usa-modal__heading{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.34rem;line-height:1.4;margin-top:0}.usa-modal__footer{margin-top:1.5rem}.usa-modal--lg{max-width:55rem;width:100%}.usa-modal--lg .usa-modal__main{padding-bottom:4rem;padding-top:1.25rem;width:100%;max-width:40rem}@media all and (min-width: 40em){.usa-modal--lg .usa-modal__heading{font-family:Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;font-size:1.95rem}}.usa-js-modal--active{overflow:hidden}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}.usa-modal-alert{padding:0px;margin-left:1rem}.usa-modal__heading,.usa-modal--lg .usa-modal__heading{font-family:var(--font-serif)}.usa-modal:not(.usa-modal--lg){width:auto}.usa-modal va-button{width:100%}@media screen and (max-width: 481px){.usa-modal__content{width:85%}}:host([status=info]) .usa-modal{border-left-color:var(--vads-color-primary-alt-dark);background-color:var(--vads-color-primary-alt-lightest)}:host .usa-modal__main{position:relative;margin:0px auto}.va-modal-alert__icon{color:var(--vads-color-base-darker);position:absolute;top:32px;left:16px}:host([status=continue]) .usa-modal{border-left-color:var(--vads-color-success-dark);background-color:var(--vads-color-success-lighter)}:host([status=success]) .usa-modal{border-left-color:var(--vads-color-success-dark);background-color:var(--vads-color-success-lighter)}:host([status=warning]) .usa-modal{border-left-color:var(--vads-color-warning);background-color:var(--vads-color-gold-lightest)}:host([status=error]) .usa-modal{border-left-color:var(--vads-color-secondary-dark);background-color:var(--vads-color-secondary-lightest)}.va-modal-alert{-webkit-box-sizing:border-box;box-sizing:border-box;border-left-style:solid;border-left-width:10px;display:-ms-inline-flexbox;display:inline-flex;padding:2rem 4rem 2rem 1.5rem}:host{display:block}:host([visible]:not([visible=false])){background:rgba(50, 58, 69, 0.8);bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;left:0;overflow-y:auto;padding:0.938rem;position:fixed;scroll-behavior:smooth;text-align:center;top:0;width:100%;z-index:9001}:host([visible]:not([visible=false]))::before{content:\"\";display:inline-block;height:100%;vertical-align:middle}.va-modal-inner{background:var(--vads-color-white);bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:auto;display:inline-block;margin:0.781rem auto;max-width:25rem;position:relative;text-align:left;vertical-align:middle;width:100%}.va-modal-close{background-color:transparent;color:var(--vads-color-base-darker);font-size:1.4rem;padding:0;position:absolute;margin:1rem;right:0;top:0;width:auto;z-index:9;white-space:nowrap}.va-modal-close:hover{color:var(--vads-color-base)}.va-modal-body{margin-right:1.25rem;overflow-wrap:break-word;padding:1.25rem;word-break:break-word;word-wrap:break-word}h1{font-family:var(--font-serif);font-size:1.25rem;line-height:1.3;margin-bottom:0.3125rem;margin-top:0.9375rem}.va-modal-title{margin:0 0 1rem 0}.alert-actions button{background-color:var(--vads-color-primary);margin-top:0.5rem;margin-right:0.5rem;margin-bottom:0.5rem;white-space:nowrap}.alert-actions .button-secondary{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px var(--vads-color-primary);box-shadow:inset 0 0 0 2px var(--vads-color-primary);color:var(--vads-color-primary)}.alert-actions button:hover,.alert-actions button:focus{background-color:var(--vads-color-primary-dark)}.alert-actions .button-secondary:hover,.alert-actions .button-secondary:focus{background-color:var(--vads-color-gray-cool-light)}.va-modal-alert::before{display:block;width:auto;background:none;font-family:\"Font Awesome 5 Free\";font-size:1.25rem;margin-right:1rem;position:static;font-weight:900;height:100%;left:0;top:0}.va-modal-alert .va-modal-alert-body{display:table-cell;padding-left:1rem;padding-right:0;width:100%;vertical-align:middle}.va-modal-alert-title{margin:0 0 1.25rem 0}:host([status=continue]) .va-modal-inner{border-left-color:var(--vads-color-success-dark)}:host([status=error]) .va-modal-inner{border-left-color:var(--vads-color-secondary-dark)}:host([status=info]) .va-modal-inner{border-left-color:var(--vads-color-primary-alt-dark)}:host([status=success]) .va-modal-inner{border-left-color:var(--vads-color-success-dark)}:host([status=warning]) .va-modal-inner{border-left-color:var(--vads-color-warning)}.va-modal-alert .alert-actions{margin-top:1.5rem}.va-modal-alert .alert-actions button{margin:0}.va-modal-alert .alert-actions button+button{margin-left:1.25rem}@media (max-width: 320px){.alert-actions button{width:100%}.va-modal-alert .alert-actions{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.va-modal-alert .alert-actions button+button{margin:1rem 0 0 0}}@media screen and (max-width: 481px){:host([visible]:not([visible=false])){overflow-y:scroll}.va-modal-inner{top:0}.va-modal-alert .alert-actions{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.va-modal-alert .alert-actions button+button{margin:1rem 0 0 0}.usa-modal--lg .usa-modal__main{max-width:-webkit-fill-available;max-width:-moz-fit-content}}:host([large]:not([large=false])) .va-modal-inner{max-width:46.875rem;width:75vw}";
const VaModalStyle0 = vaModalCss;

const VaModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeEvent = createEvent(this, "closeEvent", 7);
        this.primaryButtonClick = createEvent(this, "primaryButtonClick", 7);
        this.secondaryButtonClick = createEvent(this, "secondaryButtonClick", 7);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "visible": ["watchVisibleHandler"]
    }; }
};
VaModal.style = VaModalStyle0;

const vaTelephoneCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}a{text-decoration:none;color:var(--vads-color-link);-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-property:color, background-color, border-color;transition-property:color, background-color, border-color}a:hover{background-color:rgba(0, 0, 0, 0.05);color:inherit}a:visited{color:var(--vads-color-link-visited)}.sr-only{border:0;clip:rect(0, 0, 0, 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute !important;width:1px;word-wrap:normal !important}:host{font-size:1.06rem}a{white-space:nowrap}a,a:hover{text-decoration:underline}";
const VaTelephoneStyle0 = vaTelephoneCss;

const VaTelephone = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
        this.contact = undefined;
        this.extension = undefined;
        this.notClickable = false;
        this.international = false;
        this.tty = false;
        this.sms = false;
        this.vanity = undefined;
        this.messageAriaDescribedby = undefined;
    }
    static cleanContact(contact) {
        return (contact || '').replace(/[^\d]/g, '');
    }
    static splitContact(contact) {
        const cleanedContact = VaTelephone.cleanContact(contact);
        if (cleanedContact.length === 10) {
            // const regex = /(?<area>\d{3})(?<local>\d{3})(?<last4>\d{4})/g;
            // const { area, local, last4 } = regex.exec(contact).groups;
            // *******
            // Many Veterans are still using older browsers that do not support regexp
            // named capture groups (e.g. Safari 11.0); see
            // vets-design-system-documentation #1834
            const regex = /^(\d{3})(\d{3})(\d{4})$/g;
            const result = [...regex.exec(cleanedContact)];
            return result.length === 4 ? result.slice(-3) : [cleanedContact];
        }
        return [cleanedContact];
    }
    /**
     * Format telephone number for display.
     * `international` and `extension` args only work on 10 digit contacts
     */
    static formatPhoneNumber(num, extension, international = false, vanity, tty = false) {
        const splitNumber = VaTelephone.splitContact(num);
        let formattedNum = splitNumber.join('');
        if (formattedNum.length === 10) {
            const [area, local, last4] = splitNumber;
            formattedNum = `${area}-${local}-${last4}`;
            if (international)
                formattedNum = `+1-${formattedNum}`;
            if (extension)
                formattedNum = `${formattedNum}, ext. ${extension}`;
            if (vanity) {
                formattedNum = `${area}-${local}-${vanity} (${last4})`;
            }
        }
        if (tty) {
            formattedNum = `TTY: ${formattedNum}`;
        }
        return formattedNum;
    }
    static createHref(contact, extension, sms) {
        const cleanedContact = VaTelephone.cleanContact(contact);
        const isN11 = cleanedContact.length === 3;
        // extension format ";ext=" from RFC3966 https://tools.ietf.org/html/rfc3966#page-5
        // but it seems that using a comma to pause for 2 seconds might be a better
        // solution - see https://dsva.slack.com/archives/C8E985R32/p1589814301103200
        let href = null;
        if (sms) {
            href = `sms:${cleanedContact}`;
        }
        else if (isN11) {
            href = `tel:${cleanedContact}`;
        }
        else {
            href = `tel:+1${cleanedContact}`;
        }
        return `${href}${extension ? `,${extension}` : ''}`;
    }
    handleClick() {
        this.componentLibraryAnalytics.emit({
            componentName: 'va-telephone',
            action: 'click',
            details: {
                contact: this.contact,
                extension: this.extension,
            },
        });
    }
    render() {
        const { contact, extension, notClickable, international, tty, vanity, sms, messageAriaDescribedby } = this;
        const formattedNumber = VaTelephone.formatPhoneNumber(contact, extension, international, vanity, tty);
        // Null so we don't add the attribute if we have an empty string
        const ariaDescribedbyIds = messageAriaDescribedby ? 'number-description' : null;
        return (h(Host, { key: 'c4850a9fc90f007fc8712331913edd0d102dcf91' }, notClickable ? (h(Fragment, null, h("span", { "aria-hidden": "true", "aria-describedby": ariaDescribedbyIds }, formattedNumber))) : (h("a", { "aria-describedby": ariaDescribedbyIds, href: VaTelephone.createHref(contact, extension, sms), onClick: this.handleClick.bind(this) }, formattedNumber)), messageAriaDescribedby && (h("span", { key: '6736d7ff067a3e2b0f050c0ffa75c11c36b60217', id: "number-description", class: "sr-only" }, messageAriaDescribedby))));
    }
};
VaTelephone.style = VaTelephoneStyle0;

export { VaModal as va_modal, VaTelephone as va_telephone };
