class Dragon {
  constructor(name, rider){
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.eatingCount = 0;
    this.sick = false;
  }

  greet = () => {
    return `Hi, ${this.rider}!`
  }

  eat = () => {
    this.eatingCount += 1;

    if(this.eatingCount > 2) {
      this.hungry = false;
    }
  }
}


module.exports = Dragon;
