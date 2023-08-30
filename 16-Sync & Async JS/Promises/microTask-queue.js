console.log("Program starts");

setTimeout(() => {

    console.log("I am setTimeout")
}, 1000);

Promise.resolve().then(() => {
    console.log("Promise output");
})

console.log("Program Ends.");