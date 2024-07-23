// Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. 
// Note that scores will be an array of test results.

class CrewCandidate{
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(newScore){
        this.scores.push(newScore);
        return this.scores;       
    }

    average(){
        let avgScore =0;

        for(let i=0; i < this.scores.length; i++){
            avgScore += this.scores[i];
        }

        return Math.round((avgScore / this.scores.length) * 10 ) / 10;      // Caluclating average & Rounding to one decimal place.
    }

    status(avgScore){                                           // status() that can accept average() as parameter.
        //avgScore = Math.round(avgScore);

        if(avgScore >= 90){
            return "Accepted";
        } 
        else if(avgScore >= 80){ 
            return "Reserve";
        }
        else if(avgScore >=70){
            return "Probationary";
        }
        else{ 
            return "Rejected"; 
        }
    }

    /*
    status(){                                           // status() that calls average() from within function.
        let strStatus;
        let avgScore = Math.round(this.average());

        if(avgScore >= 90){
            strStatus = "Accepted";
        } 
        else if(avgScore < 90){
            strStatus = "Reserve";
        }
        else if(avgScore < 80){
            strStatus = "Probationary";
        }
        else if(avgScore < 70){
            strStatus = "Rejected"; 
        }

        return strStatus;
    }*/
}

let objBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let objMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let objGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(`\n${objBear.name} has a mass of ${objBear.mass} kgs and test scores of ${objBear.scores}`);
console.log(`${objMaltese.name} has a mass of ${objMaltese.mass} kgs and test scores of ${objMaltese.scores}`);
console.log(`${objGator.name} has a mass of ${objGator.mass} kgs and test scores of ${objGator.scores}`);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.


// Adding a new score to Bubba Bear's record
objBear.addScore(83);
console.log(`\n${objBear.name} has a mass of ${objBear.mass} kgs and an addition in test scores of ${objBear.scores}`);


// Testing average ()
console.log(`\n${objMaltese.name} has an average test score of ${objMaltese.average()}`);


// Testing status(); status() accepts average() as parameter; also tested status() when it called average() from inside the status () function.
console.log(`\n${objBear.name} earned an average test score of ${objBear.average()}% and has a status of ${objBear.status(objBear.average())}.`)
console.log(`${objMaltese.name} earned an average test score of ${objMaltese.average()}% and has a status of ${objMaltese.status(objMaltese.average())}.`)
console.log(`${objGator.name} earned an average test score of ${objGator.average()}% and has a status of ${objGator.status(objGator.average())}.`)



//Part 4 - Play a Bit: Use the methods to boost Glad Gator’s status to Reserve or higher. 
// How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
// Tip: Rather than adding one score at a time, could you use a loop?

// Answer: 9 score additions (one single & rest 8 in array) all in 90s were needed for Gator to be Accepted wih a rounding up of score.
// With 10 score entries, Gator legitimately became Accepted.
// Gator attained "Reserved" status with one new score addition (not in the array).

objGator.addScore(95);
console.log(`\n${objGator.name} earned an average test score of ${objGator.average()}% and has a status of ${objGator.status(objGator.average())} with one single score entry of 95.`)
// Gator attained "Reserved" status with the new score above.


let boostScore = [97, 93, 99, 96, 94, 95, 97, 95, 97];

for(let i=0; i< boostScore.length; i++){
    objGator.addScore(boostScore[i]);
}

console.log(`\n${objGator.name} earned an average test score of ${objGator.average()}% and has a status of ${objGator.status(objGator.average())} with 9 array score entries.`)








