// closures in javascript

function outerScope() {
    const variable = "outer";
    function innerScope() {
        console.log(variable);
    }
    innerScope();
}
outerScope();

