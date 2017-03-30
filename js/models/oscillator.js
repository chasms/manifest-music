function osc() {
  var id = 0

  return class Oscillator {
    constructor(freq = 50, type = 'sine', detune = 100) {
      this.osc = audioCtx.createOscillator()
      this.osc.connect(gainNode)
      this.osc.frequency.value = freq // value in hertz
      this.osc.type = type // waveform: 'sine', 'square', 'sawtooth', 'triangle' and 'custom'
      this.osc.detune.value = detune // value in cents
      this.id = id++
      store.add("oscillators", this)
      this.appendToList()
    }

    appendToList(){
      let $target = $oscillators()

      OscillatorView.renderItem($target, this)
    }
  }
}
