"use strict";
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
const xmlhttprequest_1 = require("xmlhttprequest");
function getStatus() {
    return __awaiter(this, void 0, void 0, function* () {
        var xhr = new xmlhttprequest_1.xmlhttprequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let parsed = JSON.parse(this.responseText);
                let data = {
                    uptime: getDateTimestamp(parsed.uptime),
                    version: parsed.version,
                    load: [parsed.load[]],
                    sql: { ssl: parsed.sql.ssl, started: parsed.sql.ssl, min: parsed.sql.min, max: parsed.sql.max }
                };
                return data;
            }
            else if (this.readyState == 4 && this.status != 200) {
                return `Request to https://api.scratch.mit.edu/health failed. Status: ${this.status}`;
            }
        };
        xhr.open("GET", "https://api.scratch.mit.edu/health", true);
        xhr.send();
    });
}
exports.getStatus = getStatus;
function getDateTimestamp(timestamp) {
    let unix = timestamp;
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
    return formattedTime;
}
