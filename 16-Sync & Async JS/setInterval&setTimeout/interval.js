let intervalId;
let counter = 0;


function sayHi() {

    counter++;
    console.log('Hello');

    if (counter >= 3)
        clearInterval(intervalId);
}

intervalId = setInterval(sayHi, 2000);

console.log("Bye");