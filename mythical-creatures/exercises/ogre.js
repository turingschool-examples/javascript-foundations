function describeOgre(ogreDetails) {
  return {
    name: ogreDetails.name,
    home: ogreDetails.abode || 'Swamp',
    encounter: function(human) {
      human.encounterCounter++
    },
    swings: 0,
    swingAt: function(human) {
      this.swings++
    },
  }
}

function createHuman(name) {
  return {
    name: name,
    encounterCounter: 0,
    noticesOgre: function() {
      if (this.encounterCounter < 3) {
        return false
      } else {
        this.encounterCounter = 0
        return true
      }
    },
    knockedOut: false,
  }
}

module.exports = {
  describeOgre,
  createHuman
}