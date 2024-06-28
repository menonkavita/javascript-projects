
// Function Exercises

const input = require('readline-sync');

let char = "";

function makeLine(size, defaultChar = "#"){
  let i = 0;
  let myLine = "";

  if (char.length > 0 ){
    defaultChar = char;
  }

    for(i=0; i < size; i++){
      //myLine = myLine + "#"
      myLine = myLine + defaultChar
    }
    return myLine;
}

function makeSquare(size1)
{
  let j = 0;
  let mySquare = "";

  for(j = 0; j < size1; j++){
    if(j < (size1 - 1)){              // if else to prevent addition of newline \n at the end of the string mySquare
      mySquare = mySquare + makeLine(size1) +"\n";
    }
    else{
      mySquare = mySquare + makeLine(size1);
    }
  }
  return mySquare;

}

function makeRectangle(myWidth, myHeight){
  let j = 0;
  let myRect = "";

  for(j = 0; j < myHeight; j++){
    if(j < (myHeight - 1)){              // if else to prevent addition of newline \n at the end of the string myRect
      myRect = myRect + makeLine(myWidth) +"\n";
    }
    else{
      myRect = myRect + makeLine(myWidth);
    }
  }
  return myRect;
}

function makeDownwardStairs(height){
  let myStairs = ""

  for (let i = 0; i < height; i++){
    myStairs = myStairs + makeLine(i + 1) + "\n"
  }

  return myStairs.slice(0, myStairs.length-1)   // To prevent the addition of newline \n at the end of the string myStairs
}

function makeSpaceLine(numSpaces, numChars, defaultChar = "#"){
  let mySpLine = "";
  let i = 0;

  if (char.length > 0 ){
    defaultChar = char;
  }

  for(i=0; i<numSpaces; i++){
     mySpLine = mySpLine + " ";
  }

  for(i = 0; i < numChars; i++){
    mySpLine = mySpLine + defaultChar;
  }
 
  for(i=0; i<numSpaces; i++){
    mySpLine = mySpLine + " ";
 }

  return mySpLine;
}

function makeIsoscelesTriangle(height, defaultChar = "#") {
  let myTriangle = "";

  if (char.length > 0 ){
    defaultChar = char;
  }

  for (let i = 0; i < height; i++) {
    myTriangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
  }
  return myTriangle.slice(0, -1);
}

function reverse(str) {
  let reversed = '';

  for (let i = 0; i < str.length; i++) {
      reversed = str[i] + reversed;
  }
 
  return reversed;
}

function makeDiamond(height){
  let myDiamond = "";

  myDiamond = makeIsoscelesTriangle(height)
  myDiamond = myDiamond + "\n" + reverse(myDiamond) 
  return myDiamond;
}

function runProgram(){
 
  char = input.question("Please enter a character to make a line. If no character is entered, default character '#' will be used. \n")

  let getNum = Number(input.question("Please enter a number to make a line. "))
   let strLine = makeLine(getNum);
  console.log(strLine)
  
  getNum = Number(input.question("\nPlease enter a number to make a square. "))
  let strSquare = makeSquare(getNum);
  console.log(strSquare)
  
  getNum = Number(input.question("\nEnter the width of the Rectangle. "))
  let getNum1 =  Number(input.question("Enter the height of the Rectangle. "))

  let strRect = makeRectangle(getNum, getNum1);
  console.log(strRect)
  
  getNum = Number(input.question("\nEnter the Height of the Downward Stairs. "))
  let strStairs = makeDownwardStairs(getNum);
  console.log(strStairs)

  getNum = Number(input.question("\nEnter the number of spaces for Space Line. "))
  getNum1 =  Number(input.question("Enter the number of characters for the Space Line. "))

  let strSpaceLine = makeSpaceLine(getNum, getNum1)
  console.log(strSpaceLine);

  getNum = Number(input.question("\nEnter the Height of the Isoceles Triangle. "))
  let strTriangle = makeIsoscelesTriangle(getNum);
  console.log(strTriangle);

  // makeDiamond(height)                                                 // Make Isoceles Triangle & reverse it.
  getNum = Number(input.question("\nEnter the Height of the Isoceles Triangle to be converted into Diamond. "))
  let strDiamond = makeDiamond(getNum);
  console.log(strDiamond); 


  // Bonus Mission - Refactor your functions so that they take a single character as a parameter,
  // and draw the shapes with that character instead of always using '#'. 
  // Make the new parameter optional, with default value '#'.

  console.log(`Tried out Bonus Mission by asking for user input for character in the first line of program. 
    If no character was entered, default character '#' was used.`)
}

runProgram()

