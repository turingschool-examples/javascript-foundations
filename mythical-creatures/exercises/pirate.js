class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'scallywag';
    this.cursed = false;
    this.booty = 0;
  }

  robShip() {
    if (this.booty < 500) {
      this.booty += 100;
      return 'YAARRR!';
    } else {
      this.cursed = true;
      return 'ARG! I\'ve been cursed!';
    }
  }

  buyBlessing() {
    if (this.cursed) {
      this.booty -= 300;
      this.cursed = false;
    } else {
      return 'You don\'t need this blessing!'
    }
  }
}

module.exports = Pirate;
