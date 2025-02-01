const numberRange = (a, b, arr = []) => {
  while (a <= b) {
    // console.log(a);
    arr.push(a);
    a++;
  }
  return arr;
};

console.log(numberRange(0, 5)); // Output: [0, 1, 2, 3, 4, 5]
console.log(numberRange(3, 7)); // Output: [3, 4, 5, 6, 7]
console.log(numberRange(-2, 2)); // Output: [-2, -1, 0, 1, 2]
