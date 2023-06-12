// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
// const findShort = (s: string): number => {
//     const word = s.split(' ')
//     let shortestLength = 0
//     for(let i = 0; i < word.length; i++){
//         if(word[i].length < word.length){
//             return shortestLength = word[i].length
//         }
//     }
//     return shortestLength
// }
// console.log(findShort("Let's travel abroad shall we"))
var findShort = function (s) {
    var words = s.split(' ');
    var shortestLength = Infinity;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var length_1 = word.length;
        if (length_1 < shortestLength) {
            shortestLength = length_1;
        }
    }
    return shortestLength;
};
console.log(findShort("Let's travel abroad shall we"));
