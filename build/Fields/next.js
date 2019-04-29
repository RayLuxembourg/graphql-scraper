"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selector_1 = require("../Arguments/selector");
const index_1 = require("../index");
const args = {
    selector: selector_1.selector
};
exports.next = {
    type: index_1.ElementType,
    description: "The current element's next sibling. Includes text nodes. Equivalent to [Node.nextSibling](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling).",
    resolve(element) {
        return element.nextSibling;
    }
};
//# sourceMappingURL=next.js.map