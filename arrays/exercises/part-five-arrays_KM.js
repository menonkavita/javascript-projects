let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

    let strNew = str.split(" ")
    console.log("Trying split() ", strNew)

    //console.log("Trying split() ", str.split(" "))
 

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

    //strNew = strNew.join("+")

    let arrNew = arr.join("+")
    console.log("Trying join() ", arrNew)

    //console.log("Trying join() ", arr.join("+"))

   

//3) Do split or join change the original string/array?

    console.log("Original string is ", str)
    console.log("Original array is ", arr)

    console.log("\nSplit string is ", strNew)
    console.log("Joined array is ", arrNew)


//4) We can take a comma-separated string and convert it into a modifiable array. 
    // Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.

    let cargoHold = "water,space suits,food,plasma sword,batteries";
    console.log("\n Original String value ", cargoHold)

    cargoHold= cargoHold.split(",")
    console.log("\nConverted string to Array ", cargoHold)

    cargoHold.sort()
    console.log("Alphabetized the string ", cargoHold)



    






