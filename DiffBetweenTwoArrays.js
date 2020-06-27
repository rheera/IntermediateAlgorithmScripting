/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.
 */

function diffArray(arr1, arr2) {
    let newArr = [];
    newArr.push(...arr1.filter(x => arr2.indexOf(x) == -1));
    newArr.push(...arr2.filter(x => arr1.indexOf(x) == -1));
    return newArr;
}

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
let testArrs = [[1, 2, 3, 5], [1, 2, 3, 4, 5]];
for (let i = 0; i < testArrs.length - 1; i+=2){
    let ans = diffArray(testArrs[i], testArrs[i+1]);
    console.log(ans);
}