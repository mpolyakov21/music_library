const library = {
  tracks: {
    t01: { id: "t01", name: "Code Monkey", artist: "Jonathan Coulton", album: "Thing a Week Three" },
    t02: { id: "t02", name: "Model View Controller", artist: "James Dempsey", album: "WWDC 2003" },
    t03: { id: "t03", name: "Four Thirty-Three", artist: "John Cage", album: "Woodstock 1952" }
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
  },

  /////////////////////////////
  // FUNCTIONS TO IMPLEMENT:
  /////////////////////////////

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function () {
    const playlistKeys = Object.keys(this.playlists);
    for (let i = 0; i < playlistKeys.length; i++) {
      const playlistId = playlistKeys[i];
      const playlist = this.playlists[playlistId];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} track${playlist.tracks.length !== 1 ? 's' : ''}`);
    }
  },



  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function () {
    const tracks = Object.keys(this.tracks);
    for (let i = 0; i < tracks.length; i++) {
      const trackId = tracks[i];
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },


  // prints a list of tracks for a given playlist, using the following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function (playlistId) {
    const playlist = this.playlists[playlistId];
   
    if (!playlist) {
      console.log("Playlist not found.");
      return;
    }
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} track${playlist.tracks.length !== 1 ? 's' : ''}`);

    for (const trackId of playlist.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },


  // adds an existing track to an existing playlist
  addTrackToPlaylist: function (trackId, playlistId) {
    if (!this.playlists[playlistId]) {
      console.log("Playlist not found.");
      return;
    }
    if (!this.tracks[trackId]) {
      console.log("Track not found.");
      return;
    }
    this.playlists[playlistId].tracks.push(trackId);
   
    console.log(`Track '${trackId}' added to playlist '${playlistId}'.`);
  },


  // generates a unique id
  // (already implemented: use this for addTrack and addPlaylist)
  generateUid: function () {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
   
  addTrackToLibrary: function (name, artist, album) {
    const trackId = 't' + this.generateUid();
    this.tracks[trackId] = { id: trackId, name, artist, album };
    console.log(`Track '${name}' added with ID '${trackId}'.`);
  },
   
  addPlaylistToLibrary: function (name) {
    const playlistId = 'p' + this.generateUid();
    this.playlists[playlistId] = { id: playlistId, name, tracks: [] };
    console.log(`Playlist '${name}' added with ID '${playlistId}'.`);
  },
   

  // adds a track to the library
  addTrack: function (name, artist, album) {
    const trackId = 't' + this.generateUid();
    this.tracks[trackId] = { id: trackId, name, artist, album };
    console.log(`Track '${name}' added with ID '${trackId}'.`);
  },

  // adds a playlist to the library
  addPlaylist: function (name) {
    const playlistId = 'p' + this.generateUid();
    this.playlists[playlistId] = { id: playlistId, name, tracks: [] };
    console.log(`Playlist '${name}' added with ID '${playlistId}'.`);
  }
};

addPlaylist('New Playlist');

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};