class Skatepark {
  constructor(parkObj) {
    this.name = parkObj.name;
    this.yearFounded = parkObj.year;
    this.style = parkObj.type;
    this.features = parkObj.features;
    this.isPrivate = parkObj.isPrivate || false;
    this.cost = parkObj.price || 0;
    this.occupants = []

  }
}

module.exports = Skatepark