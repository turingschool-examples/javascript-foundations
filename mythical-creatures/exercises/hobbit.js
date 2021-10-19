class Hobbit {
  constructor(nameObject) {
    this.name = nameObject.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.celebrateBirthday = function() {
      if (this.age < 32) {
        return this.age ++;
      } else if (this.age < 100) {
        this.adult = true;
        return this.age++;
      }
      this.old = true;
      return this.age ++;
    }
    this.hasRing = false;
    this.getRing = function () {
      if (this.name === 'Frodo') {
        this.hasRing = true;
        return `Here is the ring!`
      }
      return `You can't have it!`
    }
  }
}

module.exports = Hobbit;
