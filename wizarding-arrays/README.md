# Wizarding Arrays

## Installation Steps

In order to be able to run these tests you need to install the dependencies at the root level of this repository. Find the directions [here]([root-level of this repository](https://github.com/turingschool-examples/javascript-foundations)).

### Running the Tests

You can run the tests from the root of this repository. When you type `pwd` in the console, the last path location should be `javascript-foundations`.

To run a single test file, enter the following command in your terminal. To run other test files, simply update the command with the name of the test you would like to run.

```shell
$ npm test wizarding-arrays/test/potions-test.js
```

### Skipped Tests

Most of the tests are skipped. When you see `it.skip('should be a function', function () {` in a test, it means that test has been skipped. They are skipped for a good reason - that way, when you run the test suite for the first time, you don't see tons of errors screaming at you in the terminal.

Unskip one test at a time and concentrate on making that one test pass. Unskip the test by removing the `.skip` from the first line of the test so that it looks like: `it('should be a function', function () {`. Run the test to see what kind of error you are getting, and then implement the code to make the test pass!

### Make the tests pass in the following sequence:

* test/spells-test.js
* test/potions-test.js
