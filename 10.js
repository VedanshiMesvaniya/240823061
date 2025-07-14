// 10. Count Digits in a Number

const num = 5023;
let count = 0;
let temp = num;

while (temp > 0) {
    temp = Math.floor(temp / 10);
    count++;
}
console.log(count);