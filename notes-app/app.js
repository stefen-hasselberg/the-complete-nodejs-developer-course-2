const chalk = require("chalk");
const yargs = require("yargs");

const notesFn = require("./notes");

// add, remove, read, list

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("adding a new note");
  },
});

// create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("remove note");
  },
});

// create list command
yargs.command({
  command: "list",
  describe: "list all notes",
  handler: function () {
    console.log("list all notes");
  },
});

yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("read a note");
  },
});

// create read command

console.log(yargs.argv);
