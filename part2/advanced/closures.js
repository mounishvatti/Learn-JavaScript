// closures in javascript

function outerScope() {
    const variable = "outer";
    function innerScope() {
        console.log(variable);
    }
    return innerScope;
}
const myfunc = outerScope();
myfunc();

// practical example

const myArray = [1, 2, 3, 4, 5];



