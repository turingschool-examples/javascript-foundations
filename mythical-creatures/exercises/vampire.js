class Vampire {
  constructor (name, pet = 'bat', thirsty) {
    this.name = name;
    this.pet = pet;
    this.thirsty = true
  }

  drink() {
    this.thirsty = false
  }
}

module.exports = Vampire;

//Process to follow...
//1. Read the test
//2. Ask yourself if it's going to fail and why
//3. Run the test
//4. Make it pass