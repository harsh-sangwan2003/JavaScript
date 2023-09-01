let obj = {

    name: 'Adam',
    age: 25,
    address: {
        city: 'New Delhi',
        pinCode: '110045'
    }
}

function flattenObject(obj, parent, res = {}) {

    for (let key in obj) {

        let propName = parent ? parent + "_" + key : key;

        if (typeof obj[key] == 'object') {

            flattenObject(obj[key], propName, res);
        }

        else {

            res[propName] = obj[key]
        }
    }

    return res;
}

let res = flattenObject(obj);
console.log(res);