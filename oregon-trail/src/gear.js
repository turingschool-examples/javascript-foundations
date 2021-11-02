class Gear {
  constructor(type, amount) {
    this.type = type;
    this.quantity = amount;
  }
  checkForValidity() {
    var type = this.type;
    if (type === 'ammunition' || type === 'food' || type === 'clothes') {
      return `Great, we'll need lots of ${type}!`
    } else {
      this.type = null;
      return `I don't think a ${type} will help us.`;
    }
  }
}

module.exports = Gear;
