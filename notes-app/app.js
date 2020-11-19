const chalk = require('chalk');
const notesFn = require('./notes');

const notes = notesFn();
console.log(notes);

console.log(chalk.bold.green('Success'));
