let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. 
//Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

    let holdCabinetAll = [];
    
    holdCabinetAll = holdCabinet1.concat(holdCabinet2)
    console.log("New Array values are ",holdCabinetAll)

    console.log("\nArray 1 value ", holdCabinet1)
    console.log("\nArray 2 value ", holdCabinet2)


//2) Print a slice of two elements from each array. Does slice alter the original arrays?

    console.log("\nDisplaying 2 elements of first array ", holdCabinet1.slice(1, 3))
    console.log("\nDisplaying 2 elements of second array ",holdCabinet2.slice(1, 3))


//3) reverse the first array, and sort the second. What is the difference between these two methods? 
     // Do the methods alter the original arrays?

    holdCabinet1.reverse()
    holdCabinet2.sort()
    console.log("\nArray 1 value after Reverse is ", holdCabinet1)
    console.log("\nArray 2 value after Sort is ", holdCabinet2)




