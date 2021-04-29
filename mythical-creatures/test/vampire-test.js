var assert = require('chai').assert;
var Vampire = require('../exercises/vampire');

describe('Vampire', function() {

  it('should be a function', function() {
    assert.isFunction(Vampire);
  });

  it('should instantiate our good friend, Vampire', function() {
    var dracula = new Vampire();

    assert.instanceOf(dracula, Vampire);
  });

  it('should have a name', function() {
    var vampire = new Vampire('Jhun');

    assert.equal(vampire.name, 'Jhun');
  });

  it('should have a pet bat as a default', function() {
    var vampire = new Vampire('Brittany');

    assert.equal(vampire.pet, 'bat');
  });

  it('should take an argument for pet', function() {
    var vampire = new Vampire('Jeff', 'fox');
    var vampyre = new Vampire('David', 'armadillo');

    assert.equal(vampire.pet, 'fox');
    assert.equal(vampyre.pet, 'armadillo');
  });

  it('should be thirsty', function() {
    var vampire = new Vampire('Andy');

    assert.equal(vampire.thirsty, true);
  });

  it('should not be thirsty if vampire has drank', function() {
    var vampire = new Vampire('Meeka');

    vampire.drink();

    assert.equal(vampire.thirsty, false);
  });

  it('should be start with no ounces of blood drank', function() {
    var vampire = new Vampire('Bobby');

    assert.equal(vampire.ouncesDrank, 0);
  });

  it('should drink 10 ounces of blood at a time', function() {
    var vampire = new Vampire('Margot');

    vampire.drink();
    vampire.drink();
    vampire.drink();

    assert.equal(vampire.ouncesDrank, 30);
  });

  it('should be full after drinking 50 ounces', function() {
    var vampire = new Vampire('Javi');

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 10);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 20);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 30);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 40);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 50);

    vampire.drink();

    assert.equal(vampire.ouncesDrank, 50);

    assert.equal(vampire.drink(), 'I\'m too full to drink anymore!');
  });

  //new tests

  it('should wake up hungry', () => {
   var vampire = new Vampire('Monica');

   vampire.wakeUp()

   assert.equal(vampire.thirsty, true)
   assert.equal(vampire.ouncesDrank, 0)
  })

  it('should be able to transform', () => {
      var vampire = new Vampire('John');

      vampire.transform()

      assert.equal(vampire.form, 'bat')
  })

  it('should not be thristy when a bat', () => {
      var vampire = new Vampire('John');

      vampire.transform()

      assert.equal(vampire.thirsty, false)
  })

  it('should be able to change back into humanoid form and be thristy if has drank less than 50 oz of blood', () => {
      var vampire = new Vampire('John');

      vampire.transform()

      assert.equal(vampire.form, 'bat')

      vampire.transform()

      assert.equal(vampire.form, 'humanoid')

      assert.equal(vampire.thirsty, true)
  })

  it('should be able to change back into humanoid form and not be thristy if has drank 50 oz of blood', () => {
      var vampire = new Vampire('John');

      vampire.drink()
      vampire.drink()
      vampire.drink()
      vampire.drink()
      vampire.drink()

      vampire.transform()

      assert.equal(vampire.form, 'bat')

      vampire.transform()

      assert.equal(vampire.form, 'humanoid')

      assert.equal(vampire.thirsty, false)
  })

});
