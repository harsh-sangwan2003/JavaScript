function add(a, b) {

    console.log(a);
    console.log(b);
    return a + b;
}

let curry = add.bind(this, 2);
console.log(curry(3));