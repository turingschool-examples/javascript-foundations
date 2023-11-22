var { createSong, playSong, makePlaylist, addSongToPlaylist, playSongs, playFavorites } = require('./dj');
var assert = require('chai').assert;

describe('dj', function() {
   it('should be able to create songs', function() {
      var song = createSong('Zombie Shuffle', 'The Creepy Crawlers', true)
      
      assert.equal(song.name, 'Zombie Shuffle');
      assert.equal(song.artist, 'The Creepy Crawlers');
      assert.equal(song.favorite, true);
   })

   it('should not have been played by default', function() {
      var song = createSong('Witches\' Brew Boogie', 'The Ghostly Ghouls', true)
      
      assert.equal(song.name, 'Witches\' Brew Boogie');
      assert.equal(song.artist, 'The Ghostly Ghouls');
      assert.equal(song.favorite, true);
      assert.equal(song.hasBeenPlayed, false);
   })

   it('should not be a favorite by default', function() {
      var song = createSong('Witches\' Brew Boogie', 'The Ghostly Ghouls')
      
      assert.equal(song.favorite, false);
   })


   it('should be able to play a song', function() {
      var song = createSong('I Put A Spell On You', 'Bette Midler, Sarah Jessica Parker & Kathy Najimy')
      
      assert.equal(song.name, 'I Put A Spell On You');
      assert.equal(song.artist, 'Bette Midler, Sarah Jessica Parker & Kathy Najimy');
      assert.equal(song.hasBeenPlayed, false);
      assert.equal(song.favorite, false);

      var playedSong = playSong(song)

      assert.equal(playedSong.hasBeenPlayed, true);
   }) 

   it('should be able to create a playlist', function() {
      var skeletonSong = createSong('Skeletons in the Closet Rock', 'The Skeletal Band');
      var tangoTrack = createSong('Trick or Treat Tango', 'The Spooky Cats');
      
      var playlist = makePlaylist('Halloween Songs', [skeletonSong, tangoTrack]);

      assert.equal(playlist.name, 'Halloween Songs');
      assert.deepEqual(playlist.songs, [skeletonSong, tangoTrack])
   })

   it('should be able to add songs to a playlist', function() {
      var jingleJive = createSong('Jingle Bell Jive', 'The Dancing Elves'); 

      var holidayPlaylist = makePlaylist('Holiday Songs', [jingleJive]); 

      assert.equal(holidayPlaylist.name, 'Holiday Songs');
      assert.deepEqual(holidayPlaylist.songs, [jingleJive])

      var funkyFrosty = createSong('Frosty\'s Funky Groove', 'The Snowmen Band');

      var updatedHolidayPlaylist = addSongToPlaylist(holidayPlaylist, funkyFrosty);

      assert.deepEqual(updatedHolidayPlaylist.songs, [jingleJive, funkyFrosty])
   })

   it('should be able to play all the songs', function() {
      var rockinSong = createSong('Rockin\' Around the Christmas Treehouse', 'The Yuletide Youth'); 
      var shuffleSong = createSong('Santa\'s Sleigh Ride Shuffle', 'The Jolly Jinglesters')
      var reggaeSong = createSong('Rudolph\'s Reggae Jam', 'The Reindeer Rhythms')

      var holidayPlaylist = makePlaylist('Holiday Songs', [rockinSong, shuffleSong, reggaeSong]); 

      var updatedHolidayPlaylist = playSongs(holidayPlaylist) 

      assert.equal(updatedHolidayPlaylist.songs[0].hasBeenPlayed, true)
      assert.equal(updatedHolidayPlaylist.songs[1].hasBeenPlayed, true)
      assert.equal(updatedHolidayPlaylist.songs[2].hasBeenPlayed, true)
   })

   it('should play only the favorite songs when "favorites only" is specified', function() {
       // Create three songs, two of which are marked as favorites.
      var rockinSong = createSong('Rockin\' Around the Christmas Treehouse', 'The Yuletide Youth', true); 
      var shuffleSong = createSong('Santa\'s Sleigh Ride Shuffle', 'The Jolly Jinglesters')
      var reggaeSong = createSong('Rudolph\'s Reggae Jam', 'The Reindeer Rhythms', true)

      // Add all three songs to a holiday playlist.
      var holidayPlaylist = makePlaylist('Holiday Songs', [rockinSong, shuffleSong, reggaeSong]); 
      // Play only the favorite songs in the playlist.
      var updatedHolidayPlaylist = playSongs(holidayPlaylist, "favorites only") 
      // Assert that the favorite songs have been played, while the non-favorite hasn't.
      assert.equal(updatedHolidayPlaylist.songs[0].hasBeenPlayed, true)
      assert.equal(updatedHolidayPlaylist.songs[1].hasBeenPlayed, false)
      assert.equal(updatedHolidayPlaylist.songs[2].hasBeenPlayed, true)
   })
   
})