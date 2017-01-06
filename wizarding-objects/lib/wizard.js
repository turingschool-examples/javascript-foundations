function Wizard (name, pet) {
  this.name = name;
  this.pet = pet;
  this.pets = [];
  this.petsCount = 0;
  this.wand = 0;
};

Wizard.prototype.givePet = function(pet) {
  this.pets.push(pet);
  this.petsCount++;
};

Wizard.prototype.petList = function () {
  return this.pets[0].name + ', a ' + this.pets[0].type + ', ' + this.pets[1].name + ', an ' + this.pets[1].type + '.'
};

Wizard.prototype.giveWand = function (wand) {
  this.wand = wand;
};

Wizard.prototype.castSpell = function (spell) {
  return 'Casting ' + spell + '!'
};

module.exports = Wizard;
