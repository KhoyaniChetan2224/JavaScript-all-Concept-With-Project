const countVowels = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = str.split('');
    console.log(arr);

    let count = 0;
    for(let char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello word")) // Output : 3
console.log(countVowels("ThE quIck brOwn f0x")) //Output : 4
console.log(countVowels("Brrrp")) // Output : 0