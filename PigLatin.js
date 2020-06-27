/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word,
and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided strings to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
    let vowelRegex = /[aeiou]/;
    let matchArr = str.match(vowelRegex);
    // no vowels in the string
    if (matchArr == null){
        return str + "ay";
    }
    // first letter in the string is a vowel
    if (matchArr.index == 0) {
        return str + "way";
    }
    // first letter is a consonant
    else {
        let splitStr = str.split("");
        // add the beginning letters up until the first vowel to the end of the string
        splitStr.push(...splitStr.slice(0, matchArr.index));
        // remove those beginning consonants we just added to the end
        splitStr.splice(0, matchArr.index);
        return splitStr.join("") + "ay";
    }
}

let testArrs = ['consonant', "california", "paragraphs", "glove", "algorithm", "rhythm"];
for (let i = 0; i < testArrs.length; i++){
    let ans = translatePigLatin(testArrs[i]);
    console.log(ans);
}