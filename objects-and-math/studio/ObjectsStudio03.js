// Code your crewMass function here:
/* 1. Write a crewMass function that returns the total mass of the selected crew members rounded to 1 decimal place.
*/

function crewMass(massArr){
  let totalCrewMass = 0;

  for (let i = 0; i < massArr.length; i++){
    totalCrewMass = totalCrewMass + Number(massArr[i].mass);
  }
  totalCrewMass = Math.round(totalCrewMass * 10) / 10;            // Math.round(number*10)/10
  return totalCrewMass;
}


// Code your fuelRequired function here:
/* 2. The mass of the un-crewed rocket plus the food and other supplies is 75,000 kg. 
      Create a fuelRequired function to combine the rocket and crew masses, then calculate and return the amount of fuel 
      needed to reach LEO.
  
  3.  Our launch requires a safety margin for the fuel level, especially if the crew members are cute and fuzzy. 
      Add an extra 200 kg of fuel for each dog or cat on board, but only an extra 100 kg for the other species. 
      Update fuelRequired to account for this, then round the final amount of fuel UP to the nearest integer.

  4.  Print 'The mission has a launch mass of ____ kg and requires ____ kg of fuel.' 
      Fill in the blanks with the calculated amounts.

  P.S: A general rule of thumb states that it takes about 9 - 10 kg of rocket fuel to lift 1 kg of mass into low-earth orbit (LEO). 
       For our mission, we will assume a value of 9.5 kg to calculate how much fuel we need to launch our crew into space.
*/

function fuelRequired(crewArr){
  let numMiscMass = 75000;                                // Mass of the un-crewed rocket plus the food and other supplies is 75,000 kg.
  let numCrewMass = crewMass(crewArr);                    // Getting Crew mass.
  let numTotalMass = numMiscMass + numCrewMass;           // Total crew & misc mass in kgs.

  let numFuelNeeded = numTotalMass * 9.5;                 // 9.5 kg of rocket fuel is required to lift 1 kg of mass into low-earth orbit (LEO).

  for(let j=0; j < crewArr.length; j++){
    if(crewArr.species === "dog" || crewArr.species === "cat")
    {
      numFuelNeeded += 200;
    }
    else{
      numFuelNeeded += 100;
    }
  }

  numFuelNeeded = Math.round(numFuelNeeded);               // Rounding to nearest integer.
  console.log(`The mission has a launch mass of ${numTotalMass} kg and requires ${numFuelNeeded} kg of fuel.`)

  return numFuelNeeded;                                    // returning the amount of fuel needed to reach LEO.
}




// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 // let crew = [candidateB,candidateD,candidateF];
 let crew = [candidateA,candidateC,candidateE];

 fuelRequired(crew);



 