/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
    let splitStr = str.split("");
    let testRegex = /[A-Z]/;
    //start at the second element since the first word doesn't need a space in front of it
    for (let i = 1; i < splitStr.length; i++){
        //insert a space in front of every capital letter
        if (testRegex.test(splitStr[i]) == true){
            splitStr.splice(i, 0, " ");
            //since we inserted an element we need to the increment the array by 2
            i++;
        }
    }
    return splitStr.join("").replace(/\s+|_\s/g, "-").toLowerCase();
}
//from freeCodeCamp
function spinalCaseBetter(str) {
    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}
let testArrs = ['This Is Spinal Tap', "The_Andy_Griffith_Show", "AllThe-small Things", "thisIsSpinalTap"];
for (let i = 0; i < testArrs.length; i++){
    let ans = spinalCase(testArrs[i]);
    console.log(ans);
}