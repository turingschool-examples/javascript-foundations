var Skier = require('./Skier');

class Lift {
  constructor() {
    this.inService = true;
    this.limit = 3;
    this.skiers = [];
    this.safetyBar = 'up';

  }
  admitSkier(skier, ticket) {
    if (this.limit > this.skiers.length + 1) {
      this.skiers.push(new Skier(skier))
    } else if (this.limit === this.skiers.length + 1) {
      return `Sorry, ${skier}. Please wait for the next lift!`
    }
  }
}

module.exports = Lift;