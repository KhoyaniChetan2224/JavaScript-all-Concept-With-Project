//*-------------------------------------------------------------------
//* Programming Challenge: Calculate Age from birthDate
//*-------------------------------------------------------------------
const calculateAge = (birthDate) => {
  let todayDate = new Date();
  birthDate = new Date(birthDate);

  // step 2
  let age = todayDate.getFullYear() - birthDate.getFullYear();
  //   console.log(age);

  // step 3
  let monthDiff = todayDate.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && todayDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

console.log(calculateAge("1990-05-15")); // Output will vary depending on the current date
