class Runner {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }
  runSomeMiles(miles) {
    this.milesRun += miles;
    this.fitness += miles;
  }
  stretch() {
    this.fitness += .5;
  }
  runRace(raceName, raceLength) {
    this.completedRaces.push(raceName);
    this.runSomeMiles(raceLength);
  }
}

module.exports = Runner;
