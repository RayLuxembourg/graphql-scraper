"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Fields_1 = require("./Fields");
const NodeType_1 = require("./NodeType");
console.log(Fields_1.fields);
exports.DocumentType = new graphql_1.GraphQLObjectType({
    name: 'Document',
    description: 'A DOM document.',
    interfaces: [NodeType_1.NodeType],
    fields: () => (Object.assign({}, Fields_1.fields(), { title: {
            type: graphql_1.GraphQLString,
            description: 'The page title',
            resolve(element) {
                return element.ownerDocument.title;
            },
        } })),
});
//# sourceMappingURL=DocumentType.js.map