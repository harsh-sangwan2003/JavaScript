class Person {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    showDetails() {

        return this.name;
    }
}

class PersonChild extends Person {

    constructor() {

        super('Steve');
    }
}

let person1 = new Person('Adam', 24);
console.log(person1.showDetails());

let person2 = new PersonChild();
console.log(person2.showDetails());