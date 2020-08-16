const ScratchLib = require("../index.js");
const Scratchlib = require("../index.js");

async function test() {
	let info = await ScratchLib.getUserActivity();
	console.log(info);
}

test();