class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
    this.friends = 0;
  }

  isWhite = () => {
    return this.color === 'white' || this.color === 'White' ? true : false
  }

  says = (words) => {
    return `**;* ${words} *;**`
  }

  makeNewFriend = () => {
    this.friends += 1
  }
}

module.exports = Unicorn;
