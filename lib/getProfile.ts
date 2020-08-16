/// <reference path="../@types/index.d.ts" />

import fetch, { Response } from "node-fetch";

async function getProfile(username: string) {
    try {
        if (!username) {
            throw Error("Parameter username is missing.");
        } else if (typeof username !== "string") {
            throw Error("Parameter specified must be of type string.");
        }

        let url = `https://api.scratch.mit.edu/users/${username}`;
        let req: Response = await fetch(url);
        let parsedJSON = await req.json();

        return parsedJSON;
    } catch (err) {
        return console.error(err.stack);
    }
}

export { getProfile };
