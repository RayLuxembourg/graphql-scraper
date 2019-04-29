"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selector_1 = require("../Arguments/selector");
const graphql_1 = require("graphql");
const args = {
    selector: selector_1.selector
};
exports.html = {
    type: graphql_1.GraphQLString,
    description: 'The HTML content of the selected DOM node',
    args: { selector: selector_1.selector },
    resolve(element, { selector }) {
        element = selector ? (element.querySelector(selector) || element) : element;
        return element && element.outerHTML;
    },
};
//# sourceMappingURL=html.js.map