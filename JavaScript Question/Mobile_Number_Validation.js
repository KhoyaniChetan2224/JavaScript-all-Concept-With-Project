//*-------------------------------------------------------------------
//* Programming Challenge: Mobile Number Validation
//*-------------------------------------------------------------------
const validateIndianMobileNumber = (number) => {
  return /^[6-9][\d]{9}$/.test(number);
};

// Test Cases
console.log(validateIndianMobileNumber("9876543210")); // Expected output: true
console.log(validateIndianMobileNumber("0123456789")); // Expected output: false
console.log(validateIndianMobileNumber("897654321")); // Expected output: false
console.log(validateIndianMobileNumber("78965432107")); // Expected output: false

//* Constraints:
//? The input string may contain numeric characters only.
//? Assume input strings will not include any country codes.
