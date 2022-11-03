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

let resultToString = result.map((item) => {
  return item.map((value) => {
    return value.toString();
  });
});

result.push(resultToString);

console.log(result);
