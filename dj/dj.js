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

module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  // addSongToPlaylist, 
  // playSongs
};
