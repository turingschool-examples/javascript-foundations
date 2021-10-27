var Skier = require('./Skier');

class Lift {
  constructor(seats) {
    this.inService = true;
    this.limit = seats;
    this.skiers = [];
    this.safetyBar = 'up';
  }
  admitSkier(skier, ticket) {
    if (ticket && this.limit > this.skiers.length) {
      if (this.limit === this.skiers.length + 1) {
        this.safetyBar = 'down';
        this.skiers.push(new Skier(skier, ticket));
        return;
      } else if (this.limit > this.skiers.length + 1) {
        this.skiers.push(new Skier(skier, ticket));
        return;
      }
    } else if (ticket && this.limit === this.skiers.length) {
      return `Sorry, ${skier}. Please wait for the next lift!`
    } else if (!ticket) {
      return `Sorry, ${skier}. You need a lift ticket!`
    }
  }
  startLift() {
    if (this.limit === this.skiers.length + 1) {
      return 'We still need 1 more skier!'
    } else if (this.limit > this.skiers.length + 1) {
      return `We still need ${this.limit - this.skiers.length} more skiers!`
    }
  }
}

module.exports = Lift;
