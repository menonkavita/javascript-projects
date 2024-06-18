// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let crewCompReady = false;
let fuelReady = false;

let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';


//crewStatus = false;
//computerStatus = "red";

fuelLevel = 25000;


if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelReady = true;
   //launchReady = true;

} else {
   console.log('WARNING: Insufficient fuel!');
   fuelReady = false;  // Reassigning value, not mandatory
   // launchReady = false;
}

//console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewCompReady = true;
   //launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   crewCompReady =  false;
   //launchReady = false;
}

if (fuelReady && crewCompReady){
    launchReady = true;
    console.log("launchReady = ", launchReady);    
} else {
    if (!fuelReady){
    console.log("Failed Fuel check. Not ready to Launch!!")
    }
    
    if(!crewCompReady){
        console.log("Failed Crew & Computer checks. Not ready to Launch!!") 
    }
    
}

// Almost done, so wipe the sweat off your brow! Add a final if/else block to print a countdown and “Liftoff!” 
//if all the checks pass, or print “Launch scrubbed” if any check fails.

if(launchReady){
    console.log(`Countdown starts
    10
    9
    8
    7
    6
    5
    4
    3
    2
    1
Liftoff!!`)
}else {
    console.log("Failed checks. Launch Cancelled!!") 
}

