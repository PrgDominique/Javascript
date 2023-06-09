// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:
// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
var buildTower = function (nFloors) {
    var totalFloor = [];
    for (var i = 0; i < nFloors; i++) {
        var floor = '';
        for (var j = 0; j < nFloors - i - 1; j++) {
            floor += ' '; // Add spaces for alignment
        }
        for (var j = 0; j < 2 * i + 1; j++) {
            floor += '*'; // Add asterisks for the tower
        }
        totalFloor.push(floor);
    }
    return totalFloor;
};
console.log(buildTower(6));
