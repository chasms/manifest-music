// create web audio api context
var AudioContext = window.AudioContext || window.webkitAudioContext
var audioCtx = new AudioContext()
let oscList = []
let masterGainNode = audioContext.createGain()
let volumeControl = document.querySelector("input[name='volume']")

masterGainNode.connect(audioContext.destination) // connect oscillator to gain node to speakers


function osc (freq = 50, type = 'sine', detune = 100) {
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

volumeControl.addEventListener("change", changeVolume, false)
masterGainNode.gain.value = volumeControl.value

var osc = audioCtx.createOscillator()
osc.connect(masterGainNode)
osc.frequency.value = 30
osc.type = 'triange'
osc.detune.value = 100

osc.start(0)
