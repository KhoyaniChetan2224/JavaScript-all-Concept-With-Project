//*-------------------------------------------
//*  Programming Question: Sort an Array
//*-------------------------------------------

const sortAscending = (arr) => {
  return arr.sort((a, b) => b - a);
}
console.log(sortAscending([5, 3, 1, 8]));
console.log(sortAscending([5, 3, 10, 8]));
