var assert = require('chai').assert;
var { createEvent, createCalendar, reportMonthlyEvents } = require('./calendar');

describe('Calendar', function () {

  it('should create an event', function () {
    var event = createEvent("Go to the Park", "August", 25);

    assert.equal(event.title, "Go to the Park");
    assert.equal(event.month, "August");
    assert.equal(event.day, 25);


    var event2 = createEvent("Hike up a Mountain", "October", 1);

    assert.equal(event2.title, "Hike up a Mountain");
    assert.equal(event2.month, "October");
    assert.equal(event2.day, 1);
  });

  it('should return an error if an invalid day is passed in', function () {
    var event1 = createEvent("Go to the Park", "August", 35);
    assert.equal(event1, "Error: 35 is not a valid day");

    var event2 = createEvent("Go to the Park", "August", 0);
    assert.equal(event2, "Error: 0 is not a valid day");
  });

  it('should create a calendar with events', function () {
    var event1 = createEvent("Go to the Park", "August", 25);
    var event2 = createEvent("Dinner with Lucy", "September", 10);
    var events = [event1, event2];
    
    var calendar = createCalendar("Sam", events);

    assert.equal(calendar.owner, "Sam");
    assert.deepEqual(calendar.events, [event1, event2]);


    var calendar2 = createCalendar("Suzy", events);

    assert.equal(calendar2.owner, "Suzy");
    assert.deepEqual(calendar2.events, [event1, event2]);
  });

  it('should gather events from the same month', function () {
    var event1 = createEvent("Go to the Park", "August", 25);
    var event2 = createEvent("Dinner with Lucy", "July", 10);
    var event3 = createEvent("Order More Batteries", "July", 2);
    var events = [event1, event2, event3];
    
    var calendar = createCalendar("Sam", events);

    var monthlyEvents = reportMonthlyEvents(calendar, "July");

    assert.deepEqual(monthlyEvents, [event2, event3]);
  });
});