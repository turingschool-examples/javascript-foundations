class Vampire {
  constructor(name, pet){
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = true;
    this.ouncesDrank = 0;
    this.form = 'humanoid';
  }

  drink = () => {
    this.thirsty = false;
    if (this.ouncesDrank < 49) {
      this.ouncesDrank += 10;
    } else {
      return 'I\'m too full to drink anymore!'
    }
  }

  wakeUp = () => {
    this.thristy =  true;
    this.ouncesDrank = 0;
  }

  transform = () => {
    if (this.form === 'humanoid') {
      this.form = 'bat';
      this.thirsty = false;
    } else {
      this.form = 'humanoid';
      this.ouncesDrank < 49 ? this.thirsty = true : this.thristy = false;
    }
  }
}

module.exports = Vampire;
