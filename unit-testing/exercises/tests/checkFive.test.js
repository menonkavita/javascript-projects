const checkFive = require('../checkFive.js')

describe("checkFive", function(){
    test("if less than number 5 should say less than 5", () =>{
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.")
    });

    test("if equal to number 5 should say equal to 5", () => {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.")
    });

    test("if more than number 5 should say more than 5", () =>{
        let output=checkFive(7);
        expect(output).toEqual("7 is greater than 5.")
    })

})

