// Define your Book class here:

class Book{
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }

    checkOut(uses = 1){
        this.timesCheckedOut += uses;
    }
}


// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }

    dispose(currentYear){
        if(currentYear - this.copyright > 5){
            this.discarded = "Yes";
        }
        return this.discarded;
    }
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }

    dispose() {
        if(this.timesCheckedOut >  100){
            this.discarded = "Yes";
        }
        return this.discarded;
    }
}

// Declare the objects for exercises 2 and 3 here:

let novelBook = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No")
let manualBook = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No")


// Code exercises 4 & 5 here:


let currentYear = 2024;
console.log("\nDispose manual?", manualBook.dispose(currentYear))

if (manualBook.dispose(currentYear) === "Yes" ){
    console.log(`${manualBook.title} has copyright ${manualBook.copyright}. Book has been used for ${(currentYear - manualBook.copyright) - 5} year(s) past its due date and needs to be disposed.`)
}
else{
    console.log(`${manualBook.title} has copyright ${manualBook.copyright} & can be used for ${5 - (currentYear - manualBook.copyright)} more years before it becomes irrelevant. `)
}


// The other book has been checked out 5 times since you first created the object. Call the appropriate method to 
// update the number of times the book has been checked out.
novelBook.checkOut(5); 
console.log("\nDispose novel?", novelBook.dispose())

if (novelBook.dispose() === "Yes"){
    console.log(`${novelBook.title} has been checked out ${novelBook.timesCheckedOut} times (${novelBook.timesCheckedOut-100} more than cutoff). It needs to be disposed.`)
}
else{
    console.log(`${novelBook.title} has been checked out ${novelBook.timesCheckedOut} times. It can be checked out ${100-novelBook.timesCheckedOut} more times before it can be disposed.`)
}




