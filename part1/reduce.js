// reduce

const arr = [1, 2, 3, 4, 5];
// shopping cart 
const sum = arr.reduce( (accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 0);

console.log(sum); // 15

const sum2 = arr.reduce( (accumulator, currentValue) => accumulator + currentValue);

console.log(sum2); // 15



