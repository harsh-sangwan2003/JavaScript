function myCar(brand, model, color) {

    // console.log(this); {}

    this.Brand = brand;
    this.Model = model;
    this.Color = color;

    this.drive = function () {

        console.log(`I am driving ${this.Model}`);
    }

    // console.log(this); myCar
}

let car1 = new myCar('BMW', 'X5', 'White');
let car2 = new myCar('Mercedes', 'S-class', 'Red');

car1.drive();
car2.drive();

console.log(car1);
console.log(car2);