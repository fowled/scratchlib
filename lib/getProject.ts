/// <reference path="../@types/index.d.ts" />

import fetch, { Response } from "node-fetch";

async function getProject(id: string, proxy?: string) {
    try {
        if (!id) {
            throw Error("Parameter 'id of the project' is missing.");
        } else if (typeof id !== "string") {
            throw Error("Parameter specified must be of type string.");
        }

        let url: string = proxy ? `${proxy}/https://api.scratch.mit.edu/projects/${id}` : `https://api.scratch.mit.edu/projects/${id}`;
        let response: Response = await fetch(url);
        let parsedJSON = await response.json();

        return parsedJSON;
    } catch (err) {
        return console.error('\x1b[33m%s\x1b[0m', err.stack);
    }
}

export { getProject };
