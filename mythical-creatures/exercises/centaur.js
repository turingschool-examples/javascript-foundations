class Centaur {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0
  }

  shoot() {
    this.counter += 1;
    if(this.counter >= 3) {
      this.cranky = true;
      return 'NO!'
    }
    return 'Twang!!!'
  }

  run() {
    this.counter += 1
    if(this.counter >= 3) {
      return 'NO!'
    } else {
      return 'Clop clop clop clop!!!'
    }
  }

  sleep() {
    if(this.counter >= 3) {
      return 'ZZZZ'
    } else {
    return 'NO!'
    }
  }

  layDown() {
    this.counter += 3
    this.standing = false;
    this.layingDown = true;
    this.cranky = false;
  }

  standUp() {
    this.counter = 0;
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    // this.cranky = false;
    if(this.standing) {
      this.cranky = !this.cranky;
    } else {
      return 'Not while I\'m laying down!'
    }
  }
}

module.exports = Centaur