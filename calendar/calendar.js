function createEvent(title, month, day) {
  if (day == 0 || day > 31) {
    return `Error: ${day} is not a valid day`
  } else {
    return {
      title,
      month,
      day
    }
  }
}

function createCalendar(person, eventArray) {
  return {
    owner: person,
    events: eventArray
  }
}

function reportMonthlyEvents(calendar, month) {
  monthlyEvents = []
  events = calendar.events

  events.forEach(event => {
    if (event.month == month) {
      monthlyEvents.push(event)
    }
  });
  return monthlyEvents
}

module.exports = {
  createEvent,
  createCalendar,
  reportMonthlyEvents
};