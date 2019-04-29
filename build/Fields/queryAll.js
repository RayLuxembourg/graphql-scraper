"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const selector_1 = require("../Arguments/selector");
const index_1 = require("../index");
const args = {
    selector: selector_1.selector
};
exports.queryAll = {
    type: new graphql_1.GraphQLList(index_1.ElementType),
    description: 'Equivalent to [Element.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll). The selectors of any nested queries will be scoped to the resulting elements.',
    args: { selector: selector_1.selector },
    resolve(element, { selector }) {
        return Array.from(element.querySelectorAll(selector));
    },
};
//# sourceMappingURL=queryAll.js.map