const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "");
    let r_str = str.split("").reverse().join("")
    console.log(r_str);
    return str === r_str ? true : false; 
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); //Outpyt : false
console.log(isPalindrome("rececar")); // Output : true
console.log(isPalindrome("hello")); // Output : false