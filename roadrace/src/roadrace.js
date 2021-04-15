class Roadrace {
  constructor(theRace) {
    this.name = theRace.title;
    this.location = theRace.city;
    this.distance = null;
    this.participants = [];
  }

  setDistance(miles) {
    this.distance = miles;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }

  registerParticipants(runner) {
    this.participants.push(runner);
  }

  completeRace() {
    for (var i = 0; i < this.participants.length; i++) {
      // this.participants[i].completedRaces.push(this.name);
      this.participants[i].runRace(this.name, this.distance);
    }
  }
}

module.exports = Roadrace;
