//Define three variables for the LaunchCode shuttle - one for the starting fuel level, 
// another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

const input = require('readline-sync')

let numFuel = 0;
let numAstronauts = 0;
let numAltitude = 0;


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. 
  Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

    numFuel = Number(input.question("Please enter a starting fuel value between 5000 to 30,000. "))

    while((numFuel < 5000) || (numFuel > 30000) || isNaN(numFuel)){
        //console.log("Please enter a value in the range 5000 to 30,000. ")
        numFuel = Number(input.question("Please enter a starting fuel value between 5000 to 30,000. "))
    }


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  numAstronauts = Number(input.question("Enter any number between 1 to 7 for Astronauts to be in this mission. "))

  while((numAstronauts < 1) || (numAstronauts > 7)){
    numAstronauts = Number(input.question("Please enter a number in the range 1 to 7 for Astronauts to be in this mission. "))
  }
  
  
/*c. Use a final loop to monitor the fuel status and the altitude of the shuttle. 
     Each iteration, decrease the fuel level by 100 units for each astronaut aboard. 
     Also, increase the altitude by 50 kilometers.
    (Hint: The loop should end when there is not enough fuel to boost the crew another 50 km, 
    so the fuel level might not reach 0).
*/

  let fuelBurn = (numAstronauts * 100);  // Fuel burn for the Astronauts aboard the space mission.
  let startFuel = numFuel;
  //let counter = 0;

    //console.log("Fuelburn = ", fuelBurn, "numFuel = ", numFuel)
    //while(numFuel >= fuelBurn){   --- Another way of trying out the condition.


    while((numFuel-fuelBurn) >= 0){
        numFuel -= fuelBurn;
        numAltitude += 50;
        //console.log("Amount of fuel getting burnt in orbit is ", fuelBurn,"\nFuel after burn: ", numFuel, "\nAltitude achieved", numAltitude);
        //counter++;
    }


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

    console.log("\nWith fuel of ", startFuel, "and ", numAstronauts, "Astronauts...")
    console.log("The shuttle gained an altitude of ", numAltitude, "km.")
    //console.log("Fuel left at the end of mission is ", numFuel)
    //console.log("Loop executed ", counter, "times.")

    if(numAltitude >= 2000){
        console.log("Orbit achieved!")        
    }
    else{
        console.log("Failed to reach orbit. Need more Fuel!")
    }

        




