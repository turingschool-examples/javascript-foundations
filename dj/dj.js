


module.exports = {
    createSong,
    playSong,
    makePlaylist,
    addSongToPlaylist,
    playAllSongs
 };

 function createSong(name, artist, played) {
    var song = {
        name: name,
        artist: artist,
        hasBeenPlayed: false
    }
    if (played !== undefined) {
        song.hasBeenPlayed = played;
    }
    return song;
 }

 function playSong(song) {
    song.hasBeenPlayed = true;
    return song;
 }

 function makePlaylist(name, songs) {
    var playlist = {
        name: name,
        songs: songs
    }
    return playlist;
 }

 function addSongToPlaylist(playlist, song) {
    playlist.songs.push(song);
    return playlist;
 }

 function playAllSongs(playlist) {
    for (var i = 0; i < playlist.songs.length; i++) {
        playlist.songs[i].hasBeenPlayed = true;
    }
    return playlist;
 }