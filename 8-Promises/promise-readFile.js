const fs = require('fs');

console.log("Before");

let promise = fs.promises.readFile('f1.txt');
console.log(promise); //pending

promise.then(data => {

    console.log("Data is: ", data.toString());
    console.log(promise.toString()); //fulfilled

}).catch(err => {

    console.log("Error is:", err);
    console.log(promise.toString()); //rejected
})

console.log("After");