class Robe {
  constructor() {
    this.pockets = [[], [], [], [], [], [], [], [], [], []]
  }
  addToPocket(item) {
    for (var i = 0; i < this.pockets.length; i++) {
      if (this.pockets[i].length === 0) {
        this.pockets[i].push(item);
        return;
      }
    }
  }
  retrieve(item) {
    for (var i = 0; i < this.pockets.length; i++) {
      if (this.pockets[i][0] === item) {
        return this.pockets[i].pop()
      }
    }
  }
  emptyAllPockets() {
    for (var i = 0; i < this.pockets.length; i++) {
      this.pockets[i].pop()
    }
  }
}

module.exports = Robe;
