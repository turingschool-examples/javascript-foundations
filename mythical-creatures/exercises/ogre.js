class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter += 1;
    if(human.encounterCounter === 3 || human.encounterCounter === 6) {
      this.swingAt(human);
      if(this.swings === 2) {
        human.knockedOut = true;
      }
    }
  }

  swingAt(human) {
    this.swings += 1;
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;