class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }

  isWhite = () => {
    return this.color === 'white' || this.color === 'White' ? true : false
  }

  says = (words) => {
    return `**;* ${words} *;**`
  }
}

module.exports = Unicorn;
