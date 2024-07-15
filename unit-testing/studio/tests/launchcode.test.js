// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!

  // organization: 1. Inside the describe function in launchcode.test.js, write a test that will check that 
  //                  the value of organization is "nonprofit". Run your test.

  test("test 1: should have value of organization as 'nonprofit'", () => {
    let output = launchcode.organization;
    expect(output).toBe("nonprofit");

  });


  // executiveDirector: 1. Write a new test that will check that the value of executiveDirector is "Jeff". Run your test.  
  test("test 2: should have value of executiveDirector as 'Jeff'", () => {
    let output = launchcode["executiveDirector"];
    expect(output).toBe("Jeff");
  });


//percentageCoolEmployees: 1. Write another test that will check that the value of percentageCoolEmployees. Run your test.
test("test 3: should have value of percentageCoolEmployees", () => {
  let output = launchcode["percentageCoolEmployees"];
  //expect(output).not.toBeEmpty();
  //expect(output).exists();
  expect(output).toBe(100);
});

/* programsOffered: 1. Write a fourth test that will check the value of programsOffered. 
                    You should have four expect statements within your test. Three of them should check that the array 
                    contains the appropriate values and the final one should check that the array is the appropriate size. 
                    Before moving on, take a moment either individually or with a classmate, to reflect on why you would 
                    need these four expect statements. Run your test.
*/

test("test 4: should check array contains appropriate values and array is appropriate size", () =>{
  let output = launchcode.programsOffered[0];
  expect(output).toContain("Web Development");

  output = launchcode.programsOffered[1];
  expect(output).toContain("Data Analysis");

  output = launchcode.programsOffered[2];
  expect(output).toContain("Liftoff");

  output = launchcode.programsOffered.length;
  expect(output).toBe(3);
});

// launchOutput(): 1. When passed a number that is ONLY divisible by 2, return 'Launch!'
test("test 5: should return 'Launch' when passed a number divisable ONLY by 2", () => {
  let output = launchcode.launchOutput(14);
  expect(output).toBe('Launch!')
});

/* Write the Next Two Tests: 
    2. When passed a number that is ONLY divisible by 3, launchOutput() returns 'Code!'
    3. When passed a number that is ONLY divisible by 5, launchOutput() returns 'Rocks!'
*/

test("test 6: should return 'Code!' when passed a number divisable ONLY by 3", () => {
  let output = launchcode.launchOutput(33);
  expect(output).toBe('Code!');
});

test("test 7: should return 'Rocks!' when passed a number divisable ONLY by 5", () => {
  let output = launchcode.launchOutput(25);
  expect(output).toBe('Rocks!');
});

// 4. When passed a number that is divisible by  ONLY 2 AND 3, return 'LaunchCode!'
test("test 8: should return 'LaunchCode!' when passed a number that is divisible by 2 AND 3", () => {
  let output = launchcode.launchOutput(6);
  expect(output).toBe('LaunchCode!');
});

// 5. When passed a number that is divisible by  ONLY 3 AND 5, return 'Code Rocks!'
test("test 9: should return 'Code Rocks!' when passed a number that is divisible by 3 AND 5", () => {
  let output = launchcode.launchOutput(15);
  expect(output).toBe('Code Rocks!');
});


// 6. When passed a number that is divisible by ONLY 2 AND 5, return 'Launch Rocks!'
test("test 10: should return 'Launch Rocks!' when passed a number that is divisible by 2 AND 5", () => {
  let output = launchcode.launchOutput(10);
  expect(output).toBe('Launch Rocks!');
});


// 7. When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'
test("test 11: should return 'Launch Rocks!' when passed a number that is divisible by 2, 3 AND 5", () => {
  let output = launchcode.launchOutput(30);
  expect(output).toBe('LaunchCode Rocks!');
});


// 8. When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'
test("test 12: should return 'Launch Rocks!' when passed a number that is NOT divisible by 2, 3 AND 5", () => {
  let output = launchcode.launchOutput(31);
  expect(output).toBe("Rutabagas! That doesn't work.");
});


});