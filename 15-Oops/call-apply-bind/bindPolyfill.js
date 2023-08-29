let person1 = {

    name: 'Adam',
    age: 25
}

let showDetails = function (city, state) {

    console.log(`${this.name}  ${this.age} ${city} ${state}.`);
}

Function.prototype.myBind = function (...args) {

    let obj = this;
    params = args.slice(1);

    return function (...args2) {

        obj.apply(args[0], [...params, ...args2]);
    }
}

let fn = showDetails.myBind(person1);
fn("Delhi", "New Delhi");