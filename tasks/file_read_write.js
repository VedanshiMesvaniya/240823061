const fs= require('fs');

//wirte in file 

fs.writeFileSync('file2.txt', 'This is a test file created by Levi Ackerman.');

console.log("File created successfully!");

//read file 

const data = fs.readFileSync('file2.txt');
console.log("File content:", data.toString());

//append file

fs.appendFileSync('file2.txt', '\nLevi Ackerman is the strongest soldier.');
console.log("File updated successfully!");

