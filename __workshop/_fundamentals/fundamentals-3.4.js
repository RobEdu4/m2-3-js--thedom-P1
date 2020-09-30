// Exercise 4
//
// Part 1 - Write
// ---------------
// Write a function that expects an array of numbers as input (e.g. [1, 2, 4, 12])
// and returns the sum of the numbers.
//
// - If the array contains any values that are not a number, the function should return undefined.

function sum(arr) {
  /*
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) return undefined;
    total += arr[i];
  }
  return total;
}
  */

  let total = 0;
  arr.forEach((num) => (total += num));
  return total;
  //GET IIIIIIIIIIIITTTTTTTTTTTTT
}
console.log(sum([1, 7, 2, 6, 3, 10, 15]));
// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = sum;
