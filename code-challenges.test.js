// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

describe("fibnachi", () => {
  //place variubles here
  it("the sum of the previous two indices equals the next number", () => {
    expect(fibnachi(6)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibnachi(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
//
// // a describe method that lists the name of the function OR naming of the particular test.
// describe("hello", () => {
//
//   // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//   it("the arraw will be in accordance with the fibnachi sequance", () => {
//
//     //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//     expect(hello()).toEqual("hi")
//   })
// })

//input number will is greater than 2
//the array will  have variables that are the sum of the previous numbers
//        - 2 variables,add the 2 variables
//          -current number and previous number shifted by one
// Create an arrat that shows the sum the two var

const fibnachi = (input) => {
  if (input <= 2) {
    return `number needs to be greater than two`;
  } else if (input > 2) {
    let num1 = 1;
    let num2 = 1;
    let array = [num1, num2];

    for (let i = 0; i < input - 2; i++) {
      let sum = num1 + num2;
      array.push(sum);
      console.log(array);
      num1 = array[2 + i];
      console.log(num1);
      num2 = array[1 + i];
      console.log(num2);
    }
    return array;
  }
};

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
// Expected output: [-823, 7, 23]

// a describe method that lists the name of the function OR naming of the particular test.
describe("oddNums", () => {
  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("filter the odds numbers then put them in assending order", () => {
    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(oddNums(fullArr1)).toEqual([-9, 7, 9, 199]);
    expect(oddNums(fullArr2)).toEqual([-823, 7, 23]);
  });
});

// b) Create the function that makes the test pass.

function sortArray(array) {
  let oddNums = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddNums.push(array[i]);
    }
  }
  oddNums = oddNums.sort((a, b) => a - b);
  array.concat(oddNums);
  array = array.sort((a, b) => a - b);
  return array;
}
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9];
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12];
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = [];
// Expected output: []
// a describe method that lists the name of the function OR naming of the particular test.
describe("sumArray", () => {
  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("this will add the sum  of numbersToAdd1 and numbersToAdd2 resulting in the value of numbersToAdd3", () => {
    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(sumArray(numbersToAdd1 + numbersToAdd2)).toEqual(numbersToAdd3);
  });
});
// b) Create the function that makes the test pass.
function sumArray(numbersToAdd1, numbersToAdd2) {
  var numbersToAdd3 = [];
  for (
    var i = 0;
    i < Math.max(numbersToAdd1.length, numbersToAdd2.length);
    i++
  ) {
    numbersToAdd3.push((numbersToAdd1[i] || 0) + (numbersToAdd2[i] || 0));
  }
  return numbersToAdd3;
}
