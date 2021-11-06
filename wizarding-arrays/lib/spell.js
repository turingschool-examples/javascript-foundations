class Spell {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.executionHistory = [];
  }
  execute(target) {
    if (Array.isArray(target)) {
      var message = `Success! You've cast a spell on the ${target[0]}.`;
      this.executionHistory.push(target[0]);
      for (let i = 1; i < target.length; i++) {
        message += ` Success! You've cast a spell on the ${target[i]}.`;
        this.executionHistory.push(target[i]);
      }
      return message;
    }
    this.executionHistory.push(target);
    return `Success! You've cast a spell on the ${target}.`;
  }
  clearExecutionHistory() {
    this.executionHistory = [];
  }
}

module.exports = Spell;
