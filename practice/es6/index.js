// async and await example

console.log("Starting...");

// Asynch function
let sayHello = (myName) => {
  return new Promise((success, failure) => {
    setTimeout(() => {
      console.log("Processing...");
      success({ msg: `Hello ${myName}` });
    }, 5000);
  });
};

let displayMsg = async () => {
  let message = await sayHello("Inba");
  console.log(message);
};
displayMsg();

/*
sayHello("Akilan").then((result) => {
  console.log(result);
});
*/
console.log("Finishing...");
