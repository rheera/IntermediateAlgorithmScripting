/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
 */

function binaryAgent(str) {
    // split the str into an array
    let strSplit = str.split(" ");
    // change the array of binary numbers into an array of ints
    // by using parseint and setting the second arg (radix) to 2 (binary)
    let strInt = strSplit.map(x => parseInt(x, 2));
    // return a string from the ints which are now ASCII, spread the array
    return String.fromCharCode(...strInt);

    // multiple lines is a little more clear
    //return String.fromCharCode(...str.split(" ").map(x => parseInt(x, 2)));
}

let eg1 = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(eg1);