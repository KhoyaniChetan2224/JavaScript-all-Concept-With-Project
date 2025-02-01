const number = [1, 2, 2, 3, 1, 4, 2]; // Output : { '1': 2, '2': 3, '3': 1, '4': 1 }
let counts = {};
for (let element of number){
    counts[element] = (counts[element] || 0) +1;
}
console.log(counts);
// // const ["name"] = "thapa";
// // console.log(obj);  // Output : { name: 'thapa}
// // console.log(obj["name"]) // Output : 'thapa'