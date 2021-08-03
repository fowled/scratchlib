<div align="center">
    <h1><a href="https://www.npmjs.com/package/scratchlib">Scratchlib</a></h1>
    <p>A powerful <b>library</b> to interact with the <b>Scratch API</b> 🚀</p>
    <p>
        <a href="https://github.com/mazzlabs/ScratchLib/actions/workflows/nodejs.yml"><img src="https://github.com/mazzlabs/ScratchLib/actions/workflows/nodejs.yml/badge.svg"></a>
        <a href="https://www.npmjs.com/package/scratchlib"><img src="https://img.shields.io/npm/v/scratchlib" alt="npm shit"></a>
        <a href="https://www.npmjs.com/package/scratchlib"><img alt="npm" src="https://img.shields.io/npm/dt/scratchlib"></a>
	    <img src="https://badges.depfu.com/badges/5fab262081d9c5203c68a017d4220151/overview.svg" />
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
    - [Methods](#Methods)
    - [TypeScript](#TypeScript)
    - [Web](#Web)
    - [CORS](#CORS)
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
:tada: Congrats - you can now access to the many properties this module offers!

## Documentation
In order to use a method, you must choose between creating an `async function` or by adding a callback with `.then()`. <br>

**`async function()`:**
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
:warning: Don't forget to catch the promise.
```javascript
ScratchLib.getUserFollowers().then(info => {
	console.log(info);
}).catch(err => {
	console.error(err);
});
```

```
Output: Parameter of type string is missing!
```

### Methods
• ```getFeatured()``` - Returns information regarding the projects currently visible on the front page of the website. <br>
• ```getNews()``` - Returns information regarding the "Scratch News" section of the homepage. <br>
• ```getProfile(username: string)``` - Returns information about the specified user. <br>
• ```getProject(id: string)``` - Returns information relevant to the given project. <br>
• ```getProjectsCount()``` - Returns the total number of shared projects on the Scratch website. <br> 
• ```getRoot()``` - The root of the api interface provides basic information regarding the API and the Scratch website. <br> 
• ```getStatus()``` - Used to return the status of the Scratch website. (really? :P) <br>
• ```getUserFavorites(username: string)``` - Returns an array of details regarding the projects that a given user has favourited on the website. <br> 
• ```getUserFollowers(username: string)``` - Returns a list of a user's most recent followers. <br>
• ```getUserFollowing(username: string)``` - Returns a list of the users that the specified user has most recently followed. <br> 
• ```getUserMessages(username: string)``` - This returns the number of unread messages a user currently has. <br>
• ```getUserProjects(username: string)``` - Returns an array with information regarding the projects that a given user has shared on the Scratch website. 

:warning: The following methods are returning JSON data.

### TypeScript
:bulb: This module can be used with **TypeScript**! It even provides quality types that can be auto-completed from Visual Studio Code, or any editor that supports IntelliSense/autocompletion. 

### Web
:globe_with_meridians: This library can also be used on the **Web**! You'll need help from [browserify](https://browserify.org) though.

### CORS
If you use this module in the browser, you'll probably encounter a **problem**: *CORS*, which means 'Cross-origin resource sharing'. <br>
Thanks to [@locness3](https://github.com/locness3) ([#3](https://github.com/mazzlabs/ScratchLib/issues/3)), this library now supports proxies. <br> 
You just have to specify a parameter, which *must* be equal to your proxy URL as follows: ```http://host:port```.
```javascript
ScratchLib.getFeatured("http://localhost:8080").then(info => {
	console.log(info);
}).catch(err => {
	console.error(err);
});
```

## Contributing
You can contribute to this project by doing a PR :heart:

## Help
Do you need help? Create an [issue](https://github.com/mazzlabs/ScratchLib/issues/new)!
