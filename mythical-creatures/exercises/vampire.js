

function Vampire(name, pet) {
  this.name = name;
  this.pet = pet;
  if (pet === undefined) {
    this.pet = 'bat';
  }
}
Vampire.prototype.thirsty = function () {

  return true;
}

Vampire.prototype.drink = function () {
  this.thirsty = false;
};

module.exports = Vampire;