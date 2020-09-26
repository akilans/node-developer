// import 3rd party modules
const validator = require("validator");
const chalk = require("chalk");

// import own modules
const getNotes = require("./notes");
let msg = getNotes();
console.log(msg);

// Validate url,email
console.log(validator.isEmail("akil.dove@gmail.com"));
console.log(validator.isURL("https://akilan.io"));

// chalk - terminal color
console.log(chalk.green("Success!!!"));
console.log(chalk.red("Failed!!!"));
console.log(chalk.bold.green("Success!!!"));
console.log(chalk.italic.red("Failed!!!"));
console.log(chalk.bold.inverse.green("Success!!!"));
console.log(chalk.italic.inverse.red("Failed!!!"));
