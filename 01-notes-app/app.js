// import 3rd party modules
const yargs = require("yargs");
const chalk = require("chalk");

// Import own modules
const notes = require("./notes");

// changing the version
yargs.version("1.1.0");

// Notes app - add, remove, read,list

// add note
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
      describe: "Describtion of note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNotes(argv.title, argv.body);
  },
});

// remove note
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Remove a note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNotes(argv.title);
  },
});

// list note
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: () => {
    notes.listNotes();
  },
});

// read a note
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Read a note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

yargs.parse();
//console.log(yargs.argv);
