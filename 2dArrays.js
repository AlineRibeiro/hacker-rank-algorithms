const myArray = [
  [1, 2, 3, 4, 5, 6],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

function hourglassSum(array) {
  let finalValue = Number.NEGATIVE_INFINITY;

  for (let x = 0; x <= 3; x++) {
    for (let y = 0; y <= 3; y++) {
      let individualHourGlassSum = 0;

      individualHourGlassSum += array[x][y];
      individualHourGlassSum += array[x][y + 1];
      individualHourGlassSum += array[x][y + 2];
      individualHourGlassSum += array[x + 1][y + 1];
      individualHourGlassSum += array[x + 2][y];
      individualHourGlassSum += array[x + 2][y + 1];
      individualHourGlassSum += array[x + 2][y + 2];

      if (individualHourGlassSum > finalValue) {
        finalValue = individualHourGlassSum;
      }
    }
  }
  return finalValue;
}

console.log(hourglassSum(myArray));
