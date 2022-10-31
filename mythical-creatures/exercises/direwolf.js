class Direwolf{
    constructor(name,home,size){
        this.name = name;
        this.home = home||'Beyond the Wall';
        this.size = size ||'Massive'
        this.starksToProtect = []
        this.huntsWhiteWalkers = true

    }
    protect(house){
    if(this.home === house.location && this.starksToProtect.length <=1){
        this.starksToProtect.push(house)
        house.safe = true
        house.sayHouseWords()
        this.huntsWhiteWalkers = false
        }
    }
    leave(house){
        this.starksToProtect.splice(0,1)
        house.safe = false
    }
}
module.exports = Direwolf