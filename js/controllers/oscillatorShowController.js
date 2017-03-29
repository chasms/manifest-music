class OscillatorShowController {
  constructor($target) {
    this.$target = $target
  }

  setCurrent(index){
    let oscillator = oscList[index]
    this.$target.html(`<h1>Type: ${oscillator.type}</h1> <h1>Frequency: ${oscillator.frequency.value}</h1>`)
  }
}
