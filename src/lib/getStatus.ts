import fetch from "node-fetch";

async function getStatus() {
    let url = "https://api.scratch.mit.edu/health";
    let response = await fetch(url);
    let parsedJSON = await response.json();

    return parsedJSON;
}

export { getStatus };
