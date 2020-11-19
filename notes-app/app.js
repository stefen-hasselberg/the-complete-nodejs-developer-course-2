// const fs = require("fs");
const add = require("./utlis");
const notesFn = require("./notes");

// // fs.writeFileSync("notes.txt", "This file was created by Node.js");

// fs.appendFileSync("notes.txt", "\nThis is a new line that is appended");

// console.log(add(5, 8));
const notes = notesFn();
console.log(notes);
