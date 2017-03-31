class Track {
  static all(){
    return Api.getJSON("tracks", "").then(({dataset}) => dataset)
  }

  constructor(id, url, title, artist) {
    this.id = id
    this.url = `http://files.freemusicarchive.org/${url}`
    this.title = title
    this.artist = artist
  }

  static getTrackById(id) {
    Api.getJSON(`tracks`, `&track_id=${id}`).then(({dataset}) => dataset).then((track) => {
      let trk = new Track(track.track_id, track.track_file, track.track_title, track.artist_name)
      store.add('tracks', trk)
    })
  }
}

Track.getTrackById(2)
