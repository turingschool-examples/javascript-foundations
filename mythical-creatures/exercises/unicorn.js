class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }
  isWhite(){
    if(this.color === this.color){
      return false
    }
  }
  says(message){
    return `**;* ${message} *;**`
  }
}

module.exports = Unicorn;
