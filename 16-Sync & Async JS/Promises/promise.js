const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function customPromise(executor) {

    let state = PENDING;
    let value = null;
    let handlers = [];
    let catchers = [];

    function resolve(result) {

        if (state !== PENDING) return;

        state = FULFILLED;
        value = result;

        handlers.forEach(h => h(value));
    }

    function reject(err) {

        if (state !== PENDING) return;

        state = REJECTED;
        value = err;

        catchers.forEach(c => c(err));
    }

    this.then = function (callback) {

        if (state === FULFILLED)
            callback(value);

        else
            handlers.push(callback);
    }

    this.catch = function (callback) {

        if (state === REJECTED)
            callback(value);

        else
            catchers.push(callback);
    }

    executor(resolve, reject);
}

const dowWork = (res, rej) => {

    if (2 == 3)
        setTimeout(() => { res('Promise resolved hello.') }, 1000);

    else
        setTimeout(() => { rej('Promise rejected bye.') }, 1000);
}

let greetMsg = new customPromise(dowWork);
greetMsg.then((val) => {

    console.log('then log', val);
});
greetMsg.catch((err) => {

    console.log('catch log', err);
})