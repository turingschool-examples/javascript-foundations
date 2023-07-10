function createPlayer(name, age, moveset) {
  return {
    name: name,
    age: age,
    moveset: moveset
  }
}

function createLevel(name, players) {
  return{
    name: name,
    players: players
  }
}


module.exports = {
  createPlayer,
  createLevel
};