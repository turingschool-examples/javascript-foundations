const assert = require('chai').assert;
const { createMyDirewolf } = require('../exercises/direwolf');
const { buildAStark } = require('../exercises/stark');

describe('Direwolf', function() {

  it.skip('should be a function', function() {
    assert.isFunction(createMyDirewolf);
  });

  it.skip('should create our new friend, Direwolf', function() {
    const direwolf = createMyDirewolf();
    assert.isObject(direwolf);
  });

  it.skip('should have a name', function() {
    const direwolf = createMyDirewolf('Nymeria');
    assert.equal(direwolf.name, 'Nymeria');
  });

  it.skip('should have a default home of Beyond the Wall', function() {
    const direwolf = createMyDirewolf('Lady');

    assert.equal(direwolf.name, 'Lady');
    assert.equal(direwolf.home, 'Beyond the Wall');
  });

  it.skip('should be able to have other homes', function() {
    const direwolf = createMyDirewolf('Ghost', 'Winterfell');

    assert.equal(direwolf.home, 'Winterfell');
  });

  it.skip('should have a default size of massive', function() {
    const direwolf = createMyDirewolf('Ghost');

    assert.equal(direwolf.size, 'Massive');
  });

  it.skip('should be able to have another size', function() {
    const direwolf = createMyDirewolf('Shaggydog', 'Karhold', 'Smol Pupper');

    assert.deepEqual(direwolf, {
      name: 'Shaggydog',
      home: 'Karhold',
      size: 'Smol Pupper'
    });
  });

  it.skip('should build our new friend, Stark', function() {
    const stark = buildAStark({name: 'Bran'});

    assert.isObject(stark);
  });

  it.skip('should have a name', function() {
    const stark = buildAStark({name:'Bran'});

    assert.equal(stark.name, 'Bran');
  });

  //!!!!!!!!!!!!!!!! start here when you get back

  it.skip('should have a default location of Winterfell', function() {
    const stark = new Stark({name:'Bran'});

    assert.equal(stark.name, 'Bran');
    assert.equal(stark.location, 'Winterfell');
  });

  it.skip('should be able to have different locations', function() {
    const stark = new Stark({name: 'Eddard', area: 'King\'s Landing'})

    assert.equal(stark.name, 'Eddard')
    assert.equal(stark.location, 'King\'s Landing')
  })

  it.skip('should start with no Starks to protect', function() {
    const direwolf = new Direwolf('Nymeria');
    const stark = new Stark({name: 'Arya'});

    assert.deepEqual(direwolf.starksToProtect, []);
    assert.equal(direwolf.home, 'Beyond the Wall');
    assert.equal(stark.location, 'Winterfell');
  });

  it.skip('should be able to protect a Stark', function() {
    const direwolf = new Direwolf('Nymeria', 'Riverlands');
    const stark = new Stark({name: 'Arya', area: 'Riverlands'});

    assert.deepEqual(direwolf.starksToProtect, []);

    direwolf.protect(stark);
    assert.equal(direwolf.starksToProtect.length, 1);
    assert.equal(direwolf.starksToProtect[0].name, 'Arya');
  });

  it.skip('should only be able to protect a Stark if direwolf and Stark locations match', function() {
    const direwolf = new Direwolf('Ghost');
    const stark = new Stark({name: 'John', area: 'King\'s Landing'});

    direwolf.protect(stark);

    assert.deepEqual(direwolf.starksToProtect, []);
  });

  it.skip('should only be able to protect two Starks at a time', function() {
    const direwolf1 = new Direwolf('Summer', 'Winterfell');
    const direwolf2 = new Direwolf('Lady', 'Winterfell');
    const stark1 = new Stark({name: 'Sansa'});
    const stark2 = new Stark({name: 'John'});
    const stark3 = new Stark({name: 'Rob'});
    const stark4 = new Stark({name: 'Bran'});
    const stark5 = new Stark({name: 'Arya'});

    direwolf1.protect(stark1);
    direwolf1.protect(stark2);
    direwolf2.protect(stark3);
    direwolf2.protect(stark4);
    direwolf2.protect(stark5);

    assert.equal(direwolf1.starksToProtect.length, 2);
    assert.equal(direwolf1.starksToProtect[0].name, 'Sansa');
    assert.equal(direwolf1.starksToProtect[1].name, 'John');

    assert.equal(direwolf2.starksToProtect.length, 2);
    assert.equal(direwolf2.starksToProtect[0].name, 'Rob');
    assert.equal(direwolf2.starksToProtect[1].name, 'Bran');
  });

  it.skip('Stark should start off unsafe', function() {
    const stark = new Stark({name: 'John', area: 'Winterfell'});

    assert.equal(stark.safe, false);
  });

  it.skip('should know their house words', function() {
    const stark = new Stark ({name: 'Benjen'})

    assert.equal(stark.sayHouseWords(), 'Winter is Coming')
  })

  it.skip('should change house words once protected', function() {
    const direwolf = new Direwolf('Nymeria', 'Dorne');
    const stark1 = new Stark({name: 'Arya', area: 'Dorne'});
    const stark2 = new Stark({name: 'Sansa', area: 'Dorne'});

    assert.equal(stark1.safe, false);
    assert.equal(stark2.safe, false);

    direwolf.protect(stark1);
    assert.equal(stark1.safe, true);
    assert.equal(stark2.safe, false);

    assert.equal(stark1.sayHouseWords(), 'The North Remembers');
    assert.equal(stark2.sayHouseWords(), 'Winter is Coming');
  });

  it.skip('should hunt white walkers when not protecting Starks', function() {
    const direwolf = new Direwolf('Nymeria', 'Winterfell');
    const stark = new Stark({name: 'Sansa'});

    assert.equal(direwolf.huntsWhiteWalkers, true);

    direwolf.protect(stark);
    assert.equal(direwolf.huntsWhiteWalkers, false);
  });

  it.skip('should be able to stop protecting Starks', function() {
    const direwolf1 = new Direwolf('Summer', 'Winterfell');
    const direwolf2 = new Direwolf('Lady', 'Winterfell');
    const stark1 = new Stark({name: 'Sansa'});
    const stark2 = new Stark({name: 'Arya'});

    direwolf1.protect(stark2);
    assert.equal(stark2.safe, true);

    direwolf2.protect(stark1);
    direwolf1.leave(stark2);

    assert.deepEqual(direwolf1.starksToProtect, []);
    assert.equal(direwolf2.starksToProtect[0].name, 'Sansa');
    assert.equal(stark2.safe, false);
  });

  it.skip('should be able to call their direwolf to become protected', function() {
    const stark = new Stark({name: 'Arya', area: 'Riverlands'})

    var direwolf = stark.callDirewolf('Nymeria', 'Winterfell')

    assert.instanceOf(direwolf, Direwolf)
    assert.equal(direwolf.name, 'Nymeria')
    assert.equal(direwolf.home, 'Riverlands')
    assert.deepEqual(direwolf.starksToProtect[0].name, 'Arya')
    assert.equal(stark.safe, true)
  })
});
