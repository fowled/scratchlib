/// <reference path="../@types/index.d.ts" />

import fetch, { Response } from "node-fetch";

async function getStatus() {
    try {
        let url: string = "https://api.scratch.mit.edu/health";
        let response: Response = await fetch(url);
        let parsedJSON: JSON = await response.json();

        return parsedJSON;
    } catch (err) {
        throw err;
    }
}

export { getStatus };