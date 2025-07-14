// Find GCD(HCF)
// Definition: Calculate the greatest common divisor of two numbers.

const a = 20;
const b = 28;
const c= (a > b) ? a : b;
let gcd = 1;
for (let i = 1; i <= c; i++) {
    if (a % i === 0 && b % i === 0) {
        gcd = i;
    }   
}
console.log(gcd);