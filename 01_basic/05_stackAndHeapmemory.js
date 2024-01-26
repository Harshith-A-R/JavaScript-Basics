//Stack(primitive), Heap (non primitive)
//Stack memory :the primitive data will store in stack memory,oroginal value won't change if you assign one value to another variable
//it will create copy of original value and what ver make changes original value will not effect
let myName="Harshith"

let myName2=myName

myName2="Harsha"
console.log(myName)
console.log(myName2)


//Heap
//variable will be in stack but values will store in heap and it has one reference which is poointing to those values or object in heap
//whatever changes made it will effect in original data/values (kindly refeer the screen which is uploaded for better understanding)
let userOne={
    name :"Rajkumar",
    upi :"123@ybl"
}

let userTwo =userOne
userTwo.upi ="364@ibl"

console.log(userOne)
console.log(userTwo)




