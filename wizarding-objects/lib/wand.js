function Wand (type, size, core) {
  this.type = type;
  this.size = size;
  this.core = core;
};

Wand.prototype.cast = function (spell) {
  return 'Casting ' + spell + '!'; 
};

module.exports = Wand;
