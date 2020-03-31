class Wizard {
  constructor(obj) {
    this.name = obj.name;
    this.bearded =
      obj.bearded === false ? false : true;
    this.isRested = true;
    this.spellCount = 0;
  }

  incantation(string) {
    return string.toUpperCase();
  }
//not working!!! halp!
  cast(string) {
    this.spellCount ++;
    if(this.spellCount >= 3) {
      this.isRested = false;
      console.log(string);
      return string.toUpperCase();
    } else if(this.spellCount < 3){
      this.isRested = true;
      console.log(string);
      return string.toUpperCase();
    }
  }
}

module.exports = Wizard;
