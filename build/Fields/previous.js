"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selector_1 = require("../Arguments/selector");
const index_1 = require("../index");
const args = {
    selector: selector_1.selector
};
exports.previous = {
    type: index_1.ElementType,
    description: "The current element's previous sibling. Includes text nodes. Equivalent to [Node.previousSibling](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling).",
    resolve(element) {
        return element.previousSibling;
    },
};
//# sourceMappingURL=previous.js.map