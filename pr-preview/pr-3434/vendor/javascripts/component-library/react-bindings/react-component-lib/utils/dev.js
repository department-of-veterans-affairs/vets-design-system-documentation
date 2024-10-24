"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deprecationWarning = exports.isDevMode = void 0;
var isDevMode = function () {
    return process && process.env && process.env.NODE_ENV === 'development';
};
exports.isDevMode = isDevMode;
var warnings = {};
var deprecationWarning = function (key, message) {
    if ((0, exports.isDevMode)()) {
        if (!warnings[key]) {
            console.warn(message);
            warnings[key] = true;
        }
    }
};
exports.deprecationWarning = deprecationWarning;
//# sourceMappingURL=dev.js.map