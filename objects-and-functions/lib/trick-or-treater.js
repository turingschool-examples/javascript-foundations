function TrickOrTreater(costume) {
  this.dressedUpAs = costume.style;
  this.bag = [];
  this.has_candy = false;
  this.count_candies = 0;
};

TrickOrTreater.prototype.putCandyInBag = function(candy) {
  this.bag.push(candy);
  this.has_candy = true;
  this.count_candies++;
};

TrickOrTreater.prototype.eat = function() {
  this.count_candies -= 1;
  this.bag.pop();
};

module.exports = TrickOrTreater;
