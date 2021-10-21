const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(person) {
    if (person) {
      this.name = person.name;
      this.location = person.area || 'Winterfell';
      this.safe = false;
    }
  }
  sayHouseWords() {
    if (this.safe === true) {
      return 'The North Remembers'
    }
    return 'Winter is Coming';
  }
  callDirewolf(name, home) {
    var direwolf = new Direwolf(name, home);
    direwolf.home = this.location;
    direwolf.protect(this);
    return direwolf;
  }
}

module.exports = Stark;
