class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
    this.statueCount = 0;
  }

  stare(victim) {
    victim.stoned = true;
    this.statueCount ++;
    if (this.statues.length <= 2) {
      this.statues.push(victim);
    } else if (this.statueCount >= 4) {
      this.statues[0].stoned = false;
      this.statues.splice(0,1);
      this.statues.push(victim);
    }
  }
}

module.exports = Medusa;
