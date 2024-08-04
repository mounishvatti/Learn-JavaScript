class Person {
  constructor(name, age) {
    this._name = name; // Use underscores to indicate private properties
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
}

const person = new Person("John", 30);

console.log(person.name); // Access the name using the getter
console.log(person.age); // Access the age using the getter

const updatedName = person.name = "John Doe"; // Set a new name using the setter
const updatedAge = person.age = 31; // Set a new age using the setter

console.log(updatedName); 
console.log(updatedAge); 
console.log()

// old ways

function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function() {
      return this._email;
    },
    set: function(value) {
      this._email = value;
    }
  });

  Object.defineProperty(this, "password", {
    get: function() {
      return this._password;
    },
    set: function(value) {
      this._password = value;
    }
  });
}

const user1 = new User("john@example.com", "123456");

console.log("email:",user1.email); // john@example.com
console.log("password:",user1.password); // 123456

console.log()
console.log("----- Updating the values -----")
console.log() 

user1.email = "john.doe@example.com";
console.log("email:",user1.email); // john.doe@example.com

user1.password = "654321";
console.log("password:",user1.password); // 654321