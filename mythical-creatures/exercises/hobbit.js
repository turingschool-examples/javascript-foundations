
class Hobbit {
  constructor(name, age){
    this.name = name;
    this.age = 0;
    // this.child = true;
    // this.adult = false;
    // this.old = false;
  var hasRing = false;
    }
  celebrateBirthday() {
    this.age++
  }
  // // timeTravel() {
  //   if (this.age >= 33) {
  //   this.adult = true;
  // // }
  // // timeTravel() {
  //   if (this.age >= 101) {
  //   this.old = true;
  // // }
  getRing() {
    if (name === "Frodo") {
      hasRing = true;
      return "Here is the ring!"
    }
    else {
      return "You can\'t have it!"
    }
  }
}

// npm test mythical-creatures/test/hobbit-test.js

module.exports = Hobbit
