class Hobbit {
    constructor(nameOfHobbit) {
      this.name = nameOfHobbit.name;
      this.age = 0;
      this.adult = false;
      this.old = false;
      this.hasRing = false;
  }
  celebrateBirthday() {
    this.age += 1;
    if (this.age <= 32) {
      return this.adult = false && this.old == false;
    } else if(this.age <= 100 ) {
      return this.adult = true && this.old == false;
    } else {
      return this.old = true 
    }
}
  getRing(hobbitName) {
    if (this.name === 'Frodo') {
      this.hasRing = true
      return 'Here is the ring!'
    } else {
      return 'You can\'t have it!'
    }
  }
}
  


  module.exports = Hobbit;