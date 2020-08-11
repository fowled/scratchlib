import * as fetch from "node-fetch";

async function getProfile(username: string) {
    if (!username) {
        throw "Parameter of type string is missing";
    } else if (typeof(username) !== string) {
        throw "Parameter specified must be of type string.";
    }

    let url = `https://api.scratch.mit.edu/username/${username}`;
    let req = await fetch(url);
    let parsedJSON = await req.json();
   
    return parsedJSON;
}

export { getProfile };
