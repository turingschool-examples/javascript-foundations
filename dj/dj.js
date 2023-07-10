function createSong(name, artist, favorite = false) {
  return {
    name: name,
    artist: artist,
    favorite: favorite,
    hasBeenPlayed: false,
  }
}

function playSong(song) {
  song.hasBeenPlayed=true;
  return song;
}

function makePlaylist(name, songs) {
  return {
    name: name,
    songs: songs,
  }
}

function addSongToPlaylist(playlist, song) {
  playlist.songs.push(song);
  return playlist
}

function playSongs(playlist) {
  for (var i = 0; i < playlist.songs.length; i++) {
    playSong(playlist.songs[i]);
  }
  return playlist;
}

module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
