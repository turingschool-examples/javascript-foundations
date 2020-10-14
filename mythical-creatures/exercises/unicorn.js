class Unicorn {
  constructor(name, color) {
    this.name = name;
    color === undefined ? this.color = 'white' : this.color = color;
  }  
  
}

module.exports = Unicorn;
