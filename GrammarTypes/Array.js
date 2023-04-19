// Array literals

// An array literal is a list of zero or more expressions, each of which represents an array element, enclosed in square brackets ([]). When you create an array using an array literal, it is initialized with the specified values as its elements, and its length is set to the number of arguments specified.

// const coffees = ["French Roast", "Colombian", "Kona"];

// Shallow copy
// In JavaScript, standard built-in object-copy operations (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), Object.assign(), and Object.create()) do not create deep copies (instead, they create shallow copies).

// const fruits = ["Strawberry", "Mango"];

// // Create a copy using spread syntax.
// const fruitsCopy = [...fruits];
// // ["Strawberry", "Mango"]

// // Create a copy using the from() method.
// const fruitsCopy2 = Array.from(fruits);
// // ["Strawberry", "Mango"]

// // Create a copy using the slice() method.
// const fruitsCopy3 = fruits.slice();
// // ["Strawberry", "Mango"]

// Deep copy
// One way to make a deep copy of a JavaScript object, if it can be serialized, is to use JSON.stringify() to convert the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript object:

// let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];
// let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// // Change the value of the 'list' property in ingredients_list_deepcopy.
// ingredients_list_deepcopy[1].list = ["rice flour", "water"];
// // The 'list' property does not change in ingredients_list.
// console.log(ingredients_list[1].list);
// // Array(3) [ "eggs", "flour", "water" ]