function buildRunner(name, age) {
  return {
    name: name,
    age: age
  };
};

function runSomeMiles(runner, miles) {
  if (runner.milesRun) {
    runner.milesRun += miles
  } else {
    runner.milesRun = miles
  }
  return runner
};

function registerForRace(runner) {
  if (runner.milesRun > 26.1) {
    return `Congrats ${runner.name}, you are now registered for the marathon!`
  } else {
    return `Sorry ${runner.name}, you need more training to register for the marathon!`
  }
};

module.exports = {
  buildRunner,
  runSomeMiles,
  registerForRace
};