// object oriented programming in javascript

class Person { // class definition
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
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

// if we use this way, we can't access the properties of the object as we are overriding the old values

// const user1 = user("Mounish", "123456", false);
// const user2 = user("Rahul", "rt456", true);
// console.log(user1);
// console.log(user2);

// hence we use the new keyword to create a new object
const user1 = new User("Mounish", "123456", false);
const user2 = new User("Rahul", "rt456", true);
console.log(user1);
console.log(user2);

user1.greetUser();
user2.greetUser();