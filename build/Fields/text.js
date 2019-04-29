"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const selector_1 = require("../Arguments/selector");
const args = {
    selector: selector_1.selector
};
exports.text = {
    type: graphql_1.GraphQLString,
    description: 'The text content of the selected DOM node',
    args,
    resolve(element, { selector }) {
        element = selector ? (element.querySelector(selector) || element) : element;
        return element && element.textContent;
    }
};
//# sourceMappingURL=text.js.map