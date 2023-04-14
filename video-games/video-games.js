function createPlayer(name, age, moveset) {
	return player = {
		name: name,
		age: age,
		moveset: moveset
	}
}

function createLevel(name, players, coins = 0, lives = 3) {
	return level = {
		name: name,
		players: players,
		coins: coins,
		lives: lives
	}
}

function findCoins(level, numCoins) {
	level.coins += numCoins;

	if (level.coins > 99) {
		level.lives += 1;
	}

	return level;
}

function defeatPlayer(level) {
	level.lives -= 1;
	
	return level.lives ? level : 'GAME OVER'
}

module.exports = {
	createPlayer,
	createLevel,
	findCoins,
	defeatPlayer
 };