function fn() {

    console.log("Hello from fn.");
}

fn.prop = "Property of function";
fn.myFn = function () {

    console.log("I am a method of fn");
}

fn();
fn.myFn();
console.log(fn);
console.log(fn.prop);

// Everything in JS is object
// => Modules, dates, functions, arrays
// 6 primitve data types -> number, string, boolean, undefined, null, symbol