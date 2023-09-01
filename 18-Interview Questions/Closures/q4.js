for (var i = 0; i < 3; i++) {

    delay(i);
}

function delay(i) {

    setTimeout(() => {
        console.log(i);
    }, 1000)
}