//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

//console.log(language.slice(language.indexOf("J"), language.indexOf("J")+ 1))
//console.log(language.slice(language.indexOf("S"), language.indexOf("S") + 1))


//console.log(language.slice(language.indexOf("J"), language.indexOf("J")+ 1) + language.slice(language.indexOf("S"), language.indexOf("S") + 1))
// Using "," to join variables puts a whitespace. 
// Using "+" to concatenate joins variables without whitespace.

let strLanguageAbb  = language.slice(language.indexOf("J"), language.indexOf("J")+ 1) 
let strLanguageAbb1 = language.slice(language.indexOf("S"), language.indexOf("S") + 1)

console.log("Abbreviation of JavaScript is ", strLanguageAbb + strLanguageAbb1)



//2. Without using slice(), use method chaining to accomplish the same thing.

//console.log(language.substring(language.indexOf("J"), language.indexOf("J")+1))
//console.log(language.substring(language.indexOf("S"), language.indexOf("S")+1))

console.log("\nExtracting substring without using Slice() & displaying by Method Chaining ")
console.log(language.substring(language.indexOf("J"), language.indexOf("J")+1) + language.substring(language.indexOf("S"), language.indexOf("S")+1))



//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."


console.log(`The abbreviation for \'${language}\' is \'${language[0]}${language[4]}\'.`)



//4. Just for fun, try chaining 3 or more methods together, and then print the result.

let forFunning = "A smile is a curve that sets everything straight! :)"

// Funning with Substring(), replace(), case methods

console.log(`\n${forFunning} 
    \t${forFunning.substring(forFunning.indexOf(" ") + 1, forFunning.indexOf(" ") + 6).toUpperCase()}
    \t${forFunning.substring(forFunning.indexOf("c"), forFunning.indexOf("c") + 6).replace("u", "a").toLowerCase()}`)
    

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

let changeCase = notTitleCase.replace("t", "T")
changeCase = changeCase.replace("c", "C")           // 

console.log(`\"${notTitleCase}\" after capitalizing each word becomes \"${changeCase}\".`)

