// Palindrome Check(Number)
// Check if a number is a palindrome

const num=121;
let real = num;
let rev = 0;
while (real > 0) {
    let digit = real % 10;
    rev = rev * 10 + digit;
    real = Math.floor(real / 10);
}
if (num === rev) {
    console.log( "palindrome.");
}
else {
    console.log(" not  palindrome.");
}