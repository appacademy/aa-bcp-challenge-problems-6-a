const assert = require('assert');

const myFind = require('../problems/1-my-find.js');
const hasSymmetry = require('../problems/2-has-symmetry.js');
const totalNumProblems = require('../problems/3-total-num-problems.js');
const evenSumArray = require('../problems/4-even-sum-array.js');
const numsToWords = require('../problems/5-nums-to-words.js');

describe('myfind()', function () {
  it('should return the first element of the array where the callback returns true when passed each element', function () {
    function isUpper(str) {
      return str.toUpperCase() === str;
    }

    function isEven(n) {
      return n % 2 === 0;
    }

    assert.equal(myFind(['bootcamp', 'PREP', 'IS', 'fun'], isUpper), 'PREP');
    assert.equal(myFind(['hello', 'world'], isUpper), undefined);
    assert.equal(myFind([11, 7, 10, 20], isEven), 10);
    assert.equal(myFind([3, 5, 9], isEven), undefined);
  });
});

describe('hasSymmetry()', function () {
  it('should return true if the array has symmetry, false otherwise', function () {
    assert.equal(hasSymmetry([1, 2, 3, 3, 2, 1]), true);
    assert.equal(hasSymmetry([1, 2, 3, 3, 4, 1]), false);
    assert.equal(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']), true);
    assert.equal(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']), false);
  });
});

describe('totalNumProblems()', function () {
  it('should return the total number of problems in all assessments.', function () {
    const assessment1 = {
      w1d5: {
        totalPoints: 7,
        problems: [
          'range',
          'reverseSentence',
          'unique',
          'fizzBuzz',
          'stringRange',
        ],
      },
      w2d1: {
        totalPoints: 10,
        problems: [
          'reverseRange',
          'isPrime',
          'magicNumbers',
          'firstAndLast',
          'royalWe',
        ],
      },
      w2d5: {
        totalPoints: 7,
        problems: [
          'myIndexOf',
          'minMaxDifference',
          'divisibleBy',
          'dynamicFizzBuzz',
          'magicCipher',
        ],
      },
      w3d1: {
        totalPoints: 7,
        problems: [
          'arrayBuilder',
          'longestWord',
          'leastCommonMultiple',
          'sillyCipher',
          'hipsterfy',
        ],
      },
      w3d5: {
        totalPoints: 5,
        problems: [
          'highestScore',
          'snakeToCamel',
          'sum2DArray',
          'minValueCallback',
          'mySelect',
        ],
      },
      w4d1: {
        totalPoints: 5,
        problems: ['not', 'so', 'fast'],
      },
      w4d5: {
        totalPoints: 4,
        problems: [':)'],
      },
    };

    const assessment2 = {
      day1: {
        problems: ['a', 'b', 'c'],
      },
      day2: {
        problems: ['d', 'e', 'f'],
      },
      day3: {
        problems: ['i', 'j'],
      },
      day4: {
        problems: ['k'],
      },
    };

    assert.equal(totalNumProblems(assessment1), 29);
    assert.equal(totalNumProblems(assessment2), 9);
  });
});

describe('evenSumArray()', function () {
  it('should return a new array where each num is replaced with the sum of all even numbers less than or equal to that number', function () {
    assert.deepEqual(evenSumArray([6, 7, 5]), [12, 12, 6]);
    assert.deepEqual(evenSumArray([2, 8, 3, 5]), [2, 20, 2, 6]);
  });
});

describe('numsToWords()', function () {
  it('should return a new string where each digit character is replaced with its "word" respresentation', function () {
    assert.equal(numsToWords('42'), 'FourTwo');
    assert.equal(numsToWords('123'), 'OneTwoThree');
    assert.equal(numsToWords('159598'), 'OneFiveNineFiveNineEight');
  });
});
