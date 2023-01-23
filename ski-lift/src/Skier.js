class Skier {
  constructor(skierName) {
    this.name = skierName;
    this.hasLiftTicket = true;
    this.skillLevel = 1;
    this.nextSlope = 'green circle';
  }
  takeLesson() {
    this.skillLevel += 1
  }
  pickSlope() {
    if (this.skillLevel <= 4) {
      this.nextSlope = 'blue square'
    } else {
      this.nextSlope = 'black diamond'
    }
  }
}

module.exports = Skier;