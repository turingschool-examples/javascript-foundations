class Pirate {
  constructor(pirateDude, jobski, moneys) {
    this.name = pirateDude;
    this.job = jobski;
    this.cursed = false;
    this.booty = 0;
    if (this.job = jobski) {
      this.job = jobski;
    } else {
      this.job = "scallywag";
    }
  }
  robShip() {
    if (this.booty <500) {
      this.booty += 100;
      return "YAARRR!";
    } else {
      this.cursed = true;
      return "ARG! I\'ve been cursed!";
    }
  }
  liftCurse() {
    if (this.cursed = true && this.booty >= 300) {
      this.cursed = false;
      this.booty -= 300;
      return "Your curse has been lifted!";
    } else {
      return "You don\'t need to lift a curse!";
    }
  }
}



module.exports = Pirate;

// npm test mythical-creatures/test/pirate-test.js
