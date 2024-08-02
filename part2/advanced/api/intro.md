## XMLHttpRequest

XMLHttpRequest is a powerful API that allows you to make HTTP requests from JavaScript. It is commonly used to fetch data from a server, but it can also be used to send data to a server.

XMLHttpRequest is a low-level API that provides a way to send HTTP requests and receive responses from a server. It is not as user-friendly as the newer Fetch API, but it is still a powerful tool for making HTTP requests.

XMLHttpRequest is part of the browser's built-in API and is available in all modern browsers. It is not supported in older browsers, such as Internet Explorer.

XMLHttpRequest is a more powerful and flexible alternative to the older XMLHttpRequest Level 1 API, which was deprecated in 2014.

The XMLHttpRequest object is used to make HTTP requests from JavaScript. It provides a way to send HTTP requests and receive responses from a server.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://example.com/api/data");
xhr.send();
```

## Fetch API

The Fetch API is a modern, promise-based API for making HTTP requests from JavaScript. It provides a simpler and more flexible way to make HTTP requests compared to the older XMLHttpRequest API.

The Fetch API is part of the browser's built-in API and is available in all modern browsers. It is not supported in older browsers, such as Internet Explorer.

The Fetch API is a more powerful and flexible alternative to the older XMLHttpRequest Level 1 API, which was deprecated in 2014.

The Fetch API provides a simpler and more flexible way to make HTTP requests compared to the older XMLHttpRequest API. It is part of the browser's built-in API and is available in all modern browsers. It is not supported in older browsers, such as Internet Explorer.

```js
fetch("https://example.com/api/data")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```