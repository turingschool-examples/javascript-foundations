class SkatePark {
  constructor(park) {
    this.name = park.name;
    this.yearFounded = park.year;
    this.style = park.type;
    this.features = park.features;
    this.isPrivate = park.isPrivate || false;
    this.cost = park.price || 0;
    this.occupants = [];
  }
  admit(skater) {
    if (this.occupants.length >= 3) {
      return 'Sorry, we are at max capacity. Thank you for understanding.'
    } else if (this.isPrivate && skater.money >= this.cost) {
      this.occupants.push(skater);
      skater.money -= this.cost;
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    } else if (this.isPrivate && skater.money < this.cost) {
      return `Sorry, you don't have enough money.`
    }
    this.occupants.push(skater);
    return `Welcome to the free ${this.name} Skatepark!`
  }
}

module.exports = SkatePark;
