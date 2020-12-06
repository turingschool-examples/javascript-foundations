# JavaScript Foundations

Each exercise emphasizes the fundamentals of object oriented programming in JavaScript.

To begin, fork this repo, clone the fork to your local machine, then `cd` into each of the directories and follow the instructions in the README.

1. [Mythical Creatures](./mythical-creatures)
2. [Objects and Functions](./objects-and-functions)
3. [Wizarding Objects](./wizarding-objects)
4. [Wizarding Arrays](./wizarding-arrays)

## Installation Steps

1. Run `npm install`
2. Test that the unit tests are working: Run the command `npm test mythical-creatures/test/unicorn-test.js` in your terminal

You should see something like:

```shell
> foundations@1.0.0 test /Users/robbie/turing/front-end/1mod/javascript-foundations
> mocha "mythical-creatures/test/unicorn-test.js"

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

Go into each subdirectory, `mythical-creatures`, `objects-and-functions`, `wizarding-objects`, and `wizarding-arrays`, read the README, and work on making the test suite pass.
