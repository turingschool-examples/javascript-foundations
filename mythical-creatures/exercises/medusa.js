var Person = require('./person');
var Statue = require('./statue');


class Medusa {
  constructor(nombre) {
    this.name = nombre;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var statue = new Statue(victim.name)
    if (this.statues.length >= 3) {
      var freedPerson = new Person(this.statues[0].name)
      this.statues.shift();
      freedPerson.mood = "relieved"
      this.statues.push(statue);
      return freedPerson;
    } else {
      this.statues.push(statue);
    }
  }
}








// npm test mythical-creatures/test/medusa-test.js

module.exports = Medusa
