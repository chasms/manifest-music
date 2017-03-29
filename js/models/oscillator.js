function osc (freq = 50, type = 'sine', detune = 100) {
  var oscillator = audioCtx.createOscillator()
  oscillator.connect(gainNode)
  oscillator.frequency.value = freq // value in hertz
  oscillator.type = type // waveform: 'sine', 'square', 'sawtooth', 'triangle' and 'custom'
  oscillator.detune.value = detune // value in cents
  oscList.push(oscillator)
  return oscillator
}
