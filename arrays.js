const numbers = [1, 4, 3, 2];

//output [2,3,4,1]

function reverseArray(array) {
  const reversedArray = [];
  const lastIndex = array.length - 1;

  for (let x = lastIndex; x >= 0; x--) {
    reversedArray.push(array[x]);
  }

  return reversedArray;
}

console.log(reverseArray(numbers));
