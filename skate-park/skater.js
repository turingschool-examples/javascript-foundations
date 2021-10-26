class Skater {
  constructor(person = {}) {
    this.name = person.name;
    this.skill = person.skill;
    this.tricks = person.tricks;
    this.money = person.cash;
    this.frustration = 0;

  }
  practice(trick) {
    if (!this.tricks[trick] && this.frustration < 2) {
      this.frustration++;
    } else if (!this.tricks[trick] && this.frustration < 3) {
      this.frustration = 0;
      this.tricks[trick] = true;
      return `I just learned to ${trick}!!!`
    }
  }
}

module.exports = Skater;
