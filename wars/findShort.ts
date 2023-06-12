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


// Correct answer to get the lowest value is Using infinity or Number.MAX_SAFE_INTEGER;
const findShort = (s: string) => {
  const words = s.split(' ')

  let shortestLength = Infinity
  for (const word of words) {
    const length = word.length

    if (length < shortestLength) {
      shortestLength = length
    }
  }
  return shortestLength
}

console.log(findShort("Let's travel abroad shall we"))
