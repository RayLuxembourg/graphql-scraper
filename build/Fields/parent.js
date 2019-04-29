"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selector_1 = require("../Arguments/selector");
const index_1 = require("../index");
const args = {
    selector: selector_1.selector
};
exports.parent = {
    type: index_1.ElementType,
    description: "An element's parent element.",
    resolve(element) {
        return element.parentElement;
    }
};
//# sourceMappingURL=parent.js.map