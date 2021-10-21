class Centaur {
  constructor(person) {
    this.name = person.name;
    this.breed = person.type;
    this.cranky = false;
    this.standing = true;
    this.counter = 0;
    this.layingDown = false;
  }
  shootBow() {
    if (this.layingDown === true) {
      return 'NO!';
    }
    if (this.cranky === false) {
      this.countIncrementer();
      return 'Twang!!!'
    }
    return 'NO!';
  }
  run() {
    if (this.layingDown === true) {
      return 'NO!';
    }
    if (this.cranky === false) {
      this.countIncrementer();
      return 'Clop clop clop clop!!!'
    }
    return 'NO!';
  }
  countIncrementer() {
    if (this.counter >= 2) {
      return this.cranky = true;
    }
    this.counter ++;
    return this.cranky = false;
  }
  sleep() {
    if (this.standing === true) {
      return 'NO!';
    }
    if (this.layingDown === true) {
      this.cranky = false;
      return 'ZZZZ';
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if (this.standing === true) {
      this.cranky = false;
      return;
    }
    return 'Not while I\'m laying down!';
  }
}

module.exports = Centaur;
