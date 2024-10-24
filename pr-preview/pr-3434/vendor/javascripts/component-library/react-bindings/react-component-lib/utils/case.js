"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelToDashCase = exports.dashToPascalCase = void 0;
var dashToPascalCase = function (str) {
    return str
        .toLowerCase()
        .split('-')
        .map(function (segment) { return segment.charAt(0).toUpperCase() + segment.slice(1); })
        .join('');
};
exports.dashToPascalCase = dashToPascalCase;
var camelToDashCase = function (str) { return str.replace(/([A-Z])/g, function (m) { return "-".concat(m[0].toLowerCase()); }); };
exports.camelToDashCase = camelToDashCase;
//# sourceMappingURL=case.js.map