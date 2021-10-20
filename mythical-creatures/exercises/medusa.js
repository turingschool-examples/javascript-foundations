var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    if (this.statues.length === 3) {
      var person = new Person(this.statues[0].name);
      this.statues.shift();
      this.statues.push(new Statue(victim.name));
      return person;
    }
    return this.statues.push(new Statue(victim.name));
  }
}

module.exports = Medusa;
