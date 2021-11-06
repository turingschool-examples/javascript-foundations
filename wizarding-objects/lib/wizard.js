const Wand = require('../lib/wand')

class Wizard {
  constructor(wizard) {
    this.name = wizard.name;
    this.pets = [];
    this.petsCount = 0;
    this.wand = '';
  }
  adoptPet(pet) {
    this.pets.push(pet);
    this.petsCount++;
  }
  petList() {
    var list = '';
    var splitString = this.pets[0].type.split('');
    if (splitString[0].match(/[aeiou]/i)) {
      list += `An ${this.pets[0].type} named ${this.pets[0].name};`
    } else {
      list += `A ${this.pets[0].type} named ${this.pets[0].name};`
    }
    for (var i = 1; i < this.pets.length; i++) {
      if (splitString[i].match(/[aeiou]/i)) {
        list += ` An ${this.pets[i].type} named ${this.pets[i].name}.`
      } else {
        list += ` A ${this.pets[i].type} named ${this.pets[i].name}.`
      }
    }
    return list;
  }
  getWand(wand) {
    this.wand = wand;
  }
  castSpell(spell) {
    return this.wand.cast(spell);
  }
}

module.exports = Wizard;
