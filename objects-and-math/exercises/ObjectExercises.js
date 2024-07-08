let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   //move: function () {return Math.floor(Math.random()*11)}
};

let superSalamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   //move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   //move: function () {return Math.floor(Math.random()*11)}
};

let superBeagle = {
name: "Leroy",
species: "Beagle",
mass: 14,
age: 5,
//move: function () {return Math.floor(Math.random()*11)}
};

let superTardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   //move: function () {return Math.floor(Math.random()*11)}    
};


// After you have created the other object literals, add the astronautID property to each one.

superChimpOne["astronautID"] = 1;
superChimpTwo["astronautID"] = 2;
superSalamander["astronautID"] = 3;
superBeagle["astronautID"] = 4;
superTardigrade["astronautID"] = 5;



// Add a move method to each animal object  
superChimpOne["move"] = function(){return Math.floor(Math.random()*11)};
superChimpTwo["move"] = function(){return Math.floor(Math.random()*11)};
superSalamander.move = function(){return Math.floor(Math.random()*11)};
superBeagle.move = function(){return Math.floor(Math.random()*11)};
superTardigrade.move = function(){return Math.floor(Math.random()*11)};
   


// Create an array to hold the animal objects.

let crew = [superChimpOne, superChimpTwo, superSalamander, superBeagle, superTardigrade];

function crewReports( animal){
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
}

// Print out the relevant information about each animal.
// console.log(crewReports(superBeagle))
// console.log(crewReports(superSalamander))
// console.log(crewReports(superChimpOne))
// console.log(crewReports(superTardigrade))
// console.log(crewReports(superChimpTwo))

console.log(`\n${crewReports(superBeagle)}
${crewReports(superSalamander)}
${crewReports(superChimpOne)}
${crewReports(superTardigrade)}
${crewReports(superChimpTwo)}`)

// Start an animal race!
// move: function () {return Math.floor(Math.random()*11)}

function fitnessTest(testCrewArr){
   let recordStepsArr = [];   
   let numStepsTotal = 0, numCrewTurns = 0;

   for(let i=0; i < testCrewArr.length; i++){
      numStepsTotal = 0;
      numCrewTurns = 0;

      while(numStepsTotal < 20){

         numStepsTotal += testCrewArr[i].move();
         numCrewTurns++;
      }
      recordStepsArr.push(`${testCrewArr[i].name}, a ${testCrewArr[i].species}, took ${numCrewTurns} turns to take 20 steps.`)
   }
   return recordStepsArr;
}

fitnessTest(crew);
// console.log(fitnessTest(crew));

