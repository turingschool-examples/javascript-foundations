//Meg Fryling

module.exports = { createDragon, greetRider, eat, findFireBreathers}


function createDragon(name, rider="", temperment="") {
    var dragon = {}; //create empty js object
    dragon.name = name; //add name property
    dragon.rider = rider; //add rider property
    dragon.temperment = temperment ///add temperment property
    dragon.timesEaten = 0;
    dragon.hungry = true;
    return dragon; //return dragon object
}

function greetRider(dragon) {
    return 'Hi, ' + dragon.rider + '!';
}

function eat(dragon) {
    dragon.timesEaten++;
    if (dragon.timesEaten == 3) {
        dragon.hungry = false;
    }
    return dragon;
}

function findFireBreathers(allDragons){
    var fireBreatherDragons = [];
    var fireBreatherDragonsIndex = 0;
    for (let i = 0; i < allDragons.length; i++) {
        //fireBreather if aggressive in temperment
        if (allDragons[i].temperment == "aggressive"){
          fireBreatherDragons[fireBreatherDragonsIndex] = allDragons[i];
          fireBreatherDragonsIndex++;
        }
    }
    return fireBreatherDragons;
}

