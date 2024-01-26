//*****************comparision of two values ************* 
//below examples are simply comparing the data types like number ,string */

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//below changes are data type changes like string or number data types conversion will happen hence it will compare 
// console.log("2" > 1);
// console.log("02" > 1);


// below examples should be avoid ,due to it gives confusion
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check this meansit will  strictly  check data and as well data types must

console.log("2" === 2);