import { xmlhttprequest } from "xmlhttprequest";

async function getStatus() {
    var xhr = new xmlhttprequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let parsed = JSON.parse(this.responseText);
            let data: {} = {
                uptime: getDateTimestamp(parsed.uptime),
                version: parsed.version,
                load: [parsed.load[]],
                sql: { ssl: parsed.sql.ssl, started: parsed.sql.ssl, min: parsed.sql.min, max: parsed.sql.max }
            };

            return data;
        } else if (this.readyState == 4 && this.status != 200) {
            return `Request to https://api.scratch.mit.edu/health failed. Status: ${this.status}`;
        }
    };

    xhr.open("GET", "https://api.scratch.mit.edu/health", true);
    xhr.send();
}

function getDateTimestamp(timestamp: number) {
    let unix = timestamp;
    let date = new Date(timestamp * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;

    return formattedTime;
}

export { getStatus };
