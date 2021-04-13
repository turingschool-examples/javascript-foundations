var VendingMachine = require("../src/vending-machine.js");
var Snack = require("../src/snack.js");
var assert = require('chai').assert;

describe("VendingMachine", function() {

  it.skip('should have a type', function() {
    var crossStitch = new VendingMachine({ type: 'cross stitch' });
    var macrame = new VendingMachine({ type: 'macrame' });

    assert.equal(crossStitch.name, 'cross stitch');
    assert.equal(macrame.name, 'macrame');
  })

})
