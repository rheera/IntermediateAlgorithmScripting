/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */

function sumAll(arr) {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let i = arr[0]; i <= arr[1]; i++){
        sum += i;
    }
    return sum;
}
// better solution is using the sum formula (n / 2) * (first + last)
let testArrs = [[1, 4], [4, 1], [5, 10]];
for (let i = 0; i < testArrs.length; i++){
    let ans = sumAll(testArrs[i]);
    console.log(ans);
}
