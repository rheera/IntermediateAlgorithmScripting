/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the
function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */

function dropElements(arr, func) {
    // if array is empty return the arr
    if (arr.length == 0){
        return arr;
    }
    // if the function on the first element of the array is true return the array
    if (func(arr[0])){
        return arr;
    }
    // the array isn't empty and the function wasn't true for the first element so
    else {
        // remove the first element and try again
        arr.splice(0, 1);
        return dropElements(arr, func);
    }
    return arr;
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
