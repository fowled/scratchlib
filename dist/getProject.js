"use strict";
/// <reference path="../@types/index.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProject = void 0;
const node_fetch_1 = require("node-fetch");
function getProject(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!id) {
                throw Error("Parameter 'id of the project' is missing.");
            }
            else if (typeof id !== "string") {
                throw Error("Parameter specified must be of type string.");
            }
            let url = `https://api.scratch.mit.edu/projects/${id}`;
            let response = yield node_fetch_1.default(url);
            let parsedJSON = yield response.json();
            return parsedJSON;
        }
        catch (err) {
            return console.error('\x1b[33m%s\x1b[0m', err.stack);
        }
    });
}
exports.getProject = getProject;
