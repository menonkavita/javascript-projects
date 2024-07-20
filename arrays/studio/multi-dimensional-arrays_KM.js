
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

console.log(foodSplit.sort())
console.log(equipmentSplit.sort())
console.log(petsSplit.sort())
console.log(sleepAidsSplit.sort())


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

    let cargoHold =[foodSplit, equipmentSplit, petsSplit, sleepAidsSplit]
    console.log("\nCargo Hold contains: ", cargoHold)

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

    //let numCabinet = Number(input.question("Select a cabinet between 1 - 4 to be pulled out of the cargoHold."))
    let numCabinet = Number(input.question("Select a cabinet between 0 - 3 to be pulled out of the cargoHold."))

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. 
//If the user entered an invalid number, print an error message.
    
    //if(numCabinet >=1 || numCabinet <= 4){

    if(numCabinet >=0 || numCabinet <= 3){
        let displayCabinet = cargoHold[numCabinet]
        console.log(`Contents of cabinet ${numCabinet} are ${displayCabinet}`)
    } else{
        console.log(`You have entered a number not in the cabinet.`)
    }

    

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. 
// Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

numCabinet=0;
numCabinet = Number(input.question("\nEnter the cabinet between 0 - 3 to be pulled out of the cargoHold."))
let userItem = input.question("Enter the item from the cabinet to be pulled out.")

    if(numCabinet >= 0 || numCabinet <= 3){
        displayCabinet = cargoHold[numCabinet];

        if (displayCabinet.indexOf(userItem) >= 0){
            console.log(`Cabinet ${numCabinet} DOES contain item - ${userItem}.`)
        } else{
            console.log(`Cabinet ${numCabinet} DOES NOT contain item - ${userItem}.`)
        } 
    } else{
        console.log(`You have entered a number not in the cabinet.`)
    }








