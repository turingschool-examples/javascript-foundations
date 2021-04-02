
class Hobbit {
  constructor(hobbieDude) {
    this.name = hobbieDude.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = true;
  }

  celebrateBirthday() {
    this.age++;
    if (this.age >= 101) {
      this.old = true;
    } else if (this.age >= 33) {
      this.adult = true;
    }
  }

  getRing() {
    if (this.name === "Frodo") {
      return "Here is the ring!"
    } else {
      this.hasRing = false;
      return "You can\'t have it!"
    }
  }
}




// npm test mythical-creatures/test/hobbit-test.js

module.exports = Hobbit
