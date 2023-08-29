// Object -> Key value pair (group)
// key: value -> Property
// key: function -> Method
let cap = {

    name: "Steve",
    lastName: "Rogers",
    address: {

        city: "Manhatten",
        state: "New York"
    },
    age: 35,
    isAveneger: true,
    sayHi: function () {

        console.log("Caps say hi.");
    }

}

console.log(cap.name);
console.log(cap.age);
cap.sayHi();
console.log(cap.address);

// Set/Update
cap.age = 36;
cap.isAveneger = false;
cap.friends = ['Tony', 'Bruce', 'Peter'];

console.log(cap.age);
console.log(cap.isAveneger);
console.log(cap.friends);

// Delete/Remove
delete cap.address;

console.log(cap.address);

for(let key in cap){

    console.log(cap[key]);
}

let propKey = "age";
console.log(cap[propKey]);