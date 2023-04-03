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
console.log(createLevel('Island Oasis'))

module.exports = {
    createPlayer,
    createLevel
 };