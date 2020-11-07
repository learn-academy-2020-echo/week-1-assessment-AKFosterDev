// ASSESSMENT 1: Testing practical questions

const { expect } = require('@jest/globals');
const { describe } = require('yargs');

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest

// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

// describe('addThemUp', () => {
//   test('takes in two numbers as arguments and returns the sum'),
//     () => {
//       expect(addThemUp(1, 2)).toEqual(3);
//     };
// });

// // --------------------1b) See the test fail. THEN write the code to make the test pass.

// const addThemUp = (num1, num2) => {
//   return num1 + num2;
// };

describe('mood', () => {
  test('it takes an argument of mood and return the appropiate action', () => {
    expect(mood('tired')).toEqual('drink coffee');
    expect(mood('not tired')).toEqual('keep working');
  });
});

const mood = feeling => {
  if (feeling === 'tired') {
    return 'drink coffee';
  } else if (feeling === 'not tired') {
    return 'keep working';
  } else {
    return 'think about it';
  }
};

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

// --------------------2b) See the test fail. THEN write the code to make the test pass.
