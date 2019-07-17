class Wizard {
  constructor(wzrdObj) {
    this.name = wzrdObj.name;
    this.bearded = true;
    if(wzrdObj.bearded === false){
      this.bearded = wzrdObj.bearded;
    }
    this.isRested = true;
    this.numSpells = 0
  }

  incantation(spell) {
    return spell.toUpperCase();
  }

  cast() {
    this.numSpells += 1
    if(this.numSpells >= 3) {
      this.isRested = false;
      return 'I SHALL NOT CAST'
    } else {
    return 'MAGIC BULLET'
    }
  }
}

module.exports = Wizard;

//Process to follow...
//1. Read the test
//2. Ask yourself if it's going to fail and why
//3. Run the test
//4. Make it pass