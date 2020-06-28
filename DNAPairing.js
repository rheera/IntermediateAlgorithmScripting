/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */

function pairElement(str) {
    if (str == 'A') {
        return [["A", "T"]];
    }
    else if (str == 'T') {
        return [["T", "A"]];
    }
    else if (str == 'C') {
        return [["C", "G"]];
    }
    else if (str == 'G') {
        return [["G", "C"]];
    }
    else {
        // return pair element on the first character in the string
        // concat pair element on the rest of the string sliced one character over
        return pairElement(str[0]).concat(pairElement(str.split("").slice(1).join("")));
    }
}

function pairElementSwitch(str) {
    switch (str) {
        case "A":
            return [["A", "T"]];
        case "T":
            return [["T", "A"]];
        case "C":
            return [["C", "G"]];
        case "G":
            return [["G", "C"]];
    };
    return pairElement(str[0]).concat(pairElement(str.split("").slice(1).join("")));
}
let testArrs = ['GCG', "ATCGA", "TTGAG", "CTCTA"];
for (let i = 0; i < testArrs.length; i++){
    let ans = pairElement(testArrs[i]);
    console.log(ans);
}