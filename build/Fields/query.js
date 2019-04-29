"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selector_1 = require("../Arguments/selector");
const index_1 = require("../index");
const args = {
    selector: selector_1.selector
};
exports.query = {
    type: index_1.ElementType,
    description: 'Equivalent to [Element.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector). The selectors of any nested queries will be scoped to the resulting element.',
    args,
    resolve(element, { selector }) {
        return element.querySelector(selector);
    },
};
//# sourceMappingURL=query.js.map