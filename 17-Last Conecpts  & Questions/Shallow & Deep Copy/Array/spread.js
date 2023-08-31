// Spread Operator Method -> Shallow Copy
let sports = ['Cricket', 'Football', 'Swimming', { a: 'Hockey', b: 'Tennis' }];
let copySports = [...sports];

copySports[1] = 'Baseball';
copySports[3]['a'] = 'Basketball';

console.log(sports);
console.log(copySports);