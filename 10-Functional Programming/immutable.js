const person1 = {

    name: 'Adam',
    Age: 25,

}

// Mutable change

// const person2 = person1;

// Immutable change

// const person2 = {...person1};

const person2 = Object.assign({},person1);
person2.name = 'Steve';
person2.Age = 24;

console.log(person1);
console.log(person2);
console.log(person1);
console.log(person2);