
function createCollection(name, description) {
  var createCollection = {
    name: name,
    description: description,
    tracks: []
  } 
  return createCollection 
}

function createTrack(title, artist, duration) {
  if (title == undefined) {
    title = 'unknown'
  }
  if (artist == undefined) {
    artist = 'unknown'
  }
  if (duration == undefined) {
    duration = 0
  }
  var createTrack = {
    title: title,
    artist: artist,
    duration: duration,
    }
  return createTrack
}




  module.exports = {
    createCollection,
    createTrack
  }