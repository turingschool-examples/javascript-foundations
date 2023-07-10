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
    players: players,
    coins: 0,
    lives: 3
  }
}

function findCoins(level, coinCount) {
  level.coins = coinCount;
  return level
}

module.exports = {
  createPlayer,
  createLevel,
  findCoins
};