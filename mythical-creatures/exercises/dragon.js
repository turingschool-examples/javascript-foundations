class Dragon {
  constructor(name, rider){
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.eatingCount = 0;
    this.dayCount = null;
  }

  greet = () => {
    return `Hi, ${this.rider}!`;
  }

  eat = () => {
    this.eatingCount += 1;

    if(this.eatingCount > 2) {
      this.hungry = false;
      this.dayCount = Date.now();
    }
  }

  checkLastMeal = () => {
    const current = Date.now();

    if (Math.floor(((current - this.dayCount)) / 1000) > 86399) {
         this.hungry = true
    }
  }
}


module.exports = Dragon;
