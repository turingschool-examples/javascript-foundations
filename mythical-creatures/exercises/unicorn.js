class Unicorn {
  constructor(name, color) {
    this.name = name;
    color === undefined ? this.color = 'white' : this.color = color;
  }

  isWhite() {
   return this.color !== 'white' ? false : true;
  }  
  
}

module.exports = Unicorn;
