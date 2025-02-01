const findMax = (arr) => {
    console.log(...arr);    
    return Math.max(...arr)
}

// // console.log(findMax());
console.log(findMax([1, 5, 3, 9, 2])); //Output:9
console.log(findMax([-10, -5, -3, -9, -2])); //Output : -2
console.log(findMax([5])); //Output : 5
