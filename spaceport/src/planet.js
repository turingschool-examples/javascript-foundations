class Planet {
  constructor(planet) {
    this.name = planet.name;
    this.shop = planet.shop;
    this.currentShip = planet.currentShip;
    this.coordinates = planet.coordinates;
  }
  landShip(ship) {
    this.currentShip = ship;
  }
  calculateDistance(anotherPlanet) {
    return Math.sqrt(Math.pow(anotherPlanet.coordinates.x - this.coordinates.x, 2) + Math.pow(anotherPlanet.coordinates.y - this.coordinates.y, 2) + Math.pow(anotherPlanet.coordinates.z - this.coordinates.z, 2))
  }
  refuel(ship) {
    ship.fuel = ship.fuelCapacity;
  }
  giveClearance(anotherPlanet) {
    if (this.currentShip.fuel > 0) {
      this.currentShip.fuel = 0;
      anotherPlanet.currentShip = this.currentShip;
      delete this.currentShip;
      return `Clearance granted: Enjoy your trip to ${anotherPlanet.name}`;
    }
    return "Clearance denied: Cannot fly without fuel";
  }
}

module.exports = Planet;
