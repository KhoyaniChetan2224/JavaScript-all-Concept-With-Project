const isEmptyObject = (obj) => {
  return obj.length === 0 ? `it's empty` : `it's not empty`;

  // for (let key in obj) {
  //   if (obj.hasOwnProperty(key)) {
  //     return `it's not empty`;
  //   }
  // }
  // return `it's empty`;

  return Object.keys(obj).length === 0;
};

console.log(isEmptyObject({ name: "vinod" })); // Output: "it's not empty"
console.log(isEmptyObject({})); // Output: "it's empty"
console.log(isEmptyObject({ keyWithNull: null })); // Output: "it's empty"
console.log(isEmptyObject({ keyWithUndefined: undefined })); // Output: "it's empty"
