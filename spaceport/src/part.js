class Part {
  constructor(part) {
    this.broken = false;
    this.isValid = true;
    if (!part.name) {
      this.checkForValidity = 'This part needs a name!';
      this.isValid = false;
    } else this.name = part.name;
    if (!part.value) {
      this.checkForValidity = 'This part needs a value!';
      this.isValid = false;
    } else this.value = part.value;
    if (!part.type) {
      this.checkForValidity = 'This part needs a type!';
      this.isValid = false;
    } else this.type = part.type;
  }
}

module.exports = Part;
