// console.log(Math.PI);

// const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// descripter.writable = true;
// descripter.value = 4;
// console.log(descripter.value);

const coffee = {
  price: 100,
  description: "mocha",
  isAvailable: true
};

const rules = Object.getOwnPropertyDescriptors(coffee);
console.log(rules);

console.log(Object.getOwnPropertyDescriptor(coffee, "price"));

Object.defineProperty(coffee, "price", {
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptor(coffee, "price"));

coffee.price = 200; // won't affect the original price as we set the writable to false

console.log(coffee.price);