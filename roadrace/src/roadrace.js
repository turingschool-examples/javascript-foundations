var Runner = require("../src/runner.js");



class Roadrace {
  constructor(raceObj) {
    this.name = raceObj.title;
    this.location = raceObj.city;
    this.participants =  []
  }
  setDistance(miles) {
    this.distance = miles 
    return `The ${this.name} in ${this.location} is a ${miles} mile race.`
  }
  registerParticipants(runnerName) {
    this.participants.push(runnerName)
  }
  completeRace() {
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].runRace(this.name, this.distance)
    }
  }
}
  


module.exports = Roadrace;
