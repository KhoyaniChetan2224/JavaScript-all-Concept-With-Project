const sumOfDigits = (num) => {
    // console.log(typeof num);
    let arr = Array.from(String(num), Number)
    console.log(arr); 
    return arr.reduce((accum, curElem) => accum += curElem, 0);   
}

console.log(sumOfDigits(1234)); //Output : 10 = 1+2+3+4
console.log(sumOfDigits(4321)); //Output : 10
console.log(sumOfDigits(123456)); //Output : 21