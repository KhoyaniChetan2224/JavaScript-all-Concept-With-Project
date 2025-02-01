//* ---------------------------------------------------------
//* Programming Question: Longest Word in a String
//* ---------------------------------------------------------

const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  console.log(words);
  // return words.at(-1);
  return words[0];
};

console.log(
  findLongestWord(
    "Select DOM elements for displaying weather information using appropriate query selectors"
  )
);