'use strict';

const array1 = [
  [1, 3, 5],
  [7, 9, 7],
  [5, 3, 1],
];

const array2 = [
  [2, 4, 6],
  [8, 10, 8],
  [6, 4, 2],
];

let result = [];

for (let rows = 0; rows < 3; rows++) {
  let newArray = [];

  for (let columns = 0; columns < 3; columns++) {
    newArray.push(array1[rows][columns] * array2[columns][rows]);
  }
  result.push(newArray);
}

console.log(result);

// 0: (3) [2, 24, 30]
// 1: (3) [28, 90, 28]
// 2: (3) [30, 24, 2]
