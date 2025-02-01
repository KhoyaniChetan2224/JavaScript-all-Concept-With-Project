const validateEmail = (email) => {
  return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(
    email
  );
};

console.log(validateEmail("john.doe@example.com")); // true
console.log(validateEmail("invalid..dot@domain.com")); // false
console.log(validateEmail("missing@dotcom")); // false
console.log(validateEmail("no@domain")); // false
