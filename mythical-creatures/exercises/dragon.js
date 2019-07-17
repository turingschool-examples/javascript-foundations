class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.counter = 0
  }

  eat() {
    this.counter += 1;
    if(this.counter >= 3) {
      this.hungry = false;
    }
  }
};

module.exports = Dragon



class Car {
  constructor(brand, model, color, wheels = 4, ) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.wheels = wheels
  }
  
}






















car1 = {
  brand: "ford",
  model: "Exploer",
  color: "red"
}

car2 = {
  brand: "Toyota",
  model: "Tacoma",
  color: "green"
}

car3 = {
  brand: "Nissan",
  model: "Maxima",
  color: "black"
}





































// class Dragon {
//   constructor (name, rider, color, hungry = true) {
//    this.name = name;
//    this.rider = rider;
//    this.color = color;
//    this.hungry = hungry;
//    this.count = 0;
//   };

//   eat() {
//     this.count += 1;
//     if(this.count >= 3) {
//     this.count = false;
//    }
//    // return this.hunger;
//   };
// }

// module.exports = Dragon;

//Process to follow...
//1. Read the test
//2. Ask yourself if it's going to fail and why
//3. Run the test
//4. Make it pass