/// <reference path="../@types/index.d.ts" />

import fetch, { Response } from "node-fetch";

async function getUserFollowers(username: string, proxy?: string) {
    try {
        if (!username) {
            throw Error("Parameter username is missing.");
        } else if (typeof username !== "string") {
            throw Error("Parameter specified must be of type string.");
        }

        let url: string = proxy ? `${proxy}/https://api.scratch.mit.edu/users/${username}/followers` : `https://api.scratch.mit.edu/users/${username}/followers`;
        let response: Response = await fetch(url);
        let parsedJSON = await response.json();

        return parsedJSON;
    } catch (err) {
        return console.error('\x1b[33m%s\x1b[0m', err.stack);
    }
}

export { getUserFollowers };
