

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}


// create a function that creates an object that includes name, pet, and thirsty.
// pet should default to bat. thirsty should default to true
function createVampire(name, pet) {
  var vampire = {
    name: name,
    pet: pet,
    thirsty: true,
    ouncesDrank: 0
  }
  if (vampire.pet === undefined) {
    vampire.pet = 'bat';
  }
  return vampire;
};

// create a function that takes vampire object as argument and outputs a response
  // if thirst === true return 'I WANT TO SUCK YOUR BLOOD!'

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty === true) {
    return 'I WANT TO SUCK YOUR BLOOD!';
  } else {
    return 'No thanks, I am too full.'
  }
};

// create a function that adds 10 ounces to ouncesDrank key.
function drink(vampire) {
  if (vampire.thirsty === true) {
  vampire.ouncesDrank = vampire.ouncesDrank + 10;
  }
  if (vampire.ouncesDrank >= 50) {
    vampire.thirsty = false;
  }
  return vampire;
};

// create a function that takes in an array of location and a locations and if the location === something in the array, return a statement

function inquirePlace(locations, location) {
  for (var i = 0; i < locations.length; i++) {
    if (locations[i] === location) {
      return `Yes, I have spent some time in ${locations[i]}.`;
    }
  }
  return `No, I have never been to ${location}.`;
};

// should be able to find the vampires with bats.
// function has one parameter for vampire object
  // use filter or for loop to find vampires with pet bats

function findBatLovers(vampire) {
  var batLovers = []; 
  for (var i = 0; i < vampire.length; i++) {
    if(vampire[i].pet === 'bat') {
      batLovers.push(vampire[i].name);
    }
  }
  return batLovers;
};