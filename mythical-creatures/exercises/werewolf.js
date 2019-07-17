class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.counter = 0;
    this.hungry = false;
  }

  change() {
    this.counter += 1
    this.human = false;
    this.wolf = true;
    this.hungry = true;
    //if you call change() again
    if(this.counter % 2 === 0) {
      this.human = true;
      this.wolf = false;
      this.hungry = false;
    }

  }

    eat(victim) {
      if(this.human === true) {
        victim.alive = true;
      } else {
        victim.alive = false;
        this.human = true;
      }
    }
}

module.exports = Werewolf;