// Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// const validatePin = (pin: string) => {
//   const res = pin.replace(/[^\d-]/g, '')  
//   console.log(res.length)
//   const result = res.length === 4 || res.length === 6 ? true : false
//   return result
// }

// console.log(validatePin('1234'))


// Answer
const validatePin = (pin: string) => {
return /^(\d{4}|\d{6})$/.test(pin);
}
console.log(validatePin('1.234'))
console.log(validatePin('.234'))
console.log(validatePin('1234'))
console.log(validatePin('12345'))
console.log(validatePin('0000'))