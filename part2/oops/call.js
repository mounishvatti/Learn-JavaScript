// what does call do?

function setUsername(username) {
    this.username = username;
}

// function User(username, email, password) {
//     this.username = setUsername(username);
//     this.email = email;
//     this.password = password;
// }

function User(username, email, password) {
    setUsername.call(this, username); // call is used here to set username to the current context
    this.email = email;
    this.password = password;
}

const user1 = new User("John", "john@example.com", "123456");

console.log(user1)

