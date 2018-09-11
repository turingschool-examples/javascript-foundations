# JavaScript Foundations

Each exercise emphasizes the fundamentals of object oriented programming in JavaScript.

To begin, `cd` into each of the directories and follow the instructions in the README.

1. Mythical Creatures
2. Objects and Functions
3. Wizarding Objects
4. Wizarding Arrays

## Installation Steps

1. Run `npm install`
2. Test that the unit tests are working: Run the command `npm test es5-mythical-creatures/test/unicorn-test.js` in your terminal

You should see something like:

```shell
> foundations@1.0.0 test /Users/robbie/turing/front-end/1mod/javascript-foundations
> mocha "es5-mythical-creatures/test/unicorn-test.js"

  Unicorn
    - should be a function
    - should instantiate our good friend, Unicorn
    - should have a name
    - should have a color
    - should be white as default
    - should refute isWhite
    - should say sparklying stuff


  0 passing (6ms)
  7 pending
```

Go into each subdirectory, `es5-mythical-creatures`, `objects-and-functions`, and `es5-wizarding-objects`, read the README, and work on making the test suite pass.

## A note on es5 vs es6

Note that there are similar directores like `es5-mythical-creatures` and `es6-mythical-creatures`.  For now, focus only on working through the es5 directories since the syntax there will be most familiar.  If you've worked through many of the tests in Mythical Creatures, Wizarding Objects, Wizarding Arrays, and are excited to start diving into es6 syntax using arrow functions, block-scoped variables, and classes, feel free to start diving into those next.
