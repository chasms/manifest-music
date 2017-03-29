class Api {
  static getJSON(resource){
    return $.getJSON(`https://freemusicarchive.org/api/get/${resource}.json?api_key=YOURKEY`)
  }
}
"http://files.freemusicarchive.org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
