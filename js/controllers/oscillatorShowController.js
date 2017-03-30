class OscillatorShowController {
  constructor($target) {
    this.$target = $target
  }

  setCurrent(oscillator){
    this.$target.html(`<h1>Type: ${oscillator.osc.type}</h1> <h1>Frequency: ${oscillator.osc.frequency.value}</h1>`)
  }
}
