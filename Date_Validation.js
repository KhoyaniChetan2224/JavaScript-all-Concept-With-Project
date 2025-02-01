//*---------------------------------------------------------
//* Programming Challenge: Date Validation
//*------------------------------------------------------------
const isValidDate = (dateFormat) => {
  return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((19|20)[0-9]{2})$/.test(
    dateFormat
  );
};

console.log(isValidDate("12/15/2021"));
console.log(isValidDate("02/29/2021"));
console.log(isValidDate("04/31/2020"));
console.log(isValidDate("01/01/1800"));
console.log(isValidDate("13/01/2000"));
console.log(isValidDate("12/31/2099"));
