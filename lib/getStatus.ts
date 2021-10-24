/// <reference path="../@types/index.d.ts" />

import fetch, { Response } from "node-fetch";

async function getStatus(proxy?: string) {
    try {
        let url: string = proxy ? `${proxy}/https://api.scratch.mit.edu/health` : "https://api.scratch.mit.edu/health";
        let response: Response = await fetch(url);
        let parsedJSON = await response.json();

        return parsedJSON;
    } catch (err) {
        throw err;
    }
}

export { getStatus };
