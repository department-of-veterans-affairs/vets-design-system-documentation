import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host, g as getElement } from './index-f0e1e12e.js';
import { c as classnames } from './index-6d7ecf98.js';

const vaSearchInputCss = "button:not([disabled]):focus,select:not([disabled]):focus,a:not([disabled]):focus,h1:focus,input:not([disabled]):focus,textarea:not([disabled]):focus,#form-question [role='option']:focus{outline:2px solid var(--vads-color-action-focus-on-light);outline-offset:2px}input,select,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0.1rem solid var(--vads-color-base-dark);border-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--vads-color-base-darkest);display:block;font-size:1.06rem;height:2.625rem;line-height:1.3;margin:0.2em 0;max-width:46rem;padding:1rem 0.7em;width:100%}.usa-sr-only{position:absolute;left:-999em;right:auto}.usa-search{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:1.5;position:relative}.usa-search::after{clear:both;content:\"\";display:block}.usa-search[role=search],.usa-search[role=search]>div,.usa-search [role=search]{display:-ms-flexbox;display:flex}.usa-search [type=submit]{border-bottom-left-radius:0;border-top-left-radius:0;height:2rem;margin:0;padding:0;width:3rem}@media all and (min-width: 30em){.usa-search [type=submit]{padding-left:1rem;padding-right:1rem;width:auto}}@media (forced-colors: active){.usa-search [type=submit]::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22%2F%3E%3C%2Fsvg%3E\");background-repeat:no-repeat;background-position:center center;background-size:1.5rem 1.5rem;display:inline-block;height:1.5rem;width:1.5rem;content:\"\";vertical-align:middle;margin-right:auto}@supports ((-webkit-mask: url(\"\")) or (mask: url(\"\"))){.usa-search [type=submit]::before{background:none;background-color:ButtonText;-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22%2F%3E%3C%2Fsvg%3E\"), -webkit-gradient(linear, left top, left bottom, from(transparent), to(transparent));mask-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2224%22 height%3D%2224%22 viewBox%3D%220 0 24 24%22%3E%3Cpath d%3D%22M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(transparent, transparent);-webkit-mask-position:center center;mask-position:center center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:1.5rem 1.5rem;mask-size:1.5rem 1.5rem}}.usa-search [type=submit]:focus{outline-offset:0}}@media (forced-colors: active) and (min-width: 30em){.usa-search [type=submit]::before{content:none}}@media all and (min-width: 30em){.usa-search__submit-icon{display:none}}@media (forced-colors: active){.usa-search__submit-icon{display:none}}@media all and (min-width: 30em){.usa-search--big [type=search],.usa-search--big .usa-search__input{font-size:1.06rem;height:3rem}}@media all and (min-width: 30em){.usa-search--big [type=submit],.usa-search--big .usa-search__submit{padding-left:2rem;padding-right:2rem;font-size:1.46rem;height:3rem;width:auto}}.usa-search--small [type=submit],.usa-search--small .usa-search__submit{padding-left:0.75rem;padding-right:0.75rem;min-width:3rem}@media (forced-colors: active) and (min-width: 30em){.usa-search--small [type=submit]::before{content:\"\"}}.usa-search--small .usa-search__submit-icon{height:1.5rem;width:1.5rem;display:block}@media (forced-colors: active){.usa-search--small .usa-search__submit-icon{display:none}}input[type=search]{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}[type=search],.usa-search__input{padding-bottom:0;padding-top:0;border-bottom-right-radius:0;border-right:none;border-top-right-radius:0;-webkit-box-sizing:border-box;box-sizing:border-box;float:left;font-size:1rem;height:2rem;margin:0}.usa-search__submit-text{display:none}@media all and (min-width: 30em){.usa-search__submit-text{display:block}}.usa-button{font-family:Source Sans Pro Web, \"Source Sans Pro\", \"Helvetica Neue\", Helvetica, Arial, sans;font-size:1.06rem;line-height:0.9;color:white;background-color:#005ea2;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-align:center;align-items:center;border:0;border-radius:0.25rem;cursor:pointer;-webkit-column-gap:0.5rem;-moz-column-gap:0.5rem;column-gap:0.5rem;display:-ms-inline-flexbox;display:inline-flex;font-weight:700;-ms-flex-pack:center;justify-content:center;margin-right:0.5rem;padding:0.75rem 1.25rem;text-align:center;text-decoration:none;width:100%}@media all and (min-width: 30em){.usa-button{width:auto}}.usa-button:visited{color:white}.usa-button:hover,.usa-button.usa-button--hover{color:white;background-color:#1a4480;border-bottom:0;text-decoration:none}.usa-button:active,.usa-button.usa-button--active{color:white;background-color:#162e51}.usa-button:not([disabled]):focus,.usa-button:not([disabled]).usa-focus{outline-offset:0.25rem}.usa-button:disabled,.usa-button[aria-disabled=true]{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1}.usa-button:disabled:hover,.usa-button:disabled:active,.usa-button:disabled:focus,.usa-button:disabled.usa-focus,.usa-button[aria-disabled=true]:hover,.usa-button[aria-disabled=true]:active,.usa-button[aria-disabled=true]:focus,.usa-button[aria-disabled=true].usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-button:disabled,.usa-button[aria-disabled=true]{border:0;color:GrayText}.usa-button:disabled:hover,.usa-button:disabled:active,.usa-button:disabled:focus,.usa-button:disabled.usa-focus,.usa-button[aria-disabled=true]:hover,.usa-button[aria-disabled=true]:active,.usa-button[aria-disabled=true]:focus,.usa-button[aria-disabled=true].usa-focus{color:GrayText}}.usa-button:disabled.usa-button--hover,.usa-button:disabled.usa-button--active,.usa-button[aria-disabled=true].usa-button--hover,.usa-button[aria-disabled=true].usa-button--active{color:#454545;background-color:#c9c9c9;cursor:not-allowed;opacity:1}.usa-button:disabled.usa-button--hover:hover,.usa-button:disabled.usa-button--hover:active,.usa-button:disabled.usa-button--hover:focus,.usa-button:disabled.usa-button--hover.usa-focus,.usa-button:disabled.usa-button--active:hover,.usa-button:disabled.usa-button--active:active,.usa-button:disabled.usa-button--active:focus,.usa-button:disabled.usa-button--active.usa-focus,.usa-button[aria-disabled=true].usa-button--hover:hover,.usa-button[aria-disabled=true].usa-button--hover:active,.usa-button[aria-disabled=true].usa-button--hover:focus,.usa-button[aria-disabled=true].usa-button--hover.usa-focus,.usa-button[aria-disabled=true].usa-button--active:hover,.usa-button[aria-disabled=true].usa-button--active:active,.usa-button[aria-disabled=true].usa-button--active:focus,.usa-button[aria-disabled=true].usa-button--active.usa-focus{color:#454545;background-color:#c9c9c9}@media (forced-colors: active){.usa-button:disabled.usa-button--hover,.usa-button:disabled.usa-button--active,.usa-button[aria-disabled=true].usa-button--hover,.usa-button[aria-disabled=true].usa-button--active{border:0;color:GrayText}.usa-button:disabled.usa-button--hover:hover,.usa-button:disabled.usa-button--hover:active,.usa-button:disabled.usa-button--hover:focus,.usa-button:disabled.usa-button--hover.usa-focus,.usa-button:disabled.usa-button--active:hover,.usa-button:disabled.usa-button--active:active,.usa-button:disabled.usa-button--active:focus,.usa-button:disabled.usa-button--active.usa-focus,.usa-button[aria-disabled=true].usa-button--hover:hover,.usa-button[aria-disabled=true].usa-button--hover:active,.usa-button[aria-disabled=true].usa-button--hover:focus,.usa-button[aria-disabled=true].usa-button--hover.usa-focus,.usa-button[aria-disabled=true].usa-button--active:hover,.usa-button[aria-disabled=true].usa-button--active:active,.usa-button[aria-disabled=true].usa-button--active:focus,.usa-button[aria-disabled=true].usa-button--active.usa-focus{color:GrayText}}@media (forced-colors: active){.usa-button:disabled:not(.usa-button--unstyled),.usa-button[aria-disabled=true]:not(.usa-button--unstyled){border:2px solid GrayText}}.usa-button .usa-icon{-ms-flex-negative:0;flex-shrink:0}@media (forced-colors: active){.usa-button:not(.usa-button--unstyled){border:2px solid transparent}}.usa-button--accent-cool{color:#1b1b1b;background-color:#00bde3}.usa-button--accent-cool:visited{color:#1b1b1b;background-color:#00bde3}.usa-button--accent-cool:hover,.usa-button--accent-cool.usa-button--hover{color:#1b1b1b;background-color:#28a0cb}.usa-button--accent-cool:active,.usa-button--accent-cool.usa-button--active{color:white;background-color:#07648d}.usa-button--accent-warm{color:#1b1b1b;background-color:#fa9441}.usa-button--accent-warm:visited{color:#1b1b1b;background-color:#fa9441}.usa-button--accent-warm:hover,.usa-button--accent-warm.usa-button--hover{color:white;background-color:#c05600}.usa-button--accent-warm:active,.usa-button--accent-warm.usa-button--active{color:white;background-color:#775540}.usa-button--outline{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px #005ea2;box-shadow:inset 0 0 0 2px #005ea2;color:#005ea2}.usa-button--outline:visited{color:#005ea2}.usa-button--outline:hover,.usa-button--outline.usa-button--hover{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px #1a4480;box-shadow:inset 0 0 0 2px #1a4480;color:#1a4480}.usa-button--outline:active,.usa-button--outline.usa-button--active{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px #162e51;box-shadow:inset 0 0 0 2px #162e51;color:#162e51}.usa-button--outline.usa-button--inverse{-webkit-box-shadow:inset 0 0 0 2px #dfe1e2;box-shadow:inset 0 0 0 2px #dfe1e2;color:#dfe1e2}.usa-button--outline.usa-button--inverse:visited{color:#dfe1e2}.usa-button--outline.usa-button--inverse:hover,.usa-button--outline.usa-button--inverse.usa-button--hover{-webkit-box-shadow:inset 0 0 0 2px #f0f0f0;box-shadow:inset 0 0 0 2px #f0f0f0;color:#f0f0f0}.usa-button--outline.usa-button--inverse:active,.usa-button--outline.usa-button--inverse.usa-button--active{background-color:transparent;-webkit-box-shadow:inset 0 0 0 2px white;box-shadow:inset 0 0 0 2px white;color:white}.usa-button--outline.usa-button--inverse.usa-button--unstyled{color:#005ea2;text-decoration:underline;background-color:transparent;border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;font-weight:normal;-ms-flex-pack:normal;justify-content:normal;text-align:left;margin:0;padding:0;color:#dfe1e2}.usa-button--outline.usa-button--inverse.usa-button--unstyled:visited{color:#54278f}.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover{color:#1a4480}.usa-button--outline.usa-button--inverse.usa-button--unstyled:active{color:#162e51}.usa-button--outline.usa-button--inverse.usa-button--unstyled:focus{outline:0.25rem solid #2491ff;outline-offset:0rem}.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-button--hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true].usa-button--hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled:active,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:active,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:active,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-button--active,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true].usa-button--active,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled.usa-focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true].usa-focus,.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true],.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--disabled{background-color:transparent;-webkit-box-shadow:none;box-shadow:none;text-decoration:underline}.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover{color:#1a4480}.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active{color:#162e51}.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true],.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:focus{color:#757575}@media (forced-colors: active){.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true],.usa-button--outline.usa-button--inverse.usa-button--unstyled:disabled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled[aria-disabled=true]:focus{color:GrayText}}.usa-button--outline.usa-button--inverse.usa-button--unstyled:visited{color:#dfe1e2}.usa-button--outline.usa-button--inverse.usa-button--unstyled:hover,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--hover{color:#f0f0f0}.usa-button--outline.usa-button--inverse.usa-button--unstyled:active,.usa-button--outline.usa-button--inverse.usa-button--unstyled.usa-button--active{color:white}.usa-button--base{color:white;background-color:#71767a}.usa-button--base:hover,.usa-button--base.usa-button--hover{color:white;background-color:#565c65}.usa-button--base:active,.usa-button--base.usa-button--active{color:white;background-color:#3d4551}.usa-button--secondary{color:white;background-color:#d83933}.usa-button--secondary:hover,.usa-button--secondary.usa-button--hover{color:white;background-color:#b50909}.usa-button--secondary:active,.usa-button--secondary.usa-button--active{color:white;background-color:#8b0a03}.usa-button--big{border-radius:0.25rem;font-size:1.46rem;padding:1rem 1.5rem}.usa-button--outline:disabled,.usa-button--outline:disabled:hover,.usa-button--outline:disabled:active,.usa-button--outline:disabled:focus,.usa-button--outline[aria-disabled=true],.usa-button--outline[aria-disabled=true]:hover,.usa-button--outline[aria-disabled=true]:active,.usa-button--outline[aria-disabled=true]:focus,.usa-button--outline-inverse:disabled,.usa-button--outline-inverse:disabled:hover,.usa-button--outline-inverse:disabled:active,.usa-button--outline-inverse:disabled:focus,.usa-button--outline-inverse[aria-disabled=true],.usa-button--outline-inverse[aria-disabled=true]:hover,.usa-button--outline-inverse[aria-disabled=true]:active,.usa-button--outline-inverse[aria-disabled=true]:focus{background-color:transparent;color:#757575}.usa-button--outline:disabled,.usa-button--outline[aria-disabled=true]{-webkit-box-shadow:inset 0 0 0 2px #c9c9c9;box-shadow:inset 0 0 0 2px #c9c9c9}.usa-button--outline:disabled.usa-button--inverse,.usa-button--outline[aria-disabled=true].usa-button--inverse{-webkit-box-shadow:inset 0 0 0 2px #919191;box-shadow:inset 0 0 0 2px #919191;color:#919191}@media (forced-colors: active){.usa-button--outline:disabled.usa-button--inverse,.usa-button--outline[aria-disabled=true].usa-button--inverse{color:GrayText}}.usa-button--unstyled{color:#005ea2;text-decoration:underline;background-color:transparent;border:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;font-weight:normal;-ms-flex-pack:normal;justify-content:normal;text-align:left;margin:0;padding:0}.usa-button--unstyled:visited{color:#54278f}.usa-button--unstyled:hover{color:#1a4480}.usa-button--unstyled:active{color:#162e51}.usa-button--unstyled:focus{outline:0.25rem solid #2491ff;outline-offset:0rem}.usa-button--unstyled:hover,.usa-button--unstyled.usa-button--hover,.usa-button--unstyled:disabled:hover,.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--unstyled:disabled.usa-button--hover,.usa-button--unstyled[aria-disabled=true].usa-button--hover,.usa-button--unstyled:active,.usa-button--unstyled.usa-button--active,.usa-button--unstyled:disabled:active,.usa-button--unstyled[aria-disabled=true]:active,.usa-button--unstyled:disabled.usa-button--active,.usa-button--unstyled[aria-disabled=true].usa-button--active,.usa-button--unstyled:disabled:focus,.usa-button--unstyled[aria-disabled=true]:focus,.usa-button--unstyled:disabled.usa-focus,.usa-button--unstyled[aria-disabled=true].usa-focus,.usa-button--unstyled:disabled,.usa-button--unstyled[aria-disabled=true],.usa-button--unstyled.usa-button--disabled{background-color:transparent;-webkit-box-shadow:none;box-shadow:none;text-decoration:underline}.usa-button--unstyled.usa-button--hover{color:#1a4480}.usa-button--unstyled.usa-button--active{color:#162e51}.usa-button--unstyled:disabled,.usa-button--unstyled[aria-disabled=true],.usa-button--unstyled:disabled:hover,.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--unstyled[aria-disabled=true]:focus{color:#757575}@media (forced-colors: active){.usa-button--unstyled:disabled,.usa-button--unstyled[aria-disabled=true],.usa-button--unstyled:disabled:hover,.usa-button--unstyled[aria-disabled=true]:hover,.usa-button--unstyled[aria-disabled=true]:focus{color:GrayText}}.usa-error-message{font-size:1.06rem}:host([error]:not([error=\"\"])){border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){border-left:none}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{border-left:0.25rem solid #b50909;padding-left:1rem;position:relative}@media screen and (min-width: 1008px){:host([error]:not([error=\"\"])){margin-left:-0.9rem}:host([error]:not([error=\"\"])[use-forms-pattern=multiple]) .input-wrap{margin-left:-0.9rem}}@media screen and (max-width: 1008px){:host([error]:not([error=\"\"])[use-forms-pattern=multiple]){padding-left:0}}:host{display:block;border:none;padding:0}.usa-input{margin-top:0}#va-search-listbox{position:absolute;top:37px;left:0;right:0;z-index:1;background-color:var(--vads-color-white);-webkit-box-shadow:0px 2px 6px 1px rgba(20, 20, 20, 0.14);box-shadow:0px 2px 6px 1px rgba(20, 20, 20, 0.14);line-height:24px;list-style-type:none;margin:0;padding:0}.va-search-suggestion{cursor:pointer;padding:8px}.va-search-suggestion[aria-selected=true],.va-search-suggestion:focus,.va-search-suggestion:hover{background-color:var(--vads-color-primary);color:var(--vads-color-white)}:host([big=true]) #va-search-listbox{top:52px}.usa-input{max-width:1024px}@media screen and (min-width: 480px){:host .usa-search [type=submit]{width:auto}}";
const VaSearchInputStyle0 = vaSearchInputCss;

const VaSearchInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
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
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["watchValueHandler"],
        "suggestions": ["watchSuggestionsHandler"]
    }; }
};
VaSearchInput.style = VaSearchInputStyle0;

export { VaSearchInput as va_search_input };
