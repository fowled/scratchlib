/// <reference path="../@types/index.d.ts" />

import fetch, { Response } from "node-fetch";

async function getUserMessages(username: string) {
    try {
        if (!username) {
            throw "Parameter of type string is missing";
        } else if (typeof username !== "string") {
            throw "Parameter specified must be of type string.";
        }

        let url: string = `https://api.scratch.mit.edu/users/${username}/messages/count`;
        let response: Response = await fetch(url);
        let parsedJSON: JSON = await response.json();

        return parsedJSON;
    } catch (err) {
        throw err;
    }
}

export { getUserMessages };
