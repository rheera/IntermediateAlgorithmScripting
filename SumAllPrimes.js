/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast,
4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
 */
function divisibleBy3(num) {
    let numArray = num.toString().split("");
    let numTotal = numArray.reduce((sum, x) => parseFloat(x) + (sum), 0);
    return numTotal % 3 === 0;
}
function divisibleBy7(num) {
    let x = 0;
    let y = 0;
    x = Math.floor(num/10);
    y = num - (x * 10);
    return y;
}
function isPrime(num){
    // 2, 3, and 5 are prime
    if (num == 2 || num == 3 || num == 5){
        return true;
    }
    // if a number ends in 0, 2, 4, 5, 6, or 8 then it is not prime
    else if(/[0|2|4|5|6|8]$/.test(num.toString())){
        return false;
    }
    // sum of all the digits in a number is divisible by 3 then the number is divisible by 3
    else if (divisibleBy3(num)){
        return false;
    }
    else {
        let sqrtNum = Math.sqrt(num);
        if (sqrtNum % 1 == 0){
            return false;
        }
        for (let i = Math.floor(sqrtNum); i > 1; i--){
            if (num/i % 1 == 0){
                return false;
            }
        }
        return true;
    }
}
function sumPrimes(num) {
    let sum = 0;
    for (let i = num; i > 1; i--){
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

let testArrs = [10, 4, 1, 977];
sumPrimes(10);
for (let i = 0; i < testArrs.length; i++){
    let ans = sumPrimes(testArrs[i]);
    console.log(ans);
}