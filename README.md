<div align="center">
    <h1><a href="https://www.npmjs.com/package/scratchlib">Scratchlib</a></h1>
    <p>A powerful <b>library</b> to interact with the <b>Scratch API</b> 🚀</p>
    <p>
        <a href="https://www.npmjs.com/package/scratchlib"><img src="https://img.shields.io/npm/v/scratchlib" alt="npm shit"></a>
        <a href="https://www.npmjs.com/package/scratchlib"><img alt="Libraries.io dependency status for latest release, scoped npm package" src="https://img.shields.io/librariesio/release/npm/scratchlib"></a>
        <a href="https://www.npmjs.com/package/scratchlib"><img alt="NPM license" src="https://img.shields.io/npm/l/scratchlib"></a>
        <a href="https://www.npmjs.com/package/scratchlib"><img alt="npm" src="https://img.shields.io/npm/dt/scratchlib"></a>
        <a href="https://travis-ci.com/github/mazzlabs/ScratchLib"><img alt="travis" src="https://travis-ci.com/mazzlabs/ScratchLib.svg?token=Cr4qTHeGpqFut83csnvB&branch=master"></a>
        <br><br>
        <a href="https://nodei.co/npm/scratchlib/"><img src="https://nodei.co/npm/scratchlib.png?downloads=true"></a>
    </p>
</div>

## Table of contents
- [About](#About)
- [Installation](#Installation)
    - [Via NPM](#NPM)
- [How to use](#How-to-use)
- [Documentation](#Documentation)
- [Contributing](#Contributing)
- [Help](#Help)

## About
**ScratchLib** is a powerful **Node.JS module** to work with the [Scratch API](https://en.scratch-wiki.info/wiki/Scratch_API_(2.0)).
It provides many *methods and properties* you never heard of, and does requests for you.

## Installation
### NPM
Open a terminal, and enter the following command: ```npm install scratchlib```

## How to use
Start by requiring the module.
```javascript
const Scratchlib = require("scratchlib");
```
Congrats - you can now access to the many properties this module offers!

## Documentation
In order to use a method, you must choose between creating an `async function` or by adding a callback with `.then()`.
<br>**`async function()`:**
```javascript
async function test() {
    try {
	    let info = await ScratchLib.getStatus();
	    console.log(info);
    } catch (err) {
        console.error(err);
    }
}

test();
```
**`.then()` callback:**
```javascript
ScratchLib.getStatus().then(info => {
	console.log(info);
}).catch(err => {
	console.error(err);
});
```
Both equals to:
```javascript
{
  version: '1d96065a1ea1d017949e2bd8e179762744d231f0',
  uptime: 1013664,
  load: [ 0.1611328125, 0.134765625, 0.09619140625 ],
  sql: { ssl: true, min: 0, max: 40 },
  cache: { connected: true, ready: true }
}
```
⚠ Don't forget to catch the promise.
```js
ScratchLib.getUserActivity().then(info => {
	console.log(info);
}).catch(err => {
	console.error(err);
});
```

```
Output: Parameter of type string is missing!
```
↪ You can get methods/documentation here: https://en.scratch-wiki.info/wiki/Scratch_API

## Contributing
You can contribute to this project by doing a PR, that are very appreciated :wink:

## Help
Do you need help? Message me on Discord: ```Mazz#4946```.
