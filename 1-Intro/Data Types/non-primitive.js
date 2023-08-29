// Array, Object, Function
// Function definition
function sayHi(params) {

    // console.log("Hello from sayHi.");
    // console.log("Params recieved :",params);

    let rval = Math.random() > 0.5 ? true : "less than 0.5";
    return rval;
}

// Function call
// sayHi(10);
// sayHi("Hello");
let rval = sayHi([1, 2, 3, 4, 5]);
console.log(rval);