

module.exports = {  
    createBarber, 
    giveCompliment,
    cutHair,
    listStyles
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
    var counter = 0;
    barber.haircuts.push(haircut);
    for (var i = 0; i < barber.haircuts.length; i++) {
        counter = counter + barber.haircuts[i].price;
    }
    barber.earnings = counter;
    return barber;
}

// should earn money for haircuts
// create a for loop that iterates through the haircuts array in the barber object
    // add each of the numbers under price and add them to empty counter variable
    // push counter into earnings.

function listStyles(barber, haircutLength) {
    var styles = [];
    for (var i = 0; i < barber.haircuts.length; i++) {
        if (barber.haircuts[i].hairLength === haircutLength) {
             styles.push(barber.haircuts[i].style)
        }
    }
    return styles;
}