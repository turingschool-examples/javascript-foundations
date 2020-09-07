class Unicorn {
  constructor(name, color) {
    console.log(color);
    this.name = name;
    if (color === undefined) {
      this.color = 'white';
    } else {
      this.color = color;
    }
  }

  isWhite() {
    if (this.color !== 'white') {
      return false;
    }
  }

  says(message) {
    return `**;* ${message} *;**`;
  }
}

module.exports = Unicorn;
