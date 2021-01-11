const assert = require('chai').assert;
const Spell = require('../lib/spell');

describe('Wizard spells', () => {
  it.skip('should have a name and a description', () => {
    const spell = new Spell('wingardium leviosa', 'makes things levitate');

    assert.equal(spell.name, 'wingardium leviosa');
    assert.equal(spell.description, 'makes things levitate');
  });

  it.skip('can be executed', () => {
    const spell = new Spell('wingardium leviosa', 'makes things levitate');
    const target = "book";

    assert.equal(spell.execute(target), "Success! You've cast a spell on the book.");
  });

  it.skip('can execute against multiple targets', () => {
    const spell = new Spell('wingardium leviosa', 'makes things levitate');

    const target1 = "book";
    const target2 = "table";
    const target3 = "bowl";

    const targets = [target1, target2, target3];

    assert.equal(spell.execute(targets), "Success! You've cast a spell on the book. Success! You've cast a spell on the table. Success! You've cast a spell on the bowl.");
  });

  it.skip('saves all its targets in execution history', () => {
    const spell = new Spell('wingardium leviosa', 'makes things levitate');

    const target1 = "book";
    const target2 = "table";
    const target3 = "bowl";

    const targets = [target1, target2, target3];

    assert.equal(spell.executionHistory.length, 0);

    spell.execute(targets);

    assert.equal(spell.executionHistory.length, 3);

    assert.equal(spell.executionHistory[0], target1);
    assert.equal(spell.executionHistory[1], target2);
    assert.equal(spell.executionHistory[2], target3);
  });

  it.skip('can clear its execution history', () => {
    const spell = new Spell('wingardium leviosa', 'makes things levitate');

    const target1 = "book";
    const target2 = "table";
    const target3 = "bowl";

    const targets = [target1, target2, target3];

    spell.execute(targets);
    assert.equal(spell.executionHistory.length, 3);

    spell.clearExecutionHistory();
    assert.equal(spell.executionHistory.length, 0);
  });
});
