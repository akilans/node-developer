// import 3rd party modules
const fs = require("fs");
const chalk = require("chalk");

// Add note logic
const addNotes = (title, body) => {
  let notes = getNotes(); // get all the notes as object

  // check for duplicate title
  //let new_notes = notes.filter((note) => note.title === title); // It loops throw all the notes
  let dupicate_note = notes.find((note) => note.title === title); // stops checking as soon it finds

  if (!dupicate_note) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes); // save note
    console.log(chalk.green.inverse("Notes added successfully..."));
  } else {
    console.log(chalk.red.inverse("Title taken already"));
  }
};

// Remove note logic

const removeNotes = (title) => {
  let notes = getNotes(); // get all the notes as object
  // check for duplicate title
  let new_notes = notes.filter((note) => note.title !== title);

  if (new_notes.length === notes.length) {
    console.log(chalk.red.inverse("Note not found..."));
  } else {
    saveNotes(new_notes); // save note
    console.log(chalk.green.inverse("Note removed successfully..."));
  }
};

// Get all the notes as objects
const getNotes = () => {
  try {
    let dataBuffer = fs.readFileSync("notes.json");
    let json_data = dataBuffer.toString();
    return JSON.parse(json_data);
  } catch (e) {
    return [];
  }
};

// list all the notes as string

const listNotes = () => {
  let notes = getNotes();
  notes.map((note) => {
    console.log(chalk.yellow(note.title) + "-" + chalk.red(note.body));
  });
};

// save note in the file
const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

// Read a note

const readNote = (title) => {
  let notes = getNotes();

  let note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.yellow(note.title) + "-" + chalk.red(note.body));
  } else {
    console.log(chalk.red.inverse(`${title} is not found...`));
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote,
};
