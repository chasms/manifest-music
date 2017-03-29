class OscillatorListController {
  constructor($target, oscillators, detailController) {
    this.$target = $target
    this.oscillators = oscillators
    this.detailController = detailController
    this.attachListeners()
    this.render()
  }

  render(){
    OscillatorView.renderListItems(this.$target, this.oscillators)
  }

  attachListeners(){
    this.$target.on('click', 'a.oscillator', (e) => {
      e.preventDefault()
      var index = $(e.target).attr('id')
      this.detailController.setCurrent(index)
    })
  }
}
