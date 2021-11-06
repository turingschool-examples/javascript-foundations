class Wand {
  constructor(type, size, core) {
    this.type = type;
    this.size = size;
    this.core  = core;
  }
  cast(spell) {
    return `Casting ${spell}!`
  }
}


module.exports = Wand;
