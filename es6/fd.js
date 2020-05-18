var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(findArr);



function findArr(value, index, array) {
	//The item value
	//The item index
	//The array itself
  return value > 18;
}

console.log(first)