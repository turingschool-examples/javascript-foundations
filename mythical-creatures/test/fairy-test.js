var assert = require('chai').assert;
var Fairy = require('../exercises/fairy');

describe('Fairy', function () {
  it('should be a function', function () {
    assert.isFunction(Fairy);
  });

  it('should instantiate a fairy', function () {
    var fairy = new Fairy();
    assert.isObject(fairy);
  });

  it('should have a name', function () {
    var fairy = new Fairy('Holly');
    assert.equal(fairy.name, 'Holly');
  });

  it('should have some fairy dust by default', function () {
    var fairy = new Fairy('Mab');
    assert.equal(fairy.dust, 10);
  });

  it('should get a small amount of fairy dust when others believe in her', function () {
    var fairy = new Fairy('Sookie');

    var dustBefore = fairy.dust;
    fairy.receiveBelief();
    var dustAfter = fairy.dust;
    var difference = dustAfter - dustBefore;
    assert.equal(difference, 1);
  });

  it('should get a lot of fairy dust from believeing in herself', function () {
    var fairy = new Fairy('Tinkerbell');

    var dustBefore = fairy.dust;
    fairy.believe();
    var dustAfter = fairy.dust;
    var difference = dustAfter - dustBefore;

    assert.equal(difference, 10);
  });

  it('should start with an Iris flower dress', function () {
    var fairy = new Fairy('Rose');
    assert.deepEqual(fairy.clothes, {dresses: ['Iris']});
  });

  it('should turn flowers into more dresses', function () {
    var fairy = new Fairy('Honeysuckle');

    fairy.makeDresses(['Daffodil', 'Tulip', 'Poppy']);
    assert.deepEqual(fairy.clothes.dresses, ['Iris', 'Daffodil', 'Tulip', 'Poppy']);
  });

  it('should turn more flowers into even more dresses', function () {
    var fairy = new Fairy('Cosmo Pepperfeet');

    fairy.makeDresses(['Ranunculus', 'Daisy']);
    fairy.makeDresses(['Hydrangea', 'Forget-me-not']);
    assert.deepEqual(fairy.clothes.dresses, ['Iris', 'Ranunculus', 'Daisy', 'Hydrangea', 'Forget-me-not'])
  });

  it('should start out good natured', function () {
    var fairy = new Fairy('Cologne');
    assert.equal(fairy.disposition, 'Good natured');
  });

  it('should become real scary when provoked', function () {
    var fairy = new Fairy('Aine');

    fairy.provoke();
    assert.equal(fairy.disposition, 'Vengeful');
  });

  it('should steal babies and return near identical changelings when feeling vengeful', function () {
    var fairy = new Fairy('Claudine');

    var firstInfant = { name: 'Sue', eyes: 'Blue', disposition: 'Sweet'};
    var secondInfant = { name: 'Henry', eyes: 'Brown', disposition: 'Charming'};
    
    fairy.provoke();

    var newFirstInfant = fairy.replaceInfant(firstInfant);
    var newSecondInfant = fairy.replaceInfant(secondInfant);

    assert.deepEqual(firstInfant, {name: 'Sue', eyes: 'Blue', disposition: 'Malicious'});
    assert.deepEqual(secondInfant, { name: 'Henry', eyes: 'Brown', disposition: 'Malicious'});
  });

  it('should only steal babies when feeling vengeful', () => {
    var fairy = new Fairy('Marceline');

    var firstInfant = { name: 'Josiah', eyes: 'Green', disposition: 'Calm' };
    var newFirstInfant = fairy.replaceInfant(firstInfant);

    assert.equal(firstInfant, newFirstInfant);
  });

  it('should raise stolen infants as its own', function () {
    var fairy = new Fairy('Winnie');

    var firstInfant = { name: 'Mary', eyes: 'Green', disposition: 'Calm' };
    var secondInfant = { name: 'Clarke', eyes: 'Brown', disposition: 'Gentle'};

    fairy.provoke();

    fairy.replaceInfant(firstInfant);
    fairy.replaceInfant(secondInfant);

    assert.deepEqual(fairy.humanWards, [ firstInfant, secondInfant ]);
  });

  it('should calm down after stealing three infants', function () {
    var fairy = new Fairy('Basil');
    var firstInfant = { name: 'Josiah', eyes: 'Green', disposition: 'Calm' };
    var secondInfant = { name: 'Clarence', eyes: 'Brown', disposition: 'Delightful' };
    var thirdInfant = { name: 'Louise', eyes: 'Brown', disposition: 'Agreeable' };

    fairy.provoke();

    fairy.replaceInfant(firstInfant);
    fairy.replaceInfant(secondInfant);
    fairy.replaceInfant(thirdInfant);

    assert.equal(fairy.disposition, 'Good natured');
  });
});