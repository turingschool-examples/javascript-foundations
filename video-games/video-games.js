function createPlayer(name, age, moveset) {
    var player = {
        name: name,
        age: age,
        moveset: moveset,
    }
    return player;
}

function createLevel(name, players) {
    var level = {
        name: name,
        players: players,
        lives: 3,
        coins: 0
    }
    return level;
}

function findCoins(level, coinNum) {
    level.coins += coinNum;
    if (level.coins === 100){
        level.lives += 1;
    }
    return level;
}

function defeatPlayer(level) {
    level.lives -= 1;
    if (level.lives === 0) {
        return 'GAME OVER'
    } else {
        return level;
    }
}

module.exports = {
    createPlayer,
    createLevel,
    findCoins,
    defeatPlayer
 };