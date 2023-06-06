// const numbers = {
//   nameOfPerson: 'ivan',
//   age: 17,
// }
// //   {
// //     nameOfPerson1: 'qwe',
// //     age: 19,
// //   },
// // ]

// const { nameOfPerson, age } = numbers
// console.log(age)

// console.log(JSON.stringify({ nameOfPerson }, null, 2))

// const statusOfKid = (age) => {
//   age >= 18 ? console.log('adult') : console.log('minor')
// }

// statusOfKid(14,22)

// const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const a = [x, x, x, x, x];

// for (let i = 0, j = 9; i <= j; i++, j--) {
//   //                              ^
//   console.log(`a[${i}][${j}]= ${a[i][j]}`);
// }

// const Collection = (fruits, color) => {

//   color = color.filter(id => !!id);
//   const Basket = []

//   Basket.push(`The fruit is %${fruits}%`)
//   Basket.push(`The color is %${ids.color(' , ')}%`)

//   const Vegetables = []
//   Vegetables.push(`This is where everything stored ${Basket.join(' and ')}`)
//   console.log(Vegetables)
// }
// Collection('Lemon', 'Yellow')

// const getLastArray = (num) => {
//   const arr = []
//   for (let i = 0; i < num.length - 1; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] > num[j]) {
//         const temp = num[i]
//         console.log('step 1: num[i]', num[i])
//         num[i] = num[j]
//         console.log('step 2: num[j]', num[j])
//         num[j] = temp
//         console.log('step 3: temp', temp)
//       }
//     }
//   }
//   return num.length === 0 ? -1 : num[num.length - 1]
// }

// console.log(getLastArray([1, 2, 3, 7, 10, 14, 20, 6]))


