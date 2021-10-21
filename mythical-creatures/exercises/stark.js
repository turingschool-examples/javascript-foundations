class Stark {
  constructor(person = {}) {
    this.name = person.name;
    this.location = person.area || 'Winterfell';
    this.safe = false;
  }
  sayHouseWords() {
    if (this.safe === true) {
      return 'The North Remembers'
    }
    return 'Winter is Coming';
  }
  callDirewolf(name, location) {
    var direwolf = new Direwolf(name, location);
    direwolf.protect(this)
  }
}

module.exports = Stark;
