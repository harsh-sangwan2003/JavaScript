let person1 = {

    name: 'Adam',
    age: 25,
}

let person2 = {

    name: 'Steve',
    age: 24
}

function showDetails(city, car) {

    console.log(`${this.name} is ${this.age} years old. He lives in ${city} and drives ${car}`);
}


let fn = showDetails.bind(person1, 'Delhi', 'Mercedes');
fn();