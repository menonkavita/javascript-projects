const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  let i = 0;

  let j = 0;
  //let makeMeal = [];
  //let oneMeal = [];   // Building a single meal
  
  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment (and above the return statement) ... ///
 /*
    1. The meals must include one item from each category in the pantry array.
    2. Each ingredient can only be used ONCE.
    3. Add each meal to the meals array once it is assembled.
    4. To test your own solution, scroll down to another function defined in this file called runProgram(). 
    Uncomment the lines that call the mealAssembly function and print the result. 
    Run the command node index to see how your work is progressing.
*/
  
console.log("Meals to be made for ", numMeals, "crew.\n")

  for(i = 0; i < numMeals; i++){                            // Make "numMeals" number of meals
    let makeMeal = [];
    let oneMeal = [];                                       // Building a single meal

      for (let j = 0; j < pantry.length; j++) {
          makeMeal = [];
          makeMeal = pantry[j]                               // Storing in a temp array variable
          oneMeal.push(makeMeal[i])
      }
      //console.log("Meal ", i+1,"  -  ", oneMeal)
    meals.push(oneMeal)
  }
    return meals;
}


function askForNumber() {
  let numMeals = 0;
  numMeals = Number(input.question("\nHow many meals would you like to make? Please enter a number between 1 and 6.   "));
  
  /// CODE YOUR SOLUTION TO PART B here ///

  while(!(numMeals >= 1 && numMeals <= 6)){
      numMeals = Number(input.question("Please enter a number between 1 and 6.   "))
  }
  return numMeals;
}


function generatePassword(string1, string2) {
  let code = '';

  /// Code your Bonus Mission Solution here ///

let str1 = string1;
let str2 = string2;
let i = 0;

for(i = 0; i < str1.length; i++){               // Since both strings are same length
        code = code + str1[i] + str2[i]
  }

  return code;
}

function runProgram() {
  
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') 
  //and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///
  
  let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 2);
  console.log(" -------- Meal plan for 2 of the Crew --------\n", meals)
  

  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  
   let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
   console.log(" -------- Crew Meal plan for number input by user --------\n", mealsForX);

    /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

  //let password1 = '1234';
  //let password1 = 'ABCDEF'
  let password1 = 'LoOt'

  //let password2 = '5678';
  //let password2 = 'notyet'
  let password2 = 'oku!'

  console.log("\nTime to run the password generator so we can update the menu tomorrow.")
  console.log(`The new password is: ${generatePassword(password1, password2)}`);
}


module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};
