// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
// w/ map
// const reverseWords = (str: string): string => {
//     const words = str.split(' ');
//     const reversedWords = words.map(word => {
//       let reversedWord = '';
//       for (let i = word.length - 1; i >= 0; i--) {
//         reversedWord += word[i];
//       }
//       return reversedWord;
//     });
//     return reversedWords.join(' ');
//   }
// console.log(reverseWords('This is an example!'))
// without map
// const reverseWords = (str: string): string => {
//   const words = str.split(' ')
//   let reversedWords: string[] = []
//   for (let i = 0; i < words.length; i++) {
//     let reversedWord = ''
//     console.log('words', words[i])
//     for (let j = words[i].length - 1; j >= 0; j--) {
//       // console.log('words[i]: 123', words[j])
//       // console.log([j])
//       reversedWord += words[i][j]
//       // console.log('words[i][j]: 123', words[i][j])
//     }
//     reversedWords.push(reversedWord)
//   }
//   return reversedWords.join(' ')
// }
// console.log(reverseWords('This is an example!'))
var reverseWords = function (str) {
    var words = str.split(' ');
    // let reversedWords: string[] = []
    for (var i = 0; i < words.length; i++) {
        if (words[i].length < words.length) {
            var reversedWord = '';
            console.log('words', words[i]);
        }
    }
};
console.log(reverseWords("Let's travel abroad shall we"));
