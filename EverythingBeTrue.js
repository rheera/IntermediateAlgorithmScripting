/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need
to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
 */

function truthCheck(collection, pre) {
    /*
    collection.every(function (obj) {
        if (!obj.hasOwnProperty(pre) || !obj[pre]) {
            return false;
        }
    });*/
    for (let i = 0; i < collection.length; i++){
        if (!collection[i].hasOwnProperty(pre) || !collection[i][pre]) {
            return false;
        }
    }
    return true;
}

let eg1 = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log(eg1);
let eg2 = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
console.log(eg2);