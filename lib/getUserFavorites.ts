/// <reference path="../@types/index.d.ts" />

import fetch, { Response } from "node-fetch";

async function getUserFavorites(username: string) {
    try {
        if (!username) {
            throw Error("Parameter username is missing.");
        } else if (typeof username !== "string") {
            throw Error("Parameter specified must be of type string.");
        }

        let url: string = `https://api.scratch.mit.edu/users/${username}/favorites`;
        let response: Response = await fetch(url);
        let parsedJSON: JSON = await response.json();

        return parsedJSON;
    } catch (err) {
        return console.error(err.stack);
    }
}

export { getUserFavorites };
