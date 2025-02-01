//*---------------------------------------------------------
//* Programming Challenge: Validate Hex Color Code
//*------------------------------------------------------------
const validateHexColor = (hexColor) => {
  return /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/.test(hexColor);
};

//* Test Cases
console.log(validateHexColor("#a3c113")); // Expected output: true
console.log(validateHexColor("#fff")); // Expected output: true
console.log(validateHexColor("#1234567")); // Expected output: false
console.log(validateHexColor("a3c113")); // Expected output: false
console.log(validateHexColor("#g3c113")); // Expected output: false
