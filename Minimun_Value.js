//*---------------------------------------------------------
//* Coding Challenge: Find the Minimum Value in an Array
//*---------------------------------------------------------
const findMin = (arr) => {
  //   arr = arr.sort((a, b) => {
  //     if (b > a) return -1;
  //   });

  //   return arr[0];
  if (arr.length === 0) return "Array is empty";
  return Math.min(...arr);
};

// // Example usage:
console.log(findMin([5, 10, 2, 8])); // Output: 2
console.log(findMin([5, -3, 0, 12, -7])); // Output: -7
console.log(findMin([])); // Output: undefined (or any suitable message for empty array)