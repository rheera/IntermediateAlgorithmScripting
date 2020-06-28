/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

//I thought I had to fill in the missing letter...
/*
function fearNotLetter(str) {
    let strArr = str.split("");
    let firstLetterCode = str.charCodeAt(0);
    for (let i = 1; i < strArr.length; i++){
        if (strArr[i].charCodeAt(0) != firstLetterCode + i) {
            strArr.splice(i , 0, String.fromCharCode(firstLetterCode + i));
        }
    }
    return strArr.join("");
}
 */

// return the missing letter from the range
function fearNotLetter(str) {
    let strArr = str.split("");
    let firstLetterCode = str.charCodeAt(0);
    for (let i = 1; i < strArr.length; i++){
        if (strArr[i].charCodeAt(0) != firstLetterCode + i) {
            return String.fromCharCode(firstLetterCode + i);
        }
    }
    return undefined;
}

let testArrs = ['abce', "abcdefghjklmno", "stvwx", "bcdf", "abcdefghijklmnopqrstuvwxyz"];
for (let i = 0; i < testArrs.length; i++){
    let ans = fearNotLetter(testArrs[i]);
    console.log(ans);
}
