function createSong(name, artist, hasBeenPlayed = false) {
return song = {
    name: name,
    artist: artist,
    hasBeenPlayed: hasBeenPlayed
    }
}

function playSong(song) {
    song.hasBeenPlayed = true;
    return song;
}


module.exports = {
    createSong,
    playSong
 };
