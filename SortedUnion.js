/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original
provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates
in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
 */

// look at Set object
// merge all arrays then turn it into a Set object, which naturally can't have any duplicates 
function uniteUnique(...arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr = newArr.concat(...arr[i].filter(x => !newArr.includes(x)));
    }
    return newArr;
}

function recursiveUniteUnique(arr){
    if (arr.length == 2){
        return arr[0].concat(...arr[1].filter(x => !arr[0].includes(x)));
    }
    else {
        return arr[0].concat(...arr[1].filter(x => !arr[0].includes(x)));
    }
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
