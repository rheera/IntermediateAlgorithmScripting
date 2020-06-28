/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
- & = &amp;
- < = &lt;
- > = &gt;
- " = &quot;
- ' = &apos;
 */

function convertHTML(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}
// from freeCodeCamp
function convertHTMLFaster(str) {
    var entities = { '&': '&amp;', '<':'&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'}
    return str.replace(/[&<>"']/g, function(match) {
        return entities[match]
    } )
}
let testArrs = ['Dolce & Gabbana', "Hamburgers < Pizza < Tacos", "Sixty > twelve", 'Stuff in "quotation marks"',
    "Schindler's List", "<>", "abc"];
for (let i = 0; i < testArrs.length; i++){
    let ans = convertHTML(testArrs[i]);
    console.log(ans);
}