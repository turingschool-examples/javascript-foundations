var assert = require('chai').assert;
var { createBarber, giveCompliment, cutHair, listStyles } = require('./barber');

describe('Barber', function() {
  it('should create a barber with a name', function() {
    var sam = createBarber('Sam');

    assert.equal(sam.name, 'Sam');
  })

  it('should be able to have earnings and known haircuts', function() {
    var cut1 = { style: 'mohawk', hairLength: 'short', price: 11.00 };
    var cut2 = { style: 'side part', hairLength: 'medium', price: 12.00 };

    var erin = createBarber('Erin', 23.00, [cut1, cut2]);

    assert.equal(erin.name, 'Erin');
    assert.equal(erin.earnings, 23.00)
    assert.deepEqual(erin.haircuts, [cut1, cut2]);
  });

  it('should default to no earnings and no haircuts if none provided', function() {
    var buzzCut = { style: 'buzz', hairLength: 'short', price: 8.00 };
    var nick = createBarber('Nick', 8.00, [buzzCut]);

    var pam = createBarber('Pam');

    assert.equal(nick.earnings, 8.00);
    assert.equal(pam.earnings, 0);

    assert.deepEqual(nick.haircuts, [buzzCut]);
    assert.deepEqual(pam.haircuts, []);
  });

  it('should be able to offer a compliment', function() {
    var mohawkCut = { style: 'mohawk', hairLength: 'short', price: 11.00 };
    var buzzCut = { style: 'buzz', hairLength: 'short', price: 8.00 };

    var mohawkCompliment = giveCompliment(mohawkCut);

    assert.equal(mohawkCompliment, 'This mohawk looks great!')

    var buzzCompliment = giveCompliment(buzzCut);

    assert.equal(buzzCompliment, 'This buzz looks great!');
  });

  it('should be able to cut hair', function() {
    var matt = createBarber('Matt');

    var mohawkCut = { style: 'mohawk', hairLength: 'short', price: 11.00 };
    var buzzCut = { style: 'buzz', hairLength: 'short', price: 8.00 };

    var mattCanDoMohawk = cutHair(matt, mohawkCut);

    assert.equal(mattCanDoMohawk.haircuts.length, 1);
    assert.equal(mattCanDoMohawk.haircuts[0].style, 'mohawk');
    assert.equal(mattCanDoMohawk.haircuts[0].hairLength, 'short');
    assert.equal(mattCanDoMohawk.haircuts[0].price, 11.00);

    var mattCanDoMohawkAndBuzz = cutHair(mattCanDoMohawk, buzzCut);

    assert.equal(mattCanDoMohawkAndBuzz.haircuts.length, 2);
    assert.deepEqual(mattCanDoMohawkAndBuzz.haircuts, [ mohawkCut, buzzCut ]);
  });

  it('should earn money for hair cuts', function() {
    var erin = createBarber('Erin');
 
    var buzzCut = { style: 'buzz', hairLength: 'short', price: 8.00 };
    var sidePartCut = { style: 'side part', hairLength: 'medium', price: 10.00 };

    var erinCanDoBuzz = cutHair(erin, buzzCut);

    assert.equal(erinCanDoBuzz.earnings, 8.00);

    var erinCanDoBuzzAndSidePart = cutHair(erinCanDoBuzz, sidePartCut);

    assert.equal(erinCanDoBuzzAndSidePart.earnings, 18.00);
  });

  it('should be able to list style options based on desired length', function() {
    var buzzCut = { style: 'buzz', hairLength: 'short', price: 8.00 };
    var sidePartCut = { style: 'side part', hairLength: 'medium', price: 10.00 };
    var bobCut = { style: 'bob', hairLength: 'short', price: 12.00 };

    var knownCuts = [ buzzCut, sidePartCut, bobCut];

    var sandy = createBarber('Sandy', 30.00, knownCuts);

    var shortStyles = listStyles(sandy, 'short');

    assert.equal(shortStyles.length, 2);
    assert.deepEqual(shortStyles, [ 'buzz', 'bob' ]);
  })
})