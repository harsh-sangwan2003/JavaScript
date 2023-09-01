// JSON.stringify Method -> Deep Copy
let sports = ['Cricket', 'Football', 'Swimming', { a: 'Hockey', b: 'Tennis' }];
let copySports = JSON.parse(JSON.stringify(sports));

copySports[1] = 'Baseball';
copySports[3]['a'] = 'Basketball';

console.log(sports);
console.log(copySports);