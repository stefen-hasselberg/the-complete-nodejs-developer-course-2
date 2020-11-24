const chalk = require("chalk");
const yargs = require("yargs");

const notesFn = require("./notes");

// add, remove, read, list

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(`Title: ${argv.title} `);
    console.log(`Note body: ${argv.body}`);
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

yargs.parse();
// console.log(yargs.argv);
