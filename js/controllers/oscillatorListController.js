class OscillatorListController {
  constructor($target, detailController) {
    this.$target = $target
    this.detailController = detailController
    this.attachListeners()
  }

  attachListeners(){
    this.$target.on('click', 'a.oscillator', (e) => {
      e.preventDefault()
      let id = $(e.target).attr('data-type')
      let oscillator = store.find('oscillators', id)
      this.detailController.setCurrent(oscillator)
    })
  }
}
