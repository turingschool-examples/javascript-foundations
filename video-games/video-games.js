function createPlayer(character, age1, moves) {
    var skateboarder = {
        name: character,
        age: age1,
        moveset: moves
    }
    return skateboarder
};

function createLevel(name1, players1) {
    var level1 = {
        name: name1,
        players: players1,
        coins: 0,
        lives: 3
    }
    return level1
};

function findCoins(level1, coins1) {
    level1.coins += coins1
    var increments = Math.floor(level1.coins / 100);
    level1.lives += increments
    return level1
};

function defeatPlayer(level1) {
    level1.lives --
    if(level1.lives < 1) {
        return `GAME OVER`
    }
    return level1
};

module.exports = {
    createPlayer,
    createLevel,
    findCoins,
    defeatPlayer
};