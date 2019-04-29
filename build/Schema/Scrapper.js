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
const DocumentType_1 = require("../DocumentType");
const jsdom_1 = require("jsdom");
exports.ScrapperSchema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            page: {
                type: DocumentType_1.DocumentType,
                args: {
                    url: {
                        type: graphql_1.GraphQLString,
                        description: 'A URL to fetch the HTML source from.',
                    },
                    source: {
                        type: graphql_1.GraphQLString,
                        description: 'A string containing HTML to be used as the source document.',
                    },
                },
                resolve(_, { url, source }) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (url == null && source == null) {
                            throw new Error('You need to provide either a URL or a HTML source string.');
                        }
                        const dom = url != null ? yield jsdom_1.JSDOM.fromURL(url) : new jsdom_1.JSDOM(source);
                        return dom.window.document.documentElement;
                    });
                },
            },
        }),
    }),
});
//# sourceMappingURL=Scrapper.js.map