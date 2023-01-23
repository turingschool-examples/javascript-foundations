class Runner {
  constructor(runnerName, age) {
    this.name = runnerName;
    this.age = age;   
    this.milesRun = 0; 
    this.fitness = 25;
    this.completedRaces = []
  }
  runSomeMiles(miles) {
    this.milesRun += miles
    this.fitness += miles
  }
  stretch() {
    this.fitness += .5
  }
  runRace(nameOfRace, miles) {
    this.completedRaces.push(nameOfRace);
    this.runSomeMiles(miles)
  }

}

module.exports = Runner;
