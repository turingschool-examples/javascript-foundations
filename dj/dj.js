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

module.exports = { 
  createSong, 
  playSong, 
  // makePlaylist, 
  // addSongToPlaylist, 
  // playSongs
};
