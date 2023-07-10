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
  if (level.coins >= 100) {
    level.lives += 1;
  }
  return level
}

function defeatPlayer(level) {
  level.lives -= 1;
  return level
}

module.exports = {
  createPlayer,
  createLevel,
  findCoins,
  defeatPlayer
};