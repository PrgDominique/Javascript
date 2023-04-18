// Boolean

/* JavaScript if statement */

// if (true) {
// code to execute if the conditional is true
//   }

// if (!true) {
//   console.log('boolean conditional resolved to true')
// } else {
//   console.log('boolean conditional resolved to false')
// }

// Boolean Constructor

// Any object, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement. For example, the condition in the following if statement evaluates to true

// const x = new Boolean(false)

// if(x){
//     console.log('this is true');
// } else {
//     console.log('this is false');

// }

// console.log(x)

// const bfalse = new Boolean(false)

// console.log(bfalse);  // [Boolean: false]

// console.log(Boolean(bfalse)); // true

// This behavior does not apply to Boolean primitives. For example, the condition in the following if statement evaluates to false:

// Note how converting a Boolean object to a primitive with Boolean() always yields true, even if the object holds a value of false. You are therefore always advised to avoid constructing Boolean wrapper objects.

// If you need to take the primitive value out from the wrapper object, instead of using the Boolean() function, use the object's valueOf() method instead.

// const bfalse = new Boolean(false);

// console.log(bfalse.valueOf()); // false

// Creating Boolean objects with an initial value of true

// const btrue = new Boolean(true);
// const btrueString = new Boolean("true");
// const bfalseString = new Boolean("false");
// const bSuLin = new Boolean("Su Lin");
// const bArrayProto = new Boolean([]);
// const bObjProto = new Boolean({});
