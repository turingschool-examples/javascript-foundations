function createEvent(title1, month1, day1) {
    var agenda = {
        title: title1,
        month: month1,
        day: day1
    }
    if(agenda.day < 1 || agenda.day > 31){
        return `Error: ${agenda.day} is not a valid day`
    }
    return agenda
};

function createCalendar(name, events1) {
    var calendar1 = {
        owner: name,
        events: events1
    }
    return calendar1
};

function reportMonthlyEvents(calendar1, month) {
    var monthlyEvents1 = [];
    for(var i = 0; i < calendar1.events.length; i++) {
        if (calendar1.events[i].month === month) {
            monthlyEvents1.push(calendar1.events[i])
        }
    }
    return monthlyEvents1
};

module.exports = {
    createEvent,
    createCalendar,
    reportMonthlyEvents
};