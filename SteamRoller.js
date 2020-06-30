/*
Flatten a nested array. You must account for varying levels of nesting.
 */

function steamrollArray(arr) {
    // if the argument isn't an array return it
    if (!Array.isArray(arr)) {
        return [arr];
    }
    // if the argument is an empty array, return an empty array
    if (arr.length == 0){
        return [];
    }
    // if the array only contains a item no need to concat the rest
    if (arr.length == 1){
        return steamrollArray(arr[0]);
    }
    // steam roll the first item in the array and join that with steamroll(arr shifter over one)
    else {
        return steamrollArray(arr[0]).concat(steamrollArray(arr.slice(1)));
    }
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [2]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
