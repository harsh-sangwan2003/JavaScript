let person1 = {

    name: 'Steve',
    age: 25,

    showDetails: function () {

        console.log(`${this.name} is ${this.age} years old.`);
    }
}

let person2 = {

    name: 'Roger'
};

person2.__proto__ = person1;

console.log(person2.name, person2.age);
person2.showDetails();