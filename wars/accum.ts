// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// using repeat
const accum = (s: string) => {
    return s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
  }
  
  console.log(accum("ZpglnRxqenU"));


// without repeat 

// const accum = (s: string) => {
//     let result = '';
    
//     for (let i = 0; i < s.length; i++) {
//       const c = s[i];
//       const capitalized = c.toUpperCase();
      
//       for (let j = 0; j < i; j++) {
//         result += c.toLowerCase();
//       }
      
//       if (i > 0) {
//         result += '-';
//       }
      
//       result += capitalized;
//     }
    
//     return result;
//   }
  
//   console.log(accum("ZpglnRxqenU"));