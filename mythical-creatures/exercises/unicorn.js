class Unicorn {
  constructor(name, color = "white", isWhite) {
    this.name = name;
    this.color = color;
    this.isWhite = function () {
      if (this.color != "white") {
        return false;
      }
    };
    this.says = function (param) {
      return "**;* " + param + " *;**";
    };
  }
}

module.exports = Unicorn;
