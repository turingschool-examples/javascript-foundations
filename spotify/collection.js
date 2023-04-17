


  module.exports = { 
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
   }

function createCollection(name, description) {
  var collection = {
    name: name,
    description: description,
    tracks: []
  }
  return collection;
}

function createTrack(title, artist, duration) {
  var track = {
    title: title,
    artist: artist,
    duration: duration
  }
  if (!track.title) {
    track.title = 'unknown';
  }
  if (!track.artist) {
    track.artist = 'unknown';
  }
  if (!track.duration) {
    track.duration = 0;
  }
  return track;
}

function reviewTrack(track) {
  if (track.artist === 'Red Hot Chili Peppers') {
    return `The song ${track.title} rules!`
  }
  return "I wish this was a Red Hot Chili Peppers song."
}

function addTrack(collection, track) {
  collection.tracks.push(track);
  return collection;
}

function getTotalDuration(collection) {
  var duration = 0; 
  for (var i = 0; i < collection.tracks.length; i++) {
    duration = duration + collection.tracks[i].duration;
  }
  return duration;
}

function findTracksByArtist(collection, artist) {
  var songs = [];
  for (var i = 0; i < collection.tracks.length; i++) {
    if (collection.tracks[i].artist === artist) {
      songs.push(collection.tracks[i])
    }
  }
  return songs;
}