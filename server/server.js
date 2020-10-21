/**
 * Creates a server running with cors-anywhere.
 * Use this only if you know what server proxies and CORS are.
 * How to use it? Simply launch the server from your terminal as you would launch a node application.
 * If you don't have environment variables set up, it will automatically launch the server to http://localhost:8080, but you can change it to whatever you want.
 * This file isn't intented to be changed or even launched: it is part of the ScratchLib tests library. I suggest you creating your own server file.
 * 
 * @this {createServer}
 */

const { createServer } = require("cors-anywhere");
require("dotenv").config();

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

createServer({
    originWhitelist: [],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});