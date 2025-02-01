const arraysAreEqual = (arr1, arr2) => {
    if(arr1.length != arr2.length){
        return false;
    }
    return arr1.every((curVal, index) => curVal === arr2[index])
}
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // Output : true
console.log(arraysAreEqual([1, 2, 3,], [1, 2, 4])); // Output : false
console.log(arraysAreEqual([], [])); // Output : ture