class Hobbit{
  constructor(name, disposition, age) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = " ";
    this.isShort = true;
    this.old = false;
    this.hasRing = name === 'Frodo' ? true : false;
  }

  celebrateBirthday() {
    this.age ++;
    if (this.age <= 32) {
      this.adult = false;
    } else if (this.age <= 100){
      this.adult = true;
    } else if (this.age >= 101){
      this.old = true;
    }
  }
};

module.exports = Hobbit;
