// create web audio api context
var AudioContext = window.AudioContext || window.webkitAudioContext
var audioCtx = new AudioContext()
let oscList = []

var oscillator = audioCtx.createOscillator()

let gainNode = audioCtx.createGain()

// let volumeControl = document.querySelector("input[name='volume']")
// volumeControl.addEventListener("change", changeVolume, false)

oscillator.connect(gainNode)
gainNode.connect(audioCtx.destination) // connect oscillator to gain node to speakers

oscillator.frequency.value = 30
oscillator.type = 'triange'
oscillator.detune.value = 100

oscillator.start(0)

var initialVol = 1.000

gainNode.gain.value = initialVol

// function osc (freq = 50, type = 'sine', detune = 100) {
//   let osc = audioCtx.createOscillator()
//   osc.connect(gainNode)
//   osc.frequency.value = freq // value in hertz
//   osc.type = type // waveform: 'sine', 'square', 'sawtooth', 'triangle' and 'custom'
//   osc.detune.value = detune // value in cents
//   return osc
// }

// mute button

var mute = document.querySelector('.mute')

mute.onclick = function() {
  if(mute.getAttribute('data-muted') === 'false') {
    gainNode.disconnect(audioCtx.destination)
    mute.setAttribute('data-muted', 'true')
    mute.innerHTML = "Unmute"
  } else {
    gainNode.connect(audioCtx.destination)
    mute.setAttribute('data-muted', 'false')
    mute.innerHTML = "Mute"
  }
}

// function changeVolume(event) {
//   gainNode.gain.value = volumeControl.value
// }
