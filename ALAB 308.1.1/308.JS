// LAB 308.1.1

//PART 1

//Variables
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//Do they add up to 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;

if (isSum50 == 50){
    console.log("They add up to 50.");
} else {
    console.log("They do not add up to 50.");
}

//Are all numbers divisable by 5
const divByFive = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5)

if (divByFive == 0) {
    console.log("All numbers are divisable by five.")
} else {
    console.log("At least one of the numbers is not divsable by five.")
}


//Are they odd
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

if (isTwoOdd >= 2){
    console.log("At least two of the numbers are odd.")
} else {
    console.log("less then 2 numbers are odd.")
}

//Is the first number greater than the last
const isOneGreaterThanFour = (n1 - n4)

if (isOneGreaterThanFour > 0){
    console.log("The first number is greater than the last number.")
} else {
    console.log("The first number is not greater than the last number")
}

//Are all numbers above 25
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// doing math...
const mathA = (n1 - n4)
const mathB = (mathA * n3)
const mathC = (mathB % n4)

console.log(`The end result is ${mathC}`)

// are all number are unique
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

if (isUnique == true){
    console.log("All numbers are unique.")
} else {
    console.log("Not all numbers are unique")
}

//Check if the numbers are valid
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

if (isValid == true){
    console.log("The numbers are valid.")
} else {

} console.log("The numbers are not valid.")




//PART 2

let MPH1 = 55
let MPG1 = 30
let MPH2 = 60
let MPG2 = 28
let MPH3 = 70
let MPG3 = 23
let gallonsNeeded1
let gallonsNeeded2
let gallonsNeeded3


const distance = 1500
const price = 3
const bugget = 175

//55 MPH 
const gallonesNeeded1 = (distance / MPG1)
const pricePerTrip1 = (gallonesNeeded1 * 3)
let time1 = (55 * gallonesNeeded1)

//60 MPH
const gallonesNeeded2 = (distance / MPG2)
const pricePerTrip2 = (gallonesNeeded2 * 3)
let time2 = (60 * gallonesNeeded2)

//70 MPH
const gallonesNeeded3 = (distance / MPG3)
const pricePerTrip3 = (gallonesNeeded3 * 3)
let time3 = (70 * gallonesNeeded3)

console.log("How many gallons of fuel will you need for the entire trip?")
console.log(`At ${MPG1}MPH the cost will be $${pricePerTrip1}.`)
console.log(`At ${MPG2}MPH the cost will be $${pricePerTrip2}.`)
console.log(`At ${MPG3}MPH the cost will be $${pricePerTrip3}.`)

console.log("Will your budget be enough to cover the fuel expense?")

if (pricePerTrip1 <= bugget){
    console.log(`Driving at ${MPG1}MPG will be in the bugget`)
} else {   
    console.log(`Driving at ${MPG1}MPG will not be in the bugget`)
}

if (pricePerTrip2 <= bugget){
    console.log(`Driving at ${MPG2}MPG will be in the bugget`)
} else {   
    console.log(`Driving at ${MPG2}MPG will not be in the bugget`)
}

if (pricePerTrip3 <= bugget){
    console.log(`Driving at ${MPG3}MPG will be in the bugget`)
} else {   
    console.log(`Driving at ${MPG3}MPG will not be in the bugget`)
}

console.log("How long will the trip take, in hours?")
console.log(`At ${MPH1}MPH the trip will take ${time1} hours.`)
console.log(`At ${MPH2}MPH the trip will take ${time2} hours.`)
console.log(`At ${MPH3}MPH the trip will take ${time3} hours.`)