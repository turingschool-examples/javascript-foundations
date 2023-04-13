function createBarber(name, earnings, haircuts) {
    var barber = {
        name,
        earnings: earnings || 0,
        haircuts: haircuts || [],
    }
    return barber;
}

function giveCompliment(hairStyle) {
    return `This ${hairStyle.style} looks great!`;
}

function cutHair(barber, hairStyle) {
    var haircuts = [];
    
}

module.exports = {  
    createBarber,
    giveCompliment,
    cutHair
};