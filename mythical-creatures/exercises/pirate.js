class Pirate {
  constructor(name, job = 'scallywag') {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.booty = 0;
    this.robShip = function() {
      if (this.booty >= 500) {
        this.cursed = true;
        return `ARG! I've been cursed!`
      }
      this.booty += 100;
      return `YAARRR!`
    }
    this.liftCurse = function() {
      if (this.cursed === false) {
        return `You don't need to lift a curse!`
      }
      this.booty -= 300;
      this.cursed = false;
      return `Your curse has been lifted!`
    }
  }
}

module.exports = Pirate;
