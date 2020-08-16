/// <reference path="../@types/index.d.ts" />

import fetch, { Response } from "node-fetch";

async function getProject(id: string) {
    try {
        if (!id) {
            throw "Parameter of type string is missing. Please copy the ID of the project in the arg";
        } else if (typeof id !== "string") {
            throw "Parameter specified must be of type string.";
        }

        let url: string = `https://api.scratch.mit.edu/projects/${id}`;
        let response: Response = await fetch(url);
        let parsedJSON: JSON = await response.json();

        return parsedJSON;
    } catch (err) {
        throw err;
    }
}

export { getProject };
