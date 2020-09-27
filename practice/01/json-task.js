const fs = require("fs");

let dataBuffer = fs.readFileSync("akilan.json");
let json_data = dataBuffer.toString();

console.log(typeof json_data);

let data_object = JSON.parse(json_data);
console.log(data_object.name);

data_object.name = "Inba";
data_object.location = "Avudaiyanoor";
data_object.age = 2;
console.log(data_object);

fs.writeFileSync("inba.json", JSON.stringify(data_object));
