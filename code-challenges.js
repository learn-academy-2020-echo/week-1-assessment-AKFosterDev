// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Psuedo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35;
var temp2 = 350;
var temp3 = 212;

// create function that takes in a number as an argument
const boilingPointChecker = num => {
  // create boiling point variable = 212
  const boilingPoint = 212;
  // create conditional
  // if temp below boiling point return "(given argument) is below boiling point"
  if (num < boilingPoint) {
    return `${num} is below boiling point`;
  }
  // if temp above boiling point return "(given argument) is above boiling point"
  else if (num > boilingPoint) {
    return `${num} is above boiling point`;
  }
  // if (argument given is === boiling point) return "(given argument) is at boiling point"
  else if (num === boilingPoint) {
    return `${num} is at boiling point`;
  }
};

// call function
console.log(boilingPointChecker(temp1));
console.log(boilingPointChecker(temp2));
console.log(boilingPointChecker(temp3));

// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9];

// create function that takes in an array as an argument
const multiplyNumbers = arr => {
  // create a variable to hold an array of multiplied numbers
  let multiplied = [];
  // create a for loop that multiplies each number in the array by 5
  for (let i = 0; i < arr.length; i++) {
    // multiply each number in array by 5 and add to newly created originally empty array
    multiplied.push(arr[i] * 5);
  }
  // return newly created originally empty array with multiplied numbers
  return multiplied;
};

// call the function
console.log(multiplyNumbers(myNumbers1));

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2];

// create function that takes in an array as an argument
const multiplyMappedNumbers = arr => {
  // create variable that will hold the multiplied numbers array
  // map the given array argument and multiply each number by 5
  let multipliedMappedNumbers = arr.map(value => {
    return value * 5;
  });
  // return newly created originally empty array with mapped values
  return multipliedMappedNumbers;
};

// call the function
console.log(multiplyMappedNumbers(myNumbers2));

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = 'HeyThereLearnStudent';
var stringWithVowels2 = 'ILoveJavaScript';

// create function that takes a string as an argument
const vowelRemover = str => {
  // create variable that contains an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // create a variable that converts given string argument to an array
  let strToArray = str.split('');
  // create variable to hold newly created array of letters with vowels removed
  let result = strToArray.filter(letter => {
    return !vowels.includes(letter);
  });
  // return result array and join() to create new string
  return result.join('');
};

// call the function
console.log(vowelRemover(stringWithVowels1));
console.log(vowelRemover(stringWithVowels2));

// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

var notAString1 = true;
var notAString2 = 42;

// create function that takes a string as an argument
const vowelRemoverWithType = value => {
  // create variable that contains an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // create a conditional to check data type of given string argument
  if (typeof value === 'string') {
    // if data type is a string add it to a new variable
    let isAString = value;
    // create variable that holds the given string argument as an array
    let strToArray = isAString.split('');
    // create variable to hold newly created array of letters with vowels removed
    let result = strToArray.filter(letter => {
      return !vowels.includes(letter);
    });

    // return result array and join remaining letters to create new string
    return result.join('');
  } else {
    return `${value} is not a string`;
  }
};

// call the function
console.log(vowelRemoverWithType(notAString1));
console.log(vowelRemoverWithType(notAString2));

// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [
  { name: 'Itchy', animal: 'mouse' },
  { name: 'Stimpy', animal: 'cat' },
  { name: 'Daffy', animal: 'duck' },
  { name: 'Scratchy', animal: 'cat' },
  { name: 'Ren', animal: 'dog' },
  { name: 'Felix', animal: 'cat' },
];

// create function that takes an array as an argument
const findCats = arr => {
  // create variable to hold an array of toon objects that are cats
  // create loop with conditional to check animal = cat
  // if cat - add to new array
  let areCats = arr.filter(value => value.animal === 'cat');

  // return an array with only the toon objects that are cats
  return areCats;
};

// call the function
console.log(findCats(toonimals));

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

// create function that takes an array as an argument
const findNonCatNames = arr => {
  // create variable to hold an array of toon objects that are not cats
  // if not a cat - add to new array
  let areNotCats = arr.filter(value => {
    if (value.animal !== 'cat') {
      return value.name;
    }
  });
  // create new array that contains only non-cat names
  let areNotCatsNames = areNotCats.map(value => value.name);
  // return new array with only non-cat names as strings
  return areNotCatsNames.join(' ');
};

// call the function
console.log(findNonCatNames(toonimals));
