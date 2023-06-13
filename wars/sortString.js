function sortString(input) {
    if (input === "") {
        return "";
    }
    var words = input.split(" ");
    var sortedWords = new Array(words.length);
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var position = parseInt(word.match(/\d/)[0]);
        sortedWords[position - 1] = word;
    }
    return sortedWords.join(" ");
}
var example1 = "is2 Thi1s T4est 3a";
var example2 = "4of Fo1r pe6ople g3ood th5e the2";
var example3 = "";
console.log(sortString(example1)); // Output: "Thi1s is2 3a T4est"
console.log(sortString(example2)); // Output: "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(sortString(example3)); // Output: ""
