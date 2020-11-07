// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest

// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe('addThemUp', () => {
	test('takes in two numbers as arguments and returns the sum', () => {
		expect(addThemUp(1, 2)).toEqual(3)
		expect(addThemUp(9, 11)).toEqual(20)
		expect(addThemUp(125, 250)).toEqual(375)
	})
})

// --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = (num1, num2) => {
	return num1 + num2
}

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe('triangleArea', () => {
	test('takes the base and the height of a triangle and returns the area', () => {
		expect(triangleArea(2, 4)).toEqual(4)
		expect(triangleArea(5, 10)).toEqual(25)
		expect(triangleArea(25, 100)).toEqual(1250)
	})
})

// --------------------2b) See the test fail. THEN write the code to make the test pass.

const triangleArea = (num1, num2) => {
	return (num1 * num2) / 2
}
