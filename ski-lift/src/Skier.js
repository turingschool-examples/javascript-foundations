class Skier {
  constructor(name, hasTicket) {
    this.name = name;
    this.hasLiftTicket = hasTicket;
    this.skillLevel = 1;
    this.nextSlope = 'green circle';
  }
  takeLesson() {
    if (this.skillLevel === 1) {
      this.nextSlope = 'blue square';
    } else if (this.skillLevel === 3) {
      this.nextSlope = 'black diamond';
    }
    this.skillLevel++;
  }
  pickSlope() {
    return this.nextSlope;
  }
}

module.exports = Skier;
