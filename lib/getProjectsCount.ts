/// <reference path="../@types/index.d.ts" />

import fetch, { Response } from "node-fetch";

async function getProjectsCount(proxy?: string) {
    try {
        let url: string = proxy ? `${proxy}/https://api.scratch.mit.edu/projects/count/all` : "https://api.scratch.mit.edu/projects/count/all";
        let response: Response = await fetch(url);
        let parsedJSON: JSON = await response.json();

        return parsedJSON;
    } catch (err) {
        throw err;
    }
}

export { getProjectsCount };
