//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 // it will convert the data type dynamically no matter what values you have given
const scoreValue = 100.3// there no float data type for fraction number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') // conversion of string to symbol,speciality of this datatype the value won't be  same 
const anotherId = Symbol('123')

console.log(id === anotherId);// comparing to values

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions
 //Arrays 
const heros = ["shaktiman", "naagraj", "doga"];

/*objects can be done by {} these braces as key and value pair
{
    name :kdvkf

}
*/ //below exampales for objects and assigning to variable
let myObj = {
    name: "Harshith",
    age: 27,
}
console.log(myObj)
const myFunction = function(){
    console.log("Hello world");
}
console.log(myFunction)

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3