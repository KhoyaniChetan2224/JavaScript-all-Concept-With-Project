function findMode(arr) {
  //Your code here
  let counts = {};
  let maxNum = 0;
  let mode;

  for (let element of arr){
    counts[element] = (counts[element] || 0) + 1;
    if(counts[element] > maxNum){
      maxNum = counts[element];
      mode = element;
    }
  }
  // console.log(counts);
  return mode;
}


// Example usage:
console.log(findMode([1, 2, 2, 3, 1, 4, 2])); // Output: 2
