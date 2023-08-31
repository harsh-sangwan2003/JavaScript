console.log("Program starts");

setTimeout(() => {

    console.log("I am setTimeout")
}, 10);

Promise.resolve().then(() => {
    setTimeout(() => {
        console.log("Promise ends.");
    }, 0);
})

console.log("Program Ends.");