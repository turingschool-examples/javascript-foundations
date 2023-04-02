function createBarber(barberName, totalEarnings, haircutStyle) {
    if (!totalEarnings && !haircutStyle) {
        totalEarnings = 0;
        haircutStyle = [];
    }

    return barber = {
        name: barberName,
        earnings: totalEarnings, 
        haircuts: haircutStyle
    }
}

function giveCompliment(haircutStyle) {
    return `This ${haircutStyle.style} looks great!`;
}

function cutHair(barber, haircutStyle) {
    barber.haircuts.push(haircutStyle);
    barber.earnings += haircutStyle.price;
    return barber;
}

function listStyles(barber, knownCuts) {
    var hairLength = [];
    for (var i = 0; i < barber.haircuts.length; i++) {
        if (barber.haircuts[i].hairLength === knownCuts)
            hairLength.push(barber.haircuts[i].style);
    }

    return hairLength;
}

module.exports = {
    createBarber,
    giveCompliment,
    cutHair,
    listStyles
};