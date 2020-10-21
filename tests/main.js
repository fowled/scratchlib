const ScratchLib = require("../index.js");
require("dotenv").config();

ScratchLib.getFeatured("http://localhost:8080").then(info => {
	console.log(info);
}).catch(err => {
	console.error(err);
});
