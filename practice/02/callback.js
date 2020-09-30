// Without callback

const sum_without_callback = (num1, num2) => {
  setTimeout(() => {
    let total = num1 + num2;
    return total;
  }, 2000);
};

// Simple callback example

let sayHello = (name, callback) => {
  callback(name);
};

let printName = (name) => {
  console.log(`My name is ${name}`);
};

// Calling simple callback example
sayHello("iniya", (data) => {
  console.log(data);
});
sayHello("Inba", printName);

const sum_with_callback = (num1, num2, callback) => {
  setTimeout(() => {
    let total = num1 + num2;
    callback(total);
  }, 2000);
};

// Calling without callback function
let total = sum_without_callback(1, 2);
console.log(total); // It will throw undefined

// Calling function with callback function
sum_with_callback(1, 2, (data) => {
  console.log(data); // prints 3
});
