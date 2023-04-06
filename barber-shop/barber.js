function createBarber(name, earnings, haircuts) {
    var barber = {
        name,
        earnings: earnings || 0,
        haircuts: haircuts || [],
    }
    return barber;
}

function giveCompliment(cutType) {
    
}

module.exports = {  
    createBarber,
    giveCompliment
};