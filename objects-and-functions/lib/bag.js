function Bag() {
  this.count = 0;
  this.candies = [];
  this.empty = this.checkBag();
};

Bag.prototype.checkBag = function() {
  return (this.count == 0);
};

Bag.prototype.push = function(candy) {
  this.count++;
  this.candies.push(candy);
};

Bag.prototype.contains = function(candy_type) {
  this.candies.forEach(function(candy) {
    return (candy.type === candy_type);
  });
};

module.exports = Bag;
