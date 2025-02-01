//*-------------------------------------------------------------------
//* Programming Challenge: Password Validation Coding Problem
//*-------------------------------------------------------------------
function validatePassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
  return regex.test(password);
}

// Example 1
console.log(validatePassword("Pass123!")); // Output: true

console.log(validatePassword("password")); // Output: false (fails due to lack of uppercase, digits, and special characters)

console.log(validatePassword("12345678")); // Output: false (fails due to lack of uppercase, lowercase, and special characters)

console.log(validatePassword("P@ssw0rd")); // Output: true
