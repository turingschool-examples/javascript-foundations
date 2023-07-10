function createSong(name, artist, favorite) {
  return {
    name: name,
    artist: artist,
    favorite: favorite,
    hasBeenPlayed: false,
  }
}

module.exports = { 
  createSong, 
  // playSong, 
  // makePlaylist, 
  // addSongToPlaylist, 
  // playSongs
};
