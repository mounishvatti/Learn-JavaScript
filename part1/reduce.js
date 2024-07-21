// reduce

const arr = [1, 2, 3, 4, 5];
// shopping cart
const sum = arr.reduce((accumulator, currentValue) => {
  console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 0);

console.log(sum); // 15

const sum2 = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum2); // 15

// shopping cart 2

const shoppingCart = [
  { item: "apple", price: 1.99 },
  { item: "banana", price: 0.49 },
  { item: "orange", price: 0.99 },
];

const totalPrice = shoppingCart.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price;
}, 0);

console.log(totalPrice.toPrecision(3)); // 3.47
