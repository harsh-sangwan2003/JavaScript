let person = {

    name: 'Mrinal',
    age: 22,
    hobbies: ['Sports', 'Coding', 'Music']
}

// Deep Copy
let person2 = JSON.parse(JSON.stringify(person));
person2.hobbies[1] = 'Programming';


console.log(person);
console.log(person2);