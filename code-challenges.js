// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Psuedo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

// create function that takes in a number as an argument
const boilingPointChecker = (num) => {
	// create boiling point variable = 212
	const boilingPoint = 212
	// create conditional
	// if temp below boiling point return "(given argument) is below boiling point"
	if (num < boilingPoint) {
		return `${num} is below boiling point`
	}
	// if temp above boiling point return "(given argument) is above boiling point"
	else if (num > boilingPoint) {
		return `${num} is above boiling point`
	}
	// if (argument given is === boiling point) return "(given argument) is at boiling point"
	else if (num === boilingPoint) {
		return `${num} is at boiling point`
	}
}

// call function
console.log(boilingPointChecker(temp1))
console.log(boilingPointChecker(temp2))
console.log(boilingPointChecker(temp3))

// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

// create function that takes in an array as an argument
const multiplyNumbers = (arr) => {
	// create a variable to hold an array of multipled numbers
	let multiplied = []
	// create a loop that multiplies each number in the array by 5 using a for loop
	for (let i = 0; i < arr.length; i++) {
		// multipy each number in array by 5 and add to newly created originally empty array
		multiplied.push(arr[i] * 5)
	}
	// return newly created originally empty array with multiplied numbers
	return multiplied
}

// call the function
console.log(multiplyNumbers(myNumbers1))

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

// create function that takes in an array as an argument
const multiplyMappedNumbers = (arr) => {
	// create variable that will hold the multiplied numbers array
	// map the given array argument and multiply each number by 5
	let multipliedMappedNumbers = arr.map((value) => {
		return value * 5
	})
	// return newly created originally empty array with mapped values
	return multipliedMappedNumbers
}

// call the function
console.log(multiplyMappedNumbers(myNumbers2))

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = 'HeyThereLearnStudent'
var stringWithVowels2 = 'ILoveJavaScript'

// create function that takes a string as an argument
const vowelRemover = (str) => {
	// create variable that contains an array of vowels
	const vowels = ['a', 'e', 'i', 'o', 'u']
	// create a veriable to hold given string argument converted to lowercase
	let lowercase = str.toLowerCase()
	// create a variable that converts the lowercased given string argument to an array
	let strToArray = lowercase.split('')
	// create variable to hold newly created array of letters with vowels removed
	let result = strToArray.filter((letter) => {
		return !vowels.includes(letter)
	})
	// return result array and join() to create new string
	return result.join('')
}

// call the function
console.log(vowelRemover(stringWithVowels1))
console.log(vowelRemover(stringWithVowels2))

// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

var notAString1 = true
var notAString2 = 42

// create function that takes a string as an argument
const vowelRemoverWithType = (value) => {
	// create variable that contains an array of vowels
	const vowels = ['a', 'e', 'i', 'o', 'u']
	// create a conditional to check data type of given string argument
	// if data type is a string add it to a new variable
	if (typeof value === 'string') {
		let isAString = value
		console.log(isAString)
	} else {
		return `${value} is not a string`
	}
	// create a veriable to hold given string argument converted to lowercase
	let lowercase = isAString.toLowerCase()
	// create a variable that converts the lowercased given string argument to an array
	let strToArray = lowercase.split('')
	// create variable to hold newly created array of letters with vowels removed
	let result = strToArray.filter((letter) => {
		return !vowels.includes(letter)
	})
	// return result array and join() to create new string
	return result.join('')
}

// call the function
console.log(vowelRemoverWithType('string'))

// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [
	{ name: 'Itchy', animal: 'mouse' },
	{ name: 'Stimpy', animal: 'cat' },
	{ name: 'Daffy', animal: 'duck' },
	{ name: 'Scratchy', animal: 'cat' },
	{ name: 'Ren', animal: 'dog' },
	{ name: 'Felix', animal: 'cat' },
]

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"
