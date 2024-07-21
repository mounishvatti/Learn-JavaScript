// for of loop

const arr = [1, 2, 3, 4, 5];

for (const item of arr) {
    console.log(item);
}

// for in loop
for (const i in arr) {
    console.log(arr[i]);
}

const obj = {
    name: 'Daniel',
    age: 26,
    location: 'Lagos'
};

for (const key in obj) {
    console.log(key);
}

for (const key in obj) {
    console.log(obj[key]);
}

// for each loop

const arr2 = [1, 2, 3, 4, 5];

arr2.forEach(item => {
    console.log(item);
});


// maps

const map = new Map();

map.set('name', 'Daniel');
map.set('age', 26);
map.set('location', 'Lagos');

map.forEach((value, key) => {
    console.log(key, ':', value);
});

//console.log(map);

for(const [key, value] of map) {
    console.log(key, ':', value);
}

const myObject = {
    name: 'Daniel',
    age: 26,
    location: 'Lagos'
};

for(const key in myObject) {
    console.log(key, ':', myObject[key]);
}


const coding = ["CPP", "JavaScript", "Java", "Python"]

// coding.forEach( (item) => {
//     console.log(item);
// });

