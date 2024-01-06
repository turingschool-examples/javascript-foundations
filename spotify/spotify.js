
function createCollection(name, description) {
  var createCollection = {
    name: name,
    description: description,
    tracks: []
  };
  return createCollection 
};

function createTrack(title1, artist1, duration1) {
  var createTrack = {
    title: title1,
    artist: artist1,
    duration: duration1,
  };
  if (!title1) {
      createTrack.title = 'unknown'
  };
  if (!artist1) {
      createTrack.artist = 'unknown'
  };
  if (!duration1) {
      createTrack.duration = 0
  };
  return createTrack
};

function reviewTrack(currentSong) {
  var artist = currentSong.artist;
  if(artist === 'Red Hot Chili Peppers') {
    return `The song ${currentSong.title} rules!`
  } else {
    return 'I wish this was a Red Hot Chili Peppers song.'
  };
};

function addTrack(collection, song) {
  var tracks = collection.tracks
  tracks.push(song)
  return collection
}

function getTotalDuration(songCollection) {
  var songDuration = 0;
  for(var i = 0; i < songCollection.tracks.length; i++) {
    songDuration += songCollection.tracks[i].duration
  };
  return songDuration
};

function findTracksByArtist(collection, artist) {
  var midNight = [];
  for (var i = 0; i < collection.tracks.length; i++) {
    if(collection.tracks[i].artist === artist) {
      midNight.push(collection.tracks[i])
    };
  };
  return midNight
}

  module.exports = {
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
  }