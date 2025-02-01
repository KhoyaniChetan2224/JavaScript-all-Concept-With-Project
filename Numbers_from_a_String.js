//*---------------------------------------------------------
//* Programming Challenge: Extract Numbers from a String
//*------------------------------------------------------------
const extractNumbers = (str) => {
  let regex = /\d+/g;
  return str.match(regex);
};

console.log(extractNumbers("abc123def456")); // Expected output: ["123", "456"]
console.log(extractNumbers("no numbers here")); // Expected output: null
console.log(extractNumbers("1a2b3c4d")); // Expected output: ["1", "2", "3", "4"]
console.log(extractNumbers("100, 200 and 300")); // Expected output: ["100", "200", "300"]
console.log(extractNumbers("")); // Expected output: null

//* Constraints
//? Extract all numeric values.
//? Return as an array.

//// Regex Explanation: /\d+/g

//todo \d: Matches any digit (0-9).
//todo +: Matches one or more of the preceding token (i.e., digits).
//todo g: Global flag, to find all matches in the string.
