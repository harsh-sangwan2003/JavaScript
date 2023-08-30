function createSetInterval() {

    let intervalId = 0;
    let intervalMap = {};

    function setIntervalPolyfill(callback, delay = 0, ...args) {

        var id = intervalId++;

        function repeat() {

            intervalMap[id] = setTimeout(() => {

                callback(...args);

                if (intervalMap[id])
                    repeat();

            }, delay);
        }

        repeat();
        return id;
    }

    function clearIntervalPolyfill(intervalId) {

        clearTimeout(intervalMap[intervalId]);
        delete intervalMap[intervalId];
    }

    return {

        setIntervalPolyfill,
        clearIntervalPolyfill
    }
}

const {
    setIntervalPolyfill,
    clearIntervalPolyfill
} = createSetInterval();

let intervalId;
let counter = 0;


function sayHi() {

    counter++;
    console.log('Hello');

    if (counter >= 3)
        clearIntervalPolyfill(intervalId);
}

intervalId = setIntervalPolyfill(sayHi, 2000);

console.log("Bye");