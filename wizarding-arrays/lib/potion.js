class Potion {
  constructor(name, rareness) {
    this.name = name;
    this.rareness = rareness || 0;
  }
  isRare() {
    if (this.rareness > 7) {
      return true;
    }
    return false;
  }
}

module.exports = Potion;
