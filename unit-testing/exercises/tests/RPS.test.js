const whoWon = require('../RPS.js')


describe("whoWon", function(){
    // BONUS MISSION: Check only valid entries - 'rock', 'paper', or 'scissors' - are passed into the whoWon function
    test("return 'Invalid Entries' if anything other than 'rock', 'paper', or 'scissors' passed into whoWon function", () => {
        let output = whoWon("a", "b");
        expect(output).toBe("Invalid Entries.")
    })

    // Covers console.log("rock", "rock"), console.log("scissors", "scissors"),  console.log("paper", "paper")
    test("should say TIE when player 1 and player 2 choose same option", () => {
        let output = whoWon("rock", "rock");
        expect(output).toBe("TIE!")
    });

    //  console.log("rock", "paper")
    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function() {
        let output = whoWon("rock", "paper");
        expect(output).toBe("Player 2 wins!");
    });
    
    // console.log("paper", "scissors")
    test("returns 'Player 2 wins!' if player 1 = paper and player 2 = scissors", () => {
        let output = whoWon("paper", "scissors");
        expect(output).toBe("Player 2 wins!");
    });

    //console.log("scissors", "rock") 
    test("returns 'Player 2 wins!' if player 1 = scissors and player 2 = rock", () => {
        let output = whoWon("scissors", "rock");
        expect(output).toBe("Player 2 wins!");
    });

    //  console.log("rock", "scissors")
    test("returns 'Player 1 wins!' if player 1 = rock and player 2 = scissors", () => {
        let output=whoWon("rock", "scissors");
        expect(output).toBe("Player 1 wins!");
    });

    // console.log("scissors", "paper")
    test("returns 'Player 1 wins!' when player 1 = scissors and player 2 = paper", () => {
        let output = whoWon("scissors", "paper");
        expect(output).toBe("Player 1 wins!")
    });

    //  console.log("paper", "rock")
    test("returns 'Player 2 wins!' if P1 = paper & P2 = rock", function() {
        let output = whoWon("paper", "rock");
        expect(output).toBe("Player 1 wins!");
    });    

})







