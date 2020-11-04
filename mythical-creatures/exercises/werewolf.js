class Werewolf {
  constructor(name) {
    this.name = name;
    this.hungry = false;
    this.form = 'human';
  }

  completeTransformation() {
    if (this.form === 'human') {
      this.form = 'wolf';
      this.hungry = true;
      return 'Aaa-Woooo!'
    } else {
      this.form = 'human';
      return 'Where are I?'
    }
  }
}

module.exports = Werewolf;