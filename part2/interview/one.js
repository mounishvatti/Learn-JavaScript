function print() {
  setTimeout(function () {
    console.log(1);
  }, 1000);
  console.log("hello");
}
print();

// output
// hello
// 1

function loop() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("end");
}
loop();

// output
// end
// 6
// 6
// 6
// 6
// 6

function loop1() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("end");
}
loop1();

// output
// end
// 1
// 2
// 3
// 4
// 5

function loop2() {
  for (var i = 1; i <= 5; i++) {
    function print(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    print(i);
  }
  console.log("end");
}
loop2();

// output
// end
// 1
// 2
// 3
// 4
// 5

// This is due to the closure property of JavaScript