// Reverse a Number

const num = 1234;
let rev = 0;

while(num > 0){
    const digit = num % 10;
    rev = (rev * 10) + digit;
    num = Math.floor(num / 10);
}