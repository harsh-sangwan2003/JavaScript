let person = {

    name: 'Mrinal',
    age: 22,
    hobbies: ['Sports', 'Coding', 'Music']
}

// Shallow Copy
let person2 = Object.assign({},person);
person2.hobbies[1] = 'Programming';


console.log(person);
console.log(person2);