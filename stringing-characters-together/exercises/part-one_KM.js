let num = 1001;

// Part 1
//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let str = num.toString()
console.log(str.length);



// Part 2
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

// stringName.indexOf(substr)

num = 123.45
str = num.toString()   // converting number to string to get length

console.log("Length of the decimal", str ,"is ", str.length -1)

// Part 3
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

num = 23890987
num = 98280.1
str = num.toString()

if (str.indexOf(".") >= 0){
    console.log(`length of the decimal string ${str} is ${str.length - 1}`)
}
else{
    console.log(`length of the string ${str} without decimals is ${str.length}`)
}

/*  Using str(numVar).includes()

if (String(num).includes('.')){
    console.log(String(num).length-1);
    } else {
    console.log(String(num).length);
    }
*/







