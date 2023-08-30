console.log("Before");


setTimeout(() => {

    console.log("I am st1");

}, 2000);

setTimeout(() => {

    console.log("I am st2.");

}, 1000);

function sayBye() {

    console.log("Bye");
}
sayBye();

console.log("After");