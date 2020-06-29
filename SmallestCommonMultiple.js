/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all
sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all
numbers between 1 and 3. The answer here would be 6.
 */

/*
function multiples(num) {
    let multipleArr = [];
    for (let i = 2; i <= Math.sqrt(num); i ++){
        if (num/i % 1 == 0){
            multipleArr.push(i);
        }
    }
    return multipleArr;
}
*/
/*
function listMultiples(num, numMax) {
    let multipleArr = [];
    let i = 1;
    while (i <= numMax){
        multipleArr.push(num * i);
        i++;
    }
    return multipleArr;
}
 */
function divisibleBy3(num) {
    let numArray = num.toString().split("");
    let numTotal = numArray.reduce((sum, x) => parseFloat(x) + (sum), 0);
    return numTotal % 3 === 0;
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

function primeFactor(num) {
    if (num == 1){
        return [1];
    }
    if (isPrime(num)){
        return [num];
    }
    for (let i = 2; i < num; i++){
        if (isPrime(i)){
            if (num % i == 0){
                return [].concat(i, primeFactor(num/i));
            }
        }
    }
}
function amtOfNum (arr, num){
    let count = 0;
    arr.forEach(function (x) {
        if (x == num){
            count++
        }
    });
    return count;
}
function removeAllOccurrences (arr, num){
    while (arr.indexOf(num) != -1){
        arr.splice(arr.indexOf(num), 1);
    }
    return arr;
}
function smallestCommons(arr) {
    let primeFactorsArr = [];
    let reduceArr = [];
    arr = arr.sort(function (a, b) {
        return a - b;
    });
    // get an array with the prime factorization of each number
    for (let i = arr[0]; i <= arr[1]; i++ ){
        primeFactorsArr.push(primeFactor(i));
    }
    primeFactorsArr.forEach(function (x) {
        for (let i = 0; i < x.length; i++){
            let amtOfNumX = amtOfNum(x, x[i]);
            if (amtOfNumX > amtOfNum(reduceArr, x[i])){
                reduceArr = removeAllOccurrences(reduceArr, x[i]);
                let j = 0;
                while (j < amtOfNumX){
                    reduceArr.push(x[i]);
                    j++;
                }
            }
        }
    });
    return reduceArr.reduce((prod, primeFact) => prod * primeFact, 1);
}


// smallestCommons([1,5]);
 console.log(smallestCommons([23, 18]));
// console.log(primeFactor(189));
// console.log(removeAllOccurrences([2, 3, 3, 4, 4, 2, 2], 1));