// let, var and const are used to declare variables in JavaScript.

const accountID = 1234;
let accountName = 'John Doe';
var accountBalance = 1000;

//accountID = 5678; // Error: Assignment to constant variable.
accountName = 'Mounish Vatti'
accountBalance = 2000; 

// Difference between let and var
// let is block scoped and var is function scoped.
// let is not hoisted and var is hoisted.
// let is a new way of declaring variables in ES6.
// var is the old way of declaring variables in JavaScript.
// var can be redeclared and let cannot be redeclared.
// var can be reinitialized and let cannot be reinitialized.
// var is not a good practice to use in modern JavaScript.





// Print the variables
console.log(accountID);
console.log(accountName);
console.log(accountBalance);

console.table({accountID, accountName, accountBalance});