// Import core filesystem module
const fs = require("fs");

// Import Own module
const add = require("./utils.js");

console.log(add(2, 3));

// Create a file if exists
// Append data if the file exists

console.log(fs.existsSync("notes.txt"));

if (fs.existsSync("notes.txt")) {
  console.log("Appending into a file");
  fs.appendFileSync("notes.txt", "\nI am working as a DevOps Engineer");
} else {
  console.log("Creating a file");
  fs.writeFileSync("notes.txt", "Hi I am Akilan from Tamilnadu");
  fs.appendFileSync("notes.txt", "\nI am working as a DevOps Engineer");
}
