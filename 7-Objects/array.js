let arr = [1, 2, 3, 4, 5];
arr.myProp = "Hello";
arr.Print = function () {

    console.log("Hello from array.");
}

arr[95] = 100;

for (let key in arr) {

    console.log(key, ":", arr[key])
}

console.log(arr.length);