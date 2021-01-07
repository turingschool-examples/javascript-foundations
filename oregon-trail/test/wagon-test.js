var assert = require('chai').assert;
var Wagon = require('../src/wagon.js');
var Part = require('../src/part.js');
var Gear = require('../src/gear.js');
var Settler = require('../src/settler.js');

describe('Wagon', function() {
  it('should have a name', function() {
    var wagon = new Wagon({ name: 'Voyager' });

    assert.equal(wagon.title, 'Voyager');
  })

  it('should be able to have different name', function() {
    var wagon = new Wagon({ name: 'New Horizons' });

    assert.equal(wagon.title, 'New Horizons');
  })

  it('should have no wheels by default', function() {
    var wagon = new Wagon({ name: 'New Horizons' });

    assert.deepEqual(wagon.wheels, []);
  })

  it('should be able to be constructed with wheels', function() {
    var wheel = new Part('wheel')
    var wagon = new Wagon({ name: 'New Horizons', wheels: [wheel] });

    assert.deepEqual(wagon.wheels, [wheel]);
  })

  it('should have no axles by default', function() {
    var wagon = new Wagon({ name: 'New Horizons' });

    assert.deepEqual(wagon.axles, []);
  })

  it('should be able to be constructed with axles', function() {
    var axle = new Part('axle');
    var wagon = new Wagon({ name: 'New Horizons', axles: [axle] });

    assert.deepEqual(wagon.axles, [axle]);
  })

  it('should have no oxen by default', function() {
    var wagon = new Wagon({ name: 'New Horizons' });

    assert.deepEqual(wagon.oxen, []);
  })

  it('should be able to be constructed with oxen', function() {
    var ox = new Part('ox')
    var wagon = new Wagon({ name: 'New Horizons', oxen: [ox] });

    assert.deepEqual(wagon.oxen, [ox]);
  })

  it('should have no yokes by default', function() {
    var wagon = new Wagon({ name: 'New Horizons' });

    assert.deepEqual(wagon.yokes, []);
  })

  it('should be able to be constructed with yokes', function() {
    var yoke = new Part('yoke');
    var wagon = new Wagon({ name: 'New Horizons', yokes: [yoke] });

    assert.deepEqual(wagon.yokes, [yoke])
  })

  it('should be able to have food', function() {
    var food = new Gear('food', 10);
    var wagon = new Wagon({ name: 'New Horizons', food: food });

    assert.equal(wagon.food, food)
  })

  it('should be able to have food of a different quantity', function() {
    var food = new Gear('food', 15);
    var wagon = new Wagon({ name: 'New Horizons', food: food });

    assert.equal(wagon.food, food)
  })

  it('should be able to have ammunition', function() {
    var ammunition = new Gear('ammunition', 1000)
    var wagon = new Wagon({ name: 'New Horizons', ammunition: ammunition });

    assert.equal(wagon.ammunition, ammunition)
  })

  it('should be able to have ammunition of a different quantity', function() {
    var ammunition = new Gear('ammunition', 2000)
    var wagon = new Wagon({ name: 'New Horizons', ammunition: ammunition });

    assert.equal(wagon.ammunition, ammunition)
  })

  it('should be able to have clothes', function() {
    var clothes = new Gear('clothes', 5)
    var wagon = new Wagon({ name: 'New Horizons', clothes: clothes });

    assert.equal(wagon.clothes, clothes)
  })

  it('should be able to have clothes of a different quantity', function() {
    var clothes = new Gear('clothes', 8)
    var wagon = new Wagon({ name: 'New Horizons', clothes: clothes });

    assert.equal(wagon.clothes, clothes)
  })

  it('should be able to add a wheel', function() {
    var wheel = new Part('wheel')
    var wagon = new Wagon({ name: 'Voyager' });

    wagon.addPart(wheel)

    assert.deepEqual(wagon.wheels, [wheel])
  })

  it('should be able to add an axle', function() {
    var axle = new Part('axle')
    var wagon = new Wagon({ name: 'Voyager' });

    wagon.addPart(axle)

    assert.deepEqual(wagon.axles, [axle])
  })

  it('should be able to add an ox', function() {
    var ox = new Part('ox')
    var wagon = new Wagon({ name: 'Voyager' });

    wagon.addPart(ox)

    assert.deepEqual(wagon.oxen, [ox])
  })

  it('should be able to add a yoke', function() {
    var yoke = new Part('yoke')
    var wagon = new Wagon({ name: 'Voyager' })

    wagon.addPart(yoke)

    assert.deepEqual(wagon.yokes, [yoke])
  })

  it('should not add an invalid part to any of the arrays', function() {
    var hyperdrive = new Part('hyperdrive')
    var wagon = new Wagon({ name: 'Voyager' })

    wagon.addPart(hyperdrive)

    assert.deepEqual(wagon.wheels, [])
    assert.deepEqual(wagon.yokes, [])
    assert.deepEqual(wagon.oxen, [])
    assert.deepEqual(wagon.axles, [])
  })

  it('should have no settlers by default', function() {
    var wagon = new Wagon({ name: 'Voyager' })

    assert.deepEqual(wagon.settlers, [])
  })

  it('can be constructed with settlers', function() {
    var settler = new Settler({ name: 'Will', age: 33, nationality: 'Irish' })
    var wagon = new Wagon({ name: 'Voyager', settlers: [settler] })

    assert.deepEqual(wagon.settlers, [settler])
  })

  // this is here as a test helper to make it faster to build a valid wagon
  // you should NOT be creating a makeValidWagon method of your own
  function makeValidWagon() {
    var wheel1 = new Part('wheel');
    var wheel2 = new Part('wheel');
    var wheel3 = new Part('wheel');
    var wheel4 = new Part('wheel');
    var axle1 = new Part('axle');
    var axle2 = new Part('axle');
    var ox1 = new Part('ox');
    var ox2 = new Part('ox');
    var yoke = new Part('yoke');
    var settler = new Settler({ name: 'Will', age: 33, nationality: 'German' })

    var wagon = new Wagon({
      name: 'Pathfinder',
      wheels: [wheel1, wheel2, wheel3, wheel4],
      axles: [axle1, axle2],
      oxen: [ox1, ox2],
      yokes: [yoke],
      settlers: [settler]
    })

    return wagon
  }

  it('should be able to travel as a valid wagon', function() {
    var wagon = makeValidWagon()

    assert.isTrue(wagon.canTravel())
  })

  it('should not be able to travel with only 3 wheels', function() {
    var wagon = makeValidWagon()

    wagon.wheels.pop()

    assert.isFalse(wagon.canTravel())
  })

  it('should not be able to travel with only 1 axle', function() {
    var wagon = makeValidWagon()

    wagon.axles.pop()

    assert.isFalse(wagon.canTravel())
  })

  it('should not be able to travel with less than 2 oxen', function() {
    var wagon = makeValidWagon()

    wagon.oxen.pop()

    assert.isFalse(wagon.canTravel())
  })

  it('should not be able to travel without a yoke', function() {
    var wagon = makeValidWagon()

    wagon.yokes.pop()

    assert.isFalse(wagon.canTravel())
  })

  it('should not be able to travel without a settler', function() {
    var wagon = makeValidWagon()

    wagon.settlers.pop()

    assert.isFalse(wagon.canTravel())
  })

  it('should not be able to travel without four working wheels', function() {
    var wagon = makeValidWagon()

    wagon.wheels[0].break()

    assert.isFalse(wagon.canTravel())
  })

  it('should not be able to travel without two working axles', function() {
    var wagon = makeValidWagon()

    wagon.axles[0].break()

    assert.isFalse(wagon.canTravel())
  })

  it('should not be able to travel without at least two working oxen', function() {
    var wagon = makeValidWagon()

    wagon.oxen[0].break()

    assert.isFalse(wagon.canTravel())
  })

  it('must have at least one yoke for every two oxen', function() {
    var wagon = makeValidWagon()
    var ox3 = new Part('ox')
    var ox4 = new Part('ox')

    wagon.addPart(ox3)
    wagon.addPart(ox4)

    assert.isFalse(wagon.canTravel())
  })

  it('can travel with extra oxen if it has extra yokes', function() {
    var wagon = makeValidWagon()
    var ox3 = new Part('ox')
    var ox4 = new Part('ox')
    var yoke2 = new Part('yoke')

    wagon.addPart(ox3)
    wagon.addPart(ox4)
    wagon.addPart(yoke2)

    assert.isTrue(wagon.canTravel())
  })

  it('should not be able to travel without at least one living settler', function() {
    var wagon = makeValidWagon()

    wagon.settlers[0].status = 'dead'

    assert.isFalse(wagon.canTravel())
  })
})
