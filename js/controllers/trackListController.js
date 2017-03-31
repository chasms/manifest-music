class TrackListController {
  constructor($target, tracks) {
    this.$target = $target
    this.tracks = tracks
    this.render()
  }

  render(){
    TrackView.renderTracks(this.$target, this.tracks)
    // this.$target.html("Beef")
  }
}

$(document).ready(function() {
  Track.all().then((tracks) => {
    let $target = $(".track-list")
    let listController = new TrackListController($target, tracks)
  })
})
