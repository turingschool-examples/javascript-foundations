function createSong(name, artist, favorite = false, hasBeenPlayed = false) {
  return {
    name,
    artist,
    favorite,
    hasBeenPlayed
  }
}

function playSong(song) {
  song.hasBeenPlayed = true
  return song
}

function makePlaylist(name, songs) {
  return {
    name,
    songs
  }
}

function addSongToPlaylist(playlist, song) {
  songArray = playlist.songs
  songArray.push(song)
  return playlist
}

function playSongs(playlist, preference = 'null') {
  songArray = playlist.songs

  if (preference == 'null') {
    songArray.forEach(song => {
      song.hasBeenPlayed = true
    })
  }

  songArray.forEach(song => {
    if (preference == 'favorites only' && song.favorite == true) {
      song.hasBeenPlayed = true
    }
  })

  return playlist
}

module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
