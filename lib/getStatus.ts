/// <reference path="../@types/index.d.ts" />

import fetch, { Response } from "node-fetch";

async function getStatus() {
    let url: string = "https://api.scratch.mit.edu/health";
    let response: Response = await fetch(url);
    let parsedJSON: JSON = await response.json();

    return parsedJSON;
}

export { getStatus };
