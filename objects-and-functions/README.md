# Objects and Functions

## Installation Steps

Before you can work on or run any of these tests, you need to make sure you install the dependencies. The directions are at the [root-level of this repository](https://github.com/turingschool-examples/javascript-foundations).

### Running the Tests

In your terminal, change into the `objects-and-functions` directory, and run the command `npm test test/candy-test.js`. To run other tests, just replace the test file name.

Most of the tests are skipped. When you see `it.skip('should be a function', function () {` in a test, it means that test has been skipped. They are skipped for a good reason - that way, when you run the test suite for the first time, you don't see tons of errors screaming at you in the terminal.

Unskip each test, one at a time in order, so you can concentrate on making one test pass. Unskip the test by deleting the `.skip` from the test's first line so it should look more like `it('should be a function', function () {`. Run the test to see what kind of error you are getting, and then implement the code to make the test pass!


### Make the tests pass in the following sequence:

* test/candy-test.js  
* test/bag-test.js  
* test/costume-test.js  
* test/trick_or_treater-test.js  

*Note: You MAY NEED TO MAKE NEW FILES*

_Adapted from Ruby [Objects and Methods](https://github.com/turingschool/ruby-exercises/tree/master/objects-and-methods)_
