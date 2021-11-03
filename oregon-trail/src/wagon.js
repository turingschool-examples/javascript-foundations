class Wagon {
  constructor(wagon) {
    this.title = wagon.name;
    this.wheels = wagon.wheels || [];
    this.axles = wagon.axles || [];
    this.oxen = wagon.oxen || [];
    this.yokes = wagon.yokes || [];
    this.food = wagon.food;
    this.ammunition = wagon.ammunition;
    this.clothes = wagon.clothes;
    this.settlers = wagon.settlers || [];
  }
  addPart(part) {
    if (part.type === 'ox') {
      this.oxen.push(part);
    } else if (part.type === 'wheel') {
      this.wheels.push(part);
    } else if (part.type === 'axle') {
      this.axles.push(part);
    } else if (part.type === 'yoke') {
      this.yokes.push(part);
    }
  }
  canTravel() {
    if (this.wheels.length < 4 ||
        this.axles.length < 2 ||
        this.oxen.length < 2 ||
        this.yokes < 1 ||
        this.settlers.length < 1 ||
        this.yokes.length / this.oxen.length < .5) {
      return false;
    }
    for (let i = 0; i < this.wheels.length; i++) {
      if (this.wheels[i].broken) {
        return false;
      }
    }
    for (let i = 0; i < this.axles.length; i++) {
      if (this.axles[i].broken) {
        return false;
      }
    }
    for (let i = 0; i < this.oxen.length; i++) {
      if (this.oxen[i].broken) {
        return false;
      }
    }
    for (let i = 0; i < this.settlers.length; i++) {
      if (this.settlers[i].status != 'dead') {
        return true;
      }
    }
    return false;
  }
}

module.exports = Wagon;
