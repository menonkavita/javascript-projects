// Code your selectRandomEntry function here:

function selectRandomEntry(arrID){
    
  let randNum = Math.floor(Math.random() * arrID.length);
  console.log("Random Number generated is ", randNum);

  return randNum;
}

function threeUniqueIDs(arrayID){
  let shortlistedArr = [];
  //let numRandom = selectRandomEntry(arrayID);
  //shortlistedArr.push(arrayID[numRandom]); 

  for(let i = 0; shortlistedArr.length < 3 ; i++){
          let numRandom = selectRandomEntry(arrayID);
         
          if (!(shortlistedArr.includes(arrayID[numRandom]))){
                  shortlistedArr.push(arrayID[numRandom]); 
          }
          
  } 
  return shortlistedArr;
}

// Code your buildCrewArray function here:

function buildCrewArray(IDArr, candidatesArr){
let crewArr = [];

  for(let i = 0; i < candidatesArr.length; i++){
      if(IDArr.includes(candidatesArr[i].astronautID)){
          crewArr.push(candidatesArr[i].name);
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

let randIDNumbers = threeUniqueIDs(idNumbers);
console.log("\nLucky Astronauts who get to go on the Space mission have IDs ", randIDNumbers, "\n")


let randCandidateNames = buildCrewArray(randIDNumbers, animals);
console.log(`${randCandidateNames[0]}, ${randCandidateNames[1]}, and ${randCandidateNames[2]} are going to space!`)

