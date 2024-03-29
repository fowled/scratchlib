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
exports.getStatus = void 0;
const node_fetch_1 = require("node-fetch");
function getStatus(proxy) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let url = proxy ? `${proxy}/https://api.scratch.mit.edu/health` : "https://api.scratch.mit.edu/health";
            let response = yield (0, node_fetch_1.default)(url);
            let parsedJSON = yield response.json();
            return parsedJSON;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.getStatus = getStatus;
