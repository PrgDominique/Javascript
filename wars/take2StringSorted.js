// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
var take2StringSorted = function (s1, s2) {
    var char = s1 + s2;
    //   const res = new Set(char.toLowerCase()).size === char.length
    //   return res
    return Array.from(new Set(char)).join('');
};
console.log(take2StringSorted('aretheyhere', 'yestheyarehere'));
