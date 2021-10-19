class Hobbit {
  constructor(nameObject) {
    this.name = nameObject.name;
    this.age = 0;
    this.adult = false;
    this.celebrateBirthday = function() {
      if (this.age >= 32) {
        this.age ++;
        return this.adult = true;
      }
      return this.age++;
    }
  }
}

module.exports = Hobbit;
