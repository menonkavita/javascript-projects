
const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodSplit = food.split(",")
let equipmentSplit = equipment.split(",")
let petsSplit = pets.split(",")
let sleepAidsSplit = sleepAids.split(",")

console.log(foodSplit)
console.log(equipmentSplit)
console.log(petsSplit)
console.log(foodSplit)


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

    let cargoHold =[foodSplit, equipmentSplit, petsSplit, sleepAidsSplit]
    console.log(cargoHold)

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

    let numCabinet = Number(input.question("Select a cabinet between 0 - 3 to be pulled out of the cargoHold."))
    

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. 
//If the user entered an invalid number, print an error message.
    
    if(numCabinet >= 3 || numCabinet <= 0){
        console.log(`You have entered a number not in the cabinet.`)
    } else{
        let displayCabinet = cargoHold[numCabinet]
        console.log(`Contents of cabinet ${numCabinet} are ${displayCabinet}`)
    }

    


//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. 
// Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
