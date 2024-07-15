

let launchcode = {
  organization : "nonprofit",
  executiveDirector : "Jeff",
  percentageCoolEmployees : 100,
  programsOffered : ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput : function(numValue){
    //1. When passed a number that is ONLY divisible by 2, return 'Launch!'
    if((numValue % 2 === 0) && (numValue % 3 !== 0) && (numValue % 5 !== 0)){          
      return `Launch!`
    }

    // 2. When passed a number that is ONLY divisible by 3, return 'Code!'
    if((numValue % 3 === 0  && (numValue % 2 !== 0) && (numValue % 5 !== 0))){         
      return `Code!`
    }

    // 3. When passed a number that is ONLY divisible by 5, return 'Rocks!'
    if((numValue % 5 === 0 && (numValue % 2 !== 0) && (numValue % 3 !== 0))){          
    return `Rocks!`
    }

    // 4. When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'
    if((numValue % 2 === 0) && (numValue % 3 === 0) && (numValue % 5 !== 0)){
      return 'LaunchCode!';
    }

    // 5. When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'
    if((numValue % 3 === 0) && (numValue % 5 === 0) && (numValue % 2 !== 0)){
      return 'Code Rocks!';
    }

    // 6. When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'
    if((numValue % 2 === 0) && (numValue % 5 === 0) && (numValue % 3 !== 0)){
      return 'Launch Rocks!';
    }

    // 7. When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'
    if((numValue % 2 === 0) && (numValue % 3 === 0) && (numValue % 5 === 0)){
      return 'LaunchCode Rocks!';
    }

    // 8. When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'
    if((numValue % 2 !== 0) && (numValue % 3 !== 0) && (numValue % 5 !== 0)){
      return "Rutabagas! That doesn't work.";
    }
  }
}

console.log("launchcode.organization", launchcode.organization)
console.log('launchcode["executiveDirector"]', launchcode["executiveDirector"])
console.log('launchcode["percentageCoolEmployees"]', launchcode["percentageCoolEmployees"])
console.log("launchcode.programsOffered[0]", launchcode.programsOffered[0])
console.log("launchcode.programsOffered[1]", launchcode.programsOffered[1])
console.log("launchcode.programsOffered[2]", launchcode.programsOffered[2])
console.log("launchcode.programsOffered.length", launchcode.programsOffered.length)

console.log("launchcode.launchOutput(14)", launchcode.launchOutput(14))
console.log("launchcode.launchOutput(33)", launchcode.launchOutput(33))
console.log("launchcode.launchOutput(25)", launchcode.launchOutput(25))
console.log("launchcode.launchOutput(6)", launchcode.launchOutput(6))
console.log("launchcode.launchOutput(15)", launchcode.launchOutput(15))
console.log("launchcode.launchOutput(10)", launchcode.launchOutput(10))
console.log("launchcode.launchOutput(30)", launchcode.launchOutput(30))
console.log("launchcode.launchOutput(17)", launchcode.launchOutput(17))
console.log("launchcode.launchOutput(31)", launchcode.launchOutput(31))
console.log("launchcode.launchOutput(49)", launchcode.launchOutput(49))



module.exports = launchcode;

