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

const buildTower = (nFloors: number) => {
    let totalFloor: string[] = [];
  
    for (let i = 0; i < nFloors; i++) {
      let floor = '';
  
      for (let j = 0; j < nFloors - i - 1; j++) {
        floor += ' '; // Add spaces for alignment
      }
  
      for (let j = 0; j < 2 * i + 1; j++) {
        floor += '*'; // Add asterisks for the tower
      }
  
      totalFloor.push(floor);
    }
  
    return totalFloor;
  }
  
  console.log(buildTower(6));