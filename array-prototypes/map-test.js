var assert = require('chai').assert;

describe('Map', function () {

  it('should return an array of the length of each word', function () {
    var words = ['float', 'chrysalis', 'butterfly', 'buzzing']; // Do not change this line

    var wordLengths = words.map(); // Write your code here to pass the assertions below

    assert.deepEqual(words, ['float', 'chrysalis', 'butterfly', 'buzzing']);  // Do not change this line
    assert.deepEqual(wordLengths, [5, 9, 9, 7]);  // Do not change this line
  });

  it.skip('should return an array of names with each name capitalized', function () {
    var names = ['alice', 'bob', 'charlie', 'daniel', 'falcon'];  // Do not change this line

    var capitalizedNames = names.map(); // Write your code here to pass the assertions below

    assert.deepEqual(names, ['alice', 'bill', 'charlie', 'jim', 'falcon']);  // Do not change this line
    assert.deepEqual(capitalizedNames, ['Alice', 'Bill', 'Charlie', 'Jim', 'Falcon']);  // Do not change this line
  });

  it.skip('should return an array of doubled numbers', function () {
    var numbers = [1, 2, 3, 4, 5]; // Do not change this line

    var doubles = numbers.map(); // Write your code here to pass the assertions below

    assert.deepEqual(numbers, [1, 2, 3, 4, 5]); // Do not change this line
    assert.deepEqual(doubles, [2, 4, 6, 8, 10]); // Do not change this line
  });

  it.skip('should return an array of squared numbers', function () {
    var numbers = [1, 2, 3, 4, 5]; // Do not change this line
    
    var squaredNumbers = numbers.map(); // Write your code here to pass the assertions below
    
    assert.deepEqual(numbers, [1, 2, 3, 4, 5]); // Do not change this line
    assert.deepEqual(squaredNumbers, [1, 4, 9, 16, 25]); // Do not change this line
  });

  it.skip('should return an array of normalized zipcodes', function () {
    var numbers = [234, 10, 9119, 38881]; // Do not change this line

    var zipCodes = numbers.map(); // Write your code here to pass the assertions below

    assert.deepEqual(numbers, [234, 10, 9119, 38881]); // Do not change this line
    assert.deepEqual(zipCodes, ["00234", "00010", "09119", "38881"]); // Do not change this line
  });

  it.skip('should return an array of names backwards', function () {
    var names = ['alice', 'bob', 'charlie', 'daniel', 'falcon'];  // Do not change this line
    
    var backwardsNames = names.map(); // Write your code here to pass the assertions below

    assert.deepEqual(names, ['alice', 'bill', 'charlie', 'jim', 'falcon']);  // Do not change this line
    assert.deepEqual(backwardsNames, ['ecila', 'llib', 'eilrahc', 'mij', 'noclaf']); // Do not change this line
  });

  it.skip('should return an array of words with no vowels', function () {
    var words = ["green", "sheep", "travel", "least", "boat"]; // Do not change this line
    
    var withoutVowels = words.map(); // Write your code here to pass the assertions below

    assert.deepEqual(words, ["green", "sheep", "travel", "least", "boat"]);  // Do not change this line
    assert.deepEqual(withoutVowels, ["grn", "shp", "trvl", "lst", "bt"]); // Do not change this line
  });

  it.skip('should return an array of words without the last letter of each element', function () {
    var animals = ["dog", "cat", "mouse", "frog", "platypus"];  // Do not change this line

    var trimmed = animals.map(); // Write your code here to pass the assertions below

    assert.deepEqual(animals, ["dog", "cat", "mouse", "frog", "platypus"]);  // Do not change this line
    assert.deepEqual(trimmed, ["do", "ca", "mous", "fro", "platypu"]); // Do not change this line
  });
});