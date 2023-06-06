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

const squareDigits = (num: number) => {
    return num.toString().split('').map(c => parseInt(c) ** 2).join('')
}

console.log(squareDigits(19825))
