const path = require('path');

console.log(path.basename(__filename)); //filename

console.log(path.dirname(__filename)); //dirname

console.log(path.extname(__filename)); //file extension

console.log(path.parse(__filename)); //create path object

console.log(path.join(__dirname, 'test', 'hello.html')); //concatnate path