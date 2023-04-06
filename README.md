# JavaScript Foundations

Each exercise emphasizes the fundamentals of functional programming in JavaScript.

## Installation Steps

1. Fork and clone this repo.
2. Type `cd javascript-foundations` to move into the root directory
3. Run `npm install`
4. Test that the unit tests are working by running the command `npm test mythical-creatures/test/dragon-test.js` in your terminal

You should see something like:

```shell
> foundations@1.0.0 test
> mocha mythical-creatures/test/dragon-test.js

  Dragon
    - should be able to create a dragon with a name
    - should be able to have a different name
    - should have a rider
    - should be able to have a different rider
    - should have a temperment
    - should be able to have different temperments
    - should greet their rider
    - should start off having eaten 0 times
    - should start off being hungry
    - should be full after eating 3 times
    - should be a fireBreather if aggressive in temperment

  0 passing (6ms)
  11 pending
```
5. Make sure you read each subdirectory's README carefully before starting to code!

## Overview

There are lots of test suites in this repo! Our recommendation is to work through this repo as preparation for your final assessment.  
  
We find that when students complete the same test suite over and over, memorization and pattern matching kick in (which is not what we want!). These test suites should be improving your problem solving skills. If you feel yourself being able to write code without reading the full test, it’s probably time for a new test suite. You can (and should) be strategic about how you use these - for example, you might use one of the repos for a mock final assessment with your mentor.

Completing all of these test suites is not necessary, but you should be working on this repo regularly. We see that students are the most successful when they establish a routine for working through these test suites. For example, you might work on them for 45 minutes every morning before class. Find a routine that works best for you and plan ahead so you remain on track to, at minimum, complete all of the mythical tests.

### Test Suites
- [x] 🧚 ‍[Mythical Creatures](./mythical-creatures)
- [x] ✈️ [Airport](./airport)
- [x] 🎧 [DJ](./dj)
- [ ] 🍔 [Favorite Foods](./favorite-foods)
- [ ] 🎮 [Video Games](./video-games/)
- [ ] 🎂 [Birthdays](./birthdays)
- [ ] 🗓 [Calendar](./calendar/)
- [ ] 💵 [Vending Machine](./dollar-store-vending-machine/)
- [ ] 🛗 [Elevator](./elevator/)
- [ ] 📚 [Library](./library)
- [ ] 🌮 [Taco Stand](./tacoStand/)
- [ ] ✂️ [Barber Shop](./barber-shop/)
- [ ] 🥗 [Meal Planning](./meal-planning/)
- [ ] 🍜 [Restaurant](./restaurant/)
- [ ] 🧖‍♀️ [Spa](./spa/)
- [ ] 🎵 [Spotify](./spotify/)
- [ ] 📼 [VHS](./vhs/)

- [x] Want to track your progress? First, make sure you're on a forked version of this repo. Then, you can edit the README and change `[ ]` to `[x]` on the suites you've completed!

## Skipped Tests

Most of the tests are skipped. When you see `it.skip('should be a function', function () {` in a test, it means that test has been skipped. They are skipped for a good reason - that way, when you run the test suite for the first time, you don't see tons of errors screaming at you in the terminal.

Unskip each test, one at a time in order, so you can concentrate on making one test pass. Unskip the test by deleting the `.skip` from the test's first line so it should look more like `it('should be a function', function () {`. Run the test to see what kind of error you are getting, and then implement the code to make the test pass!
