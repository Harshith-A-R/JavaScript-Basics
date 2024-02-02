const name="Harshith"
const age =25

console.log("MyName is"+name+"and age is"+age) //don't use tihs kind of printing msgs this not good practice while doing coding
console.log(`My Name is ${name} and my age is ${age}`) //`` - means backstick
//What is the benifit of backstick ?
//string interpolation which means like will create place holders and injecting variable directly into this

const gameName = new String('harshith')
const gameName2 = new String('Man-of-thousand-facess')


console.log(gameName.charAt(0))
console.log(gameName.__proto__)//will prototype of all methods which GIVE
console.log(gameName.toUpperCase())
console.log(gameName.length)
console.log(gameName.substring(0,6))
console.log(gameName.substring(-8,4))

const anotherName = gameName.slice(-8,6)
console.log(anotherName)

const string ="   harsha     "
console.log(string.trim())//it will remove the extra spacess
console.log(gameName.trimEnd())
console.log(gameName.replace)//


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))//url has sundar or not

console.log(gameName2.split('-'))
