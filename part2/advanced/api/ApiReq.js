const requestUrl = "https://api.github.com/users/mounishvatti";
const xhr = new XMLHttpRequest(); // create a new XMLHttpRequest object
xhr.open("GET", requestUrl); // open the request
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log("username:", data.login);
    console.log("Full Name:", data.name);
    console.log("Following:", data.following);
    console.log("Followers:", data.followers);

    document.querySelector(".avatar").src = data.avatar_url;

    document.querySelector(
      ".username"
    ).innerHTML = `<strong>Username:</strong> ${data.login}`;
    document.querySelector(
      ".fullname"
    ).innerHTML = `<strong>Full Name:</strong> ${data.name}`;
    document.querySelector(
      ".following"
    ).innerHTML = `<strong>Following:</strong> ${data.following}`;
    document.querySelector(
      ".followers"
    ).innerHTML = `<strong>Followers:</strong> ${data.followers}`;
  }
};
xhr.send();