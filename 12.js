// armstrongCheck.js

let num = 153; // Try changing this to 370, 9474, etc.
let sum = 0;
let temp = num;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit * digit * digit; 
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log("Armstrong number");
}
else {
    console.log("NOT an Armstrong number");
}
