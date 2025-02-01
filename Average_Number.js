const calculateAverage = (arr) => {
    let total = arr.reduce ((accum, curElem) => accum + curElem, 0)
    console.log(total); 
    return total / arr.length;
}

console.log(calculateAverage([5, 10, 2, 8])); //Output : 6.25