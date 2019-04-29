"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selector_1 = require("../Arguments/selector");
const index_1 = require("../index");
const graphql_1 = require("graphql");
const args = {
    selector: selector_1.selector
};
exports.nextAll = {
    type: new graphql_1.GraphQLList(index_1.ElementType),
    description: "All of the current element's next siblings",
    resolve(element) {
        const siblings = [];
        for (let next = element.nextSibling; next != null; next = next.nextSibling) {
            siblings.push(next);
        }
        return siblings;
    },
};
//# sourceMappingURL=nextAll.js.map