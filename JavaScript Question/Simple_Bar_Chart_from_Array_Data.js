//*-------------------------------------------------------------------
//* Programming Challenge:  Simple Bar Chart from Array Data
//*-------------------------------------------------------------------
const generateBarChart = (arr) => {
  return arr
    .map((curElem, index) => {
      return ` ${index + 1}: ${"*".repeat(curElem)}`;
    })
    .join("\n");
};

console.log(generateBarChart([5, 3, 9, 2]));
