const isPowerOfTwo = (num) => {
    let op = false;
    for ( let i=1; i<num; i++){
        if(2**i === num){
            op = true
        }
    }
    return op;
}
// console.log(2**i === 8);

console.log(isPowerOfTwo(8)); //Output : true
console.log(isPowerOfTwo(7)); //Output : false