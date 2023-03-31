function createVampire(vampName, pet) {
  var vampire = {
    name: vampName,
    pet: pet ? pet : 'bat',
    thirsty: true,
    ouncesDrank: 0,
  }
 return vampire;
}

function encounterDeliciousVictim(vampName) {
  if (vampName.thirsty === true){
    return 'I WANT TO SUCK YOUR BLOOD!';
  } else {
    return `No thanks, I am too full.`
  }
}

function drink(vampName) {
  if (vampName.thirsty === false) {
    return vampName;
  } else {
    vampName.ouncesDrank += 10;
    if (vampName.ouncesDrank === 50) {
      vampName.thirsty = false;
    }
  }
  return vampName;
}

function inquirePlace(locations, place) {
  if (locations.includes(place)){
    return `Yes, I have spent some time in ${place}.`
  } else {
    return `No, I have never been to ${place}.`
  }
}

function findBatLovers(vampires) {
  var batLovers = [];
  for (var i = 0; i < vampires.length; i++) {
    if (vampires[i].pet === 'bat'){
      batLovers.push(vampires[i].name)
    }
  } return batLovers;
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}