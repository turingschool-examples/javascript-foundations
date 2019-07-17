class Pirate {
  constructor(name, job) {
    this.name = name
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.counter = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.counter += 1
    if(this.counter >= 3) {
      this.cursed = true;
    };
  };

  robShip() {
    this.booty += 100;
    return 'YAARRR!';
  }

}

module.exports = Pirate;

//Process to follow...
//1. Read the test
//2. Ask yourself if it's going to fail and why
//3. Run the test
//4. Make it pass