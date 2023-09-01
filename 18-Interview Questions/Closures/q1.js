(function immediateA(a) {

    return (function immediateB(B) {
        console.log(a);
    })(1);
})(0);