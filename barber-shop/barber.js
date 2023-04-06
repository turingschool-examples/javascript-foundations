

module.exports = {  
    createBarber, 
    giveCompliment,
    cutHair
};

function createBarber(name, earnings, cuts) {
    var barber = {
        name: name,
        earnings: earnings,
        haircuts: cuts
    }
    if (earnings === undefined) {
        barber.earnings = 0;
    }
    if (cuts === undefined) {
        barber.haircuts = [];
    }
    return barber;
}

function giveCompliment(cut) {
    return `This ${cut.style} looks great!`;
}

function cutHair(barber, haircut) {
    // take haircut and push it into haircuts array
    barber.haircuts.push(haircut);
    return barber;
}

