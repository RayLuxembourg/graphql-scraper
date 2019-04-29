"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const text_1 = require("./text");
const attr_1 = require("./attr");
const content_1 = require("./content");
const tag_1 = require("./tag");
const has_1 = require("./has");
const html_1 = require("./html");
const next_1 = require("./next");
const query_1 = require("./query");
const queryAll_1 = require("./queryAll");
const siblings_1 = require("./siblings");
const parent_1 = require("./parent");
const previous_1 = require("./previous");
const previousAll_1 = require("./previousAll");
// export {} from "./query"
// export {text} from "./text"
exports.fields = () => ({
    text: text_1.text,
    tag: tag_1.tag,
    attr: attr_1.attr,
    content: content_1.content,
    has: has_1.has,
    html: html_1.html,
    next: next_1.next,
    query: query_1.query,
    queryAll: queryAll_1.queryAll,
    siblings: siblings_1.siblings,
    parent: parent_1.parent,
    previous: previous_1.previous,
    previousAll: previousAll_1.previousAll
});
//# sourceMappingURL=index.js.map