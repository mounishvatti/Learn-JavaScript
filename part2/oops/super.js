class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

class Teacher extends User {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  teach(subject) {
    this.subject = subject;
  }
  intro() {
    console.log(`Hello, I'm ${this.name} and I teach ${this.subject}!`);
  }
}

class Student extends User {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  greet() {
    console.log(`Hello, ${this.name}! You are ${this.age} years old.`);
  }
}

const student = new Student('John', 20);
student.greet();

const teacher = new Teacher('Jane', 'JavaScript');
teacher.teach('JavaScript');
teacher.intro();