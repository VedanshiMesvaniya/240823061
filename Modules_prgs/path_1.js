const path = require('path');

console.log(path.dirname(__filename));//whole path 
console.log(path.basename(__filename));//file name 
console.log(path.extname(__filename));//extention

console.log(path.parse(__filename));//object with all details

console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));// Normalize a path

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));// Join paths

console.log(path)
