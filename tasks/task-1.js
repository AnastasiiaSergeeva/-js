[1, [1, 2, [3, 4]], [2, 4]] -> [1, 1, 2, 3, 4, 2, 4]
Как разгладить массив, чтобы получилось то, что справа?)


1.const flatArr = (arr) => {
  let newArray = [];
  arr.forEach(el => {
    if (Array.isArray(el)) {
      newArray = [...newArray, ...flatArr(el)];
    } else {
      newArray = [...newArray, el];
    }
  })
  return newArray;
}


2.const newArray = array.join(",").split(",").map(Number);


3.npm install lodash.flattenDeep
import flattenDeep from 'lodash.flattenDeep'
console.log(flattenDeep([1, [1, 2, [3, 4]], [2, 4]]))