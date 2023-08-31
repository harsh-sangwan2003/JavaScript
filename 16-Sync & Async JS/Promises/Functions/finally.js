var loader = true;

function test() {

    var a = 1 + 1;
    return new Promise(function (resolve, reject) {

        if (a === 2) {

            resolve('Promise resolved Yesss!!!');
        }

        else {

            reject('Promise rejected Noooo!!!');
        }
    })
}

test().then((val) => {

    console.log(val);

}).catch(err => {

    console.log(err);
}).finally(() => {

    loader = false;
})