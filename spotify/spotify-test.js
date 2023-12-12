var { createCollection, createTrack,reviewTrack,  addTrack,getTotalDuration, findTracksByArtist } = require("./spotify")
var assert = require('chai').assert;

describe('Spotify collections', function() {

    it('should create a collection', function() {
        var chillHits = createCollection('Chill Hits', 'A collection of relaxing songs');
        assert.equal(chillHits.name, 'Chill Hits');
        assert.equal(chillHits.description, 'A collection of relaxing songs');
        assert.deepEqual(chillHits.tracks, []);
    });

    it('should create track', function() {
        var track1 = createTrack('Sunset', 'The Midnight', 270);
        assert.deepEqual(track1.title,'Sunset');
        assert.deepEqual(track1.duration,270);
        assert.deepEqual(track1.artist, 'The Midnight')
      });

    it("should return default if nothing is passed", function(){
        var emptyTrack = createTrack()
        assert.deepEqual(emptyTrack, {title:'unknown',artist:'unknown',  duration:0, });
      })

    it.skip('should only appreciate the talent of Red Hot Chili Peppers', function() {
        var track1 = createTrack('Californication', 'Red Hot Chili Peppers', 321);
        var track2 = createTrack('Otherside', 'Red Hot Chili Peppers', 255);
        var track3 = createTrack('Beautiful Day', 'U2', 246);
        
        
        var review1 = reviewTrack(track1);
        var review2 = reviewTrack(track2);
        var review3 = reviewTrack(track3);
       
        assert.equal(review1, 'The song Californication rules!');
        assert.equal(review2, 'The song Otherside rules!');
        assert.equal(review3, 'I wish this was a Red Hot Chili Peppers song.'); 
      });

      it.skip('should add one track to a collection', function() {
        var chillHits = createCollection('Chill Hits', 'A collection of relaxing songs');
        var track1 = createTrack('Sunset', 'The Midnight', 270);
        var chillHitsWith1Track = addTrack(chillHits, track1);
        
        assert.deepEqual(chillHitsWith1Track.tracks, [track1]);
      });

    it.skip('should add tracks to a collection', function() {
        var chillHits = createCollection('Chill Hits', 'A collection of relaxing songs');
        var track1 = createTrack('Sunset', 'The Midnight', 270);
        var track2 = createTrack('Dreaming', 'Small Sails', 215);
        var chillHitsWith1Track =  addTrack(chillHits, track1);
        var chillHitsWith2Track  = addTrack(chillHitsWith1Track, track2);

        assert.deepEqual(chillHitsWith2Track.tracks, [track1, track2]);
      });

    it.skip('should calculate the total duration of a collection', function() {
        var chillHits = createCollection('Chill Hits', 'A collection of relaxing songs');
        var track1 = createTrack('Sunset', 'The Midnight', 270);
        var track2 = createTrack('Dreaming', 'Small Sails', 215);
        var chillHitsWith1Track = addTrack(chillHits, track1);
        var chillHitsWith2Track = addTrack(chillHitsWith1Track, track2);
        assert.equal(getTotalDuration(chillHitsWith2Track), 485);
      });

    it.skip('should find tracks by artist in a collection', function() {
        var chillHits = createCollection('Chill Hits', 'A collection of relaxing songs');
        var track1 = createTrack('Sunset', 'The Midnight', 270);
        var track2 = createTrack('Dreaming', 'Small Sails', 215);
        var track3 = createTrack('Lonely Night', 'The Midnight', 190);
        var chillHitsWith1Track = addTrack(chillHits, track1);
        var chillHitsWith2Track =  addTrack(chillHitsWith1Track, track2);
        var chillHitsWith3Track = addTrack(chillHitsWith2Track, track3);
        assert.deepEqual(findTracksByArtist(chillHitsWith3Track, 'The Midnight'), [track1, track3]);
      });
    
})
  