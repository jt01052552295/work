var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(findIdxArr);

function findIdxArr(value, index, array) {
  return value > 18;
}

console.log(first)