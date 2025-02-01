//*---------------------------------------------------------
//* Programming Challenge: Simple Currency Converter
//*---------------------------------------------------------
const rates = {
  USD: 1,
  EUR: 0.9,
  GBP: 0.8,
  INR: 82,
};
const convertCurrency = (amount, fC, tC) => {
  let amountInUSD = 0;
  if (fC !== "USD") {
    amountInUSD = amount / rates[fC];
  } else {
    amountInUSD = amount;
  }

  let convertedAmount = 0;
  if (tC !== "USD") {
    convertedAmount = amountInUSD * rates[tC];
  } else {
    convertedAmount = amountInUSD;
  }

  return convertedAmount;
};
console.log(convertCurrency(100, "INR", "EUR")); // Output will depend on the rates provided
