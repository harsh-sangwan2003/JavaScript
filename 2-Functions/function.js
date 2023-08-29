// 1. Function Statement
function sayHi(params) {

    console.log("Hello", params);
}

// Function call
sayHi();
sayHi(10);
sayHi("Hello");
sayHi([1, 2, 3, 4]);
sayHi({ name: 'Jasbir' });

// Functions are first class citizens ->
// Treated as a varaible
// 2.Function expression
let fnContainer = function () {

    console.log("I am function expression");
    console.log("I am also an anonymous function");
}

fnContainer();

// 3.IIFE -> Immediately Invoked Function Expression
// require, parameter pollution
(function () {

    console.log("I am IIFE function. I will run on my own.");
})();

// 4. Arrow Function -> Syntax, this, bind
let fn = (num) => num * num;
let res = fn(2);
console.log(res);

// Functions are treated as first class citizens->
// 1.Assignment -> Function expression
// 2.Function can be passed as a parameter -> Callbacks, Higher order function
// 3.Can be returned from a function -> closure

function outer() {

    console.log("I am outer function.");
    return function inner() {

        console.log("I am inner function");
    }
}
let fn3 = outer()();
console.log(fn3);