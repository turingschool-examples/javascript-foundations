class Ogre{
    constructor(obj){
        this.name = obj.name;
        this.home = obj.abode|| 'Swamp';
    }
    encounter(human){
    human.encounterCounter = human.encounterCounter + 1
   return human.encounterCounter
    }
}

module.exports = Ogre