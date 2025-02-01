const startsWith = (str, substr) => {
    // return str.toLowerCase().startsWith(substr.toLowerCase());
  return str.toLowerCase().slice(0, substr.length) === substr.toLowerCase();
};

// Example usage:
console.log(startsWith("Hello world", "hello")); // Output: true
console.log(startsWith("Hello world", "World")); // Output: false
