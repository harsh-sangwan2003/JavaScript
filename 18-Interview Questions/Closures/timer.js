for (var i = 0; i < 5; i++) {

    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// Sol - 1
for (var i = 0; i < 5; i++) {

    (function () {
        var j = i;
        setTimeout(() => {
            console.log(j);
        }, 1000);
    })();
}

// Sol - 2

for (let i = 0; i < 5; i++) {

    setTimeout(() => {
        console.log(i);
    }, 1000);
}