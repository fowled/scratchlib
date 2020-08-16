const ScratchLib = require("../index.js");
const Scratchlib = require("../index.js");

ScratchLib.getUserMessages().then(info => {
	console.log(info);
}).catch(err => {
	console.error(err);
});
