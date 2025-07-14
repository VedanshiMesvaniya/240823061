// 17. Check Perfect Number

let num = 28;
let sum = 0;

for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        sum += i;
    }
}

if (sum === num) {
    console.log("Perfect");
} else {
    console.log("NOT Perfect");
}
