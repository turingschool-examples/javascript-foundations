class Hobbit {
  constructor(name, disposition = 'homebody') {
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = false
    if(name === "Frodo") {
      this.hasRing = true;
    }
  }

  celebrateBirthday() {
    this.age += 1;
    if(this.age >= 33) {
      this.adult = true;
      if(this.age >= 101) {
      this.old = true;
      }
    }
  }
}

module.exports = Hobbit;

//Process to follow...
//1. Read the test
//2. Ask yourself if it's going to fail and why
//3. Run the test
//4. Make it pass