"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const name_1 = require("../Arguments/name");
const selector_1 = require("../Arguments/selector");
const args = {
    selector: selector_1.selector,
    name: name_1.AttributeName
};
exports.attr = {
    type: graphql_1.GraphQLString,
    description: 'An attribute of the selected node (eg. `href`, `src`, etc.).',
    args,
    resolve(element, { selector, name }) {
        element = selector ? (element.querySelector(selector) || element) : element;
        if (element == null)
            return null;
        const attribute = element.attributes[name];
        if (attribute == null)
            return null;
        return attribute.value;
    },
};
//# sourceMappingURL=attr.js.map