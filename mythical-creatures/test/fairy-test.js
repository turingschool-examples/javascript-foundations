const assert = require('chai').assert;
const Fairy = require('../exercises/fairy');

describe('Fairy', () => {
  it('should be a function', () => {
    assert.isFunction(Fairy);
  });

  it('should instantiate a fairy', () => {
    const fairy = new Fairy();

    assert.isObject(fairy);
  });

  it('should have a name', () => {
    const fairy = new Fairy('Holly');

    assert.equal(fairy.name, 'Holly');
  });

  it('should have some fairy dust by default', () => {
    const fairy = new Fairy('Mab');

    assert.equal(fairy.dust, 10);
  });

  it('should get a small amount of fairy dust when others believe in her', () => {
    const fairy = new Fairy('Sookie');
    const dustBefore = fairy.dust;

    fairy.receiveBelief();
    
    const dustAfter = fairy.dust;
    const difference = dustAfter - dustBefore;
    assert.equal(difference, 1);
  });

  it('should get a lot of fairy dust from believeing in herself', () => {
    const fairy = new Fairy('Tinkerbell');
    const dustBefore = fairy.dust;

    fairy.believe();

    const dustAfter = fairy.dust;
    const difference = dustAfter - dustBefore;
    assert.equal(difference, 10);
  });

  it('should start with an Iris flower dress', () => {
    const fairy = new Fairy('Rose');

    assert.deepEqual(fairy.clothes, {dresses: ['Iris']});
  });

  it('should turn flowers into more dresses', () => {
    const fairy = new Fairy('Honeysuckle');

    fairy.makeDresses(['Daffodil', 'Tulip', 'Poppy']);

    assert.deepEqual(fairy.clothes.dresses, ['Iris', 'Daffodil', 'Tulip', 'Poppy']);
  });

  it('should turn more flowers into even more dresses', () => {
    const fairy = new Fairy('Cosmo Pepperfeet');

    fairy.makeDresses(['Ranunculus', 'Daisy']);
    fairy.makeDresses(['Hydrangea', 'Forget-me-not']);

    assert.deepEqual(fairy.clothes.dresses, ['Iris', 'Ranunculus', 'Daisy', 'Hydrangea', 'Forget-me-not'])
  });

  it('should start out good natured', () => {
    const fairy = new Fairy('Cologne');

    assert.equal(fairy.disposition, 'Good natured');
  });

  it('should become real scary when provoked', () => {
    const fairy = new Fairy('Aine');

    fairy.provoke();

    assert.equal(fairy.disposition, 'Vengeful');
  });

  it('should steal infants and return near identical changelings when feeling vengeful', () => {
    const fairy = new Fairy('Claudine');
    const firstInfant = { name: 'Sue', eyes: 'Blue', disposition: 'Sweet'};
    const secondInfant = { name: 'Henry', eyes: 'Brown', disposition: 'Charming'};
    
    fairy.provoke();
    fairy.replaceInfant(firstInfant);
    fairy.replaceInfant(secondInfant);

    assert.deepEqual(firstInfant, {name: 'Sue', eyes: 'Blue', disposition: 'Malicious'});
    assert.deepEqual(secondInfant, { name: 'Henry', eyes: 'Brown', disposition: 'Malicious'});
  });

  it('should only steal infants when feeling vengeful', () => {
    const fairy = new Fairy('Marceline');
    const firstInfant = { name: 'Josiah', eyes: 'Green', disposition: 'Calm' };

    const newFirstInfant = fairy.replaceInfant(firstInfant);

    assert.equal(firstInfant, newFirstInfant);
  });

  it('should raise stolen infants as its own', () => {
    const fairy = new Fairy('Winnie');
    const firstInfant = { name: 'Mary', eyes: 'Green', disposition: 'Calm' };
    const secondInfant = { name: 'Clarke', eyes: 'Brown', disposition: 'Gentle'};

    fairy.provoke();
    fairy.replaceInfant(firstInfant);
    fairy.replaceInfant(secondInfant);

    assert.deepEqual(fairy.humanWards, [ firstInfant, secondInfant ]);
  });

  it('should calm down after stealing three infants', () => {
    const fairy = new Fairy('Basil');
    const firstInfant = { name: 'Josiah', eyes: 'Green', disposition: 'Calm' };
    const secondInfant = { name: 'Clarence', eyes: 'Brown', disposition: 'Delightful' };
    const thirdInfant = { name: 'Louise', eyes: 'Brown', disposition: 'Agreeable' };

    fairy.provoke();

    fairy.replaceInfant(firstInfant);
    fairy.replaceInfant(secondInfant);
    fairy.replaceInfant(thirdInfant);

    assert.equal(fairy.disposition, 'Good natured');
  });
});