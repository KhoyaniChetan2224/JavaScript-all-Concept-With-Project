const removeDuplicates = (arr) => {
    let newArr = [...new Set(arr)]
    // console.log(newArr);
    return newArr;
}

console.log(removeDuplicates([1, 2, 3, 2, 1, 4])); // Output : [1, 2, 3, 4]
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])); // Output : [5, 6, 7, 8, 9]
console.log(removeDuplicates([1, 2, 3, 4])); // Output : [1, 2, 3, 4]
console.log(removeDuplicates([])); // Output : []