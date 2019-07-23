class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    this.huntsWhiteWalkers = false;
    stark.safe = true;
    if(stark.location === this.home)
    this.starksToProtect.push(stark);
    if(this.starksToProtect.length > 2) {
      this.starksToProtect.pop();
    }
  }

  leave(stark) {
    this.starksToProtect.pop();
    stark.safe = false;
  }
}

module.exports = Direwolf;