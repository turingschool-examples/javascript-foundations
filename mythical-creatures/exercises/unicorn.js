class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  }
  
  isWhite = function() {
    if (this.color === 'white') {
      return true;
    }
    return false;
  }

  says = function(saysWhat) {
    return `**;* ${saysWhat} *;**`
  }
}

module.exports = Unicorn;
