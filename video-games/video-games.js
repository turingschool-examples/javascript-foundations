function createPlayer(name, age, moveset = []) {
  return {
    name,
    age,
    moveset
  }
}

function createLevel(name, players =[]) {
  return {
    name,
    players,
    coins: 0,
    lives: 3,
  }
}

function findCoins(level, coinAmmount) {
  level.coins += coinAmmount
  if (level.coins == 100) {
    level.lives += 1
  }
  return level
}

function defeatPlayer(level) {
  level.lives -= 1
  if (level.lives == 0 ) {
    return 'GAME OVER'
  }
  return level
}

module.exports = { 
  createPlayer,
  createLevel,
  findCoins,
  defeatPlayer
};