

// Declare and assign the variables below

let shuttleName = "Determination";
let shuttleSpeedMph = 17500;

let distanceToMarsKm = 225000000; // Distance to Mars in kms
let distanceToMoonKm = 384400;    // Distance to Moon in kms

const milesPerKm = 0.621;


// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttleName)
console.log(typeof shuttleSpeedMph)
console.log(typeof distanceToMarsKm)
console.log(typeof distanceToMoonKm)
console.log(typeof milesPerKm)


// Calculate a space mission (Mars) below

let milesToMars = 0     //Creating a variable for miles to Mars 


// Print the results of the space mission (Mars) calculations below

milesToMars = distanceToMarsKm * milesPerKm
console.log("\nMiles to Mars is ", distanceToMarsKm, "x", milesPerKm, "=", milesToMars, "miles")

let hoursToMars = milesToMars / shuttleSpeedMph
console.log("Hours to get to Mars is ", hoursToMars, "hours")

let daysToMars = hoursToMars / 24
console.log("Days to get to Mars is ", daysToMars, "days") 


console.log("\n------------------------------------------------------------------")
console.log("Shuttle", shuttleName, "will take", daysToMars,"days to reach Mars.") // 
console.log("------------------------------------------------------------------")


// Calculate a trip to the moon below


let milesToMoon = 0     //Creating a variable for miles to Moon 

// Print the results of the trip to the moon below

milesToMoon = distanceToMoonKm * milesPerKm
console.log("\nMiles to Moon is ", distanceToMoonKm, "x", milesPerKm, "=", milesToMoon, "miles")

let hoursToMoon = milesToMoon / shuttleSpeedMph
console.log("Hours to get to Moon is ", hoursToMoon, "hours")

let daysToMoon = hoursToMoon / 24
console.log("Days to get to Moon is ", daysToMoon, "days") 


console.log("\n------------------------------------------------------------------")
console.log("Shuttle", shuttleName, "will take", daysToMoon,"days to reach Moon.") // 
console.log("------------------------------------------------------------------")





