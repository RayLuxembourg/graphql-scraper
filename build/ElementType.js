"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Fields_1 = require("./Fields");
const index_1 = require("./index");
const url_1 = require("url");
const jsdom_1 = require("jsdom");
const NodeType_1 = require("./NodeType");
console.log(Fields_1.fields);
exports.ElementType = new graphql_1.GraphQLObjectType({
    name: 'Element',
    description: 'A DOM element.',
    interfaces: [NodeType_1.NodeType],
    fields: () => (Object.assign({}, Fields_1.fields(), { visit: {
            type: index_1.DocumentType,
            description: 'If the element is a link, visit the page linked to in the href attribute.',
            resolve(element) {
                return __awaiter(this, void 0, void 0, function* () {
                    const href = element.attributes['href'];
                    if (href == null) {
                        return null;
                    }
                    const url = url_1.resolve(element.ownerDocument.location.href, href.value); // handle relative links.
                    const dom = yield jsdom_1.JSDOM.fromURL(url);
                    return dom.window.document.documentElement;
                });
            },
        } })),
});
//# sourceMappingURL=ElementType.js.map