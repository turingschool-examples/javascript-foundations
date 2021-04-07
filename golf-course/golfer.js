class Golfer {
  constructor(golfer) {
    this.name = golfer.name;
    this.handicap = golfer.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    return `I usually shoot a ${par + this.handicap} on average.`
  }

  playRound(golfCourse) {
    if (golfCourse.difficulty === "hard") {
      this.frustration = 500
    } else {
      this.frustration = 100
    }
  }

  hitTheRange() {
    this.confidence += 10;
  }

  marvel(golfCourse) {
      return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
  }

  whatYaShoot(swing) {
    if(swing >= 1) {
      this.frustration += 20;
      return `Doh!`;
    } else if (swing === 0) {
        this.frustration = this.frustration - 10;
        return `Booyah!`;
    } else {
        this.frustration = 0;
        return 'I AM THE GREATEST GOLFER ALIVE!';
    }
  }
}

module.exports = Golfer;
