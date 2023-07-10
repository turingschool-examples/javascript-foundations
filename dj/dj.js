function createSong(name, artist, favorite = false) {
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
