// const numbers = [
//   {
//     nameOfPerson: 'ivan',
//     age: 17,
//   },
//   {
//     nameOfPerson: 'qwe',
//     age: 19,
//   },
// ]

// const { ...nameOfPerson } = numbers

// console.log(JSON.stringify({ nameOfPerson }, null, 2))

// const statusOfKid = (age) => {
//   age >= 18 ? console.log('adult') : console.log('minor')
// }

// statusOfKid(14,22)

const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}