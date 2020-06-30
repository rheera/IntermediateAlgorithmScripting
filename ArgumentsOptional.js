/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that
expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
 */

// TODO make a function to check if number 
function addTogether(...args) {
    if (args.length == 1 && typeof args[0] == "number" ){
        return function (num) {
            if (typeof num == "number"){
                return args[0] + num;
            }
            return undefined;
        }
    }
    else if (typeof args[0] == "number" && typeof args[1] == "number") {
        return args[0] + args[1];
    }
    else {
        return undefined;
    }
}

console.log(addTogether(2, 3));
console.log(addTogether(5)(7));
console.log(addTogether(2)([3]));