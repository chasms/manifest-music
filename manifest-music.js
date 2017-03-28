// create web audio api context
var AudioContext = window.AudioContext || window.webkitAudioContext
var audioCtx = new AudioContext()
let oscList = []
let masterGainNode = null
let volumeControl = document.querySelector("input[name='volume']")

// create Oscillator and gain node
var oscillator1 = audioCtx.createOscillator()
var oscillator2 = audioCtx.createOscillator()
var gainNode1 = audioCtx.createGain()
var gainNode2 = audioCtx.createGain()

// connect oscillator to gain node to speakers

gainNode1.connect(audioCtx.destination)
gainNode2.connect(audioCtx.destination)

// create initial theremin frequency and volumn values

var maxFreq = 6000
var maxVol = 0.02

var initialFreq = 30
var initialVol = 1.000

// set options for the oscillator

oscillator.start()

gainNode.gain.value = initialVol

var osc = (freq = 50, type = 'sine', detune = 100) => {
  let osc = audioCtx.createOscillator()
  osc.connect(masterGainNode)
  osc.frequency.value = freq // value in hertz
  osc.type = type // waveform: 'sine', 'square', 'sawtooth', 'triangle' and 'custom'
  osc.detune.value = detune // value in cents
  return osc
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

function changeVolume(event) {
  masterGainNode.gain.value = volumeControl.value
}

function setup() {
  volumeControl.addEventListener("change", changeVolume, false)
  masterGainNode = audioContext.createGain()
  masterGainNode.connect(audioContext.destination)
  masterGainNode.gain.value = volumeControl.value
}

setup()
