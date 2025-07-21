//Synchronous version

const fs = require('fs');

console.log("1. Levi is writing mission log...");

const data = fs.readFileSync('file.txt'); // BLOCKS here until file is read
console.log("2. File content:", data.toString());

console.log("3. Levi goes back to killing titans 🗡️");



// Async version

const fs = require('fs');

console.log("1. Levi is writing mission log...");

fs.readFile('file.txt', (err, data) => {
    console.log("2. File content:", data.toString()); // Async
});

console.log("3. Levi goes back to killing titans 🗡️");