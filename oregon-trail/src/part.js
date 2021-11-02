class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;
    this.timesBroken = 0;
  }
  break() {
    this.timesBroken++;
    this.broken = true;
  }
  repair() {
    if (this.timesBroken >= 2) {
      return `This ${this.type} has seen better days, we\'ll need a brand new one!`;
    }
    this.broken = false;
  }
}

module.exports = Part;
