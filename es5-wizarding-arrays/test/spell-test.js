var assert = require('chai').assert;
var Spell = require('../lib/spell');

describe('Wizard spells', function () {
  it('should have a name and a description', function () {
    var spell = new Spell('wingardium leviosa', 'makes things levitate');

    assert.equal(spell.name, 'wingardium leviosa');
    assert.equal(spell.description, 'makes things levitate');
  });

  it.skip('can be executed', function () {
    var spell = new Spell('wingardium leviosa', 'makes things levitate');
    var target = "book";

    assert.equal(spell.execute(target), "Success! The book is levitating.");
  });

  it.skip('can execute against multiple targets', function () {
    var spell = new Spell('wingardium leviosa', 'makes things levitate');

    var target1 = "book";
    var target2 = "table";
    var target3 = "bowl";

    var targets = [target1, target2, target3];

    assert.equal(spell.execute(targets), "Success! The book is levitating. Success! The table is levitating. Success! The bowl is levitating.");
  });

  it.skip('saves all its targets in execution history', function () {
    var spell = new Spell('wingardium leviosa', 'makes things levitate');

    var target1 = "book";
    var target2 = "table";
    var target3 = "bowl";

    var targets = [target1, target2, target3];

    assert.equal(spell.executionHistory.length, 0);

    spell.execute(targets);

    assert.equal(spell.executionHistory.length, 3);

    assert.equal(spell.executionHistory[0], target1);
    assert.equal(spell.executionHistory[1], target2);
    assert.equal(spell.executionHistory[2], target3);
  });

  it.skip('can clear its execution history', function () {
    var spell = new Spell('wingardium leviosa', 'makes things levitate');

    var target1 = "book";
    var target2 = "table";
    var target3 = "bowl";

    var targets = [target1, target2, target3];

    spell.execute(targets);
    assert.equal(spell.executionHistory.length, 3);

    spell.clearExecutionHistory();
    assert.equal(spell.executionHistory.length, 0);
  });
});
