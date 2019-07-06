class Dragon {
  constructor (name, rider, color, hungry = true) {
   this.name = name
   this.rider = rider
   this.color = color
   this.hungry = hungry
   this.hunger = 0
  }

  eat() {
    this.hunger += 1;
    if(this.hunger >= 3) {
    this.hungry = false;
   }
   // return this.hunger;
  }
}

module.exports = Dragon;

//Process to follow...
//1. Read the test
//2. Ask yourself if it's going to fail and why
//3. Run the test
//4. Make it pass