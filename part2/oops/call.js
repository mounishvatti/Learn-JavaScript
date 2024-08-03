function setUsername(username) {
    this.username = username;
}

// function User(username, email, password) {
//     this.username = setUsername(username);
//     this.email = email;
//     this.password = password;
// }

function User(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const user1 = new User("John", "john@example.com", "123456");

console.log(user1)

