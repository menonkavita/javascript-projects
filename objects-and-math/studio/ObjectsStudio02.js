const input = require('readline-sync');


// Code your orbitCircumference function here:


// 1. Define a function that returns the circumference (C = 2πr) of the orbit. Round the circumference to an integer.
function orbitCircumference(numRadius){
  let numCircumference = 0;

  numCircumference = Math.round(2 * 3.14 * numRadius);         // C = 2πr;

  return numCircumference;
}

/* 
2. Define the missionDuration function to take three parameters - the number of orbits completed, the orbit radius, 
   and the orbital speed. Set the default radius to 2000 km and the default orbital speed to 28000 km/hr.

3. Calculate how long it will take our animals to complete a certain number of orbits (time = distance/speed). 
   Round the answer to 2 decimal places, then return the result. For example, with the default radius and speed, 
   5 orbits will take about 2.24 hours.

4. Print, 'The mission will travel ____ km around the planet, and it will take ____ hours to complete.'
*/


// Code your missionDuration function here:

function missionDuration(numOrbits, orbRadius = 2000, orbSpeed = 28000){
// For example, with the default radius and speed, 5 orbits will take about 2.24 hours. 
// default radius to 2000 km and the default orbital speed to 28000 km/hr   
// time = distance/speed                                                            

  let timeToCompleteOrbit = 0;
  timeToCompleteOrbit = Math.round((orbitCircumference(orbRadius) / orbSpeed) * 100) / 100 ;
  
  console.log(`\nThe mission will travel ${orbitCircumference(orbRadius)} km around the planet, and it will take ${timeToCompleteOrbit * numOrbits} hours to complete.`)

  return timeToCompleteOrbit * numOrbits;
}


// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arrCrew){
    
    let randNum = Math.floor(Math.random() * 3);
    // console.log("2. Random Number ", randNum, "\n");

    return arrCrew[randNum];
}


// Code your oxygenExpended function here:

function oxygenExpended(randCandidate){
  
// Calculate time required for Space walk
// 1. The spacewalk will last for three orbits around the earth. Use missionDuration to calculate how many hours the spacewalk will take.

  let userOrbRadius = input.question("Enter a value for Orbit Radius. Minimum Orbit Radius is 2000.   ")    // #4 Accepting user input.
  let userOrbSpeed = input.question("Enter a value for Orbital Speed. Minimum Orbital Speed is 28000.   ")

  if(userOrbRadius === ""){
    userOrbRadius = 2000;
    console.log("\nNo value for Orbit Radius entered by user - Using default minimum Orbit Radius of 2000.")
  }
  else{
    if(userOrbRadius < 2000){
      console.log("\nValue entered by user - ", userOrbRadius, "is below required range for Orbit Radius - Using default minimum Orbit Radius of 2000.")
      userOrbRadius = 2000;
      
    }
  }

  if(userOrbSpeed === ""){
    userOrbSpeed = 28000;
    console.log("No value for Orbital Speed entered by user - Using default minimum Orbital Speed of 28,000.")
  }
  else{
    if(userOrbSpeed < 28000){
      console.log("Value entered by user  - ", userOrbSpeed, "is below required range for Orbital Speed  - Using default minimum Orbital Speed of 28,000.")
      userOrbSpeed = 28000;
    }
  }

   //let numTime = missionDuration(3);  
  let numTime = missionDuration(3, userOrbRadius, userOrbSpeed);    


// 2. Use the candidate’s o2Used method to calculate how much oxygen (O :sub:2) they consume during the spacewalk. 
//    Round the answer to 3 decimal places.
// 3. Return the string, '__ will perform the spacewalk, which will last __ hours and require __ kg of oxygen.' 
//    Fill in the blanks with the animal’s name, the spacewalk time, and the amount of O :sub:2 used.
// 4. We should not restrict our mission to the default values for orbital radius and orbital speed. 
//    Refactor oxygenExpended to accept values for these items. Remember to include the values in the missionDuration call.
 
  let numOxygenUsed = randCandidate.o2Used(numTime);
  numOxygenUsed = Math.round(numOxygenUsed * 1000) / 1000;

  return `\n${randCandidate.name} will perform the spacewalk, which will last ${numTime} hours and require ${numOxygenUsed} kg of oxygen.`
}

// Candidate data & crew array.
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
 
 //let crew = [candidateA,candidateC,candidateE];
  let crew = [candidateB,candidateD,candidateF];
 
 // console.log(missionDuration(5));
 
 console.log(oxygenExpended(selectRandomEntry(crew)));






