//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, 
// chemical symbol and mass for different elements.

let nameArr = ["Hydrogen", "Helium", "Iron"];
let symbolArr = ["H", "He", "Fe"];
let massArr = [1.0080, 4.00260, 55.84];


//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
    let table = [];

    table.push(nameArr);
    table.push(symbolArr);
    table.push(massArr);

    console.log(table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

    console.log(table[1]);
    console.log(table[1][2]);


//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 
// and the symbol for element26.

    let elementNumArr = [1, 2, 26];

    table.splice(0,0, elementNumArr);    // adds element number Array to index 0
    console.log(table);

   console.log(`'The mass of element1 is ${table[3][0]} the name for element 2 is ${table[1][1]} and the symbol for element26 is ${table[2][2]}'`)



//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, 
// and the second level holds the name/symbol/mass values. 
// Experiment! Create a 3-dimensional array and print out one entry from each level in the array.


let threeDArr = new Array();
threeDArr[0] = new Array();
threeDArr[0][0] = new Array();

threeDArr[0][0][0] = "Hello!"
threeDArr[0][0][1] = "World!"

console.log(threeDArr)






