/// <reference path="../@types/index.d.ts" />

import fetch, { Response } from "node-fetch";

async function getFeatured() {
    try {
        let url: string = "https://api.scratch.mit.edu/proxy/featured";
        let response: Response = await fetch(url);
        let parsedJSON: JSON = await response.json();

        return parsedJSON;
    } catch (err) {
        throw err;
    }
}

export { getFeatured };
