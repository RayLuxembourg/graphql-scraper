"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const selector_1 = require("../Arguments/selector");
const args = {
    selector: selector_1.selector
};
exports.content = {
    type: graphql_1.GraphQLString,
    description: 'The HTML content of the subnodes',
    args,
    resolve(element, { selector }) {
        element = selector ? (element.querySelector(selector) || element) : element;
        return element && element.innerHTML;
    }
};
//# sourceMappingURL=content.js.map