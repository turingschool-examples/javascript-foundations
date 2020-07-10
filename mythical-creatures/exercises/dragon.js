var hungryCount = 0;

class Dragon{
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
  };

  eat(){
    hungryCount++
    if (hungryCount >= 3) {
      this.hungry = false;
    }
  };
};

module.exports = Dragon;
