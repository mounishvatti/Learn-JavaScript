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

const myCoding = [
    {
        name: 'C++',
        language: 'cpp'
    },
    {
        name: 'JavaScript',
        language: 'js'
    },
    {
        name: 'Java',
        language: 'java'
    },
    {
        name: 'Python',
        language: 'python'
    }
]

myCoding.forEach( (item) => {
    console.log(item.language);
});


const myNums = [1, 2, 3, 4, 5];

const newNums = myNums.filter( (num) => {
    return num % 2 === 0;
});

console.log(newNums);

const myNums2 = [];

myNums.forEach( (num) => {
    if(num % 2 === 0) {
        myNums2.push(num);
    }
});


const Books = [
    {
        name: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925
    },
    {
        name: 'The Catcher in the Rye',
        author: 'J. D. Salinger',
        year: 1951
    },
    {
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960
    },
    {
        name: '1984',
        author: 'George Orwell',
        year: 1949
    },
    {
        name: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813
    }
];

Books.forEach( (book) => {
    console.log(book.name);
});

Books.forEach( (book) => {
    console.log(book.name, book.author);
});

Books.forEach( (book) => {
    console.log(book.name, book.author, book.year);
});


const myBooks = Books.filter( (book) => {
    return book.year > 1900;
});

console.log(myBooks);

// const myBooks2 = [];

// Books.forEach( (book) => {
//     if(book.year > 1900) {
//         myBooks2.push(book);
//     }
// });

// console.log(myBooks2);

// const myBooks3 = [];

// Books.forEach( (book) => {
//     if(book.year > 1900) {
//         myBooks3.push(book.name);
//     }

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const newNumArr = numArr
                    .map ( (num) => num * 10)
                    .map ( (num) => num + 1);

console.log(newNumArr);

