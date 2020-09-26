// String Concatenation
// const and let
// const you can't redeclare and update
// let you can't redeclare but you can update
let myName = "Akilan";
console.log(`My name is ${myName}`);

// Arrow function with block and default variable
let sayHello = (name = "Akilan", age = 32) => {
  console.log(`My name is ${name} and I'm ${age} years old`);
};

// Arrow function with single line and default variable
let sayDiffHello = (name = "Akilan", age = 32) =>
  console.log(`My name is ${name} and I'm ${age} years old`);

// Call functions
sayHello("Inba", 2);
sayDiffHello();

// Map

// Create new list from list
let my_skills = ["PHP", "Python", "Node JS", "Bash"];

let new_skills = my_skills.map((skill, index) => {
  return `${index} - ${skill}`;
});

console.log(new_skills); //[ '0 - PHP', '1 - Python', '2 - Node JS', '3 - Bash' ]

// Filter
// Filter items from list
let programming_skills = my_skills.filter((skill) => {
  return skill != "bash";
});

console.log(programming_skills); //[ '0 - PHP', '1 - Python', '2 - Node JS', '3 - bash' ]

// sort

let sort_skills = my_skills.sort();

console.log("Sorting skills list");
console.log(sort_skills); //[ 'Bash', 'Node JS', 'PHP', 'Python' ]

// reduce
// Do some logic by looping the items in the list

let experience = [
  {
    company: "Silverzone",
    years: 1,
  },
  {
    company: "Tismo",
    years: 3,
  },
  {
    company: "infosys",
    years: 5,
  },
];

let total_years_exp = experience.reduce((total, company) => {
  return (total = total + company.years);
}, 0);

console.log(`Total years of exp ${total_years_exp}`);

// Object Literal

let getDetails = (name, location) => {
  //return { name: name, location: location };
  return { name, location };
};
let myDetails = getDetails("Akilan", "London");
console.log(myDetails); //{ name: 'Akilan', location: 'London' }

// promise then, catch
// No need to resolve and reject
// it can be anything like success and failure
let getProjects = new Promise((success, failure) => {
  //success({ name: "BP", team: "C4E" });
  failure({ error: "Error happened" });
});

getProjects
  .then((result) => console.log(result)) ///{ name: 'BP', team: 'C4E' }
  .catch((msg) => console.log(msg)); // { error: 'Error happened' }
