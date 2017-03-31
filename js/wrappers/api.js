class Api {
  static getJSON(resource, query){
    return $.getJSON(`https://freemusicarchive.org/api/get/${resource}.json?api_key=${config.MY_KEY}${query}`)
  }
}
"http://files.freemusicarchive.org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
