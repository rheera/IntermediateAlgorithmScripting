/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to
replace the word "Book" with the word "dog", it should be replaced as "Dog"
 */

function myReplace(str, before, after) {
    let regex = new RegExp(before, 'i');
    let matchArr = str.match(regex);
    console.log(matchArr);
    if (matchArr == null){
        return "Word not found";
    }
    // replacement word starts with a capital
    else if(/[A-Z]/.test(str[matchArr.index])) {
        let afterArr = after.split("");
        afterArr[0] = afterArr[0].toUpperCase();
        return str.replace(regex, afterArr.join(""));
    }
    //
    else {
        return str.replace(regex, after);
    }
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped"));
