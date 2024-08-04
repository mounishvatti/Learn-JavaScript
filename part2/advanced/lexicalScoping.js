// lexical scoping

function foo() {
  var x = 1;
  function bar() {
    var x = 2;
    console.log(x);
  }
  bar();
}

//foo();

// what is lexical scoping?

function outerFunction() {
    const outerVariable = 'I am from outer scope';

    function innerFunction() {
        const innerVariable = 'I am from inner scope';
        console.log(outerVariable); // Accessing variable from outer scope
        console.log(innerVariable); // Accessing variable from inner scope
    }

    innerFunction();
    // console.log(innerVariable); // Uncaught ReferenceError: innerVariable is not defined
}

//outerFunction();

// let us try tweaking the code a little bit

function init(){
    const outerVariable = 'I am from outer scope';
    function innerFunction(){
        const innerVariable = 'I am from inner scope';
        console.log(outerVariable); // Accessing variable from outer scope
        console.log(innerVariable); // Accessing variable from inner scope
    }
    innerFunction();
    //console.log(innerVariable); // this cannot be accessed because we are out of its scope
    console.log(outerVariable); // this is accessible because it is declared in the outer scope and we are still in its scope
}

init();


function outer(){
    const blahh1 = "blahh1";
}

const outer1 = () => {
    const blahh2 = "blahh2";
}