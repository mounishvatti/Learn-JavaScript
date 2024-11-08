// object oriented programming in javascript

// object literal

const human = {
    name: "Mounish",
    age: 22,
    college: "VIT VLR",

    sayHello: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(human);
human.sayHello();


// class definition

class Person { // class definition
    constructor(name, age) { // constructor 
        this.name = name;
        this.age = age;
    }
    sayHello() { // method
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person = new Person("Mounish", 22);
// person.sayHello();


class User {
    constructor(username, password, isLoggedIn) {
        this.username = username;
        this.password = password;
        this.isLoggedIn = isLoggedIn;
    }

    greetUser() {
        console.log(`Hello, ${this.username}`);
    }
}

// you can achieve the same using functional programming as shown below
// 
// function User(username, password, isLoggedIn) {
//     this.username = username;
//     this.password = password;
//     this.isLoggedIn = isLoggedIn;

//     return this;

//     function greetUser() {
//         console.log(`Hello, ${this.username}`);
//     }
// }

function NewUser(username, password, isLoggedIn) {
    this.username = username;
    this.password = password;
    this.isLoggedIn = isLoggedIn;

    this.greetUser = function() {
        console.log(`Hello, ${this.username}`);
    }
    return this;
}

// if we use this way, we can't access the properties of the object as we are overriding the old values

// const user1 = user("Mounish", "123456", false);
// const user2 = user("Rahul", "rt456", true);
// console.log(user1);
// console.log(user2);

// hence we use the new keyword to create a new object
const user1 = new User("Mounish", "123456", false);
const user2 = new User("Rahul", "rt456", true);
const user3 = new NewUser("Madhu", "123456", true);
// console.log(user1);
// console.log(user2);

// user1.greetUser();
// user2.greetUser();
// 
console.log(user3);
user3.greetUser();


console.log(user1 instanceof User); // instance of is used to check if the object is an instance of the class or not 
console.log(user2 instanceof User);
console.log(user3 instanceof User);
console.log(user3 instanceof NewUser);

// returns true if the object is an instance of the class, else false