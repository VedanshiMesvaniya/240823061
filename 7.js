// Reverse a Number

// let num = 1234;
// let rev = 0;

// while (num > 0) {
//     let digit = num % 10;
//     console.log("digit:", digit);
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
// }
// console.log(rev);



// reverseNumber.js

let number = 1234;
let reverse = 0;

while (number > 0) {
    let digit = number % 10;     
    // console.log("Digit:", digit);         
    reverse = reverse * 10 + digit; 
    // console.log("Reverse so far:", reverse);       
    number = Math.floor(number / 10);      
}

console.log(reverse);
