const user = {
    username : "sourcandy",
    age : 22,
    email : "mounishvatti@gmail.com"
}
console.log(user.age); // 22

const course = {
    courseName : "Fullstack Web Development",
    price : 1999,
    courseInstructor : "Hitesh Choudhary",
    duration : "12 weeks"
}
const {courseInstructor: instructor} = course
console.log(instructor); // Hitesh Choudhary

user.greet = function(){
    console.log(`Hello ${this.username}`);
}
console.log(user.greet()); // Hello sourcandy
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
const myCar = new Car("Eagle", "Talon TSi", 2012); 
console.log(myCar); // Car { make: 'Eagle', model: 'Talon TSi', year: 2012 }