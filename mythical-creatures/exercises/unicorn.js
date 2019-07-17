class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color
  }

  isWhite() {
    console.log(this)
    return this.color === 'white';
    // if (this.color !== 'white') {
    //   return false;
    // }
  }

  says(message) {
    return `**;* ${message} *;**`;
  }
}

module.exports = Unicorn;

//Process to follow...
//1. Read the test
//2. Ask yourself if it's going to fail and why
//3. Run the test
//4. Make it pass