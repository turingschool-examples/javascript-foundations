class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color
    if (color === undefined){
      this.color = 'white'
    };
  }
  isWhite() {
    if (this.color === 'white') {
      return true;
    } else return false;
  }
  says(sentence) {
    return `**;* ${sentence} *;**`
  }
}
module.exports = Unicorn;
