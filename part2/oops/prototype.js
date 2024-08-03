// prototype is used to add methods to an existing object   

let myName = "Mounish        ";

String.prototype.trueLength = function() {
    let length = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== " ") {
            length++;
        }
    }
    return length;
};

console.log(myName.trueLength()); // Output: 7


// More examples

// inheritance in JavaScript - old way

// const User = {
//     name: "Mounish",
//     age: 25
// }

// const TeachingStaff = {
//     isAvailable: true,
//     teachingExperience: 5
// }


// const TAsupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingStaff // __proto__ is used to add properties to an existing object
// }



// console.log(TAsupport.makeAssignment); // Output: JS assignment
// console.log(TAsupport.isAvailable); // Output: true
// console.log(TAsupport.teachingExperience); // Output: 5


// inheritance in JavaScript - new way
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class TeachingStaff {
    constructor(isAvailable, teachingExperience) {
        this.isAvailable = isAvailable;
        this.teachingExperience = teachingExperience;
    }
}

class TAsupport extends TeachingStaff {
    constructor(makeAssignment, fullTime) {
        super(true, 5);
        this.makeAssignment = makeAssignment;
        this.fullTime = fullTime;
    }
}

const user1 = new User("Mounish", 25);
const teachingStaff1 = new TeachingStaff(true, 5);
const tas1 = new TAsupport("JS assignment", true);

console.log(user1.name); // Output: Mounish
console.log(teachingStaff1.isAvailable); // Output: true
console.log(tas1.makeAssignment); // Output: JS assignment
console.log(tas1.fullTime); // Output: true
console.log(tas1.isAvailable); // Output: true
console.log(tas1.teachingExperience); // Output: 5


// setPrototypeOf

