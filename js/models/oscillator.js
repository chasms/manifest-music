let stores = {oscillators: {}}

function osc() {
  var id = 0

  return class Oscillator {
    constructor(freq = 50, type = 'sine', detune = 100) {
      var oscillator = audioCtx.createOscillator()
      this.oscillator.connect(gainNode)
      this.oscillator.frequency.value = freq // value in hertz
      this.oscillator.type = type // waveform: 'sine', 'square', 'sawtooth', 'triangle' and 'custom'
      this.oscillator.detune.value = detune // value in cents
      oscList.push(oscillator)
    }
  }
}
