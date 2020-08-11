import fetch from "node-fetch";

async function getProfile(username: string) {
    if (!username) {
        return console.error("Parameter of type string is missing");
    } else if (typeof username !== "string") {
        return console.error("Parameter specified must be of type string.");
    }

    let url = `https://api.scratch.mit.edu/users/${username}`;
    let req = await fetch(url);
    let parsedJSON = await req.json();
   
    return parsedJSON;
}

export { getProfile };
