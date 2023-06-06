// const squareDigits = (num: number) => {
//   let storageNum: number[] = []
//   const numberDigit = num.toString()
//   for (let numSquare of numberDigit) {
//     const res = parseInt(numSquare, 10) ** 2
//     storageNum.push(res)
//     console.log('res:123', storageNum)
//   }
// }
// squareDigits(19825)
var squareDigits = function (num) {
    return num.toString().split('').map(function (c) { return Math.pow(parseInt(c), 2); }).join('');
};
console.log(squareDigits(19825));
