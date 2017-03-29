class TrackView {

  static renderTracks($target, tracks){
    let trackList = tracks.map((track) => {
      return this.songTemplate(track)
    })
    $target.append(trackList)
  }

  static songTemplate(track){
    return `
    <div>
    <h1>${track.track_title} by ${track.artist_name}</h1>
    <audio controls>
      <source src="http://files.freemusicarchive.org/${track.track_file}" type="audio/mpeg">
    </audio>
    </div>
    `
  }
}
