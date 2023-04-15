

module.exports = {  
    createEvent,
    createCalendar,
    reportMonthlyEvents
};

function createEvent(title, month, day) {
    if (day > 0 && day < 32) {
        var event = {
            title: title,
            month: month,
            day: day
        }
    return event;
    } else {
        return `Error: ${day} is not a valid day`
    }
};

function createCalendar(name, events) {
    var calendar = {
        owner: name,
        events: events
    }
    return calendar;
};

function reportMonthlyEvents(calendar, monthCheck) {
    var monthEvent = [];
    for (var i = 0; i < calendar.events.length; i++) {
        if (calendar.events[i].month === monthCheck) {
            monthEvent.push(calendar.events[i])
        }
    }
    return monthEvent;
};