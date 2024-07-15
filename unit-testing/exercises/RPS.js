
function whoWon(player1,player2){
  // BONUS MISSION: Check only valid entries - 'rock', 'paper', or 'scissors' - are passed into the whoWon function
  if((player1 === "rock" || player1 === "paper" || player1 === "scissors") && 
  (player2 === "rock" || player2 === "paper" || player2 === "scissors"))
  { 
    if (player1 === player2){
      return 'TIE!';
    }
    
    if (player1 === 'rock' && player2 === 'paper'){
      return 'Player 2 wins!';
    }
    
    if (player1 === 'paper' && player2 === 'scissors'){
      return 'Player 2 wins!';
    }
    
    if (player1 === 'scissors' && player2 === 'rock'){
      return 'Player 2 wins!';
    }

    // rock scissors undefined
    if (player1 === 'rock' && player2 === 'scissors'){
      return 'Player 1 wins!';
    }

    // scissors paper undefined
    if (player1 === 'scissors' && player2 === 'paper'){
      return 'Player 1 wins!';
    }
    
    // paper rock undefined
    if (player1 === 'paper' && player2 === 'rock'){
      return 'Player 1 wins!';
    }
// return 'Player 1 wins!';
  
  } else {
    return "Invalid Entries."
    
  }
}

console.log("\njava", "beans", whoWon("java", "beans"))
console.log("Hello", "World", whoWon("Hello", "World"))
console.log("Super", "Duper", whoWon("Super", "Duper"),"\n")

console.log("paper", "paper", whoWon("paper", "paper"))
console.log("rock", "rock", whoWon("rock", "rock"))
console.log("scissors", "scissors", whoWon("scissors", "scissors"),"\n")

console.log("rock", "paper", whoWon("rock", "paper"))
console.log("rock", "scissors", whoWon("rock", "scissors"))

console.log("scissors", "rock", whoWon("scissors", "rock"))
console.log("scissors", "paper", whoWon("scissors", "paper"))

console.log("paper", "scissors", whoWon("paper", "scissors"))
console.log("paper", "rock", whoWon("paper", "rock"))





module.exports = whoWon



