const { getProfile } = require("../out/getProfile.js");

async function test() {
	let info = await getProfile("ma15fo43");
	console.log(info);
}

test();