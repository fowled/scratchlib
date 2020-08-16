import { getProfile } from "../dist/getProfile.js";

async function test() {
	let info = await getProfile("griffpatch");
	console.log(info);
}

test();