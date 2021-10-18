class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
    this.isWhite = function(color) {
      if (color !== 'white') {
        return false;
      }
    return true;
    };
    this.says = function(phrase) {
      return `**;* ${phrase} *;**`;
    }
  }
}

module.exports = Unicorn;
