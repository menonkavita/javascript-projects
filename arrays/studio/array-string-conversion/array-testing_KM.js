let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

// 1)
/* For a given string, use the includes method to check to see if the words are separated by commas (,), 
semicolons (;), or just spaces.
*/



//2) 
/* Use the reverseCommas() function to code the following. If the string uses commas to separate the words, 
split it into an array, reverse the entries, and then join the array into a new comma-separated string. 
For example, "up,to,code,fun" becomes "fun,code,to,up".
*/
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check;
	let output;

	//TODO: 2. write the code required for this step
    //let protoArray1 = "3,6,9,12";

	check = strings[0];

	if (check.includes(",")) {
		output = check.split(",").reverse().join(",")
	}
		//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	console.log(output)
	return output;
}


//3)
function semiDash() {
	let check;
	let output;

//TODO: write the code required for this step

/* Use the semiDash() function to code the following. If the string uses semicolons to separate the words, 
split it into an array, alphabetize the entries, and then join the array into a new hyphen-separated string. 
For example, "up;to;code;fun" becomes "code-fun-to-up".
*/
// let protoArray2 = "A;C;M;E";


check = strings[1];

if (check.includes(";")) {
    output = check.split(";").sort().join("-")
}
    //NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
console.log(output)

	return output;
}

//4)
/* Use the reverseSpace() function to code the following. If the string uses spaces to separate the words, 
split it into an array, reverse alphabetize the entries, and then join the array into a new space-separated string. 
For example, "to code up fun" becomes "up to fun code".
*/

//let protoArray3 = "space delimited string";  // delimied, space, string

function reverseSpaces() {
	let check;
	let output;
  //TODO: write the code required for this step
  check = strings[2];

  if (check.includes(" ")) {
      output = check.split(" ").sort().reverse()   //.join(" ")
  }
      //NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
    console.log(output)
	return output;
}

//5)
    /* Use the commaSpace() function to code the following. Consider: What if the string uses ‘comma spaces’ (, ) 
    to separate the list? Modify your code to produce the same result as #2, making sure that the extra spaces are 
    NOT part of the final string.
    */
    // let protoArray4 = "Comma-spaces, might, require, typing, caution";

function commaSpace() {
	let check;
	let output;
	//TODO: write the code required for this step

    check = strings[3];

	if (check.includes(", ")) {
		output = check.split(", ").reverse().join(",")
	}
		//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	console.log(output)
  	return output;
}

reverseCommas()
semiDash()
reverseSpaces()
commaSpace() 



// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
