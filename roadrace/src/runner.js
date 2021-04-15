class Runner {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  }

  runSomeMiles(miles){
    this.milesRun += miles;
    var fitnessPerMile = miles;
    this.fitness += fitnessPerMile;
  }

  stretch(){
    this.fitness += .5;
  }

  runRace(raceName, raceDistance) {
    this.completedRaces.push(raceName);
    this.runSomeMiles(raceDistance);
  }
}

module.exports = Runner;
