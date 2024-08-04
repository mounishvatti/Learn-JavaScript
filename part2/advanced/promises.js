const promiseOne = new Promise(function (resolve, reject) {
  // Do something asynchronous
  // DB calls, cryptoghraphy calls, network calls, etc.
  setTimeout(function () {
    console.log("Async operation completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// both are same thing

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Mounish Vatti", email: "mounish@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Mounish Vatti", email: "mounish@example.com" });
    } else {
      reject("Error - something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // chained promises
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise 4 is either resolved or rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "sourcandy", password: "1234" });
    } else {
      reject("ERROR - JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("ERROR:", error);
  }
}

getAllUsers();

// same as above without async/await

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR:", error));

// expanded version of the same code as above

fetch("https://api.github.com/users/mounishvatti")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // chained promises (collects data from the previous return statement)
    console.log(data);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });

// Why fetch is processed at the earliest even though it is async?

//Ans: all the fetch calls are sent to the call-back queue (priority queue) hence the order of execution makes sure that the fetch is processed first.
