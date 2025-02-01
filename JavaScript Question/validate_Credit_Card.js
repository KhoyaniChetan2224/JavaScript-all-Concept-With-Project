//*-------------------------------------------------------------------
//* Programming Challenge: Validate a Credit Card Number (Luhn Algorithm)
//*-------------------------------------------------------------------
const validateCreditCard = (str) => {
  // initial step
  str = str.replace(/\D/g, "");

  // step 1: Reverse the Digits:
  let revNum = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revNum = revNum + str[i];
  }
  // console.log(revNum);

  // step 2: Double Every Second Digit
  let doubleNum = revNum
    .split("")
    .map((curDigit, index) => {
      if (index % 2 !== 0) {
        curDigit = curDigit * 2;

        if (curDigit > 9) {
          curDigit = curDigit - 9;
        } else {
          curDigit = curDigit;
        }
      }
      return curDigit;
    })
    .reduce((accum, curElem) => accum + Number(curElem), 0);
  console.log(doubleNum);

  return doubleNum % 10 === 0;
};

// Example usage:               0123 4567 891011
console.log(validateCreditCard("4539 1488 0343 6467")); // Output: true
console.log(validateCreditCard("8273 1232 7352 0569")); // Output: false
