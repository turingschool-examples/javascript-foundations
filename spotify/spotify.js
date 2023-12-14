
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
  //1 parameter, takes in an argument of an object
  //if artist === red hot chili peppers return a postive string
  //else return a negative string
  var artist = currentSong.artist;
  if(artist === 'Red Hot Chili Peppers') {
    return `The song ${currentSong.title} rules!`
  } else {
    return 'I wish this was a Red Hot Chili Peppers song.'
  };
};

function addTrack(collection, song) {
  //2 parameters, first argument an object, with one property being an array.
  //second argument is an object
  //push second argument to first argument property array
  //return the collection once the song is inside the tracks array
  var tracks = collection.tracks
  tracks.push(song)
  return collection
}

function getTotalDuration(songCollection) {
  //1 parameter, with an argument of an object, with one property of an array
  //for loop needed to go through the array
  //add together the total of the durations
  var songDuration = 0;
  for(var i = 0; i < songCollection.tracks.length; i++) {
    songDuration += songCollection.tracks[i].duration
  };
  return songDuration
};

function findTracksByArtist(collection, artist) {
  //2 parameters, first argument is an object with a property of an array
  //second argument is a string
  //if artist equals The Midnight, push to new array.
  var midNight = [];
  for (var i = 0; i < collection.tracks.length; i++) {
    if(artist === collection.tracks[i].artist) {
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