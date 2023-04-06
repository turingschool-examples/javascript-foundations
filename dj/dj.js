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

function makePlaylist(playlistName, songs) {
    return playlist = {
        name: playlistName,
        songs: songs
    }
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

module.exports = {
    createSong,
    playSong,
    makePlaylist,
    addSongToPlaylist,
    playAllSongs
  };
