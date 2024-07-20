const user = {
    username : "sourcandy",
    age : 22,
    email : "mounishvatti@gmail.com"
}

console.log(user.age);

user.greet = function(){
    console.log(`Hello ${this.username}`);
}

console.log(user.greet());

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

const myCar = new Car("Eagle", "Talon TSi", 2012);


console.log(myCar);