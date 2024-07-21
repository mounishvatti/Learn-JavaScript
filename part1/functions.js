function sayHello() {
  console.log("Hi");
}

sayHello();

function isEven(a) {
  if (typeof a == "number") {
    if (a % 2 == 0) {
      console.log(`${a} is even`);
    } else {
      console.log(`${a} is not even`);
    }
  } else {
    console.log("Given parameter is not a number");
  }
}

const a = 2;

isEven(a);

function addTwoNum(a, b) {
  let result = a + b;
  return result;
}

const ans = addTwoNum(2, 3);
console.log(ans);

function calculateCartPrice(...prices) {
  const priceArr = prices;
  let totalPrice = 0;
  for (let i = 0; i < priceArr.length; i++) {
    totalPrice = totalPrice + priceArr[i];
  }
  return totalPrice;
}

console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
  name: "Daniel",
  age: 26,
};

user.location; // returns undefined


// const addTwo = function(num1, num2){
//     return num1+num2
// }

// console.log(addTwo(3,4));

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

const addTwo = (num1, num2) => (num1 + num2)
 
console.log(addTwo(3,4));