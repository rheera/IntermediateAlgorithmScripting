/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the
two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 */

function fib(num){
    if (num == 0){
        return 0;
    }
    else if (num == 1){
        return 1;
    }
    else{
        return fib(num - 1) + fib(num - 2);
    }

}

function sumFibs(num) {
    let sum = 0;
    let i = 0;
    while(true){
        let fibNum = fib(i);
        if (fibNum > num){
            break;
        }
        if (fibNum % 2 != 0){
            sum += fibNum;
        }
        i++;
    }
    return sum;
}

sumFibs(4);
let testArrs = [10, 4, 1, 1000, 4000000, 75024, 75025];
for (let i = 0; i < testArrs.length; i++){
    let ans = sumFibs(testArrs[i]);
    console.log(ans);
}