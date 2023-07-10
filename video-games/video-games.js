function createPlayer(name, age, moveset) {
  return {
    name: name,
    age: age,
    moveset: moveset
  }
}

function createLevel(name) {
  return{
    name: name
  }
}


module.exports = {
  createPlayer,
  createLevel
};