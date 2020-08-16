const { getProfile, getStatus } = require("../index.js");

async function test() {
	let info = await getProfile("griffpatch");
	console.log(info);

	let test = await getStatus()
}

test();