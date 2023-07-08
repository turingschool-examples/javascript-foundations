
function createVampire(name, pet="bat", thirsty = true, ouncesDrank = 0){
  return{
    name,
    pet,
    thirsty,
    ouncesDrank
  }
}

function drink(vampire){
  if(vampire.thirsty == true){
    vampire.ouncesDrank += 10}
  if(vampire.ouncesDrank >= 50){
    vampire.thirsty = false
  }
  return vampire
}

function findBatLovers(allVampires = []){
  var batLovers = []
  allVampires.forEach(function(vampire, index){
    if (vampire.pet == "bat"){
      batLovers.push(vampire.name)
    }
  })
  return batLovers
}

function encounterDeliciousVictim(vampire){
  if(vampire.thirsty){
    return "I WANT TO SUCK YOUR BLOOD!"}
    else {
    return "No thanks, I am too full."
    }
}

function inquirePlace(locationsVisited, queriedLocation){
  if(locationsVisited.includes(queriedLocation)){
    return "Yes, I have spent some time in New Orleans."
  } else {
    return "No, I have never been to Idaho."
  }
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim,
  inquirePlace
}