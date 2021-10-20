class Werewolf {
  constructor(name) {
    this.name = name;
    this.form = 'human';
    this.wolfToggle = true;
    this.hungry = false;
  }
  completeTransformation() {
    if (this.wolfToggle === true) {
      this.form = 'wolf';
      this.wolfToggle = false;
      this.hungry = true;
      return 'Aaa-Woooo!';
    }
    this.form = 'human';
    this.wolfToggle = true;
    this.hungry = false;
    return 'Where are I?'
  }
  eatVictim(victim) {
    if (this.hungry === true) {
      victim.alive = false;
      this.completeTransformation();
      return `Yum, ${victim.name} was delicious.`
    }
    return `No way am I eating Baby, I'd like a burger!`;
  }
}

module.exports = Werewolf;
