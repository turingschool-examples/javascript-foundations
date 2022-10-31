class Direwolf{
    constructor(name,home,size){
        this.name = name;
        this.home = home||'Beyond the Wall';
        this.size = size ||'Massive'
        this.starksToProtect = []
    }
}
module.exports = Direwolf