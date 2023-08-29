console.log(this); //-> Empty object

function fn(){

    console.log(this); //-> global
}
fn();