/// <reference path="../@types/index.d.ts" />

import fetch, { Response } from "node-fetch";

async function getNews(proxy?: string) {
    try {
        let url: string = proxy ? `${proxy}/https://api.scratch.mit.edu/news` : "https://api.scratch.mit.edu/news";
        let response: Response = await fetch(url);
        let parsedJSON: JSON = await response.json();

        return parsedJSON;
    } catch (err) {
        throw err;
    }
}

export { getNews };
