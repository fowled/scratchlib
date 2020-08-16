/// <reference path="../@types/index.d.ts" />

import fetch, { Response } from "node-fetch";

async function getProjectsCount() {
    try {
        let url: string = "https://api.scratch.mit.edu/projects/count/all";
        let response: Response = await fetch(url);
        let parsedJSON: JSON = await response.json();

        return parsedJSON;
    } catch (err) {
        throw err;
    }
}

export { getProjectsCount };
