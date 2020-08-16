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
exports.getUserProjects = void 0;
const node_fetch_1 = require("node-fetch");
function getUserProjects(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!username) {
                throw Error("Parameter username is missing.");
            }
            else if (typeof username !== "string") {
                throw Error("Parameter specified must be of type string.");
            }
            let url = `https://api.scratch.mit.edu/users/${username}/projects`;
            let response = yield node_fetch_1.default(url);
            let parsedJSON = yield response.json();
            return parsedJSON;
        }
        catch (err) {
            return console.error(err.stack);
        }
    });
}
exports.getUserProjects = getUserProjects;
