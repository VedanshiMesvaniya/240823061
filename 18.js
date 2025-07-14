// 18. Print All Divisors

const num=10;
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        console.log(i);
    }   
}