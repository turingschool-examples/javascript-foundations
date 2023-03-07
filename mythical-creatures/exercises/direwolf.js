function createMyDirewolf(name, home, size) {
  return {
    name: name,
    home: home || 'Beyond the Wall',
    size: size || 'Massive',
    starksToProtect: [],
    protect: function(stark) {
      if (this.home === stark.location && this.starksToProtect.length < 2) {
        stark.safe = true
        this.huntsWhiteWalkers = false
        this.starksToProtect.push(stark)
      }
    },
    huntsWhiteWalkers: true,
    leave: function(stark) {
      stark.safe = false
      this.starksToProtect.pop()
    }
  }
}

function buildAStark(stark) {
  return {
    name: stark.name,
    location: stark.area || 'Winterfell',
    safe: false,
    sayHouseWords: function() {
      if (this.safe) {
        return 'The North Remembers'
      } else {
        return 'Winter is Coming'
      }
    },
    callDirewolf: function(name, location) {
      var direwolf = createMyDirewolf(name, location)
      direwolf.home = this.location
      direwolf.protect(this)
      return direwolf
    }
  }
}

module.exports = {
  createMyDirewolf,
  buildAStark
}