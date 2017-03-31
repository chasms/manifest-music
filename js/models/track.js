class Track {
  static all(){
    return Api.getJSON("tracks", "").then(({dataset}) => dataset)
  }

  constructor(id) {
    this.id = id
    let data = this.getTrackById(id)
    debugger
    this.url = data[track_url] // needs to be fixed
  }

  static getTrackById(id) {
    return Api.getJSON(`tracks`, `&track_id=${id}`).then(({dataset}) => dataset)
  }
}


var track = new Track(1)
track.url
