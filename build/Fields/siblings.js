"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const index_1 = require("../index");
const args = {};
exports.siblings = {
    type: new graphql_1.GraphQLList(index_1.ElementType),
    description: "All elements which are at the same level in the tree as the current element, ie. the children of the current element's parent. Includes the current element.",
    resolve(element) {
        const parent = element.parentElement;
        if (parent == null)
            return [element];
        return Array.from(parent.children);
    },
};
//# sourceMappingURL=siblings.js.map