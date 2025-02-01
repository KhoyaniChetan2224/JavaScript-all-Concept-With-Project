//*---------------------------------------------------------
//*  Interview Question:
//*---------------------------------------------------------

const sumOfSquares = (arr) => {
  let sum = 0;
  for(let elem of arr){
    sum = sum + elem * elem;
  }
  return sum;
}

// Example usage:
console.log(sumOfSquares([1, 2, 3])); // Output: 14
