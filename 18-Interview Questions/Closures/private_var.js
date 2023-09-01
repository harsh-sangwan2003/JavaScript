let myFunction = (function () {

    let name = '';

    getName = function () {

        return name;
    }

    setName = function (newName) {

        name = newName;
    }

    return {

        getName,
        setName,
    }

}())

myFunction.setName('Bob');
console.log(myFunction.getName());

console.log(myFunction.name);