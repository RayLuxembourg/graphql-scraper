"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const selector_1 = require("../Arguments/selector");
const args = {
    selector: selector_1.selector
};
exports.tag = {
    type: graphql_1.GraphQLString,
    description: 'The tag name of the selected DOM node',
    args,
    resolve(element, { selector }) {
        element = selector ? (element.querySelector(selector) || element) : element;
        return element && element.tagName;
    },
};
//# sourceMappingURL=tag.js.map