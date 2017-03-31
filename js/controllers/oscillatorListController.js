class OscillatorListController {
  constructor($target, detailController) {
    this.$target = $target
    this.detailController = detailController
    this.attachListeners()
  }

  attachListeners(){
    this.$target.on('click', 'a.oscillator', (event) => {
      event.preventDefault()
      let id = $(event.target).attr('data-type')
      let oscillator = store.find('oscillators', id)
      this.detailController.setCurrent(oscillator)
    })
  }
}
