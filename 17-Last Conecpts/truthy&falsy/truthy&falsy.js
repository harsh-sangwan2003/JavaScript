function testTruthyFalsy(val){

    return val?console.log('Truthy'):console.log('Falsy');
}

testTruthyFalsy(false);
testTruthyFalsy("");
testTruthyFalsy(null);
testTruthyFalsy(undefined);
testTruthyFalsy(0);
testTruthyFalsy(-0);
testTruthyFalsy(NaN);