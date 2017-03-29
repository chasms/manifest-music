// create web audio api context
var AudioContext = window.AudioContext || window.webkitAudioContext
var audioCtx = new AudioContext()
let oscList = []

let gainNode = audioCtx.createGain()

// create oscillators here:
var oscillator1 = osc()
var oscillator2 = osc(100, 'triangle')

gainNode.connect(audioCtx.destination) // connect gain node to speakers

// start oscillators here:
oscList.forEach(oscillator => {
  oscillator.start(0)
})

function osc (freq = 50, type = 'sine', detune = 100) {
  var oscillator = audioCtx.createOscillator()
  oscillator.connect(gainNode)
  oscillator.frequency.value = freq // value in hertz
  oscillator.type = type // waveform: 'sine', 'square', 'sawtooth', 'triangle' and 'custom'
  oscillator.detune.value = detune // value in cents
  oscList.push(oscillator)
  return oscillator
}

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

// volume control

let volumeControl = document.querySelector("input[name='volume']")
volumeControl.addEventListener("change", changeVolume, false)

function changeVolume(event) {
  gainNode.gain.value = volumeControl.value
}

// set gain to volume control slider

gainNode.gain.value = volumeControl.value
