//Objects -> Key:value pair
let obj = {
     
    name: 'Harsh',
    lastName: 'Sangwan',
    fn: function () {

        console.log("Harsh says hi!");
    }
}
console.log(obj);
obj.fn();
obj[1] = 'p';

for (let key in obj) {

    console.log(key, " ", obj[key]);
}
