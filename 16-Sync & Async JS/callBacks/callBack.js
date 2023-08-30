//A JavaScript callback is a function which is to be executed after another function has finished execution

function greet(personName, age, cb, cb2) {

    let msg = "Hello" + " " + personName;
    let ageOfPerson = age;

    cb(msg);
    cb2(ageOfPerson);
}

function logGreeting(msg) {

    console.log(msg);
}

function showAge(age) {

    console.log(age);
}

greet("Abhay", 25, logGreeting, showAge);