class Werewolf {
  constructor(namey, formy) {
    this.name = namey;
    this.form = "human";
    this.hungry = false;
  }
  completeTransformation() {
    if (this.form === "wolf") {
      this.form = "human";
      this.hungry = false;
      return "Where are I?";
    } else {
      this.form = "wolf";
      this.hungry = true;
      return "Aaa-Woooo!";
    }
  }
  eatVictim(victim) {
    if (this.hungry === true && this.form === "wolf") {
      victim.alive = false;
      this.form = "human";
      return "Yum, Hannah was delicious."
    }
    if (this.form === "human") {
      return "No way am I eating Baby, I'd like a burger!";
    }
  }
}







module.exports = Werewolf

// npm test mythical-creatures/test/werewolf-test.js
