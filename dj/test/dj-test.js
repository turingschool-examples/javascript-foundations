var { createSong } = require('./dj');
var assert = require('chai').assert;

describe('dj', function() {
    it('should be able to create songs', function() {
       var song = createSong('Monster Mash', 'Bobby Pickett', false)
       
       assert.equal(song.name, 'Monster Mash');
       assert.equal(song.artist, 'Bobby Pickett');
       assert.equal(song.hasBeenPlayed, false);
    })

    it('should be able to play a song', function() {
        var song = createSong('I Put A Spell On You', 'Bette Midler, Sarah Jessica Parker & Kathy Najimy', false)
        
        assert.equal(song.name, 'I Put A Spell On You');
        assert.equal(song.artist, 'Bette Midler, Sarah Jessica Parker & Kathy Najimy');
        assert.equal(song.hasBeenPlayed, false);

        song.playSong();

        assert.equal(song.hasBeenPlayed, true);
     }) 

     it('should be able to create a playlist', function() {
        var ghostbusters = createSong('Ghostbusters', 'Ray Parker Jr.', false);
        var psychoKiller = createSong('Psycho Killer', 'The Talking Heads', false);
        
        var playlist = makePlaylist('Halloween Songs', [ghostbusters, psychoKiller]);

        assert.equal(playlist.name, 'Halloween Songs');
        assert.deepEqual(playlist.songs, [ghostbusters, psychoKiller])
     })

     it('should be able to add songs to a playlist', function() {
        var superstition = createSong('Superstition', 'Stevie Wonder', false); 

        var halloweenPlaylist = makePlaylist('Halloween Songs', [superstition]); 

        assert.equal(halloweenPlaylist.name, 'Halloween Songs');
        assert.deepEqual(halloweenPlaylist.songs, [superstition])

        var scaryMonsters = createSong('Scary Monsters and Nice Sprites', 'Skrillex');

        halloweenPlaylist.addSong(scaryMonsters);

        assert.deepEqual(halloweenPlaylist.songs, [superstition, scaryMonsters])
     })

     it('should be able to play all the songs', function() {
        var zombie = createSong('Zombie', 'The Cranberries', false); 
        var creep = createSong('Creep', 'Radiohead', false)

        var spookySongs = makePlaylist('Spooky Songs', [zombie, creep]); 

        assert.equal(spookySongs.playAllSongs(), 'All songs have been played!')
        assert.equal(zombie.hasBeenPlayed, true)
        assert.equal(creep.hasBeenPlayed, true)
     })
})