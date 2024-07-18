function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];
    let result;

    try{
        result = lab.runLab(3);
    }
    catch{

      result = "Error thrown";
    }
   
    console.log(`${lab.student} code worked: ${result === 27}`);
    //console.log(`${lab.student} code worked: ${result}`);             // Displays value in result variable
  }
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

gradeLabs(studentLabs);


// Incorrectly named lab () in one of the students.

let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];

console.log("\nProcessing - Students Labs 2")
gradeLabs(studentLabs2);

