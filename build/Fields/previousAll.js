"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selector_1 = require("../Arguments/selector");
const graphql_1 = require("graphql");
const index_1 = require("../index");
const args = {
    selector: selector_1.selector
};
exports.previousAll = {
    type: new graphql_1.GraphQLList(index_1.ElementType),
    description: "All of the current element's previous siblings",
    resolve(element) {
        const siblings = [];
        for (let previous = element.previousSibling; previous != null; previous = previous.previousSibling) {
            siblings.push(previous);
        }
        siblings.reverse();
        return siblings;
    },
};
//# sourceMappingURL=previousAll.js.map