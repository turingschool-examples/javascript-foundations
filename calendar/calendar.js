function createEvent(inputTask, inputMonth, inputDate) {
    if (!inputDate || inputDate === 0 || inputDate > 31) {
        return `Error: ${inputDate} is not a valid day`;
    }
    
    var event = {};
    event.title = inputTask;
    event.month = inputMonth;
    event.day = inputDate;
    return event;
}

function createCalendar(inputOwner, inputEvents) {
    var calendar = {
        owner: inputOwner,
        events: inputEvents
    };
    return calendar;
}

function reportMonthlyEvents(calendar, month) {
    var monthlyEvents = [];
    for (var i = 0; i < calendar.events.length; i++) {
        if (calendar.events[i].month === month) {
            monthlyEvents.push(calendar.events[i]);
        }
    }

    return monthlyEvents;
}

module.exports = {
    createEvent,
    createCalendar,
    reportMonthlyEvents
};