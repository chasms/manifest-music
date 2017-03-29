class Track {
  static all(){
    return Api.getJSON("tracks").then(({dataset}) => dataset)
  }
}
