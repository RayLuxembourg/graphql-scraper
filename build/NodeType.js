"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Fields_1 = require("./Fields");
console.log(Fields_1.fields);
exports.NodeType = new graphql_1.GraphQLInterfaceType({
    name: 'Node',
    description: 'A DOM node (either an Element or a Document).',
    fields: Fields_1.fields
});
//# sourceMappingURL=NodeType.js.map