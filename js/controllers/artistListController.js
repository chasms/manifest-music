class CocktailListController {
  constructor($target, artists, detailController) {
    this.$target = $target
    this.artists = artists
    this.detailController = detailController
    this.attachListeners()
    this.render()
  }

  render(){
    CocktailView.renderListItems(this.$target, this.artists)
  }

  attachListeners(){
    this.$target.on('click', 'li.artist', (e) => {
      e.preventDefault()
      this.detailController.setCurrent()
    })
  }
}
