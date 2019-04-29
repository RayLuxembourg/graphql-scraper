"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selector_1 = require("../Arguments/selector");
const graphql_1 = require("graphql");
const args = {
    selector: selector_1.selector
};
exports.has = {
    type: graphql_1.GraphQLBoolean,
    description: 'Returns true if an element with the given selector exists.',
    args: { selector: selector_1.selector },
    resolve(element, { selector }) {
        return !!element.querySelector(selector);
    },
};
//# sourceMappingURL=has.js.map