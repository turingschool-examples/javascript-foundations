class Centaur {
  constructor(person) {
    this.name = person.name;
    this.breed = person.type;
    this.cranky = false;
    this.standing = true;
    this.counter = 0;
  }
  shootBow() {
    if (this.cranky === false) {
      this.countIncrementer();
      return 'Twang!!!'
    }
    return 'NO!';
  }
  run() {
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
  }
  layDown() {
    
  }
}

module.exports = Centaur;
