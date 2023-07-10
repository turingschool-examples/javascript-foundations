var assert = require('chai').assert;
var { createBirthday, celebrateBirthday, countBirthdays } = require('./birthdays');

describe('Birthdays', function() {
  it('should create birthdays', function() {
    var leahBirthday = createBirthday('Leah', 2, 10);
    var christyBirthday = createBirthday('Christy', 3, 8);

    assert.equal(leahBirthday.name, 'Leah');
    assert.equal(leahBirthday.month, 2);
    assert.deepEqual(leahBirthday.day, 10);

    assert.equal(christyBirthday.name, 'Christy');
    assert.equal(christyBirthday.month, 3);
    assert.deepEqual(christyBirthday.day, 8);
  });

  it('should celebrate birthdays', function() {
    var alexBirthday = createBirthday('Alex', 5, 19);

    var celebrateAlex = celebrateBirthday(alexBirthday);

    assert.equal(celebrateAlex, 'Today is 5/19! Happy birthday, Alex!');

    var heatherBirthday = createBirthday('Heather', 6, 29);

    var celebrateHeather = celebrateBirthday(heatherBirthday);

    assert.equal(celebrateHeather, 'Today is 6/29! Happy birthday, Heather!');
  })

  it('should count how many birthdays are in a given month', function() {
    var leahBirthday = createBirthday('Leah', 2, 10);
    var christyBirthday = createBirthday('Christy', 3, 8);
    var alexBirthday = createBirthday('Alex', 5, 19);
    var noahBirthday = createBirthday('Noah', 2, 16);
    var birthdays = [leahBirthday, christyBirthday, alexBirthday, noahBirthday];
   
    var febCount = countBirthdays(birthdays, 2);
    var mayCount = countBirthdays(birthdays, 5);
    var decCount = countBirthdays(birthdays, 12);

    assert.equal(febCount, 2);
    assert.equal(mayCount, 1);
    assert.equal(decCount, 0);
  });
});