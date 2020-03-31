class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = (!job ? 'Scallywag' : job);
    this.cursed = false;
    this.actCounter = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.actCounter ++;
    if (this.actCounter === 3) {
      this.cursed = true;
    }
  }

  robShip() {
    this.booty = 100;
    return 'YAARRR!';
  }

}


module.exports = Pirate;
