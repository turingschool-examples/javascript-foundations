
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
  if (title1 == undefined) {
      createTrack.title = 'unknown'
  };
  if (artist1 == undefined) {
      createTrack.artist = 'unknown'
  };
  if (duration1 == undefined) {
      createTrack.duration = 0
  };
  return createTrack
};

  module.exports = {
    createCollection,
    createTrack
  }