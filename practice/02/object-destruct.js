const mydetails = {
  name: "Akilan",
  age: 32,
  location: "London",
};

// get properties and store is as a varible
// rename property variable
// assign a new variable
const { name, age, location: work_location, company = "Infosys" } = mydetails;

console.log(
  `Hi, My name is ${name}. I'm ${age} years old. I am currently working in ${company}, ${work_location}`
);

const getDetails = ({
  name,
  age,
  location: work_location,
  company = "Infosys",
}) => {
  console.log(
    `Hi, My name is ${name}. I'm ${age} years old. I am currently working in ${company}, ${work_location}`
  );
};

getDetails(mydetails);
