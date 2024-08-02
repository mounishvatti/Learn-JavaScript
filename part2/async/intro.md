Blocking vs. Non-blocking 
-------------------------

In synchronous programming, the program will wait for a response from the
operating system before continuing. This is known as blocking. In contrast,
asynchronous programming allows the program to continue executing other
operations while waiting for a response from the operating system. This is
known as non-blocking.


What is async?
---------------

Asynchronous programming is a style of programming in which operations are
performed independently, in parallel, and asynchronously. This is in contrast
to synchronous programming, where operations are performed one after the other,
in sequence.

In this section, we will look at how to write asynchronous code in JavaScript.


What is an async function?
--------------------------

An async function is a function that returns a coroutine. A coroutine is a
special type of object that can be used to suspend a function's execution and
resume it later. When a coroutine is suspended, it can be resumed later, and
when it is resumed, it picks up where it left off.

The `async` keyword is used to declare a function as an async function. An
async function can be called as a regular function, but it can also be called
as a coroutine. When called as a coroutine, the function will return a
coroutine object. The coroutine object can be used to suspend the function's
execution and resume it later.

Here is an example of an async function:

```js
async function foo() {
  console.log('foo');
}
```

When this function is called, it will return a coroutine object. The coroutine
object can be used to suspend the function's execution and resume it later.

```js
const coro = foo();
coro.next();
```

This will print `foo` to the console, and then suspend the function's
execution.