function createUser(username, password) {
    this.username = username;
    this.password = password;
}

createUser.prototype.greetUser = () => {
    console.log(`Hello, ${this.username}`);
}

createUser.prototype.changePassword = (newPassword) => {
    this.password = newPassword;
}

createUser.prototype.displayUser = function() {
    console.log(`Username: ${this.username}`);
    console.log(`Password: ${this.password}`);
}

// let user1 = createUser("Mounish", "123456");
// user1.greetUser();
// user1.changePassword("12345678");
// user1.displayUser();

// let user2 = createUser("Rahul", "rt456");
// user2.greetUser();
// user2.changePassword("rt456");
// user2.displayUser();

// Importance of using new keyword

let user1 = new createUser("Mounish", "123456");
user1.greetUser();
user1.changePassword("12345678");
user1.displayUser();

console.log();

let user2 = new createUser("Rahul", "rt456");
user2.greetUser();
user2.changePassword("rt456");
user2.displayUser();