class Magician {
  constructor(person) {
    this.name = `The Great ${person.name}`;
    this.assistant = person.assistant;
    this.favoriteAccessory = 'top hat';
  }
}

module.exports = Magician;
