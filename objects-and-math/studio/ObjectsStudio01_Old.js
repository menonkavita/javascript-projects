// Code your selectRandomEntry function here:

function selectRandomEntry(arrID){

  let shortlistedArr = [];

  for(let i = 0; i < 3; i++){
    
    let randNum = Math.floor(Math.random() * arrID.length);
    // console.log("2. Random Number ", randNum);

    shortlistedArr.push(arrID[randNum]);
    // console.log("3. shortlistedArr", shortlistedArr, "\n");

    if (shortlistedArr.includes(arrID[randNum])){
      let j = 0; 
      let counter = 0;

      while (j < shortlistedArr.length){
        if (shortlistedArr[j] === arrID[randNum]){
          counter++;
        }

        if (counter > 1){
          shortlistedArr.splice(j, 1)
          i--;
        }

        j++;
      }
    }
  } // end of for
  return shortlistedArr;
}


// Code your buildCrewArray function here:

function buildCrewArray(IDArr, candidatesArr){
  let crewArr = [];
  
    for(let i = 0; i < IDArr.length; i++){

      for(let j = 0; j < candidatesArr.length; j++){
        
        if (IDArr[i] === candidatesArr[j].astronautID){
          
          crewArr.push(candidatesArr[j].name)
          //console.log("--- 2. Inside if - matching ID found. ---", IDArr[i], candidatesArr[j].astronautID, crewArr)
        }
      }

    }

  return crewArr;
}


let idNumbers = [291, 414, 503, 599, 796, 890];


// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

let randIDNumbers = selectRandomEntry(idNumbers);
console.log("\nLucky Astronauts who get to go on the Space mission have IDs ", randIDNumbers, "\n")


let randCandidateNames = buildCrewArray(randIDNumbers, animals);
console.log(`${randCandidateNames[0]}, ${randCandidateNames[1]}, and ${randCandidateNames[2]} are going to space!`)

