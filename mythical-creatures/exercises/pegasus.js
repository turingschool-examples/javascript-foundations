function createYourPegasus(namePlaceholder, colorPlaceholder, patternPlaceholder) {
  var myPegasus = {
    name: namePlaceholder,
    color: colorPlaceholder,
    pattern: patternPlaceholder,
    canFly: true
  }

  return myPegasus
};

function makeAnEntrance(greeting, pegasus) {
  return `${greeting}! My name is ${pegasus.name}, and I am a ${pegasus.color}, ${pegasus.pattern} coat Pegasus!`
};

module.exports = {
  createYourPegasus,
  makeAnEntrance
}