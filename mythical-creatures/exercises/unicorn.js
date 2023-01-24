class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  }

  isWhite() {
    if (this.color === 'white') {
      return true;
    } else {
      return false;
    }
  }

  says(words) {
    return `**;* ${words} *;**`
  }
}

module.exports = Unicorn;
