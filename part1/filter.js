// using filter in javascript

const numbers = [12, 32, 1, 33, 4, 10, 9];

// filter function

const filteredNums = numbers.filter( (num) => {
    return num > 10;
});

// or 

const filteredNums1 = numbers.filter(num => num > 10);

// or

const filteredNums2 = numbers.filter(function(num){
    return num > 10;
});

console.log(filteredNums);
console.log(filteredNums1);
console.log(filteredNums2);